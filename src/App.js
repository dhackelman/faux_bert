import React, { Component } from 'react';
import firebase from 'firebase';
import Header from './React_A_BERT/Header';
import NavigationalTabs from './React_A_BERT/NavigationalTabs';
import Dashboard from './React_A_BERT/Dashboard';
import EscalationLists from './React_A_BERT/EscalationLists';
import LoadingBar from './React_A_BERT/LoadingBar';
import Footer from './React_A_BERT/Footer';
import './App.css';


class App extends Component {
    constructor(props){
        super(props); 
        const config = {
            apiKey: "AIzaSyC2b_46TkyRYni18XFdxiZnwI17HP7RW7w",
            authDomain: "fauxbert-f10df.firebaseapp.com",
            databaseURL: "https://fauxbert-f10df.firebaseio.com",
            projectId: "fauxbert-f10df",
            storageBucket: "fauxbert-f10df.appspot.com",
            messagingSenderId: "928624655002"
        };
        this.state = {
            worklists: '', 
            recentEscalations: ''
        }; 
        this.getData = this.getData.bind(this); 
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }
    componentWillMount() {
        // const dbRefObject = firebase.database().ref().child('bert');
        // dbRefObject.on('value', snap => this.setState({recentEscalations: snap.val().recentEscalations.DATA.data, worklists:snap.val().worklists}));
        this.getData('both'); 
    }
    componentDidMount() {
        setTimeout(this.removeLoadBar, 4000); 
    }
    removeLoadBar() {
        var loadingBar  = document.querySelector('.bar_container');
        loadingBar.style.display = 'none'; 
    }
    getData(arg1) {
        const dbRefObject = firebase.database().ref().child('bert');
        let expr = arg1; 
        switch(expr) {
            case 'Worklists': 
                dbRefObject.on('value', snap => this.setState({worklists:snap.val().worklists}));
                this.setState({worklists: ''});
                break; 
            case 'Recent Escalations': 
                this.setState({recentEscalations: ""});
                console.log('222222222222222222222222222222222222222222222222222');
                dbRefObject.on('value', snap => this.setState({recentEscalations: snap.val().recentEscalations.DATA.data}));
            default: 
                this.setState({recentEscalations: "", worklists: ''});
                dbRefObject.on('value', snap => this.setState({recentEscalations: snap.val().recentEscalations.DATA.data, worklists:snap.val().worklists}));
        }
    }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content_container">
            <LoadingBar />
            <NavigationalTabs />
            <Dashboard worklists={this.state.worklists} recentEscalations={this.state.recentEscalations} getData={this.getData} />
            <EscalationLists />
        </div>    
        <Footer />
      </div>
    );
  }
}

export default App;
