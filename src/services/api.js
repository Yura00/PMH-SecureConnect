const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]
import { API_URL } from '../config/constants'
import { toHexString } from '../utils/globalFuctions'

import sjcl from 'sjcl'

import { sha256 } from 'js-sha256'
const SK = '0448641d6709747511a9e3aca9887dcb07205293827095cb1ff69a566eaa74656b5eec805f41f7ff87c17c25f4aa385936b3342581568cc6557802ed9b85872f41'
const CK = '2226aeb2f8a7aee1cb3fa54c1b9710be8c84820626a91ebc7ffebff02e667efe'

export default (email, password) => {
    return new Promise((resolve, reject) => {
        console.log('api===', email, password)

        encryptPW(password)
        
        // fetch(`${API_URL}/api/v1/password/forgot`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         email: email,
        //     })
        // })
        // .then((res) => res.json()) 
        // .then((data) => {
        //     resolve(data.message)
        // })
        // setTimeout(() => {
        //     resolve(true)
        // }, 1000)
    })
}

function encryptPW (password) {
    const EC = require('elliptic').ec;
    var _ec = new EC('secp256k1')

    var keyPair;
    var pubPoint;
    var x,y;

    do {
        keyPair = _ec.genKeyPair();
        pubPoint = keyPair.getPublic();
        x = pubPoint.getX().toString('hex');
        y = pubPoint.getY().toString('hex');
    } while ( !( x.length==64 && y.length==64 ) );

    const key = "04" + x + y

    var hash = sha256.create();
    hash.update(key);
    var bits = hash.hex();

    _ec = new EC('secp256k1')

    var clientKey = _ec.keyFromPrivate(CK, 'hex');
    var signature = clientKey.sign(bits);
    var derSign = signature.toDER();
    var temp = toHexString(derSign);
    var input = {
        "point": key,
        "curve": "secp256k1",
        "type": 2,
        "authentication": true,
        "signature": temp
    }
var body = JSON.stringify(input)
    fetch(API_URL + 'performKeyExchange', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Application-Access-Key': 'TestMobilityAABB1234CCDD'
        },
        body: JSON.stringify(input)
    })
    .then((res) => res.json()) 
    .then((data) => {

        if(data.errorCode) {
            console.log('performKeyExchange error======', data)
            reject(data)
        } else {
            var signMessage = "" + data.x + data.y + data.exchangeId + data.base64;
            var hash = sha256.create();
            hash.update(signMessage);
            var msgHash = hash.hex();
            var verifyKey = _ec.keyFromPublic(SK, 'hex');
            if (!verifyKey.verify(msgHash, data.signature)) {
                reject("Signature verification failed============")
            }
            var serverKey = "04" + data.x + data.y;
            exchangeId = data.exchangeId;
            var key = _ec.keyFromPublic(serverKey, 'hex');
            secretKey = keyPair.derive(key.getPublic()).toString("hex");
            if (secretKey.length!=64) {
                var len = secretKey.length - 64;
                if (len < 0) {
                    var iter = 0 - len;
                    for (i = 0; i < iter; i++) {
                        secretKey = "0" + secretKey;
                    }
                } else if (len > 0) {
                    iter = len;
                    for(i = 0; i < iter; i++){
                        secretKey = secretKey.substring(1);
                    }
                }
            }
        }

//         var RNCryptor = require('jscryptor');
// RNCryptor
//         var bits = sjcl.codec.utf8String.toBits(pass);
var options = {};
	var encrypted = RNCryptor.Encrypt(secretKey, '123');
	// var encryptedPassword = sjcl.codec.base64.fromBits(encrypted);
	// return encryptedPassword;
        
        resolve(secretKey)
    })
    // setTimeout(() => {
    //     resolve(true)
    // }, 1000)

    // console.log('input body', input)

}
