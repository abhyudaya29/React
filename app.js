// const heading =React.createElement('h1',{id:"headding"},"Abhyudaya Bumm!!")
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

import React from "react";
import ReactDOM from "react-dom/client";

const heading=React.createElement('h1',{id:"h1"},"Oye hoye💀☕❤️🚀")
const Root=ReactDOM.createRoot(document.getElementById('root'))

console.log(heading)
const jsxHeading=<h1 className="balle">Oye balle balle☕🚀🚀🚀🚀</h1>
console.log(jsxHeading  )
Root.render(jsxHeading)
// Root.render(heading);

// js=> React.create element=>React element i.e a js object=>Html content after renderd