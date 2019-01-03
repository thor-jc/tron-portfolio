import React, { Component, Fragment } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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

const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric'};

export class TronWebService extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lastRefresh:  "",
      currentBlock: ""
    };
  }

  componentDidMount() {
    this.refreshNetworkConnection();
  }

  TronWebService() {

  }

  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.tabBarInfoText}>Tron Network Info</Text>
       <Text style={styles.tabBarInfoText}>{this.state.lastRefresh}</Text>
       <Text style={styles.tabBarInfoText}>Block [{this.state.currentBlock.block_header.raw_data.number ? this.state.currentBlock.block_header.raw_data.number :"Loading Current Block"}]</Text>
     </View>
    )
  }

  refreshNetworkConnection = () => {
    this.getCurrentBlock();
    this.getLastRefresh();
  }

  getLastRefresh = () => {
    this.setState({lastRefresh: new Date().toISOString()});
  }

  getCurrentBlock = () => {
    tronWeb.trx.getCurrentBlock().then( block => {
      console.log("CURRENT BLOCK::" + JSON.stringify(block));
      this.setState({ currentBlock : block });
    });
  }

  getBalance = async(address) => {

    console.log("entering getBalance for address: " + address );

    const balance = await tronWeb.trx.getBalance(address).then(balance => {
          balance /= 1000000;
          console.log("Balance::" + balance);
          return balance;
      }).catch(err => console.error(err));
      return balance;
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
