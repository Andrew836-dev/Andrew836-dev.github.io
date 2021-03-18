(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){e.exports=a(39)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),i=a.n(o),l=(a(25),a(26),a(7)),s=a(4),c=a(1);a(27),a(28);var m=function(e){return r.a.createElement("nav",null,r.a.createElement("div",{className:"container nav-container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("h3",null,"Andrew Gray")),r.a.createElement("div",{className:"nine columns"},r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/portfolio",className:"nav-link",activeClassName:"nav-active",isActive:function(e,t){return e||"/"===t.pathname}},"Portfolio")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/about",className:"nav-link",activeClassName:"nav-active"},"About me")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{to:"/contact",className:"nav-link",activeClassName:"nav-active"},"Contact")))))))};a(34);var u=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("section",{className:"",id:"about"},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("header",null,r.a.createElement("h4",null,"A tradesman with a fondness for problem solving and programming")),r.a.createElement("p",{className:"about-text u-cf"},r.a.createElement("img",{src:"/img/headshot.jpg",className:"u-pull-left headshot",alt:"My head."}),"A fitter and turner by trade, I completed my apprenticeship through the Engineering Employers Association (EEA). Metalwork has been my primary labour, however I did work with a masonry company for a short time before returning to steel."),r.a.createElement("p",{className:"about-text"},"Now a Full Stack Web Developer. Demonstrating strong problem solving skills when implementing new work processes and systems with self-taught skills. Positioned to solve complex problems by leveraging ability to create innovative solutions and self-start in fast and high pressure environments."),r.a.createElement("footer",null,r.a.createElement("a",{className:"button",href:"./files/Andrew_Gray_Resume.pdf",target:"_blank"},"View PDF Resume")))))))},p=a(19);a(35);var d=function(e){var t=e.repo,a=t.title,n=t.homepageURL,o=t.image,i=t.repoURL,l=t.description;return r.a.createElement("div",{className:"five columns repo-card "},r.a.createElement("h4",{className:"repo-title"},a),r.a.createElement("p",{className:"repo-text"},l),r.a.createElement("div",{className:"repo-image-container"},r.a.createElement("img",{className:"repo-image",src:o,alt:"".concat(a," thumbnail")})),r.a.createElement("div",null,!!n&&r.a.createElement("a",{className:"button u-pull-left",href:n,target:"blank",rel:"noopener noreferrer"},"Live Site"),r.a.createElement("a",{className:"button u-pull-right",href:i,target:"blank",rel:"noopener noreferrer"},"Repo")))};a(36);var g=function(e){var t=e.handleSubmit,a=e.handleFilterRemoval,n=e.validTags,o=e.currentFilters;return r.a.createElement("ul",null,n.map((function(e){var n=function(){},i="tag";return o.includes(e)?(n=function(){return a(e)},i="tag active"):n=function(){return t(e)},r.a.createElement("li",{key:e,onClick:n,className:i},e)})))};function h(){return r.a.createElement("p",null,"Loading")}var E=function(e){var t=e.data,a=e.validTags,o=Object(n.useState)([]),i=Object(l.a)(o,2),s=i[0],c=i[1];function m(){return s.length?t.filter((function(e){return s.every((function(t){return e.tags.includes(t)}))})):t.slice()}return r.a.createElement("div",null,r.a.createElement("p",null,"Showing ","".concat(m().length," of ").concat(t.length)," projects, click a filter tag to display projects where I performed that role"),r.a.createElement(g,{handleSubmit:function(e){a.includes(e)&&!s.includes(e)&&c([].concat(Object(p.a)(s),[e]))},handleFilterRemoval:function(e){c(s.filter((function(t){return t!==e})))},validTags:a,currentFilters:s}),t.length?m().map((function(e){return r.a.createElement(d,{key:e._id,repo:e})})):r.a.createElement(h,null))};a(37);var v=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"row is-horizontal-align"},r.a.createElement("div",{className:"card is-full-width portfolio-text"},r.a.createElement("header",null,r.a.createElement("h4",null,"Links")),r.a.createElement("ul",{className:"text-left card-color"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/andrew-gray-dev/",target:"_blank",rel:"noopener noreferrer"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Andrew836-dev",target:"_blank",rel:"noopener noreferrer"},"Github - Andrew836-dev")),r.a.createElement("li",null,r.a.createElement("a",{href:"mailto:andrew.aj.gray@gmail.com"},"andrew.aj.gray@gmail.com")),r.a.createElement("li",null,r.a.createElement("a",{href:"tel:+61427778066"},"Mobile - 0427778066"))),r.a.createElement("a",{className:"button",href:"./files/Andrew_Gray_Resume.pdf",target:"_blank"},"View PDF Resume"))))};var f=function(e){return r.a.createElement("div",null,"Details/",e.match.params.project)};var b=function(){return r.a.createElement("div",null,"404")};var w=function(){return r.a.createElement("footer",{className:"pageFooter"},r.a.createElement("div",{className:"container"},"Made by Andrew Gray, powered by React and Skeleton."))},N=a(8),R=a.n(N),A=a(14),k={FRONT_END:"Front end",BACK_END:"Back end",FULL_STACK:"Full stack",EXPRESS:"Express.js",HANDLEBARS:"Handlebars.js",NODE:"Node.js",JQUERY:"jQuery",BOOTSTRAP:"Bootstrap",REACT:"React",REDUX:"Redux",MYSQL:"MySQL",MONGO:"MongoDB"},y={getRepos:function(){var e=Object(A.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getTags:function(){var e=Object(A.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a in t=[],k)t.push(k[a]);return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},L=[{_id:302802752,title:"AJS",description:"MERN app to help with learning JavaScript and Markdown editing. Designed for bootcamp students and web development learners in general.",repoURL:"https://github.com/Andrew836-dev/AJS",homepageURL:"https://ajs-mern.herokuapp.com",image:"./img/AJS.jpg",tags:[k.BACK_END,k.EXPRESS,k.FRONT_END,k.FULL_STACK,k.MONGO,k.NODE,k.REACT]},{_id:294938780,title:"budget-tracker",description:"Budget tracking Progressive Web App. Uses MongoDB, Express, Chart.js and webpack",repoURL:"https://github.com/Andrew836-dev/budget-tracker",homepageURL:"https://andrew-budget.herokuapp.com",image:"./img/budget-tracker.jpg",tags:[k.BACK_END,k.EXPRESS,k.MONGO,k.NODE]},{_id:291241222,title:"Doggo",homepageURL:"https://andrew836-dev.github.io/doggo",description:"The only place you need to know for dog-breed insight! Uses jQuery, tippy.js, Bulma and remote APIs",image:"./img/doggo.jpg",repoURL:"https://github.com/Andrew836-dev/doggo",tags:[k.FRONT_END,k.JQUERY]},{_id:286739967,title:"Eat at burggies",homepageURL:"https://andrew-burger.herokuapp.com/",description:"Full stack app to log types of burgers. Uses Node, Express, mySQL, handlebars.js",image:"./img/eat-da-burger.jpg",repoURL:"https://github.com/Andrew836-dev/eat-da-burger",tags:[k.FRONT_END,k.JQUERY,k.BACK_END,k.HANDLEBARS,k.MYSQL,k.FULL_STACK]},{_id:266445740,title:"Javascript-tetris",repoURL:"https://github.com/Andrew836-dev/Javascript-tetris",description:"Tetris game based on a FreeCodeCamp tutorial video. I've added on-screen arrows for touch screen control.",homepageURL:"https://andrew836-dev.github.io/Javascript-tetris/",image:"./img/javascript-tetris.jpg",tags:[k.FRONT_END]},{_id:282750559,title:"note-taker",description:"A server app to handle writing/saving/deleting notes. My first express app.",repoURL:"https://github.com/Andrew836-dev/note-taker",homepageURL:"https://take-note-andrew.herokuapp.com/",image:"./img/note-taker.jpg",tags:[k.BACK_END,k.EXPRESS]},{_id:288408739,title:"schoolgle",repoURL:"https://github.com/Andrew836-dev/schoolgle",description:"Schoolgle is an app to help find information about schools in your area. Uses jQuery, Materialize, Express, handlebars.js and mySQL.",homepageURL:"https://schoolgle.herokuapp.com",image:"./img/schoolgle.jpg",tags:[k.BACK_END,k.EXPRESS,k.HANDLEBARS,k.NODE,k.MYSQL,k.FULL_STACK,k.FRONT_END,k.JQUERY]},{_id:296858212,title:"user-list",description:"React page for displaying a table of users/employees",repoURL:"https://github.com/Andrew836-dev/user-list",homepageURL:"https://andrew836-dev.github.io/user-list",image:"./img/user-list.png",tags:[k.FRONT_END,k.REACT,k.BOOTSTRAP]},{_id:273736455,description:"Weather information at your fingertips. Uses jQuery, Bootstrap and remote APIs",title:"weather-dashboard",repoURL:"https://github.com/Andrew836-dev/weather-dashboard",homepageURL:"https://andrew836-dev.github.io/weather-dashboard/",image:"./img/weather-dashboard.jpg",tags:[k.FRONT_END,k.JQUERY,k.BOOTSTRAP]},{_id:343118280,description:"photo sharing app using expo-cli, react-native, redux, firebase.",title:"react-native-photos",repoURL:"https://github.com/Andrew836-dev/react-native-photos",image:"./img/react-native-photos.jpg",tags:[k.REACT,k.REDUX]},{_id:339704522,description:"Clone of minesweeper using react.",title:"react-sweeper",repoURL:"https://github.com/Andrew836-dev/react-sweeper",homepageURL:"https://andrew836-dev.github.io/react-sweeper/",image:"./img/react-sweeper.jpg",tags:[k.FRONT_END,k.REACT]}],S=y;var j=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),p=Object(l.a)(i,2),d=p[0],g=p[1];return Object(n.useEffect)((function(){S.getRepos().then((function(e){S.getTags().then((function(t){g(t),o(e)}))})).catch(console.log)}),[]),r.a.createElement(s.a,{hashType:"noslash"},r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("div",{className:"container"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:["/","/portfolio"]},r.a.createElement(E,{data:a,validTags:d})),r.a.createElement(c.a,{exact:!0,path:"/about",component:u}),r.a.createElement(c.a,{exact:!0,path:"/contact",component:v}),r.a.createElement(c.a,{path:"/portfolio/:project",component:f}),r.a.createElement(c.a,{component:b}),r.a.createElement(c.a,{onEnter:function(){return window.location.reload()}}))),r.a.createElement(w,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.df653fc8.chunk.js.map