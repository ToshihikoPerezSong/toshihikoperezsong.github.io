(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l,i=a(0),n=a.n(i),c=a(8),r=a.n(c),s=(a(14),a(1)),m=a(2),o=a(5),d=a(4),p=a(3),f=(a(15),a(16),a(17),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).homelinkRef=n.a.createRef(),l.profilelinkRef=n.a.createRef(),l.skillslinkRef=n.a.createRef(),l.projectslinkRef=n.a.createRef(),l.contactlinkRef=n.a.createRef(),l.state={showmobilenav:!1},l}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"topnav",className:"d-flex justify-content-end"},n.a.createElement("div",{className:"links",ref:this.homelinkRef,onClick:this.props.homeClick},"HOME"),n.a.createElement("div",{className:"links",ref:this.profilelinkRef,onClick:this.props.profileClick},"EXPERIENCE"),n.a.createElement("div",{className:"links",ref:this.skillslinkRef,onClick:this.props.skillsClick},"SKILLS"),n.a.createElement("div",{className:"links",ref:this.projectslinkRef,onClick:this.props.projectClick},"PROJECTS"),n.a.createElement("div",{className:"links",ref:this.contactlinkRef,onClick:this.props.contactClick},"CONTACT"),n.a.createElement("div",{id:"hmenu",onClick:function(){e.setState({showmobilenav:!e.state.showmobilenav})},className:this.state.showmobilenav?"show":""},n.a.createElement("div",{className:"line",id:"line1"}),n.a.createElement("div",{className:"line",id:"line2"}),n.a.createElement("div",{className:"line",id:"line3"})),n.a.createElement("div",{id:"mobilenav",className:this.state.showmobilenav?"show":""},n.a.createElement("div",{id:"dark-overlay"}),n.a.createElement("div",{className:"mobile-links",onClick:function(){e.setState({showmobilenav:!1}),e.props.homeClick()}},"HOME"),n.a.createElement("div",{className:"mobile-links",onClick:function(){e.setState({showmobilenav:!1}),e.props.profileClick()}},"EXPERIENCE"),n.a.createElement("div",{className:"mobile-links",onClick:function(){e.setState({showmobilenav:!1}),e.props.skillsClick()}},"SKILLS"),n.a.createElement("div",{className:"mobile-links",onClick:function(){e.setState({showmobilenav:!1}),e.props.projectClick()}},"PROJECTS"),n.a.createElement("div",{className:"mobile-links",onClick:function(){e.setState({showmobilenav:!1}),e.props.contactClick()}},"CONTACT")))}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){var t=e.props.profileRef.current.offsetTop-50,a=e.props.skillsRef.current.offsetTop-50,l=e.props.projectRef.current.offsetTop-100,i=(e.props.contactRef.current.offsetTop,window.pageYOffset),n=document.documentElement.scrollHeight-document.documentElement.clientHeight-50;i<t?(e.homelinkRef.current.classList.add("active"),e.profilelinkRef.current.classList.remove("active"),e.skillslinkRef.current.classList.remove("active"),e.projectslinkRef.current.classList.remove("active"),e.contactlinkRef.current.classList.remove("active")):i>=t&&i<a?(e.profilelinkRef.current.classList.add("active"),e.homelinkRef.current.classList.remove("active"),e.skillslinkRef.current.classList.remove("active"),e.projectslinkRef.current.classList.remove("active"),e.contactlinkRef.current.classList.remove("active")):i>=a&&i<l?(e.skillslinkRef.current.classList.add("active"),e.homelinkRef.current.classList.remove("active"),e.profilelinkRef.current.classList.remove("active"),e.projectslinkRef.current.classList.remove("active"),e.contactlinkRef.current.classList.remove("active")):i>=l&&i<n?(e.projectslinkRef.current.classList.add("active"),e.homelinkRef.current.classList.remove("active"),e.profilelinkRef.current.classList.remove("active"),e.skillslinkRef.current.classList.remove("active"),e.contactlinkRef.current.classList.remove("active")):i>=n&&(e.contactlinkRef.current.classList.add("active"),e.homelinkRef.current.classList.remove("active"),e.profilelinkRef.current.classList.remove("active"),e.skillslinkRef.current.classList.remove("active"),e.projectslinkRef.current.classList.remove("active"))}))}}]),a}(i.Component)),v=a(6),u=(a(18),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(m.a)(a,[{key:"render",value:function(){var e;return n.a.createElement("div",{id:"hero"},n.a.createElement("div",{id:"main",className:"d-flex align-items-center"},n.a.createElement("div",{className:"flex-1 flex-center prof-div"},n.a.createElement("div",{id:"profilepic",className:"flex-center",style:(e={borderRadius:"50%",backgroundColor:"black",height:"300px",width:"300px",overflow:"hidden"},Object(v.a)(e,"backgroundColor","#034078"),Object(v.a)(e,"border","1px solid white"),e)},n.a.createElement("img",{src:"/prof.png",style:{height:"500px"}}))),n.a.createElement("div",{className:"flex-1 d-flex justify-content-center flex-row prof-div"},n.a.createElement("h2",null,"HI! I am Alexies Toshihiko Song"),n.a.createElement("h2",null,"I am a Fullstack Software Developer."),n.a.createElement("div",{id:"desc-container"},n.a.createElement("p",{style:{padding:"10px"}},'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')),n.a.createElement("div",{className:"d-flex justify-content-center",style:{padding:"10px"}},n.a.createElement("button",{id:"btn-learn",onClick:this.props.profileClick},"LEARN MORE")))))}}]),a}(i.Component)),E=(a(19),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"profile"},n.a.createElement("div",{id:"exp",className:"flex-1"},n.a.createElement("h3",null,"WORK EXPERIENCE"),n.a.createElement("br",null),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"[Company 1]")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Senior Software Developer"),n.a.createElement("div",{className:"daterange"},"October 2015 - April 2019"))),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"[Company 2]")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Programmer I"),n.a.createElement("div",{className:"daterange"},"April 2019 - September 2019"))),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"[Company 3]")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Software Engineer"),n.a.createElement("div",{className:"daterange"},"September 2019 - January 2020"))),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"[Company 4]")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"}),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Programmer"),n.a.createElement("div",{className:"daterange"},"July 2020 - Present")))),n.a.createElement("div",{id:"educ",className:"flex-1"},n.a.createElement("h3",null,"EDUCATION"),n.a.createElement("br",null),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"A.L. Navarro Central Elementary School")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Elementary"),n.a.createElement("div",{className:"daterange"},"Graduated Year 2006"))),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"Tandang Sora National Highschool")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"line"})),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Highschool"),n.a.createElement("div",{className:"daterange"},"Graduated Year 2010"))),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"},n.a.createElement("div",{className:"circ"})),n.a.createElement("div",{className:"company"},"Quezon City Polytechnic University")),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-center timeline"}),n.a.createElement("div",{className:"d-flex flex-row"},n.a.createElement("div",{className:"position"},"Bachelor of Science in Information Technology"),n.a.createElement("div",{className:"daterange"},"Graduated Year 2015")))))}}]),a}(i.Component)),h=(a(20),""),x=[];function g(){var e=Math.floor(1e3*Math.random()),t=Math.floor(1e3*Math.random()),a=Math.floor(5*Math.random()),l=Math.floor(5*Math.random()),i=l>2?-1*Math.floor(3.5*Math.random()):Math.floor(3.5*Math.random());return{x:e,y:t,xpos:a>2?-1*Math.floor(3.5*Math.random()):Math.floor(3.5*Math.random()),ypos:i,negX:a,negY:l}}function N(e,t,a,l){var i=h;0===e&&(e=1),0===t&&(t=1),x.filter((function(a){if((a.x<=e+150&&a.x>=e||a.x>=e-150&&a.x<=e)&&(a.y<=t+150&&a.y>=t||a.y>=t-150&&a.y<=t))return a})).forEach((function(a){i.moveTo(e,t),i.lineTo(a.x,a.y);i.strokeStyle="rgb(250, 250, 250, .2)",i.lineWidth=.2,i.stroke()})),i.beginPath(),i.arc(e,t,l,0,2*Math.PI),i.fillStyle=a,i.strokeStyle="rgba(250, 250, 250, 0)",i.fill(),i.stroke()}var k=function(e){clearInterval(l),h=e,x=[],(x=Array(75).fill(null).map(g)).forEach((function(e){e.color="rgba(250, 250, 250, .3)",e.size=Math.floor(5*Math.random()),N(e.x,e.y,e.color,e.size)})),l=setInterval((function(){h.clearRect(0,0,1e3,1e3),x.forEach((function(e){(e.x<=0||e.x>=1e3)&&(e.xpos=-1*e.xpos),(e.y<=0||e.y>=1e3)&&(e.ypos=-1*e.ypos),e.x=e.x+e.xpos,e.y=e.y+e.ypos,N(e.x,e.y,e.color,e.size)}))}),30)},y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).animateRef=n.a.createRef(),l}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"skills"},n.a.createElement("canvas",{id:"skill-canvas",width:1e3,height:1e3,ref:this.animateRef}),n.a.createElement("h3",{id:"header"},"SKILLS"),n.a.createElement("div",{id:"main",className:"d-flex flex-wrap"},n.a.createElement("div",{className:"col-6",style:{paddingRight:"5px"}},n.a.createElement("div",{className:"skill-group"},n.a.createElement("h5",{className:"skillglabel"},"FRONT-END"),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/html5.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"HTML5")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/css.jpg",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"CSS3")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/javascript.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"JAVASCRIPT"))),n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/react.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"REACT JS")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/bootstrap.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"BOOTSTRAP")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/jquery.gif",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"JQUERY")))))),n.a.createElement("div",{className:"col-6",style:{paddingLeft:"5px"}},n.a.createElement("div",{className:"skill-group"},n.a.createElement("h5",{className:"skillglabel"},"BACK-END"),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/php.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"PHP")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/csharp.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"C#"))),n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/laravel.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"LARAVEL")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/asp.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"ASP.NET")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/node.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"NODE.JS")))))),n.a.createElement("div",{className:"col-6",style:{paddingRight:"5px",paddingTop:"15px"}},n.a.createElement("div",{className:"skill-group"},n.a.createElement("h5",{className:"skillglabel"},"DATABASE"),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/mssql.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"MS SQL Server")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/mysql.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"MySQL")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/mongodb.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"MONGODB"))),n.a.createElement("div",{className:"flex-1"})))),n.a.createElement("div",{className:"col-6",style:{paddingLeft:"5px",paddingTop:"15px"}},n.a.createElement("div",{className:"skill-group"},n.a.createElement("h5",{className:"skillglabel"},"TOOLS"),n.a.createElement("div",{className:"d-flex"},n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/git.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"GIT")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/postman.jpg",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"POSTMAN")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/photoshop.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"PHOTOSHOP"))),n.a.createElement("div",{className:"flex-1"},n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/vscode.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"VISUAL STUDIO CODE")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/trello.jpg",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"TRELLO")),n.a.createElement("div",{className:"d-flex align-items-center"},n.a.createElement("div",{style:{padding:"5px 10px"}},n.a.createElement("img",{src:"/figma.png",style:{height:"30px",width:"30px"}})),n.a.createElement("div",{style:{fontWeight:"bolder"}},"FIGMA"))))))))}},{key:"componentDidMount",value:function(){this.context=this.animateRef.current.getContext("2d"),k(this.context)}}]),a}(i.Component),b=(a(21),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"projects"},n.a.createElement("h3",{id:"header"},"PROJECTS"),n.a.createElement("div",{id:"main",className:"d-flex flex-wrap"},n.a.createElement("div",{className:"proj-item"},n.a.createElement("div",{className:"proj-img"}),n.a.createElement("div",null,n.a.createElement("h4",null,"[PROJECT 1]")),n.a.createElement("div",null,n.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))),n.a.createElement("div",{className:"proj-item"},n.a.createElement("div",{className:"proj-img"}),n.a.createElement("div",null,n.a.createElement("h4",null,"[PROJECT 2]")),n.a.createElement("div",null,n.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'))),n.a.createElement("div",{className:"proj-item"},n.a.createElement("div",{className:"proj-img"}),n.a.createElement("div",null,n.a.createElement("h4",null,"[PROJECT 3]")),n.a.createElement("div",null,n.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')))))}}]),a}(i.Component)),R=(a(22),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"contact"},n.a.createElement("h3",null,"CONTACT"),n.a.createElement("div",{id:"main",className:"d-flex"},n.a.createElement("div",{className:"flex-center contact-div"},n.a.createElement("img",{src:"/contactus.png",style:{width:"100%"}})),n.a.createElement("div",{className:"flex-center contact-div"},n.a.createElement("div",{id:"emaildiv"},n.a.createElement("h4",null,"EMAIL ME!"),n.a.createElement("div",{className:"input-group"},n.a.createElement("label",null,"Your Full Name *"),n.a.createElement("input",{type:"text",name:"fullname",placeholder:"Full Name"})),n.a.createElement("div",{className:"input-group"},n.a.createElement("label",null,"Your Email Address *"),n.a.createElement("input",{type:"text",name:"email",placeholder:"Email Address"})),n.a.createElement("div",{className:"input-group"},n.a.createElement("label",null,"Your Email Address *"),n.a.createElement("textarea",{name:"message",placeholder:"Message",rows:"10"})),n.a.createElement("div",{className:"d-flex justify-content-end",style:{padding:"0 5%"}},n.a.createElement("button",{id:"send-btn"},"SEND"))))))}}]),a}(i.Component)),C=(a(23),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{id:"footer"})}}]),a}(i.Component)),w=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).appRef=n.a.createRef(),e.topNavRef=n.a.createRef(),e.profileRef=n.a.createRef(),e.skillsRef=n.a.createRef(),e.projectRef=n.a.createRef(),e.contactRef=n.a.createRef(),e.homeClick=e.homeClick.bind(Object(o.a)(e)),e.profileClick=e.profileClick.bind(Object(o.a)(e)),e.skillsClick=e.skillsClick.bind(Object(o.a)(e)),e.projectClick=e.projectClick.bind(Object(o.a)(e)),e.contactClick=e.contactClick.bind(Object(o.a)(e)),e}return Object(m.a)(a,[{key:"homeClick",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}},{key:"profileClick",value:function(){var e=this.profileRef.current.offsetTop-50;window.scrollTo({top:e,left:0,behavior:"smooth"})}},{key:"skillsClick",value:function(){var e=this.skillsRef.current.offsetTop-50;window.scrollTo({top:e,left:0,behavior:"smooth"})}},{key:"projectClick",value:function(){var e=this.projectRef.current.offsetTop-50;window.scrollTo({top:e-20,left:0,behavior:"smooth"})}},{key:"contactClick",value:function(){var e=this.contactRef.current.offsetTop-50;window.scrollTo({top:e,left:0,behavior:"smooth"})}},{key:"render",value:function(){return n.a.createElement("div",{className:"App",ref:this.appRef},n.a.createElement("div",{ref:this.topNavRef},n.a.createElement(f,{homeClick:this.homeClick,profileClick:this.profileClick,skillsClick:this.skillsClick,projectClick:this.projectClick,contactClick:this.contactClick,appRef:this.appRef,profileRef:this.profileRef,skillsRef:this.skillsRef,projectRef:this.projectRef,contactRef:this.contactRef})),n.a.createElement(u,{ref:this.heroRef,profileClick:this.profileClick}),n.a.createElement("div",{className:"container",ref:this.profileRef},n.a.createElement(E,null)),n.a.createElement("div",{ref:this.skillsRef},n.a.createElement(y,null)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{ref:this.projectRef},n.a.createElement(b,null)),n.a.createElement("div",{ref:this.contactRef},n.a.createElement(R,null))),n.a.createElement(C,null))}},{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){window.pageYOffset>500?e.topNavRef.current.classList.add("topnavbar-fixed"):e.topNavRef.current.classList.remove("topnavbar-fixed")}}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4896f5cb.chunk.js.map