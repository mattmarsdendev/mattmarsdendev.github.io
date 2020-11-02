(this["webpackJsonpmm-portfolio"]=this["webpackJsonpmm-portfolio"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e){e.exports=JSON.parse('[{"desc":"A project originally started as a tech challenge, I decided to revamp the idea by building out a more robust backend and adding more functionality while also adding to the front-end experience. National Parks is a database to keep track of the 61 parks that you\'ve already visited. Built with MongoDb, Express, React and Node with authorization handled by Auth0.","link":"https://mmarsden89.github.io/national-park-prototype","class":"national-parks","imageLogo":"img/nationalparkslogo.png","hoverImage":"img/national-parks.png","fontColor":"#282c34","tech1":["img/auth0.svg","auth0"],"tech2":["img/nodejs-icon.svg","nodejs"],"tech3":["img/react.svg","react"],"tech4":["img/sass.svg","sass"],"tech5":["img/html-5.svg","html5"],"tech6":["img/express.svg","express"],"tech7":["img/mongodb.svg","mongodb"],"link1":"https://mmarsden89.github.io/national-park-prototype","link2":"https://github.com/mmarsden89/national-park-prototype","link3":"https://github.com/mmarsden89/national-parks-backend"},{"desc":"Quackle! A reimagination of Instagram in the universe where ducks replaced humans. This was built as a capstone project with a tight 3-day deadline. Built with MongoDb, Express, React and Node with image storage handled by Amazon s3","link":"https://mmarsden89.github.io/quackle/#/","class":"quackle","imageLogo":"img/quacklelogo.png","hoverImage":"img/duckpics.png","fontColor":"#292828","tech1":["img/aws-s3.svg","aws-s3"],"tech2":["img/nodejs-icon.svg","nodejs"],"tech3":["img/react.svg","react"],"tech4":["img/sass.svg","sass"],"tech5":["img/html-5.svg","html5"],"tech6":["img/express.svg","express"],"tech7":["img/mongodb.svg","mongodb"],"link1":"https://mmarsden89.github.io/quackle/#/","link2":"https://github.com/mmarsden89/quackle","link3":"https://github.com/mmarsden89/quackle-api"},{"desc":"A social blogging platform where you can write your own short and quick blogs as well as interact with other users. Built using MongoDb, Express and Node with Handlebars handling the templating.","link":"https://mmarsden89.github.io/bloggle","class":"bloggle","imageLogo":"img/blogglelogo.png","hoverImage":"img/bloggle.png","fontColor":"rgba(139, 175, 219, 0.7)","tech1":["img/nodejs-icon.svg","nodejs"],"tech2":["img/handlebars.svg","handlebars"],"tech3":["img/css-3.svg","css"],"tech4":["img/html-5.svg","html5"],"tech5":["img/bootstrap.svg","bootstrap"],"tech6":["img/express.svg","express"],"tech7":["img/mongodb.svg","mongodb"],"link1":"https://mmarsden89.github.io/bloggle","link2":"https://github.com/mmarsden89/bloggle","link3":"https://github.com/mmarsden89/bloggle-api"},{"desc":"Community is a virtual community center where you can meet up with friends digitally and chat in realtime. This browser-based game was built using JavaScript, Ruby on Rails and utilized the HTML Canvas engine.","link":"https://mmarsden89.github.io/community-client","class":"community","imageLogo":"img/communitylogo.png","hoverImage":"img/community-game.png","fontColor":"rgba(0,0,0,0.8)","tech1":["img/rails.svg","ruby on rails"],"tech2":["img/css-3.svg","css"],"tech3":["img/html-5.svg","html5"],"tech4":["img/canvas.png","canvas"],"tech5":["",""],"tech6":["",""],"tech7":["",""],"link1":"https://mmarsden89.github.io/community-client","link2":"https://github.com/mmarsden89/community-client","link3":"https://github.com/mmarsden89/community-api"},{"desc":"A twist on the standard junior developer to-do app where you set goals of accomplishing tasks in seven days. Once completed you earn points that can be redeemed towards different UI themes. This was created using JavaScript, Handlebars and Ruby on Rails","link":"https://mmarsden89.github.io/due-in-seven-days","class":"toDo","imageLogo":"img/duein7dayslogo.png","hoverImage":"img/due-in-seven-days.png","fontColor":"#212529","tech1":["img/rails.svg"," ruby on rails"],"tech2":["img/handlebars.svg","handlebars"],"tech3":["img/css-3.svg","css"],"tech4":["img/html-5.svg","html5"],"tech5":["",""],"tech6":["",""],"tech7":["",""],"link1":"https://mmarsden89.github.io/due-in-seven-days","link2":"https://github.com/mmarsden89/due-in-seven-days","link3":"https://github.com/mmarsden89/due-in-seven-days-api"}]')},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(16),r=a.n(c),o=(a(22),a(23),a(24),a(25),a(26),a(27),a(28),a(29),a(30),a(31),a(3)),l=a(4),i=a(6),m=a(5),h=a(8),d=a(7),g=a(2),u=a(9),p=a(10),v=a(11),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={name1:"",name2:"",name3:"",name4:"",name5:"",name6:"",translate1:0,contact:!1},a.handleScroll=a.handleScroll.bind(Object(h.a)(a)),a.handleContactMe=a.handleContactMe.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0}),this.setState({name1:s.a.createElement("pre",null," \xa0\xa0")}),this.setState({name2:"matt"}),this.setState({name3:s.a.createElement("pre",null," mars")}),this.setState({name4:"den"}),this.setState({name5:""}),this.setState({name6:""}),this.setState({contact:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=Math.round(window.scrollY),a=Math.round(t/3);a<5?(this.setState({name1:s.a.createElement("pre",null,"\xa0\xa0 ")}),this.setState({name2:"matt"}),this.setState({name3:s.a.createElement("pre",null," mars")}),this.setState({name4:"den"}),this.setState({name5:" "}),this.setState({name6:" "}),this.setState({translate1:0})):a<40?(this.setState({name1:"<"}),this.setState({name2:"m"}),this.setState({name3:s.a.createElement("pre",null,"att ")}),this.setState({name4:"marsden"}),this.setState({name5:"89/"}),this.setState({name6:">"}),this.setState({translate1:a/10})):a<180?(this.setState({name1:"<"}),this.setState({name2:"m"}),this.setState({name3:s.a.createElement("pre",null,"att ")}),this.setState({name4:"marsden"}),this.setState({name5:"89/"}),this.setState({name6:">"}),this.setState({translate1:a/5})):a>181&&(this.setState({name1:"<"}),this.setState({name2:"m"}),this.setState({name3:s.a.createElement("pre",null,"att ")}),this.setState({name4:"marsden"}),this.setState({name5:"89/"}),this.setState({name6:">"}),this.setState({translate1:36.2}))}},{key:"handleContactMe",value:function(){var e=this.state.contact;this.setState({contact:!e}),this.forceUpdate()}},{key:"render",value:function(){var e=s.a.createElement("div",{className:this.state.contact?"menu-drop":"menu-drop-close"},s.a.createElement("div",{className:"empty-space"}),s.a.createElement("div",{className:"menu-mobile-sty"},s.a.createElement("a",{href:"https://github.com/mmarsden89",target:"_blank",rel:"noopener noreferrer"},s.a.createElement(g.a,{icon:p.b,className:"m-icon"}),"resume"),s.a.createElement("a",{href:"https://github.com/mmarsden89",target:"_blank",rel:"noopener noreferrer"},s.a.createElement(g.a,{icon:v.a,className:"m-icon"}),"github"),s.a.createElement("a",{href:"https://www.linkedin.com/in/matthewjmarsden/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement(g.a,{icon:v.b,className:"m-icon"}),"linkedin"),s.a.createElement("a",{href:"mailto:mattmarsdendev@gmail.com",target:"_blank",rel:"noopener noreferrer"},s.a.createElement(g.a,{icon:p.a,className:"m-icon"}),"email"))),t=this.state.contact;return s.a.createElement("nav",{className:"navbar"},s.a.createElement("div",{className:"nav-container"},s.a.createElement("div",{className:"nav-name"},s.a.createElement("h1",{onScroll:this.handleScroll,className:"nav-text "},this.state.name1),s.a.createElement("h1",{onScroll:this.handleScroll,className:"nav-text open"},this.state.name2),s.a.createElement("h1",{onScroll:this.handleScroll,style:{marginLeft:"-".concat(this.state.translate1,"px")}},this.state.name3),s.a.createElement("h1",{onScroll:this.handleScroll,style:{backgroundColor:"#282c34"}},this.state.name4),s.a.createElement("h1",{onScroll:this.handleScroll,className:"numbers"},this.state.name5),s.a.createElement("h1",{onScroll:this.handleScroll,className:"nav-text close"},this.state.name6)),s.a.createElement("div",{className:"nav-link-container"},s.a.createElement("a",{className:"nav-link",target:"_blank",href:"img/Matt_Marsden_Resume.pdf"},"resume"),s.a.createElement("a",{href:"#work",className:"nav-link"},"work"),s.a.createElement("a",{href:"#portfolio",className:"nav-link"},"portfolio"),s.a.createElement("div",{className:t?"contact-me-menu-active":"contact-me-menu",onClick:this.handleContactMe},s.a.createElement("span",null,s.a.createElement("p",{className:"nav-link"},"contact me!"),s.a.createElement(g.a,{icon:u.b,className:"hamburger-icon"}),s.a.createElement(g.a,{icon:u.a,className:"angle"})),t&&e))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={typed:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"about"},s.a.createElement("div",{className:"about-container"},s.a.createElement("div",{className:"about-tag-container"},s.a.createElement("h1",{className:"about-tag"},"Matt Marsden"),s.a.createElement("h1",{className:"about-tag"},"Seattle-Based"),s.a.createElement("h1",{className:"about-tag"},"Software Developer")),s.a.createElement("div",{className:"about-me"},s.a.createElement("p",null,"Howdy! I'm a software developer with a focus on the front-end. I've worked primarily in JavaScript utilzing React and Node and have professional experience building applications from the ground up but am always up for a challenge learning new technologies. In my free time I love to cook & bake, hike, meet new people and see live music as well as build fun side projects."))))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={props:a.props},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.props;return s.a.createElement("div",{className:"project-container"},s.a.createElement("div",{className:"project-wrapper"},s.a.createElement("a",{href:e.link,target:"#"},s.a.createElement("img",{src:e.hoverImage,className:"project-pic project-pic-hover",alt:"project hover"}),s.a.createElement("img",{src:e.imageLogo,alt:"project logo",className:"project-logo"}))),s.a.createElement("div",{className:"project-desc-cont"},s.a.createElement("p",{className:"project-desc"},e.desc),s.a.createElement("div",{className:"links"},s.a.createElement("a",{href:e.link1,target:"_blank",rel:"noopener noreferrer",alt:"",className:"project-links"},"deployed application"),s.a.createElement("a",{href:e.link2,target:"_blank",rel:"noopener noreferrer",alt:"",className:"project-links"},"front-end repo"),s.a.createElement("a",{href:e.link3,target:"_blank",rel:"noopener noreferrer",alt:"",className:"project-links"},"back-end repo")),s.a.createElement("div",{className:"tech-container"},s.a.createElement("div",{title:e.tech1[1]},"img/express.svg"===e.tech1[0]||"img/mongodb.svg"===e.tech1[0]?s.a.createElement("img",{src:e.tech1[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech1[0],className:"svg",alt:""})),s.a.createElement("div",{title:e.tech2[1]},"img/express.svg"===e.tech2[0]||"img/mongodb.svg"===e.tech2[0]?s.a.createElement("img",{src:e.tech2[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech2[0],className:"svg",alt:""})),s.a.createElement("div",{title:e.tech3[1]},"img/express.svg"===e.tech3[0]||"img/mongodb.svg"===e.tech3[0]?s.a.createElement("img",{src:e.tech3[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech3[0],className:"svg",alt:""})),s.a.createElement("div",{title:e.tech4[1]},"img/express.svg"===e.tech4[0]||"img/mongodb.svg"===e.tech4[0]?s.a.createElement("img",{src:e.tech4[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech4[0],className:"svg",alt:""})),e.tech5[1]?s.a.createElement("div",{title:e.tech5[1]},"img/express.svg"===e.tech5[0]||"img/mongodb.svg"===e.tech5[0]?s.a.createElement("img",{src:e.tech5[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech5[0],className:"svg",alt:""})):null,e.tech6[1]?s.a.createElement("div",{title:e.tech6[1]},"img/express.svg"===e.tech6[0]||"img/mongodb.svg"===e.tech6[0]?s.a.createElement("img",{src:e.tech6[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech6[0],className:"svg",alt:""})):null,e.tech7[1]?s.a.createElement("div",{title:e.tech7[1]},"img/express.svg"===e.tech7[0]||"img/mongodb.svg"===e.tech7[0]?s.a.createElement("img",{src:e.tech7[0],className:"svg backed",alt:""}):s.a.createElement("img",{src:e.tech7[0],className:"svg",alt:""})):null)))}}]),t}(n.Component),k=a(37),w=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=k.map((function(e){return s.a.createElement(E,{props:e,key:e.title,className:"project"})}));return s.a.createElement("div",{className:"portfolio",id:"portfolio"},s.a.createElement("h1",{className:"portfolio-header"},"Portfolio"),e)}}]),t}(n.Component),N=a(14),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={icon1:!0,icon2:!0,icon3:!0,icon4:!0},a.handleMouseOver=a.handleMouseOver.bind(Object(h.a)(a)),a.handleMouseLeave=a.handleMouseLeave.bind(Object(h.a)(a)),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({icon1:!0,icon2:!0,icon3:!0,icon4:!0})}},{key:"handleMouseOver",value:function(e){this.setState(Object(N.a)({},e.currentTarget.id,!1))}},{key:"handleMouseLeave",value:function(e){this.setState(Object(N.a)({},e.currentTarget.id,!0))}},{key:"render",value:function(){var e=this.state,t=e.icon1,a=e.icon2,n=e.icon3,c=e.icon4;return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"footer-circle"},s.a.createElement("div",{className:"inner-circle"})),s.a.createElement("div",{className:"footer-container"},s.a.createElement("div",{className:"icon-wrapper"},s.a.createElement("a",{href:"$",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{id:"icon1",onMouseEnter:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,className:"icon-hover"},t?s.a.createElement("a",{href:"img/Matt_Marsden_Resume.pdf",target:"_blank"},s.a.createElement(g.a,{icon:p.b,className:"footer-icon"})):s.a.createElement("a",{href:"img/Matt_Marsden_Resume.pdf",target:"_blank"},"resume"))),s.a.createElement("a",{href:"https://github.com/mmarsden89",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{id:"icon2",onMouseEnter:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,className:"icon-hover"},a?s.a.createElement(g.a,{icon:v.a,className:"footer-icon"}):s.a.createElement("p",null,"github"))),s.a.createElement("div",{className:"info-wrapper"},s.a.createElement("p",null,"\xa9 Matt Marsden 2020")),s.a.createElement("a",{href:"https://www.linkedin.com/in/matthewjmarsden/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{id:"icon3",onMouseEnter:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,className:"icon-hover"},n?s.a.createElement(g.a,{icon:v.b,className:"footer-icon"}):s.a.createElement("p",null,"linkedin"))),s.a.createElement("a",{href:"mailto:mattmarsdendev@gmail.com",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{id:"icon4",onMouseEnter:this.handleMouseOver,onMouseLeave:this.handleMouseLeave,className:"icon-hover"},c?s.a.createElement(g.a,{icon:p.a,className:"footer-icon"}):s.a.createElement("p",null,"email"))))))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={transform:null,color:"",background:""},e.handleScroll=e.handleScroll.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"topFunction",value:function(){window.scroll({top:0,behavior:"smooth"}),window.history.replaceState({},document.title,"/")}},{key:"bottomFunction",value:function(){window.scroll({top:window.innerHeight-25,behavior:"smooth"})}},{key:"handleScroll",value:function(e){var t=Math.round(window.scrollY)/3;t<=179?this.setState({transform:t,color:"#cccccc",background:"#282c34"}):t>180?this.setState({transform:180,color:"#cccccc",background:"#282c34"}):this.setState({color:"#282c34",background:"#ccc"})}},{key:"render",value:function(){return s.a.createElement("div",{className:"scroll-container"},s.a.createElement("div",null,s.a.createElement(g.a,{onScroll:this.handleScroll,onClick:window.scrollY>=350?this.topFunction:this.bottomFunction,style:{transform:"rotate(".concat(this.state.transform,"deg)"),color:this.state.color,backgroundColor:this.state.background,borderColor:this.state.color},icon:u.c,className:"font-aws font-aws-bot"})))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={props:a.props},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.props;return s.a.createElement("div",{className:"work-container",id:"work"},s.a.createElement("div",{className:"work-header"},s.a.createElement("h1",null,"Professional Experience")),s.a.createElement("div",{className:"work-history-container"},s.a.createElement("img",{src:"/img/homeworks.png",className:"work-logo"}),s.a.createElement("div",{className:"job-description"},s.a.createElement("h4",null,"Software Developer - 11/2019 - 08/2020"),s.a.createElement("br",null),s.a.createElement("p",null,"Designed and developed new features for our internal platform and tools using JavaScript and related front-end and back-end libraries. Developed customer facing application from the ground up. Wrote modular code that could be effectively used in future development work. Tasked with maintenance, bug fixes and enhancements for existing apps while maintaining clear and consistent communication with management and project stakeholders. Consulted with internal teams to define technical requirements, capabilities and guide architectural decisions. Wrote custom code for cms platforms utilized by our marketing department"," "))),s.a.createElement("div",{className:"logo-container"},s.a.createElement("img",{src:"img/postgres.png",className:"tech-logo",title:"postgresql"}),s.a.createElement("img",{src:"img/nodejs-icon.svg",className:"tech-logo",title:"node"}),s.a.createElement("img",{src:"img/react.svg",className:"tech-logo",title:"react"}),s.a.createElement("img",{src:"img/express.svg",className:"express",title:"express"}),s.a.createElement("img",{src:"img/aws.png",className:"tech-logo",title:"amazon web services"}),s.a.createElement("img",{src:"img/jira.png",className:"tech-logo",title:"jira"})))}}]),t}(n.Component);var O=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null),s.a.createElement(S,null),s.a.createElement(f,null),s.a.createElement(j,null),s.a.createElement(w,null),s.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.d2f5c413.chunk.js.map