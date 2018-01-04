import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';


class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDAWjC5wyYDlYRKhx70RyGeR83sKXHm8es',
            authDomain: 'manager-d8ab3.firebaseapp.com',
            databaseURL: 'https://manager-d8ab3.firebaseio.com',
            projectId: 'manager-d8ab3',
            storageBucket: 'manager-d8ab3.appspot.com',
            messagingSenderId: '1076259601184'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
