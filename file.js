const fs = require('fs');
const os = require("os");
const path = require("path")
// const {decode, encode} = require('js-base64');

// const data = decode('BQIAAABBAAEADEVNUi0wQ0VOVkFOQgAGdGlhbmppAAAAAWHvv73vv707AQAQABgV77+977+9SSbvv71P77+9N++/ve+/vU8W77+9GTfvv71odlcg77+977+977+9AAAAAQ==');

// fs.writeFile('message.txt',data,'utf8',(err) => {
//     console.log(err)
// })

// const res = fs.readFileSync('./message.keytab');
// console.log(encode(res))
const res = fs.existsSync(path.join(os.homedir(), ".tea-token.json"))
console.log(res)