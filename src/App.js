import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './app/js/root/Root';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './app/js/redux/reducers';
const store = createStore(rootReducer);


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Root />
                </Provider>
            </div>
        );
    }
}

export default App;
