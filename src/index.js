import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/stylesheet.css';
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import  rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import Main from './component/Main';
import App from './component/App'
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
const tasks = ['take out the trash','shovel the driveway','walk the dog'];

//const element = React.createElement('ol',null,tasks.map((task,index)=> React.createElement('li',index,task)));
// const element =
//     <div id="newid" class="container">
//         <h1>Hello</h1>
//     <ol>{tasks.map((task,index)=><li key={index}>{task}</li>)}</ol>
//     </div>



const store = createStore(rootReducer)


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>,document.getElementById('root'));
