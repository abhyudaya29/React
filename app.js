// const heading =React.createElement('h1',{id:"headding"},"Abhyudaya Bumm!!")
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

import React from "react";
import ReactDOM from "react-dom/client";
const parent=React.createElement('div',{id:"Parent"},
[React.createElement('div',{id:"child1"},
[React.createElement('h1',{},"kidda veere❤️❤️❤️🚀🚀🚀"),
React.createElement('h2',{},"I'm an h2 tage")]
),  
React.createElement('div',{id:"child2"},
[React.createElement('h1',{},"I'm an h1 tage"),
React.createElement('h2',{},"I'm an h2 tage")]
)
// JSX

])
console.log(parent)
const Root=ReactDOM.createRoot(document.getElementById('root'))
Root.render(parent)