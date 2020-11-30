import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
    {id: 1, name: 'Name', lastText: 'Hi'},
    {id: 2, name: 'Ivan', lastText: 'yo'},
    {id: 3, name: 'Name', lastText: 'NO'},
    {id: 4, name: 'Yana', lastText: 'Yea'},
    {id: 5, name: 'Name', lastText: 'By'}
];

let messageData = [
    {id: 1, name: 'Ivan', message: 'yo'},
    {id: 2, name: 'Name', message: 'Yea'},
    {id: 3, name: 'Yana', message: 'No'}
];

let postsData = [
    {id: 1, message: 'Hey, how are you?', likeCount: 15},
    {id: 2, message: 'Today we have nice day!', likeCount: 5}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData}
         messageData={messageData}
         postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
