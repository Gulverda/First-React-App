import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './card';
// import CardList from './cardlist';
import reportWebVitals from './reportWebVitals';
import App from './containers/app';

//fotos shemotana
// import reactLogo from "./images/davalebisimg.png";
import 'tachyons';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



//fotos gamotana
// export default function App() {
  
//   return <img src={reactLogo} alt="davalebisimg.png" />
// }

ReactDOM.render(<App />, document.getElementById('root'));
reportWebVitals();
