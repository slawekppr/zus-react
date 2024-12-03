import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";

// Dev: expose on window to console:
window.React = React;
window.ReactDOM = ReactDOM;
(window as any).ReactDOM = ReactDOM;

const root = createRoot(document.getElementById("root")!);

const user = {
  id: "123",
  name: "Alice",
  color: "red",
  pet: { name: "cat" },
};

const vdiv = React.createElement(
  "div",
  {
    id: `user_${user.id}`,
    className: "user-card",
    style: { color: user.color, border: "1px solid" },
  },
  React.createElement("p", null, `${user.name} has a ${user.pet.name}`),
);

root.render(vdiv);

// ReactDOM.render(vdiv, root);
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
// React.createElement("input", { key: "tutaj jestem" })

// )
