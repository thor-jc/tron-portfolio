import React, { Component, Fragment } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TronWebService } from '../../services/TronWebService';
import AccountList from './AccountList';
import { AppContextConsumer } from '../../AppContext';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      accounts:  [],
    };
    this.tronService = new TronWebService();
  }

  componentDidMount() {
    const loadedAccounts = this.loadAccounts();
    this.setState( { accounts : loadedAccounts } );
    this.updateBalances(loadedAccounts);
    //this.tronService.getBalance("TBCKCAmFEdrGY4xhTkbWDRNjDZHNXk129r");
  }

  render() {
    return (
      <AppContextConsumer>
           { (appContext) =>
             (
               <View style={styles.container}>
                <Text style={styles.tabBarInfoText}>Welcome {appContext.user}</Text>
                <AccountList accounts={this.state.accounts}/>
              </View>
            )
          }
      </AppContextConsumer>
    )
  }

  loadAccounts = () => {
    //Get ADDRESSES
    const savedAccounts = [ { id:"2307292360", address : "TBCKCAmFEdrGY4xhTkbWDRNjDZHNXk129r"},
             { id:"297492953", address : "TLUJk2e4bygvCZo7WTCZU33WaTwSbfVu3v"}];
    //Get Balance for ADDRESSES
    const accounts = savedAccounts.map( (account) =>
      ({ id : account.id, address : account.address, balance : -1})
    );
    console.log("Accounts::" + JSON.stringify(accounts));

    return accounts;
    //return [ { address : "TBCKCAmFEdrGY4xhTkbWDRNjDZHNXk129r", balance : 1.001 },
    //         { address : "TLUJk2e4bygvCZo7WTCZU33WaTwSbfVu3v", balance : 2.002 }];
    //return new Account("TBCKCAmFEdrGY4xhTkbWDRNjDZHNXk129r");
  }

  getBalance = async(address) => {
    const balance = await this.tronService.getBalance(address);
    return balance;
  }

  updateBalances = (accounts) => {
    console.log("Entering updateBalances::" + JSON.stringify(accounts));
    accounts.map( (account) => {
        const balance = this.tronService.getBalance(account.address).then(balance => {
          this.updateBalance(account.id, balance);

        });
        console.log("Leaving Promise.all::updateBalances::" + this.state.accounts);
    });
    console.log("Leaving updateBalances::" + JSON.stringify(this.state.accounts));
  }

  updateBalance = (id, newBalance) => {
    console.log("entering updateBalance:: (" + id + ", " + newBalance + ")");
    this.setState(state => {
      const accounts = state.accounts.map((item, j) => {
        if (state.accounts[j].id === id) {
          return {...item, balance: newBalance};
        } else {
          return item;
        }
      });
      console.log("Leaving updateBalance::" + JSON.stringify(accounts));
      return {
        accounts,
      };
    });
  }


}

export default Portfolio;

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
