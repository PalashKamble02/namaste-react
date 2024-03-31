/*
<div id="parent">
<div id="child">
<h1>i'm Heading tag<h1>
</div>
</div>
*/
const parent= React.createElement("div",
 {id :"parent"},
  React.createElement(
    "div",
     {id: "child"},
      React.createElement("h1" , {}, "I'm An H1 tag")) );
     
     
      console.log(parent);
const heading = React.createElement("h1" ,  {id: "heading",  xyz: "abc"}, "Hello World!");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);