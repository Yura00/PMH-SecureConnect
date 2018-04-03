const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]
import { API_URL } from '../config/constants'
import { toHexString } from '../utils/globalFuctions'

// import sjcl from 'sjcl'
// import RNCryptor from 'RNCryptor'

// import { Platform } from 'react-native'
// import Aes from 'react-native-aes-crypto'
// import Aes from 'react-native-aes-crypto'
import CryptoJS from 'crypto-js'

import { sha256 } from 'js-sha256'

const SK = '0448641d6709747511a9e3aca9887dcb07205293827095cb1ff69a566eaa74656b5eec805f41f7ff87c17c25f4aa385936b3342581568cc6557802ed9b85872f41'
const CK = '2226aeb2f8a7aee1cb3fa54c1b9710be8c84820626a91ebc7ffebff02e667efe'


// const encrypt = (text, keyBase64) => {
//     var ivBase64 = "base64 random 16 bytes string";
//     return Aes.encrypt(text, keyBase64, ivBase64).then(cipher => ({ cipher, iv: ivBase64 }));
// };
 
// const decrypt = (encryptedData, key) => Aes.decrypt(encryptedData.cipher, key, encryptedData.iv);


export default (email, password) => {
    return new Promise((resolve, reject) => {
        console.log('api===', email, password)

        encryptPW(password)
    })
}

function encryptPW(password) {
    const EC = require('elliptic').ec;
    var _ec = new EC('secp256k1')

    var keyPair;
    var pubPoint;
    var x, y;

    do {
        keyPair = _ec.genKeyPair();
        pubPoint = keyPair.getPublic();
        x = pubPoint.getX().toString('hex');
        y = pubPoint.getY().toString('hex');
    } while (!(x.length == 64 && y.length == 64));

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

            if (data.errorCode) {
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
                if (secretKey.length != 64) {
                    var len = secretKey.length - 64;
                    if (len < 0) {
                        var iter = 0 - len;
                        for (i = 0; i < iter; i++) {
                            secretKey = "0" + secretKey;
                        }
                    } else if (len > 0) {
                        iter = len;
                        for (i = 0; i < iter; i++) {
                            secretKey = secretKey.substring(1);
                        }
                    }
                }

                var pw = ('Zyter@123')
                var key = CryptoJS.enc.Base64.parse("9807e20d2354f25c9e33aed4b01b8722a9839b564f2c5526f3f10264be9d77ef");

                var ciphertext = encrypt(pw, key)
                // var base64 = CryptoJS.enc.Base64.parse(ciphertext);
                // var utf8 = ciphertext.toString(CryptoJS.enc.Utf8);

                // CryptoJS.enc.Utf8.parse(plainText)

                var plaintext = decrypt(ciphertext, key);
                var plaintext = plaintext.toString();
                console.log("decrypted text", plaintext);

                // password = "Zyter@123";
                // var bits = toBits(password)
                // var encryptedPassword = fromBits(bits);
                
                // var options = {};
                // var bits = sjcl.codec.utf8String.toBits(password);
                // var encrypted = RNCryptor.Encrypt(secretKey, 'Zyter@123');
                // var encryptedPassword = fromBits(encrypted);
                // return encryptedPassword;
            }

            resolve(secretKey)
        })
}
// {
    //    .algorithm = kCCAlgorithmAES128,
    //    .mode = kCCModeCBC,
    //    .blockSize = kCCBlockSizeAES128,
    //    .IVSize = kCCBlockSizeAES128,
    //    .padding = ccPKCS7Padding,
    //
    //    .keySettings = {
    //        .keySize = kCCKeySizeAES256,
    //        .saltSize = 8,
    //        .rounds = 1,
    //        .PRF = kCCPRFHmacAlgSHA1
    //    },
    //};
function encrypt(plainText, key) {
    return CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText), key, {
      keySize: 256 / 8,
    //   iv: CryptoJS.enc.Base64.parse("IWFvbR1NouI693AnbARpgg=="),
        // iv: CryptoJS.enc.Base64.parse("IWFvbR1NouI693AnbARpgg=="),
        algorithm: CryptoJS.algo.AES,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        // format: CryptoJS.format.Hex
    }).toString();
  }

function decrypt(ciphertext, key) {
    if(!ciphertext) return "";
    return CryptoJS.AES.decrypt(ciphertext, key, {
        keySize: 256 / 8,
        // iv: CryptoJS.enc.Base64.parse("IWFvbR1NouI693AnbARpgg=="),
        algorithm: CryptoJS.algo.AES,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
  }

function decode(encodedText)
  {
    var parsedWordArray = CryptoJS.enc.Base64.parse(encodedText);
    return parsedWordArray.toString(CryptoJS.enc.Utf8);
  }


function toBits(str) {
    str = unescape(encodeURIComponent(str));
    var out = [], i, tmp = 0;
    for (i = 0; i < str.length; i++) {
        tmp = tmp << 8 | str.charCodeAt(i);
        if ((i & 3) === 3) {
            out.push(tmp);
            tmp = 0;
        }
    }
    if (i & 3) {
        out.push(partial(8 * (i & 3), tmp));
    }
    return out;
}
function partial(len, x, _end) {
    if (len === 32) { return x; }
    return (_end ? x | 0 : x << (32 - len)) + len * 0x10000000000;
}



function fromBits(arr) {
    var out = "", bl = bitLength(arr), i, tmp;
    for (i = 0; i < bl / 8; i++) {
        if ((i & 3) === 0) {
            tmp = arr[i / 4];
        }
        out += String.fromCharCode(tmp >>> 8 >>> 8 >>> 8);
        tmp <<= 8;
    }
    return decodeURIComponent(escape(out));
}

function bitLength(a) {
    var l = a.length, x;
    if (l === 0) { return 0; }
    x = a[l - 1];
    return (l - 1) * 32 + getPartial(x);
}
function getPartial(x) {
    return Math.round(x / 0x10000000000) || 32;
}

