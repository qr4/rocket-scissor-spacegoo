(this.webpackJsonprps=this.webpackJsonprps||[]).push([[0],{215:function(e,a,t){e.exports=t(471)},220:function(e,a,t){},221:function(e,a,t){},471:function(e,a,t){"use strict";t.r(a);var n,r,l,c=t(1),o=t.n(c),s=t(100),i=t.n(s),m=(t(220),t(16)),u=(t(221),t(3)),d=t(61),h=t(64),f=t(37),p=t(49),g=t(23),y=t.n(g),E=t(54),v=t(140),w=t(201),b=t(55),k=t(50),j=t(10),O=t.n(j),x=Object(u.withStyles)((function(e){return{root:{maxWidth:1216,margin:"0 auto"}}}))((function(e){var a=e.classes,t=e.className,n=e.children;return o.a.createElement("div",{className:O()(a.root,t)},n)})),P=function(e,a,t){var n=Object(c.useRef)();Object(c.useEffect)((function(){n.current=e}),[e,t]),Object(c.useEffect)((function(){t&&e()}),[]),Object(c.useEffect)((function(){if(null!==a){var e=setInterval((function(){n.current()}),a);return function(){return clearInterval(e)}}}),[a])},C=t(482),S=t(479),N=t(483),L=t(480),M=Object(c.memo)((function(e){var a=e.game,t=e.turn,n=e.dispatch,r=e.show,l=e.arwesShow,c=[{label:"neutral",color:"#ccc",data:[]},{label:"player1",color:"#6f6",data:[]},{label:"player2",color:"#f66",data:[]}],s=0;if(a)for(var i=0;i<a.length;i++){for(var m=a[i],d=[0,0,0],h=0;h<m.fleets.length;h++){var f=m.fleets[h];d[f.owner_id]+=f.ships[0]+f.ships[1]+f.ships[2]}for(var p=0;p<m.planets.length;p++){var g=m.planets[p];d[g.owner_id]+=g.ships[0]+g.ships[1]+g.ships[2]}for(var y=0;y<=2;y++)c[y].data.push({x:i,y:d[y]}),s=Math.max(s,d[y])}var E=C.a.material;return E.axis.style.axis.stroke="#8bebfe",E.axis.style.tickLabels.fill="#8bebfe",E.axis.style.grid.stroke="#ccc",r&&a?o.a.createElement(S.a,{theme:C.a.material,width:1200,containerComponent:o.a.createElement(N.a,{cursorLabelComponent:o.a.createElement("div",{style:{display:"none"}}),cursorDimension:"x",onCursorChange:function(e){return e&&n({type:"setMove",value:Math.ceil(e)})}})},c.map((function(e,a){return o.a.createElement(L.a,{style:{data:{stroke:e.color}},data:e.data,key:a})})),o.a.createElement(L.a,{style:{data:{stroke:"#8bebfe",strokeWidth:"4px"}},data:[{x:t,y:0},{x:t,y:s}]})):l&&o.a.createElement(u.Loading,{animate:!0})||null})),_=function(){return function(e){return Object(p.withSounds)()((function(a){return o.a.createElement(e,Object.assign({},a,{sounds:a.players}))}))}},T=(_()(u.Button),_()(u.Words)),W=Object(u.withStyles)((function(e){return{heading:{display:"flex"},gameName:{flexGrow:"1"},loadingElo:{marginRight:e.margin}}}))((function(e){var a=e.info,t=e.history,n=e.className,r=e.classes,l=e.show,c=e.arwesShow;return a?o.a.createElement("div",{className:n},o.a.createElement("div",null,o.a.createElement("h2",{className:r.heading},o.a.createElement("span",{className:r.gameName},o.a.createElement(T,{animate:!0,layer:"primary",show:l},"Game #"),o.a.createElement(u.Link,{href:"javascript:void(0)",onClick:function(){return t.push("/game/".concat(a.game_id))}},a.game_id),":\xa0",o.a.createElement(u.Link,{href:"javascript:void(0)",onClick:function(){return t.push("/player/"+a.player1)}},o.a.createElement(u.Words,{animate:!0,layer:"success",show:l},a.player1))," ",o.a.createElement("sub",null,"vs")," ",o.a.createElement(u.Link,{href:"javascript:void(0)",onClick:function(){return t.push("/player/"+a.player2)}},o.a.createElement(u.Words,{animate:!0,layer:"alert",show:l},a.player2))," ",a.finished&&o.a.createElement("span",{style:{marginLeft:"40px"}},"Elo diff: ",o.a.createElement(u.Words,{animate:!0,layer:"success",show:l},a.player1)," ",o.a.createElement(u.Words,{layer:a.elodiff>0?"primary":"secondary"},(a.elodiff>0?"+":"")+Number(a.elodiff).toFixed(3)),", ",o.a.createElement(u.Words,{animate:!0,layer:"alert",show:l},a.player2)," ",o.a.createElement(u.Words,{layer:-a.elodiff>0?"primary":"secondary"},(-a.elodiff>0?"+":"")+Number(-a.elodiff).toFixed(3)))),!a.finished&&o.a.createElement(u.Loading,{animate:!0,small:!0,className:r.loadingElo}))),o.a.createElement("p",null,o.a.createElement(u.Words,{animate:!0,layer:"primary",show:l},"".concat(a.player1," currently has rank"))," ",o.a.createElement("b",null,o.a.createElement(u.Words,{animate:!0,layer:a.rank1<=3?"success":"primary",show:l},"#".concat(a.rank1))),o.a.createElement(u.Words,{animate:!0,layer:"primary",show:l},", ".concat(a.player2," currently has rank"))," ",o.a.createElement("b",null,o.a.createElement(u.Words,{animate:!0,layer:a.rank2<=3?"success":"primary",show:l},"#".concat(a.rank2))),o.a.createElement(u.Link,{href:"".concat(H,"/").concat(a.game_log_name),style:{marginLeft:"20px"}},o.a.createElement(u.Words,{animate:!0,show:l},"raw gamelog")))):c&&o.a.createElement(u.Loading,{animate:!0})||null})),I=["#BFBBB8","#E4E0DC","#807D7A"],R=["#00BF0A","#00E60B","#004003"],F=["#BF0020","#E60028","#800015"],B=Object(c.memo)((function(e){var a=e.turn,t=e.info,s=e.gameId,i=Object(c.useRef)();return Object(c.useEffect)((function(){if(a&&t&&void 0!==s){s!==l&&(n=null,r=null,l=s);var e=i.current,c=getComputedStyle(e).getPropertyValue("width").slice(0,-2),o=getComputedStyle(e).getPropertyValue("height").slice(0,-2);e.width=c,e.height=o,e.style.width="".concat(c,"px"),e.style.height="".concat(o,"px");if(!n){(n=document.createElement("canvas")).width=c,n.height=o;for(var m=n.getContext("2d"),u=Math.floor(50+50*Math.random()),d=0;d<u;d++){var h=Math.random()*c,f=Math.random()*o,p=4*Math.random()/2;m.beginPath(),m.fillStyle="white",m.moveTo(h,f),m.arc(h,f,p,0,2*Math.PI,!1),m.fill()}}if(!r&&a&&a.planets){(r=document.createElement("canvas")).width=c,r.height=o;var g=r.getContext("2d");g.translate(c/2,o/2);for(var y=a.planets,E=0;E<y.length;E++)for(var v=y[E],w=v.production[0]+v.production[1]+v.production[2],b=50*Math.sqrt(w/36),k=-Math.PI/2,j=0;j<3;j++){var O=k+2*Math.PI*(v.production[j]/w);g.fillStyle=I[j],g.beginPath(),g.moveTo(-15*v.x,15*v.y),g.arc(-15*v.x,15*v.y,b,k,O,!1),g.closePath(),g.fill(),k=O}}!function(){var l=e.getContext("2d");if(l.translate(c/2,o/2),l.clearRect(-e.width/2,-e.height/2,e.width,e.height),a&&a.planets){l.drawImage(n,-e.width/2,-e.height/2);for(var s=a.planets,i=0;i<s.length;i++){for(var m=s[i],u=m.production[0]+m.production[1]+m.production[2],d=50*Math.sqrt(u/36),h=0;h<3;h++){var f=5*Math.log(m.ships[h]/18+1)+d+2;l.beginPath(),l.fillStyle=[I,R,F][m.owner_id][h],l.moveTo(-15*m.x,15*m.y),l.arc(-15*m.x,15*m.y,f,Math.PI*(2/3*h-.5),Math.PI*(2/3*(h+1)-.5),!1),l.fill()}l.beginPath(),l.fillStyle="black",l.moveTo(-15*m.x,15*m.y),l.arc(-15*m.x,15*m.y,d+2,0,2*Math.PI,!1),l.fill()}l.drawImage(r,-e.width/2,-e.height/2),l.globalAlpha=.4;for(var p=0;p<s.length;p++){var g=s[p];if(0!==g.owner_id){var y=g.production[0]+g.production[1]+g.production[2],E=50*Math.sqrt(y/36);l.beginPath(),l.fillStyle=["invalid","green","red"][g.owner_id],l.moveTo(-15*g.x,15*g.y),l.arc(-15*g.x,15*g.y,E,0,2*Math.PI,!1),l.fill()}}l.globalAlpha=1;for(var v=a.fleets,w=0;w<v.length;w++){var b=v[w],k=b.ships[0]+b.ships[1]+b.ships[2];if(0!==k){var j=s[b.target].x-s[b.origin].x,O=s[b.target].y-s[b.origin].y,x=Math.ceil(Math.sqrt(j*j+O*O)),P=1-(b.eta+1-a.round)/x,C=s[b.origin].x+P*j,S=s[b.origin].y+P*O,N=5*Math.sqrt(k/36);l.save(),l.translate(-15*C,15*S),l.rotate(Math.atan2(j,O)),l.beginPath(),l.fillStyle=["invalid","green","red"][b.owner_id],l.moveTo(-(N+1),0),l.lineTo(0,2*N),l.lineTo(N+1,0),l.closePath(),l.fill(),l.beginPath(),l.moveTo(0,0),l.arc(0,0,N+1,Math.PI,0,!1),l.closePath(),l.fill();for(var L=Math.PI,M=0;M<3;M++){var _=L+Math.PI*(b.ships[M]/k);l.fillStyle=I[M],l.beginPath(),l.moveTo(0,0),l.arc(0,0,N,L,_,!1),l.closePath(),l.fill(),L=_}l.restore()}}if(a.game_over){var T=a.winner;T||(T=0),l.fillStyle=["lightgrey",R[1],F[1]][T],l.font="bold 60px sans-serif",l.textAlign="center",l.textBaseline="ideographic",l.fillText(["draw!",t.player1+" wins!",t.player2+" wins!"][T],0,0)}}}()}})),o.a.createElement("canvas",{ref:i,width:1200,height:500})}));function G(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?G(t,!0).forEach((function(a){Object(w.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):G(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var H="/api",A=function(e){for(var a=[[0,0,0],[0,0,0],[0,0,0]],t=[0,0,0],n=[0,0,0],r=[[0,0,0],[0,0,0],[0,0,0]],l=function(e,a){e[0]+=a[0],e[1]+=a[1],e[2]+=a[2]},c=0;c<e.fleets.length;c++){var o=e.fleets[c];n[o.owner_id]+=1,l(a[o.owner_id],o.ships)}for(var s=0;s<e.planets.length;s++){var i=e.planets[s];t[i.owner_id]+=1,l(a[i.owner_id],i.ships),l(r[i.owner_id],i.production)}return[e.game_over?"Final Standings":e.round,a[0][0]+a[0][1]+a[0][2]+a[1][0]+a[1][1]+a[1][2]+a[2][0]+a[2][1]+a[2][2],t[1],t[2],a[1].join(","),a[2].join(","),r[1].join(","),r[2].join(","),n[1],n[2]]},q=function(e,a){switch(a.type){case"incrementMove":return e.game&&e.game.length?D({},e,{turn:Math.min(e.game.length-1,e.turn+1),playback:e.playback&&(!e.game||!e.turn||e.turn+1>=e.game.length||!e.game[e.turn+1].game_over)}):e;case"setMove":return D({},e,{turn:a.value});case"decrementMove":return D({},e,{turn:Math.max(0,e.turn-1),playback:!1});case"setMove":return D({},e,{turn:a.value,playback:!1});case"togglePlayback":return D({},e,{playback:!e.playback});case"setPlayback":return D({},e,{playback:a.value});case"updateGame":return D({},e,{game:[].concat(Object(v.a)(e.game||[]),Object(v.a)(a.value))});case"setGameId":return console.log("setting gameId",a),D({},e,{gameId:a.value,game:void 0});default:throw Error()}},z=Object(u.withStyles)((function(e){return{frames:{marginTop:e.margin},header:{paddingLeft:e.padding},frameContent:{padding:e.padding},heading:{"@global":{h1:{width:"100%","@global":{span:{width:"100%"}}}},width:"100%"},controls:{display:"flex",justifyContent:"center",marginTop:e.margin},controlElements:{marginLeft:e.margin,marginRight:e.margin,cursor:"pointer"}}}))((function(e){var a=e.show,t=e.classes,n=e.showLatest,r=Object(f.g)(),l=r.id,s=r.playerName,i=Object(c.useReducer)(q,{turn:0,playback:!1,game:void 0,gameId:l}),d=Object(m.a)(i,2),h=d[0],p=h.turn,g=h.playback,v=h.game,w=h.gameId,j=d[1],O=Object(f.f)(),C=Object(c.useState)(void 0),S=Object(m.a)(C,2),N=S[0],L=S[1],_=Object(c.useCallback)(Object(E.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==s){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(H,"/player/").concat(s,"/latest_game.json"));case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,w!==t.last&&t.last&&(!v||!p||v.length&&v[p].game_over||!g)&&(j({type:"setGameId",value:t.last}),j({type:"setPlayback",value:!0}),j({type:"setMove",value:0}),L(null));case 9:case"end":return e.stop()}}),e)}))),[v,p,s,g,L]);P(_,void 0===s?null:3e3,!0);var T=Object(c.useCallback)(Object(E.a)(y.a.mark((function e(){var a,t,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("".concat(H,"/info.json"));case 4:return a=e.sent,e.next=7,a.json();case 7:t=e.sent,r=t&&t.last_games&&t.last_games.length&&t.last_games[0]&&t.last_games[0].game_id,w!==r&&r&&(!v||!p||v.length&&v[p].game_over||!g)&&(j({type:"setGameId",value:r}),j({type:"setPlayback",value:!0}),j({type:"setMove",value:0}),L(null));case 10:case"end":return e.stop()}}),e)}))),[p,v,g,L]);P(T,n?3e3:null,!0);var I=Object(c.useCallback)(Object(E.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===w){e.next=8;break}return e.next=3,fetch("".concat(H,"/game/").concat(w,"/info.json"));case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,L&&L(t);case 8:case"end":return e.stop()}}),e)}))),[w,L]);P(I,N&&N.finished?null:1e3,!0);var R=Object(c.useCallback)(Object(E.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===w){e.next=8;break}return e.next=3,fetch("".concat(H,"/game/").concat(w,"/rounds/").concat(v&&v.length||0));case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,j({type:"updateGame",value:t});case 8:case"end":return e.stop()}}),e)}))),[w,v]);return P(R,v&&v.length&&v[v.length-1].game_over?null:500,!0),P((function(){return g&&j({type:"incrementMove"})}),g?10:null),o.a.createElement(x,null,o.a.createElement(u.Frame,{animate:!0,level:3,corners:4,show:a,layer:"primary"},(function(e){return o.a.createElement(W,{playerName:s,className:t.header,info:N,history:O,show:e.entered,arwesShow:a})})),o.a.createElement(u.Frame,{animate:!0,level:3,corners:4,show:a,layer:"primary"},(function(e){return o.a.createElement("div",{className:t.frameContent},a&&o.a.createElement("div",{className:t.controls},o.a.createElement(u.Button,{animate:!0,layer:"primary",onClick:function(){return j({type:"decrementMove"})},show:e.entered},e.entered&&o.a.createElement(b.a,{className:t.controlElements,icon:k.a,size:"lg"})),o.a.createElement(u.Button,{animate:!0,layer:"primary",onClick:function(){return j({type:"togglePlayback"})},show:e.entered},e.entered&&o.a.createElement(b.a,{fixedWidth:!0,className:t.controlElements,icon:g?k.c:k.d,size:"lg"})),o.a.createElement(u.Button,{animate:!0,layer:"primary",onClick:function(){return j({type:"incrementMove"})},show:e.entered},e.entered&&o.a.createElement(b.a,{className:t.controlElements,icon:k.b,size:"lg"}))),o.a.createElement(M,{game:v,turn:p,dispatch:j,show:e.entered,arwesShow:a}))})),o.a.createElement(u.Frame,{className:t.frames,show:a,animate:!0,level:3,corners:4,layer:"primary"},(function(e){return e.entered&&(v?o.a.createElement(B,{turn:v[p],info:N,gameId:w}):a&&o.a.createElement(u.Loading,{animate:!0})||null)})),o.a.createElement(u.Frame,{className:t.frames,show:a,animate:!0,level:3,corners:4,layer:"primary"},(function(e){return e.entered&&(N&&v&&v[p]?o.a.createElement("div",{className:t.frameContent},o.a.createElement(u.Table,{animate:!0,headers:["Round","Total Fleets",o.a.createElement(u.Words,{layer:"success"},o.a.createElement("div",null,"Planets"),"".concat(N.player1)),o.a.createElement(u.Words,{layer:"alert"},o.a.createElement("div",null,"Planets"),"".concat(N.player2)),o.a.createElement(u.Words,{layer:"success"},o.a.createElement("div",null,"Ships"),"".concat(N.player1)),o.a.createElement(u.Words,{layer:"alert"},o.a.createElement("div",null,"Ships"),"".concat(N.player2)),o.a.createElement(u.Words,{layer:"success"},o.a.createElement("div",null,"Production"),"".concat(N.player1)),o.a.createElement(u.Words,{layer:"alert"},o.a.createElement("div",null,"Production"),"".concat(N.player2)),o.a.createElement(u.Words,{layer:"success"},o.a.createElement("div",null,"Fleets"),"".concat(N.player1)),o.a.createElement(u.Words,{layer:"alert"},o.a.createElement("div",null,"Fleets"),"".concat(N.player2))],dataset:[A(v[p])]})):a&&o.a.createElement(u.Loading,{animate:!0})||null)})))})),V=t(484),J=function(e){var a=e.children;return o.a.createElement(x,null,a)},K=Object(u.withStyles)((function(e){return{firstPlace:{textTransform:"uppercase"}}}))(Object(c.memo)((function(e){var a=e.title,t=e.show,n=e.scoreboardData,r=e.classes,l=e.isGlobalRanking,s=Object(f.f)(),i=Object(c.useState)(0),d=Object(m.a)(i,2),h=d[0],p=d[1],g=Object(c.useRef)(0);return P((function(){n&&g.current<n.length&&(p(g.current+1),g.current=g.current+1)}),t?100:null),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Heading,{node:"h3"},a),t&&(n?o.a.createElement(u.Table,{animate:!0,headers:[],dataset:n.map((function(e,a){return[a,o.a.createElement(u.Link,{onClick:function(){return s.push("/player/".concat(e[0]))}},o.a.createElement(u.Words,{animate:!0,layer:l&&a<3?"success":"primary",className:l&&0===a?r.firstPlace:"",show:t&&h>a},e[0])),e[1].toFixed(3)]}))}):o.a.createElement(u.Loading,null)))}))),Q=t(214),U=t(20),X=t.n(U),Y=t(132),Z=t.n(Y),$=Object(u.withStyles)(Z.a)((function(e){var a=e.theme,t=e.classes,n=e.Animation,r=e.animation,l=e.animate,c=e.show,s=e.headers,i=e.dataset,m=e.minWidth,u=e.className,d=e.children,h=Object(Q.a)(e,["theme","classes","Animation","animation","animate","show","headers","dataset","minWidth","className","children"]),f=O()(t.root,u);return o.a.createElement(n,Object.assign({animate:l,show:c,timeout:a.animTime},r),(function(e){return o.a.createElement("div",Object.assign({className:O()(f,t[e.status])},h),o.a.createElement("div",{style:{minWidth:m}},!d&&o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,s.map((function(e,a){return o.a.createElement("th",{key:a},e)})))),o.a.createElement("tbody",null,i.filter((function(e){return!!e})).map((function(e,a){return e.key&&e.value?o.a.createElement("tr",{key:e.key},e.value.map((function(e,a){return e.key&&e.value?o.a.createElement("td",{key:e.key},e.value):o.a.createElement("td",{key:a},e)}))):o.a.createElement("tr",{key:a},e.map((function(e,a){return o.a.createElement("td",{key:a},e)})))})))),d))}))}));$.defaultProps={Animation:X.a,show:!0,headers:[],dataset:[]};var ee=$,ae=Object(u.withStyles)((function(e){return console.info(e.color)||{versusColumnEntry:{display:"flex",justifyContent:"space-evenly"},eloLost:{color:e.color.secondary.light}}}))(Object(c.memo)((function(e){var a=e.title,t=e.show,n=e.lastGamesData,r=e.classes,l=e.focusedPlayer,s=Object(f.f)(),i=Object(c.useState)(0),d=Object(m.a)(i,2),h=d[0],p=d[1],g=Object(c.useRef)(0);return P((function(){n&&g.current<n.length&&(p(g.current+1),g.current=g.current+1)}),t?100:null),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.Heading,{node:"h3"},a),t&&(n?o.a.createElement(ee,{animate:!0,dataset:n.map((function(e,a){var n=e.game_id,c=e.player1,i=e.player2,d=e.elodiff,f=l&&l!==c?[i,c,-d]:[c,i,d,!1],p=Object(m.a)(f,3),g=p[0],y=p[1],E=p[2];return{key:"".concat(n),value:[o.a.createElement(u.Link,{href:"javascript:void(0)",onClick:function(){return s.push("/game/".concat(n))}},n),o.a.createElement("div",{className:r.versusColumnEntry},o.a.createElement(u.Link,{href:"javascript:void(0)",onClick:function(){return s.push("/player/".concat(g))}},o.a.createElement(T,{layer:g===c?"success":"alert",animate:!0,show:t&&h>a},g))," ",o.a.createElement("sub",null,t&&h>a&&"vs")," ",o.a.createElement(u.Link,{href:"javascript:void(0)",onClick:function(){return s.push("/player/".concat(y))}},o.a.createElement(T,{layer:y===c?"success":"alert",animate:!0,show:t&&h>a},y))),o.a.createElement("span",{className:E<0&&r.eloLost},E?E>0?"+".concat(E.toFixed(3)):E.toFixed(3):"---")]}}))}):o.a.createElement(u.Loading,null)))}))),te=function(e){var a=e.classes,t=e.show,n=Object(f.f)();return o.a.createElement("div",{className:a.recentGamesContainer},o.a.createElement("div",{className:a.title},"Recent games"),o.a.createElement("div",null,o.a.createElement(u.Link,{onClick:function(){return n.push("/game/latest")},className:a.latestLink},o.a.createElement(T,{animate:!0,show:t},"Watch latest")," ",t&&o.a.createElement(b.a,{icon:k.b}))))},ne=function(e){var a=e.show,t=e.classes,n=e.gameData,r=Object(V.a)(a,200),l=Object(m.a)(r,1)[0],c=Object(V.a)(a,400),s=Object(m.a)(c,1)[0];return o.a.createElement("div",{className:t.frameContent},o.a.createElement("p",null,o.a.createElement(T,{animate:!0,show:a},"Total of")," ",n?o.a.createElement(T,{animate:!0,show:a},n.num_games.toString()):a&&o.a.createElement(u.Loading,{small:!0})," ",o.a.createElement(T,{animate:!0,show:a},"games played.")),o.a.createElement(u.Row,null,o.a.createElement(u.Col,{s:12,m:12,l:6},o.a.createElement(K,{isGlobalRanking:!0,title:"Top 40",show:l,scoreboardData:n?n.highscores:null})),o.a.createElement(u.Col,{s:12,m:12,l:6},o.a.createElement(ae,{title:o.a.createElement(te,{show:a,classes:t}),show:s,lastGamesData:n?n.last_games:null}))))},re=Object(u.withStyles)((function(e){return{frameContent:{padding:e.padding},recentGamesContainer:{display:"flex"},title:{flexGrow:1},latestLink:{textTransform:"initial"}}}))((function(e){var a=e.show,t=e.classes,n=Object(c.useState)(null),r=Object(m.a)(n,2),l=r[0],s=r[1],i=Object(c.useCallback)(Object(E.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/info.json"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,s(t);case 7:case"end":return e.stop()}}),e)}))),[]);return P(i,l&&l.finished?null:2500),Object(c.useEffect)((function(){s(null),i()}),[]),o.a.createElement(J,null,o.a.createElement(u.Heading,{node:"h1"},o.a.createElement(T,{animate:!0,show:a},"Rocket Paper Spacegoo")),o.a.createElement(u.Frame,{animate:!0,show:a,layer:"primary",corners:5,level:3},(function(e){return o.a.createElement(ne,{show:e.entered,gameData:l,classes:t})})))})),le=["Rock Paper Spacegoo","Rock Paper Scissors","Rolling Pickles Sensually","Rethink Play Station","Radical Peter Spinning","Rocket Propulsion Solution"],ce=Object(u.withStyles)((function(e){return{root:{marginBottom:e.margin},container:{display:"flex"},logo:{margin:[e.margin/2,e.margin,e.margin/2,0]},headingText:{marginBottom:0,flexGrow:1,"@global":{span:{paddingTop:3}}},linkContainer:{display:"flex",alignItems:"center"},link:{margin:[0,e.margin]},linkIcon:{marginRight:e.margin/2}}}))((function(e){var a=e.show,t=e.classes,n=Object(f.f)(),r=Object(c.useState)(le[0]),l=Object(m.a)(r,2),s=l[0],i=l[1];return o.a.createElement(u.Header,{animate:!0,className:t.root},o.a.createElement(x,{className:t.container},o.a.createElement(u.Heading,{node:"h4",className:t.headingText},o.a.createElement(u.Logo,{className:t.logo,animate:!0,size:50,onClick:function(){return i(le[Math.floor(Math.random()*le.length)])}}),o.a.createElement(u.Link,{href:"#",onClick:function(){return n.push("/")}},o.a.createElement(T,{animate:!0,style:{marginLeft:"5px"},show:a},s))),o.a.createElement("div",{className:t.linkContainer},o.a.createElement(u.Link,{className:t.link,animate:!0,href:"https://github.com/qr4/rocket-scissor-spacegoo"},o.a.createElement(b.a,{className:t.linkIcon,icon:k.f}),"SourceCode"),o.a.createElement(u.Link,{className:t.link,href:"#",onClick:function(){return n.push("/")}},o.a.createElement(b.a,{className:t.linkIcon,icon:k.e}),"Home"))))})),oe=Object(u.withStyles)((function(e){return{versusColumnEntry:{display:"flex",justifyContent:"space-evenly"},summary:{marginTop:e.margin,marginBottom:2*e.margin},rankLoading:{padding:[0,e.padding/2]}}}))((function(e){var a=e.show,t=e.classes,n=Object(f.g)().playerName,r=Object(f.f)(),l=Object(c.useState)(!1),s=Object(m.a)(l,2),i=s[0],d=s[1];Object(c.useEffect)((function(){a&&!i&&setTimeout((function(){d&&d(!0)}),1e3)}),[a]);var h=Object(c.useState)(null),p=Object(m.a)(h,2),g=p[0],v=p[1],w=Object(c.useCallback)(Object(E.a)(y.a.mark((function e(){var a,t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/player/").concat(n,"/info.json"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,v(t);case 7:case"end":return e.stop()}}),e)}))),[n]);return P(w,g&&g.finished?null:5e3),Object(c.useEffect)((function(){v(null),w()}),[n]),o.a.createElement(J,null,o.a.createElement(u.Project,{show:a,animate:!0,header:n},g?function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:t.summary},o.a.createElement(T,{animate:!0,show:a},"Total of ".concat(g.num_games," played."))," ",o.a.createElement(T,{animate:!0,show:e.entered},"Ranked")," ",i?o.a.createElement(T,{animate:!0,show:i,layer:g.rank<=3?"success":null},"#".concat(g.rank?g.rank.toString():"",".")):a&&o.a.createElement("span",{className:t.rankLoading},o.a.createElement(u.Loading,{animate:!0,small:!0}))," ",o.a.createElement(T,{animate:!0,show:e.entered},"View")," ",o.a.createElement(u.Link,{onClick:function(){return r.push("/player/".concat(g.username,"/live"))}},o.a.createElement(T,{animate:!0,show:e.entered},"".concat(g.username,"'s games")))," ",o.a.createElement(T,{animate:!0,show:e.entered},"live.")),o.a.createElement(u.Row,null,o.a.createElement(u.Col,{s:12,m:12,l:6},o.a.createElement(K,{title:o.a.createElement(u.Words,{animate:!0,show:i},"".concat(n,"'s scoreboard")),show:i,classes:t,scoreboardData:g.highscores})),o.a.createElement(u.Col,{s:12,m:12,l:6},o.a.createElement(ae,{title:o.a.createElement(u.Words,{animate:!0,show:i},"".concat(n,"'s recent games")),show:i,classes:t,lastGamesData:g.last_games,focusedPlayer:n}))))}:a&&o.a.createElement(u.Loading,null)))})),se={ask:new d.Howl({src:["".concat("","/sounds/ask.mp3")]}),click:new d.Howl({src:["".concat("","/sounds/click.mp3")]}),deploy:new d.Howl({src:["".concat("","/sounds/deploy.mp3")]}),error:new d.Howl({src:["".concat("","/sounds/error.mp3")]}),information:new d.Howl({src:["".concat("","/sounds/information.mp3")]}),typing:new d.Howl({src:["".concat("","/sounds/typing.mp3")]}),warning:new d.Howl({src:["".concat("","/sounds/warning.mp3")]})},ie={mute:!1};function me(e){var a=e.wrapperAnimEntered,t=Object(c.useState)(!1),n=Object(m.a)(t,2),r=n[0],l=n[1];return Object(c.useEffect)((function(){a&&!r&&setTimeout((function(){l&&l(!0)}),250)}),[a]),o.a.createElement(h.a,null,o.a.createElement(ce,{show:a}),o.a.createElement(f.c,null,o.a.createElement(f.a,{path:"/player/:playerName/live"},o.a.createElement(z,{show:r})),o.a.createElement(f.a,{path:"/player/:playerName"},o.a.createElement(oe,{show:r})),o.a.createElement(f.a,{path:"/game/latest"},o.a.createElement(z,{show:r,showLatest:!0})),o.a.createElement(f.a,{path:"/game/:id"},o.a.createElement(z,{show:r})),o.a.createElement(f.a,{path:"/"},o.a.createElement(re,{show:r}))))}var ue=function(){return o.a.createElement(u.ThemeProvider,{theme:Object(u.createTheme)()},o.a.createElement(p.SoundsProvider,{players:se,audio:ie},o.a.createElement(u.Arwes,{animate:!0,background:"/background-large.jpg",pattern:"/glow.png"},(function(e){return o.a.createElement(me,{wrapperAnimEntered:e.entered})}))))};i.a.render(o.a.createElement(ue,null),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.640bc8a9.chunk.js.map