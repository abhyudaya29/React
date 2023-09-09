// const heading =React.createElement('h1',{id:"headding"},"Abhyudaya Bumm!!")
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)

import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement('h1',{id:"h1"},"Oye hoye💀☕❤️🚀")
// const Root=ReactDOM.createRoot(document.getElementById('root'))

// // console.log(heading)
// const jsxHeading=(<h1 className="balle">Oye balle 
//                 balle☕🚀🚀🚀🚀</h1>)
// console.log(jsxHeading )
// Root.render(jsxHeading)
// Root.render(heading);

// js=> React.create element=>React element i.e a js object=>Html content after renderd

// React components
//1) Class based components
//2) functional based components 
const ele=<span>Hattt</span>
const Veer=()=> (
    <h1 className="H">Veer oye oye</h1>)

// Root.render(<Veer/>)

const number=10;
const Tara=()=>{
    return(  
        <div>
            <Veer/>
            {ele}
            {console.log("Dubbey kai bubbey")}
            <h1 id="H">Tarra pajji</h1>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Tara />)
// root.render(<Veer/>)