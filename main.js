
const algosdk = require("algosdk")
const baseServer = 'https://testnet-algorand.api.purestake.io/idx2'
const port = '';
const token = {
    'X-API-Key': 'API KEY'
}

const algodclient = new algosdk.Indexer(token,baseServer, token)

let account = algosdk.generateAccount();
// console.log(account.addr)
const main = async() => {
    // console.log(algodclient)
    try{
        const info = await algodclient.lookupAccountTransactions(account.addr)
        let acct_string = JSON.stringify(info)
        console.log("Account Info:", acct_string)
    }catch(e){
        console.log(e.message)
    }
}
main()
// var mnemonic = "goodness thrive mouse code badge example pride stereo sell viable adjust planet text close erupt embrace nature upon february weekend humble surprise shrug absorb faint"
// var recoveredAccount = algosdk.mnemonicToSecretKey(mnemonic); 
// console.log(recoveredAccount.addr);

// const main = async() => {
//     try{
//         const tx = await algodclient.transactionById('JD7DVAUHL4Q7IP3ALBR3V6CI4NRDNFXTTNDEYO3DYTKBAOBDCQRQ')
//     } catch(e){
//         console.log(e)
//     }

// }

// main()
// (async () => {
//     console.log();
// })().catch(e => {
//     console.log(e.message);
// });