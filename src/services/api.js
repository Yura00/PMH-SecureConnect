const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]
import { API_URL } from '../config/constants'

import { sha256 } from 'js-sha256'
const sk = '0443a2a74d862bb5e9795384d7372f616e055e4e4deaf2b9b8a0f9db96ae1ab5d51a9f8f31cb1acaf67bff8da8119d881a8d1c59bc364169cc873095c5eaa938fb'
const ck = '30779aae2b70177fb2e0ae9bc23d3ae339be19bad7dec4b4a6956d46906896fd'

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
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}

function encryptPW (password) {
    console.log('function=======')
    var continueVal=true;

    var EC = require('elliptic').ec;
    var ec = new EC('secp256k1')

    var keyPair;
    var pubPoint;
    var x,y;

    do{
        keyPair = ec.genKeyPair();
        pubPoint = keyPair.getPublic();
        x = pubPoint.getX().toString('hex');
        y = pubPoint.getY().toString('hex');
        if(x.length==64 && y.length==64) {
            continueVal = false;
        }
    }while(continueVal);

    var key = "04"+x+y

    // console.log(key, 'key============')

    var bits = sha256(key)
    // hash.update("04"+x+y);
    // var bits = hash.hex();
    // var ec = new EC('secp256k1');
    // var clientKey = ec.keyFromPrivate(ck, 'hex');
    // var signature = clientKey.sign(bits);
    // var derSign = signature.toDER();
    // var temp = toHexString(derSign);
    // var input = {
    //     "point":"04"+x+y,
    //     "curve":"secp256k1",
    //     "type":1,
    //     "authentication":true,
    //     "signature":temp
    // }

    // console.log('input body', input)

}
