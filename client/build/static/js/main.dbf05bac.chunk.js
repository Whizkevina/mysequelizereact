(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a(294)},127:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),o=a.n(s),l=(a(127),a(16)),i=a(17),c=a(20),u=a(18),m=a(21),p=a(299),d=a(296),h=a(297),g=a(28),f=a(12),b=a(26),E=a(27),v=a.n(E),w=a(22),O=a.n(w),j=a(40),y=a.n(j),S=a(19),C=a(37),A=a(39),P=a.n(A),x=a(43),k=a(38),T=a.n(k),U=T.a.create({baseURL:"http://localhost:8000",withCredentials:!0,headers:{"Content-Type":"application/json",Accept:"application/json"}});U.interceptors.response.use(function(e){return e});var I=U,N=function(e){e?I.defaults.headers.common.Authorization=e:delete I.defaults.headers.common.Authorization},R=a(298),D=a(23),F=function(e){return{root:{flexGrow:1,padding:20},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},chip:{margin:e.spacing.unit},button:{marginLeft:15},rightToolbar:{color:"#fff",textDecoration:"none",a:{color:"#fff"}},rightt:{marginLeft:"auto",marginRight:24},navRoot:{flexGrow:1},menuButton:{marginRight:16,marginLeft:-12}}},L=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=a.state.formData;a.setState({formData:Object(f.a)({},t,Object(g.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.formData,n=t.username,r=t.email,s=t.password,o=t.passwordConf;a.setState({username:a.state.username,password:a.state.password,passwordConf:a.state.passwordConf,email:a.state.email});var l={username:n,email:r,password:s};s===o?a.props.register(l):a.setState({passErr:"Passwords Don't Match"})},a.state={formData:{username:"",password:"",passwordConf:"",email:""},passErr:"",regSuccess:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated;e.classes;return t?r.a.createElement(R.a,{to:"/dashboard"}):r.a.createElement(y.a,{container:!0,spacing:44},r.a.createElement(y.a,{item:!0,sm:10},r.a.createElement("div",{style:{padding:"20px 100px"}},this.props.error&&r.a.createElement("div",{style:{color:"red"}},this.props.error),this.state.passErr&&r.a.createElement("div",{style:{color:"red"}},this.state.passErr),r.a.createElement("h1",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(y.a,{item:!0,sm:10},r.a.createElement(v.a,{id:"outlined-name",label:"Username",style:{width:"100%"},name:"username",value:this.state.username,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-name",label:"Email",className:"",style:{width:"100%"},name:"email",value:this.state.email,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-name",label:"Password",name:"password",type:"password",style:{width:"100%"},className:"",value:this.state.password,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-name",label:"Confirm Password",name:"passwordConf",type:"password",style:{width:"100%"},className:"",value:this.state.passwordConf,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"outlined",color:"primary",type:"submit"},"Sign Up"))))))}}]),t}(n.Component),_=Object(D.d)(Object(S.b)(function(e){return{token:e.user.getToken,isAuthenticated:e.user.isAuthenticated,error:e.user.authError}},function(e){return{register:function(t){return e(function(e){return function(t){I.post("/api/users/new",{username:e.username,password:e.password,email:e.email}).then(function(a){var n=a.data.token;localStorage.setItem("auth",n),N(n),console.log(a.data),Pe.push("/dashboard"),t({type:"REG_SUCCESS",user:e})}).catch(function(e){t({type:"REG_FAIL",err:e}),console.log(e.response.data)})}}(t))}}}),Object(C.withStyles)(F))(L),G=function(e){return r.a.createElement(d.a,Object.assign({to:"/Forgot"},e))},M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=a.state.formData;a.setState({formData:Object(f.a)({},t,Object(g.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.formData,n={username:t.username,password:t.password};a.props.logIn(n),console.log(n)},a.state={formData:{username:"",password:""},loggedEmail:"",loginError:"",myToken:"",userLoggedIn:!1,emailBlank:!0,passwordBlank:!0,emailInvalid:!1,passwordInValid:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return this.props.isAuthenticated?r.a.createElement(R.a,{to:"/dashboard"}):r.a.createElement(y.a,{container:!0,spacing:44},r.a.createElement(y.a,{item:!0,sm:7},r.a.createElement("div",{style:{padding:"20px 100px"}},this.props.error&&r.a.createElement("div",{style:{color:"red"}},this.props.error),r.a.createElement("h1",null,"Sign In"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(y.a,{item:!0,sm:10},r.a.createElement(v.a,{id:"outlined-name2",label:"Username",className:"",style:{width:"100%"},name:"username",value:this.state.username,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-name",label:"Password",name:"password",type:"password",style:{width:"100%"},className:"",value:this.state.password,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"outlined",color:"primary",type:"submit"},"Log In"),r.a.createElement(O.a,{component:G,variant:"outlined",type:"submit",className:e.button},"Forgot Password ?"))))))}}]),t}(n.Component),W=Object(D.d)(Object(S.b)(function(e){return{token:e.user.getToken,isAuthenticated:e.user.isAuthenticated,error:e.user.authError}},function(e){return{logIn:function(t){return e(function(e){return function(t){I.post("/api/users/loginUser",{username:e.username,password:e.password}).then(function(a){var n=a.data.token;localStorage.setItem("auth",n),N(n),Pe.push("/dashboard"),t({type:"SET_USER",user:e})}).catch(function(e){t({type:"LOG_FAIL",err:e}),console.log(e.response.data)})}}(t))}}}),Object(C.withStyles)(F))(M),z=a(300),J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){e.preventDefault();var t=a.state.formData;a.setState({formData:Object(f.a)({},t,Object(g.a)({},e.target.name,e.target.value))})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.formData,n=t.title,r=t.postContent;a.setState({title:a.state.title,postContent:a.state.postContent});var s={title:n,postContent:r};a.props.newPost(s),console.log(s)},a.state={formData:{title:"",postContent:"",userId:""},passErr:"",regSuccess:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.token)}},{key:"render",value:function(){return this.props.isAuthenticated?r.a.createElement("div",{style:{padding:"20px 100px"}},this.props.error&&r.a.createElement("div",{style:{color:"red"}},this.props.error),this.state.passErr&&r.a.createElement("div",{style:{color:"red"}},this.state.passErr),r.a.createElement("h1",null,"New Post"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(v.a,{id:"outlined-name",label:"Title",style:{width:560},name:"title",value:this.state.title,onChange:this.handleChange,margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement(v.a,{id:"outlined-multiline-static",label:"Post Content",name:"postContent",multiline:!0,style:{width:560},rows:"4",value:this.state.postContent,onChange:this.handleChange,defaultValue:"",margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"outlined",color:"primary",type:"submit"},"Submit"))):r.a.createElement(R.a,{to:"/signIn"})}}]),t}(n.Component),B=Object(z.a)(Object(S.b)(function(e){return{token:e.user.getToken,error:e.post.postError,isAuthenticated:e.user.isAuthenticated}},function(e){return{newPost:function(t){return e(function(e,t){return function(t){I.post("/api/posts/newPost",{title:e.title,post_content:e.postContent}).then(function(a){Pe.push("/Posts"),t({type:"POST_SUCC",post:e})}).catch(function(e){t({type:"POST_FAIL",err:e}),console.log(e.response.data)})}}(t))}}})(J)),V={myPaper:{margin:"20px 0px",padding:"20px"},wrapper:{padding:"0px 60px"},textF:{width:"500px"}},q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(g.a)({},e,t.target.value))}},a.sendEmail=function(e){e.preventDefault();var t={email:a.state.email};console.log(t),a.props.Forget(t)},a.state={email:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.sendEmail=a.sendEmail.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email;e.messageFromServer,e.showNullError,e.showError;return r.a.createElement("div",{className:"App",style:V.wrapper},r.a.createElement("h1",null," Forgot Password"),this.props.showError&&r.a.createElement("div",null,r.a.createElement("p",null,"That email address isn't recognized. Please try again or register for a new account.")),"recovery email sent"===this.props.messageFromServer&&r.a.createElement("div",null,r.a.createElement("h3",null,"Password Reset Email Successfully Sent!")),r.a.createElement("form",{className:"profile-form",onSubmit:this.sendEmail},r.a.createElement(v.a,{id:"email",label:"Email",style:V.textF,value:t,onChange:this.handleChange("email"),placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{variant:"outlined",type:"submit"},"Send Password Reset Email")))}}]),t}(n.Component),H=Object(z.a)(Object(S.b)(function(e){return{showError:e.account.showError,messageFromServer:e.account.messageFromServer}},function(e){return{Forget:function(t){return e(function(e){return function(t){T.a.post("/api/users/forgotPassword",{email:e.email}).then(function(a){console.log(e.email),console.log(a.data),"recovery email sent"===a.data&&t({type:"FORGOT",creds:e})}).catch(function(e){console.log(e.response.data),"email not in db"===e.response.data&&t({type:"FORGET_ERR",err:e})})}}(t))}}})(q)),Y=a(41),$=a.n(Y),K=a(60),Q=a.n(K),X=a(51),Z=a.n(X),ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).componentWillMount=function(){},a.fetchData=function(){fetch("http://localhost:8000/api/users/auth/github",{method:"GET",mode:"cors"}).then(function(e){console.log(e)}).catch(function(e){})},a.state={user:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return this.props.isAuthenticated?r.a.createElement(R.a,{to:"/dashboard"}):r.a.createElement("div",{className:e.root},r.a.createElement(y.a,{container:!0,justify:"center",spacing:44},r.a.createElement(y.a,{item:!0,sm:7},r.a.createElement($.a,{className:e.paper},r.a.createElement("h1",null,"Sign Up"),r.a.createElement(Z.a,{label:"Sign In with Github",clickable:!0,onClick:this.fetchData,avatar:r.a.createElement(Q.a,{alt:"Natacha",src:"https://avatars0.githubusercontent.com/u/9919?s=280&v=4"}),component:"a",className:e.chip}),r.a.createElement(Z.a,{label:"Sign Up with E-Mail",clickable:!0,href:"/signUp",component:"a",className:e.chip})))))}}]),t}(n.Component),te=Object(D.d)(Object(S.b)(function(e){return{token:e.user.getToken,isAuthenticated:e.user.isAuthenticated,redirectTo:e.user.redirectTo}},function(e){return{}}),Object(C.withStyles)(F))(ee),ae=a(42),ne=a.n(ae),re=a(118),se=a.n(re),oe={myPaper:{margin:"20px 0px",padding:"20px"}},le=function(e){var t=e.posts;return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement($.a,{key:t,style:oe.myPaper},r.a.createElement(ne.a,{variant:"h6",component:"h3"},e.title),r.a.createElement(ne.a,{component:"p"},e.post_content,r.a.createElement("h5",null," by: ",e.username),r.a.createElement("h5",null," ",se()(e.createdAt).calendar())))}))},ie={myPaper:{margin:"20px 0px",padding:"20px"},wrapper:{padding:"0px 60px"}},ce=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getPosts=function(){I.get("http://localhost:8000/api/posts/myPosts").then(function(e){a.setState({posts:e.data,loading:!1})})},a.state={posts:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getPosts()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.posts;return this.props.isAuthenticated?t?"loading...":r.a.createElement("div",{className:"App",style:ie.wrapper},r.a.createElement("h1",null," Posts "),r.a.createElement(le,{posts:a})):r.a.createElement(R.a,{to:"/signIn"})}}]),t}(n.Component),ue=Object(z.a)(Object(S.b)(function(e){return{isAuthenticated:e.user.isAuthenticated}},function(e){return{}})(ce)),me={myPaper:{margin:"20px 0px",padding:"20px"},wrapper:{padding:"0px 60px"}},pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getUsers=Object(x.a)(P.a.mark(function e(){var t,n;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.setState({users:n,loading:!1}),console.log(a.state.users);case 8:case"end":return e.stop()}},e,this)})),a.state={users:[],loading:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.getUsers()}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.users;return t?"loading...":r.a.createElement("div",{className:"App",style:me.wrapper},r.a.createElement("h1",null," Welcome"),a.map(function(e,t){return r.a.createElement($.a,{key:t,style:me.myPaper},r.a.createElement(ne.a,{variant:"h6",component:"h3"},e.username),r.a.createElement(ne.a,{component:"p"},e.email))}))}}]),t}(n.Component),de=a(48),he=a.n(de),ge=a(119),fe=a.n(ge),be={myPaper:{margin:"20px 0px",padding:"20px"},wrapper:{padding:"0px 60px"}},Ee=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={first_name:"",last_name:"",email:"",username:"",password:"",isLoading:!0,deleted:!1,error:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:be.wrapper},r.a.createElement("h1",null," Welcome"))}}]),t}(n.Component),ve=Object(D.d)(Object(S.b)(function(e){return{isAuthenticated:e.user.isAuthenticated}},null))(Ee),we=a(32),Oe={margin:"1em",fontSize:"24px"},je={pageTitle:"Update Password Screen"},ye=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){return function(t){a.setState(Object(g.a)({},e,t.target.value))}},a.updatePassword=function(e){var t=localStorage.getItem("JWT");null===t?a.setState({loadingUser:!1,error:!0}):(e.preventDefault(),T.a.put("/api/users/updatePassword",{username:a.state.username,password:a.state.password},{headers:{Authorization:"JWT ".concat(t)}}).then(function(e){"password updated"===e.data.message&&a.setState({updated:!0,error:!1,loadingUser:!1})}).catch(function(e){console.log(e.response.data),a.setState({updated:!1,error:!0,loadingUser:!1})}))},a.state={username:"",password:"",loadingUser:!1,updated:!1,error:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loadingUser:!0});var t=localStorage.getItem("JWT");null===t?this.setState({loadingUser:!1,error:!0}):T.a.get("/api/users/findUser",{params:{username:this.props.match.params.username},headers:{Authorization:"JWT ".concat(t)}}).then(function(t){e.setState({loadingUser:!1,username:t.data.username,password:t.data.password,error:!1})}).catch(function(t){console.log(t.response.data),e.setState({loadingUser:!1,error:!0})})}},{key:"render",value:function(){var e=this.state,t=(e.username,e.password),a=e.updated,n=e.error,s=e.loadingUser;return n?r.a.createElement("div",null,r.a.createElement(he.a,{title:je}),r.a.createElement("p",{style:Oe},"There was a problem accessing your data. Please go login again.")):!1!==s?r.a.createElement("div",null,r.a.createElement(he.a,{title:je}),r.a.createElement("p",{style:Oe},"Loading user data...")):!1===s&&!0===a?r.a.createElement(R.a,{to:"/dashboard"}):!1===s?r.a.createElement("div",null,r.a.createElement(he.a,{title:je}),r.a.createElement("form",{className:"profile-form",onSubmit:this.updatePassword},r.a.createElement(v.a,{id:"password",label:"password",value:t,onChange:this.handleChange("password"),type:"password"}),r.a.createElement(O.a,{variant:"outlined",type:"submit"},"Save Changes"))):void 0}}]),t}(n.Component),Se={myPaper:{margin:"20px 0px",padding:"20px"},wrapper:{padding:"0px 60px"},textF:{width:"500px"}},Ce=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){return function(a){e.setState(Object(g.a)({},t,a.target.value))}},e.updatePassword=function(t){t.preventDefault();var a=e.state,n={username:a.username,password:a.password};e.props.updatePass(n)},e.state={username:"",password:"",confirmPassword:"",update:!1,isLoading:!0,error:!1},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(x.a)(P.a.mark(function e(){var t=this;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/users/reset",{params:{resetPasswordToken:this.props.match.params.token}}).then(function(e){console.log(e),"password reset link a-ok"===e.data.message&&t.setState({username:e.data.username,update:!1,isLoading:!1,error:!1})}).catch(function(e){console.log(e.response.data),t.setState({update:!1,isLoading:!1,error:!0})});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.password;e.error,e.isLoading,e.updated;return r.a.createElement("div",{className:"App",style:Se.wrapper},r.a.createElement("h1",null," Update Password"),this.props.updated&&r.a.createElement("div",null,r.a.createElement("p",null,this.props.updated)),r.a.createElement("form",{className:"password-form",onSubmit:this.updatePassword},r.a.createElement(v.a,{id:"Password",label:"Password",style:Se.textF,onChange:this.handleChange("password"),value:t,type:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(O.a,{color:"primary",variant:"outlined",type:"submit"},"Update Password")))}}]),t}(n.Component),Ae=Object(z.a)(Object(S.b)(function(e){return{updated:e.account.update,isLoading:e.account.isLoading}},function(e){return{Reset:function(){return e(function(){var e=Object(x.a)(P.a.mark(function e(t){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/users/reset",{params:{resetPasswordToken:(void 0).props.match.params.token}}).then(function(e){console.log(e),"password reset link a-ok"===e.data.message&&t({type:"RESET"})}).catch(function(e){console.log(e.response.data),t({type:"RESET_FAIL",err:e})});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}())},updatePass:function(t){return e(function(e){return function(t){T.a.put("/api/users/updatePasswordViaEmail",{username:e.username,password:e.password}).then(function(a){console.log(a),t({type:"UPDATEPASS",creds:e})}).catch(function(e){t({type:"UPDATEPASS_FAIL",err:e})})}}(t))}}})(Ce)),Pe=Object(we.a)({forceRefresh:!0}),xe=function(e){e.preventDefault(),I.get("http://localhost:8000/api/users/logout",{withCredentials:!0}).then(function(e){200===e.status&&(localStorage.removeItem("auth"),localStorage.removeItem("myAuth"),Pe.push("/"))}).catch(function(e){localStorage.removeItem("auth"),localStorage.removeItem("myAuth"),Pe.push("/")})},ke=Object(D.d)(Object(S.b)(function(e){return{token:e.user.getToken,githubAuth:e.user.githubAuth,isAuthenticated:e.user.isAuthenticated}},function(e){return{}}),Object(C.withStyles)(F))(function(e){var t=e.classes,a=e.isAuthenticated;return r.a.createElement(p.a,{history:Pe},r.a.createElement("div",{className:t.navRoot},r.a.createElement(he.a,{position:"static",className:t.navbar},r.a.createElement(fe.a,null,r.a.createElement(ne.a,{variant:"h6",color:"inherit"},"Express Seqeuelize App"),r.a.createElement(ne.a,{classcolor:"inherit",className:t.rightt},!a&&r.a.createElement(O.a,null,r.a.createElement(d.a,{to:"/",className:t.rightToolbar},"Home")),a&&r.a.createElement(O.a,null,r.a.createElement(d.a,{className:t.rightToolbar,to:"/posts"},"Posts")),!a&&r.a.createElement(O.a,null,r.a.createElement(d.a,{to:"/signUp",className:t.rightToolbar},"Sign Up")),!a&&r.a.createElement(O.a,null,r.a.createElement(d.a,{to:"/signIn",className:t.rightToolbar},"Sign In")),a&&r.a.createElement(O.a,null,r.a.createElement(d.a,{className:t.rightToolbar,to:"/Post"},"New Post")),a&&r.a.createElement(O.a,null,r.a.createElement(d.a,{to:"/dashboard",className:t.rightToolbar},"Dashboard")),r.a.createElement(O.a,{onClick:xe},"LogOut")))),r.a.createElement(h.a,{exact:!0,path:"/signUp",component:_}),r.a.createElement(h.a,{exact:!0,path:"/",component:te}),r.a.createElement(h.a,{exact:!0,path:"/signIn",component:W}),r.a.createElement(h.a,{exact:!0,path:"/Post",component:B}),r.a.createElement(h.a,{exact:!0,path:"/Posts",component:ue}),r.a.createElement(h.a,{path:"/Forgot",component:H}),r.a.createElement(h.a,{path:"/users",component:pe}),r.a.createElement(h.a,{exact:!0,path:"/logout"}),r.a.createElement(h.a,{exact:!0,path:"/dashboard",component:ve}),r.a.createElement(h.a,{path:"/test"}),r.a.createElement(h.a,{path:"/reset/:token",component:Ae}),r.a.createElement(h.a,{exact:!0,path:"/updatePassword/:username",component:ye})))}),Te=a(120),Ue=a.n(Te),Ie=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:"",isAuthenticated:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){if(null!=localStorage.auth){N(localStorage.auth);var e=localStorage.getItem("auth"),t=Ue()(e);this.props.setCurrentUser(t)}}},{key:"render",value:function(){var e=this.props;e.classes,e.isAuthenticated;return r.a.createElement("div",{className:"App"},r.a.createElement(ke,null))}}]),t}(n.Component),Ne=Object(D.d)(Object(S.b)(function(e){return{isAuthenticated:e.user.isAuthenticated,owl:e.user.owl}},function(e){return{getUser:function(){return e(function(){var e=Object(x.a)(P.a.mark(function e(t,a){var n,r;return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/api/users/current_user",{withCredentials:"same-origin"});case 2:n=e.sent,r=n.data.auth,console.log(r),localStorage.setItem("myAuth",r),t({type:"GET_CURRENT_USER",data:r});case 8:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}())},setCurrentUser:function(){return e({type:"GET_USER",payload:t});var t}}}),Object(C.withStyles)(F))(Ie);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Re=a(121),De={authError:null,isAuthenticated:localStorage.getItem("auth"),githubAuth:localStorage.getItem("gitAuth"),token:null,user:[],owl:localStorage.getItem("myAuth"),redirectPath:null},Fe={post:[],postError:null},Le={showError:!1,messageFromServer:null,showNullError:null,username:null,update:null,isLoading:!1,error:!1,errorMessage:null},_e=Object(D.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return console.log(t.payload),Object(f.a)({},e,{user:t.user,token:t.payload,isAuthenticated:t.isAuthenticated});case"LOG_FAIL":return Object(f.a)({},e,{authError:t.err.response.data});case"GET_USER":return Object(f.a)({},e);case"GET_CURRENT_USER":return Object(f.a)({},e,{owl:t.data.owl});case"REG_SUCCESS":return Object(f.a)({},e,{user:t.user,token:t.payload});case"REG_FAIL":return Object(f.a)({},e,{authError:t.err.response.data});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_SUCC":return Object(f.a)({},e,{post:t.post});case"POST_FAIL":return Object(f.a)({},e,{postError:t.err.response.data});default:return e}},account:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT":return Object(f.a)({},e,{showError:!1,messageFromServer:"recovery email sent"});case"FORGET_ERR":return Object(f.a)({},e,{showError:!0,messageFromServer:"",showNullError:!1});case"RESET":return Object(f.a)({},e,{username:t.creds.username,update:!1,isLoading:!1,error:!1});case"RESET_FAIL":return Object(f.a)({},e,{update:!1,isLoading:!1,error:!0});case"UPDATEPASS":return Object(f.a)({},e,{update:"Your password has been successfully reset, please try logging in again",error:!1});case"UPDATEPASS_FAIL":return Object(f.a)({},e,{update:"Please Enter An Email",error:!0});default:return e}}}),Ge=Object(C.createMuiTheme)({palette:{primary:{light:"#757ce8",main:"#7986cb"},secondary:{main:"#9fa8da"}}}),Me=Object(D.a)(Re.a)(D.e)(_e);o.a.render(r.a.createElement(S.a,{store:Me},r.a.createElement(p.a,null,r.a.createElement(C.MuiThemeProvider,{theme:Ge},r.a.createElement(Ne,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[122,2,1]]]);
//# sourceMappingURL=main.dbf05bac.chunk.js.map