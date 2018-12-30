const TronWeb = require('tronweb')

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.trongrid.io'); // Full node http endpoint
const solidityNode = new HttpProvider('https://api.trongrid.io'); // Solidity node http endpoint
const eventServer = new HttpProvider('https://api.trongrid.io'); // Contract events http endpoint

const privateKey = 'da146374a75310b9666e834ee4ad0866d6f4035967bfc76217c5a495fff9f0d0';

const tronWeb = new TronWeb(
    fullNode,
    solidityNode,
    eventServer,
    privateKey
);

export class TronWebService {

  TronWebService() {

  }

  getBalance = async(address) => {

    console.log("entering getBalance for address: " + address );

      tronWeb.trx.getBalance(address).then(balance => {
          console.log("Balance::" + balance / 1000000);
      }).catch(err => console.error(err));
  }

}
