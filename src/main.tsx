import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";

// Dev: expose on window to console:
window.React = React;
window.ReactDOM = ReactDOM;
(window as any).ReactDOM = ReactDOM;

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// export {} // module


// div = document.createElement('div')
// p = document.createElement('p')
// div.append(p)
// p.innerText = 'Alice has a cat'
// root.append(div)

// user = '<h1>Alice Hxr PWd <script> <img> '
// root.innerHTML = `
//  <div><p>${user} has a <b>cat<b></p></div>
// `

// user = 'Alice '
// root.innerHTML = `
//  <div>
//  <p>${user} has a <b>cats<b></p>
//  <input>
//  </div>

// vdiv = React.createElement('div',{
//   id:'placki 123',
//   className:'user-card',
//   style: { color:'red' }
// },
// React.createElement('p',null,'Ala ma kota'),
// React.createElement('input')
// )