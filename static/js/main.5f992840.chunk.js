(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(3),s=a.n(c),u=(a(15),a(16),a(5)),i=a(6),l=a(8),h=a(7),d=a(1),p=a(9),m=a(2),b=a.n(m),f=0,w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(d.a)(a)),a.getQuotes=a.getQuotes.bind(Object(d.a)(a)),a.handleTweet=a.handleTweet.bind(Object(d.a)(a)),a.state={currentQuote:"Start where you are. Use what you have. Do what you can",currentAuth:"Arthur Ashe"},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getQuotes()}},{key:"getQuotes",value:function(){return b.a.ajax({headers:{Accept:"application/json"},url:"https://raw.githubusercontent.com/ubermachine/react-randomQuoteGen/master/src/assets/quotes",success:function(e){"string"===typeof e&&(n=JSON.parse(e))}})}},{key:"handleClick",value:function(){var e="#".concat(Math.floor(16777216*Math.random()).toString(16).padStart(6,0));b()(".App-header").css("color",e),b()(".App-header").css("background-color",e),b()("#new-quote").css("background-color",e),f=Math.floor(Math.random()*(n.quotes.length-1)),this.setState({currentQuote:n.quotes[f].quote,currentAuth:n.quotes[f].author})}},{key:"handleTweet",value:function(){b()("#tweet-quote").attr("href","https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+encodeURIComponent('"'+this.state.currentQuote+'" '+this.state.currentAuth))}},{key:"render",value:function(){return o.a.createElement("div",{id:"wrapper"},o.a.createElement("script",{src:"https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"}),o.a.createElement("div",{id:"quote-box"},o.a.createElement("div",{id:"text"},this.state.currentQuote),o.a.createElement("div",{id:"author"},this.state.currentAuth),o.a.createElement("button",{class:"btn btn-info btn-sm",id:"new-quote",onClick:this.handleClick},"New quote"),o.a.createElement("a",{class:"button",id:"tweet-quote",title:"Tweet this quote!",target:"_blank",onClick:this.handleTweet},o.a.createElement("i",{class:"fa fa-twitter"}))))}}]),t}(o.a.Component);a(17);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("script",{src:"https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"}),o.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.5f992840.chunk.js.map