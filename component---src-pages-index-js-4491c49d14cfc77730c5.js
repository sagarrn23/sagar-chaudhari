(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3MRM":function(e,t,a){e.exports={canvas:"Canvas-module--canvas--1ym69"}},"BPn+":function(e,t,a){e.exports={banner:"Banner-module--banner--3MhiS",title:"Banner-module--title--2Tmo0",role:"Banner-module--role--M38Sf",scWrapper:"Banner-module--scWrapper--2pl5c"}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("vrFN"),i=a("dI71"),c=a("3MRM"),o=a.n(c),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).characters=[],a.canvas="",a.ctx="",a.characterList="",a.layes="",a.mouseX="",a.mouseY="",a.rnd={},a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;console.log(document.body.clientHeight),this.canvas=this.refs.canvas,this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.ctx=this.canvas.getContext("2d"),this.characterList=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],this.layers={n:5,letters:[150,80,60,40,20],coef:[.1,.2,.4,.6,.8],size:[16,22,36,40,46],color:["#999","#888","#777","#666","#555"],font:"Courier"},this.mouseX=window.innerWidth/2,this.mouseY=window.innerHeight/2,this.rnd.btwn=function(e,t){return Math.floor(Math.random()*(t-e)+e)},this.rnd.choose=function(t){return t[e.rnd.btwn(0,t.length)]},document.addEventListener("mousemove",(function(t){e.mouseX=t.pageX-e.canvas.offsetLeft,e.mouseY=t.pageY-e.canvas.offsetTop,window.requestAnimationFrame?window.requestAnimationFrame(e.update.bind(e)):e.update()})),this.createLetters(),this.update()},a.drawLetter=function(e){this.ctx.font=e.size+"px "+e.font,this.ctx.fillStyle=e.color;var t=e.posX+(this.mouseX-this.canvas.width/2)*e.coef,a=e.posY+(this.mouseY-this.canvas.height/2)*e.coef;this.ctx.fillText(e.char,t,a)},a.update=function(){this.clear(),this.drawRender()},a.clear=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)},a.drawRender=function(){for(var e=0;e<this.characters.length;e++)this.drawLetter(this.characters[e])},a.createLetters=function(){for(var e=0;e<this.layers.n;e++)for(var t=0;t<this.layers.letters[e];t++){var a=this.rnd.choose(this.characterList),n=this.rnd.btwn(0,this.canvas.width),r=this.rnd.btwn(0,this.canvas.height);this.characters.push({char:a,font:this.layers.font,size:this.layers.size[e],color:this.layers.color[e],layer:e,coef:this.layers.coef[e],posX:n,posY:r})}},a.render=function(){return r.a.createElement("canvas",{className:o.a.canvas,ref:"canvas"})},t}(r.a.Component),l=a("BPn+"),u=a.n(l),d=a("Wbzz"),f=function(){var e=Object(d.useStaticQuery)("3159585216");return r.a.createElement("div",{className:u.a.scWrapper},r.a.createElement("h1",{className:u.a.title},e.site.siteMetadata.title),r.a.createElement("p",{className:u.a.role},"Frontend Web Developer"))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:"Sagar Chaudhari",description:"Sagar Chaudhari Portfolio"}),r.a.createElement(h,null),r.a.createElement("div",{className:"sc-main"},r.a.createElement(f,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-4491c49d14cfc77730c5.js.map