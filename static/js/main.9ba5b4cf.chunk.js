(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),i=n.n(r),s=(n(15),n(4)),c=n(5),l=n(8),d=n(6),u=n(9),h=(n(17),n(7)),m=n.n(h),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={editor:"\n# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n   \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n      - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n    \n    "},n.editorChange=function(e){var t=e.target.value;return n.setState({editor:t})},n.getMarkdownText=function(){return{__html:m()(n.state.editor,{sanitize:!0})}},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.editor;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"editor"},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"editor",className:"d-block bg-info mb-0 py-1 px-3 text-white"},"Editor"),o.a.createElement("textarea",{onChange:this.editorChange,value:e,className:"form-control",id:"editor"}))),e&&o.a.createElement("div",{id:"preview",className:"output jumbotron py-2",dangerouslySetInnerHTML:this.getMarkdownText()})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.9ba5b4cf.chunk.js.map