var init={object:{sizeX:32,sizeY:32,sprites:"images/rpg_maker_xp.png"},man:{sprite:"url('images/man.png')",spriteObj:"images/man.png",speak:"url('images/speak.png'),pointer",sizeX:32,sizeY:48,moveSetInterVal:1e3/60,moveSpeed:4,initPos:{x:640,y:800}},control:{left:!1,up:!1,right:!1,down:!1},map:{bg:"url('images/bg.jpg')",left:!1,up:!1,right:!1,down:!1}},sX=init.object.sizeX,sY=init.object.sizeY;init.objects=[{styles:[{name:"largetree",id:0,left:800,top:200,width:8*sX,height:7*sY,background:init.object.sprites,sourceX:0,sourceY:1056,zIndex:2},{name:"largetree",id:0,left:800,top:424,width:8*sX,height:3*sY,background:init.object.sprites,sourceX:0,sourceY:1280,mx:800+3*sX,my:392,mw:2*sX,mh:2*sY},{name:"tree1",id:1,left:400,top:900,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:160,zIndex:2},{name:"tree1",id:1,left:400,top:1028,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:288,mx:400+sX,my:1028,mw:2*sX,mh:0},{name:"house",id:2,left:400,top:300,width:3*sX,height:6*sY,background:init.object.sprites,sourceX:0,sourceY:5216,zIndex:2,mx:400,my:300+2*sY,mw:7*sX,mh:5*sY},{name:"house",id:2,left:400,top:492,width:3*sX,height:2*sY,background:init.object.sprites,sourceX:0,sourceY:5408,zIndex:0,mx:400,my:300+2*sY,mw:7*sX,mh:4*sY},{name:"house",id:2,left:492,top:300,width:sX,height:6*sY,background:init.object.sprites,sourceX:64,sourceY:5216,zIndex:2},{name:"house",id:2,left:524,top:300,width:sX,height:7*sY,background:init.object.sprites,sourceX:64,sourceY:5216,zIndex:2},{name:"house",id:2,left:556,top:300,width:sX,height:6*sY,background:init.object.sprites,sourceX:96,sourceY:5216,zIndex:2},{name:"house",id:2,left:588,top:300,width:sX,height:7*sY,background:init.object.sprites,sourceX:128,sourceY:5216,zIndex:2},{name:"house",id:2,left:588,top:524,width:sX,height:sY,background:init.object.sprites,sourceX:128,sourceY:5440},{name:"housedoor",id:2,left:492,top:492,width:sX,height:2*sY,background:init.object.sprites,sourceX:96,sourceY:5408,mx:492,my:492,mw:sX,mh:sY,cm:1,cmm:0},{name:"house",id:2,left:556,top:492,width:sX,height:sY,background:init.object.sprites,sourceX:64,sourceY:5408},{name:"house",id:2,left:556,top:524,width:sX,height:sY,background:init.object.sprites,sourceX:64,sourceY:5440},{name:"house",id:2,left:524,top:524,width:sX,height:sY,background:init.object.sprites,sourceX:64,sourceY:5440},{name:"wood",id:2,left:524,top:524,width:2*sX,height:2*sY,background:init.object.sprites,sourceX:192,sourceY:4672,mx:524,my:524,mw:2*sX,mh:1*sY},{name:"fence",id:3,left:400,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:32,sourceY:4480,mx:400,my:624+sY,mw:10*sX,mh:0},{name:"fence",id:3,left:432,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480,mx:400+12*sX,my:624+sY,mw:8*sX,mh:0},{name:"fence",id:3,left:464,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480,mx:400,my:848+sY,mw:20*sX,mh:0},{name:"fence",id:3,left:496,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480,mx:400,my:624+sY,mw:sX/2,mh:7*sY},{name:"fence",id:3,left:528,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480,mx:1004+sX/2,my:624+sY,mw:sX/4,mh:7*sY},{name:"fence",id:3,left:560,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:592,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:624,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:656,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:688,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:192,sourceY:4480},{name:"fence",id:3,left:784,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:224,sourceY:4480},{name:"fence",id:3,left:816,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:848,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:880,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:912,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:944,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:976,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4480},{name:"fence",id:3,left:1008,top:624,width:sX,height:2*sY,background:init.object.sprites,sourceX:96,sourceY:4480},{name:"fence",id:3,left:400,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:32,sourceY:4576,zIndex:2},{name:"fence",id:3,left:432,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:464,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:496,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:528,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:560,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:592,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:624,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:656,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:688,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:720,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:752,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:784,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:816,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:848,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:880,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:912,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:944,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:976,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4576,zIndex:2},{name:"fence",id:3,left:1008,top:848,width:sX,height:2*sY,background:init.object.sprites,sourceX:96,sourceY:4576,zIndex:2},{name:"fence",id:3,left:400,top:656,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:400,top:688,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:400,top:720,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:400,top:752,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:400,top:784,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:400,top:816,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:400,top:848,width:sX,height:sY,background:init.object.sprites,sourceX:32,sourceY:4544},{name:"fence",id:3,left:1008,top:656,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4544},{name:"fence",id:3,left:1008,top:688,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4544},{name:"fence",id:3,left:1008,top:720,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4544},{name:"fence",id:3,left:1008,top:752,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4544},{name:"fence",id:3,left:1008,top:784,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4544},{name:"fence",id:3,left:1008,top:816,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4544},{name:"farmland",id:4,left:464,top:728,width:3*sX,height:3*sY,background:init.object.sprites,sourceX:32,sourceY:5056},{name:"farmland",id:4,left:624,top:728,width:3*sX,height:3*sY,background:init.object.sprites,sourceX:32,sourceY:5056},{name:"bogy",id:5,left:578,top:728,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:4994,zIndex:2,mx:578,my:728+sY,mw:sX,mh:sY/4,eventID:0},{name:"bogy",id:5,left:578,top:760,width:sX,height:sY,background:init.object.sprites,sourceX:96,sourceY:5026},{name:"crop",id:5,left:464,top:760,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4994},{name:"crop",id:5,left:496,top:740,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4994},{name:"crop",id:5,left:528,top:752,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4994},{name:"crop",id:5,left:624,top:760,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4994},{name:"crop",id:5,left:656,top:752,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4994},{name:"crop",id:5,left:688,top:740,width:sX,height:2*sY,background:init.object.sprites,sourceX:64,sourceY:4994},{name:"tree2",id:6,left:592,top:900,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:160,zIndex:2},{name:"tree2",id:6,left:592,top:1028,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:288,mx:592+sX,my:1028,mw:2*sX,mh:0},{name:"tree3",id:7,left:784,top:900,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:160,zIndex:2},{name:"tree3",id:7,left:784,top:1028,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:288,mx:784+sX,my:1028,mw:2*sX,mh:0},{name:"tree4",id:8,left:976,top:900,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:160,zIndex:2},{name:"tree4",id:8,left:976,top:1028,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:288,mx:976+sX,my:1028,mw:2*sX,mh:0},{name:"tree5",id:9,left:496,top:964,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:768,zIndex:2},{name:"tree5",id:9,left:496,top:1092,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:896,mx:496+sX,my:1092,mw:2*sX,mh:0},{name:"tree6",id:10,left:688,top:964,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:768,zIndex:2},{name:"tree6",id:10,left:688,top:1092,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:896,mx:688+sX,my:1092,mw:2*sX,mh:0},{name:"tree7",id:11,left:880,top:964,width:4*sX,height:4*sY,background:init.object.sprites,sourceX:0,sourceY:768,zIndex:2},{name:"tree7",id:11,left:880,top:1092,width:4*sX,height:sY,background:init.object.sprites,sourceX:0,sourceY:896,mx:880+sX,my:1092,mw:2*sX,mh:0},{name:"man",id:12,left:810,top:490,width:sX,height:24,background:init.man.spriteObj,sourceX:0,sourceY:0,zIndex:2,mx:810,my:490+sY,mw:sX,mh:0,eventID:1},{name:"man",id:12,left:810,top:514,width:sX,height:24,background:init.man.spriteObj,sourceX:0,sourceY:24},{name:"stone",id:13,left:980,top:448,width:2*sX,height:2*sY,background:init.object.sprites,sourceX:192,sourceY:1664,zIndex:2},{name:"stone",id:13,left:980,top:512,width:2*sX,height:1*sY,background:init.object.sprites,sourceX:192,sourceY:1728,mx:980,my:512,mw:2*sX,mh:0,eventID:2}]},{styles:[{name:"housedoor",id:1,left:224,top:320,width:2*sX,height:sY,background:init.object.sprites,sourceX:192,sourceY:1728,mx:224,my:320,mw:2*sX,mh:sY,cm:0,cmm:0},{name:"man",id:12,left:200,top:144,width:sX,height:24,background:init.man.spriteObj,sourceX:0,sourceY:0,zIndex:2,mx:200,my:144+sY,mw:sX,mh:0,eventID:0},{name:"man",id:12,left:200,top:168,width:sX,height:24,background:init.man.spriteObj,sourceX:0,sourceY:24}]}],init.event=[[{name:"稻草人",text:[".","..","..."]},{name:"哆拉樹",text:["大家好!","我被作者配置在樹下所以我叫做哆拉樹。","作者說以前有玩過一些用 RPG 製作大師所製成的遊戲，但是從來沒有親自開發過。","現在作者想做一份線上履歷來介紹自己，以 RPG 製作大師的風格來實作!","因作者並不會美編，所以場景布置的不好看也請多多見諒。"]},{name:"古文碑",select:[{title:"世界形成之初",text:["此石碑記載著這個世界的創立因素，上面留有密密麻麻的文字....","世界形成之初，有著 HTML 、 CSS 、 JavaScrit","ReactJs、Jquery 是 JavaScirpt 的兒子，祂們能把世界毀滅亦可重生。","Sass 是 Css 的女兒，在這個世界中，任何事情都逃不過牠的法眼。","而 HTML 則是這世界的別名。","在一次的 Gulp 協議中，JavaScript 及 Css 達成共識，決定讓自己的孩子在 HTML 中歷練。","於是 ReactJs、Jquery、Sass 攜手打造了這個世界。"]},{title:"關於作者",text:[React.createElement("span",null,"作者本名叫 盧宏寶 在家排名老二，畢業於高雄市正修科技大學電機工程系，在網路世界中暱稱為 DKBO，",React.createElement("del",null,"目前已婚有一子"))]}]}],[{name:"哆拉空",text:["這屋子好空啊!該擺些甚麼東西呢!"]}]],init.maps=[{bg:init.map.bg,col:1920,row:1280,"in":[{x:488,y:544}]},{bg:init.map.bg,col:480,row:320,"in":[{x:240,y:260}]}],init.events=[],init.firstCanvas=[],init.secondCanvas=[],init.move=[];for(var j=0;j<init.objects.length;j++){init.events[j]=[],init.firstCanvas[j]=[],init.secondCanvas[j]=[],init.move[j]=[];for(var xx=0,yy=0,zz=0,ee=0,i=0;i<init.objects[j].styles.length;i++){var obj=init.objects[j].styles[i];if(obj.mx){var x={sx:obj.mx,sy:obj.my,ex:obj.mw+obj.mx,ey:obj.mh+obj.my,cm:obj.cm,cmm:obj.cmm};init.move[j][xx]=x,xx+=1}if(obj.left){var y={left:obj.left,top:obj.top,width:obj.width,height:obj.height,background:obj.background,sourceX:obj.sourceX,sourceY:obj.sourceY};2==obj.zIndex?(init.firstCanvas[j][yy]=y,yy+=1):(init.secondCanvas[j][zz]=y,zz+=1)}if(obj.eventID>=0){var e={sx:obj.mx,sy:obj.my,ex:obj.mw+obj.mx,ey:obj.mh+obj.my,ev:obj.eventID};init.events[j][ee]=e,ee+=1}}}var Root=React.createClass({displayName:"Root",getDefaultProps:function(){return{min:1,left:-init.man.moveSpeed,right:init.man.moveSpeed,up:-init.man.moveSpeed,down:init.man.moveSpeed}},getInitialState:function(){var t=init.man.initPos;return{spritesGird:!1,spritesOpacity:0,indexShow:0,indexBoxShow:0,loadBoxShow:0,indexBox:0,start:"white",load:"transparent",end:"transparent",map:0,mapBg:init.map.bg,windowWidth:window.innerWidth,windowHeight:window.innerHeight,gridX:!1,gridY:!1,x:t.x,y:t.y,left:t.x-1,top:t.y-1,manMoveImg:0,manMoveAnimate:0,mapSizeX:1,mapSizeY:1,mapLeft:this.getManPosX(),mapTop:this.getManPosY(),mapAnimateSpeed:"0s",mapFade:0,mapZindex:-1,isMoveLeft:this.getMoveLUPoint(this.getWindowWidth()),isMoveRight:this.getMoveRDPoint(this.getWindowWidth()),isMoveUp:this.getMoveLUPoint(this.getWindowHeight()),isMoveDown:this.getMoveRDPoint(this.getWindowHeight()),StartTouchX:0,startTouchY:0,chatOpacity:0,chatZindex:-1,chatSelectArray:[],chatSelectIndex:-1,messageId:-1,message:"",messageName:!1,messageNum:-1,messageMax:-1}},event:function(t){if(-1!=this.state.messageId)if(this.state.messageMax>this.state.messageNum){var t=this.state.messageNum+1;this.setState({messageNum:t,message:React.createElement("p",null,init.event[this.state.map][this.state.messageId].text[t])})}else this.initEvent();else this.setState({messageId:t,chatOpacity:1,message:React.createElement("p",null,init.event[this.state.map][t].text[0]),messageName:init.event[this.state.map][t].name,messageNum:0,messageMax:init.event[this.state.map][t].text.length-1})},eventSelect:function(t){if(-1!=this.state.messageId)this.state.messageMax>this.state.messageNum?(this.setState({messageNum:this.state.messageNum+1}),this.setState({message:React.createElement("p",null,init.event[this.state.map][t].select[this.state.chatSelectIndex].text[this.state.messageNum])})):this.initEvent();else{for(var e=[],i=0;i<init.event[this.state.map][t].select.length;i++)e.push(React.createElement("li",{className:"chatSelect",onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver.bind(null,i),onClick:this.handleEventSelect.bind(null,i)},init.event[this.state.map][t].select[i].title));this.setState({chatSelectIndex:0,chatSelectArray:e,messageId:t,chatOpacity:1,messageName:init.event[this.state.map][t].name,message:""}),$(".chatSelect").eq(this.state.chatSelectIndex).css("border-color","white")}},handleChat:function(t){this.moveAnimate()},handleEventSelect:function(t){-1==this.state.messageNum?this.setState({chatSelectArray:[],message:React.createElement("p",null,init.event[this.state.map][this.state.messageId].select[t].text[0]),messageNum:0,messageMax:init.event[this.state.map][this.state.messageId].select[t].text.length-1}):this.eventSelect(this.state.messageId)},chatSelect:function(t){init.event[this.state.map][this.state.messageId].select.length>this.state.chatSelectIndex+t&&this.state.chatSelectIndex+t>-1&&($(".chatSelect").eq(this.state.chatSelectIndex).css("border-color","transParent"),this.setState({chatSelectIndex:this.state.chatSelectIndex+t}),$(".chatSelect").eq(this.state.chatSelectIndex).css("border-color","white"))},getWindowWidth:function(){return window.innerWidth},getWindowHeight:function(){return window.innerHeight},getMoveLUPoint:function(t){return Math.floor(t/4)-Math.floor(t/4)%init.man.moveSpeed},getMoveRDPoint:function(t){return Math.floor(t/4*3)-Math.floor(t/4*3)%init.man.moveSpeed},getManPosX:function(){if(init.man.initPos.x>this.getMoveRDPoint(this.getWindowWidth())){var t=Math.floor(window.innerWidth/2-init.man.initPos.x-init.man.sizeX/2);return t%init.man.moveSpeed!=0&&(t-=t%init.man.moveSpeed),t}return 0},getManPosY:function(){if(init.man.initPos.y>this.getMoveRDPoint(this.getWindowHeight())){var t=Math.floor(window.innerHeight/2-init.man.initPos.y-init.man.sizeY/2);return t%init.man.moveSpeed!=0&&(t-=t%init.man.moveSpeed),t}return 0},getResizeManPosX:function(){if(window.innerWidth-init.maps[this.state.map].col<0){if(this.state.x>this.getMoveRDPoint(this.getWindowWidth())){var t=Math.floor(window.innerWidth/2-this.state.x-init.man.sizeX/2);return t%init.man.moveSpeed!=0&&(t-=t%init.man.moveSpeed),t}return 0}var t=(window.innerWidth-init.maps[this.state.map].col)/2;return t},getResizeManPosY:function(){if(window.innerHeight-init.maps[this.state.map].row<0){if(this.state.y>this.getMoveRDPoint(this.getWindowHeight())){var t=Math.floor(window.innerHeight/2-this.state.y-init.man.sizeY/2);return t%init.man.moveSpeed!=0&&(t-=t%init.man.moveSpeed),t}return 0}var e=(window.innerHeight-init.maps[this.state.map].row)/2;return e},isMove:function(t,e){this.initEvent();for(var i=init.move[this.state.map]?init.move[this.state.map]:0,s=!0,n=0;n<i.length;n++)i[n].sx<=this.state.x+init.man.sizeX+t&&this.state.x+t<=i[n].ex&&i[n].sy<=this.state.y+e+init.man.sizeY&&this.state.y+e<=i[n].ey&&(i[n].cm>=0&&this.handleMap(i[n].cm,i[n].cmm),s=!1);return s},isEvents:function(t,e){var i=init.events[this.state.map];if(-1==this.state.messageId)for(var s=0;s<i.length;s++)i[s].sx<=this.state.x+init.man.sizeX+t&&this.state.x+t<=i[s].ex&&i[s].sy<=this.state.y+e+init.man.sizeY&&this.state.y+e<=i[s].ey&&(init.event[this.state.map][i[s].ev].select?this.eventSelect(i[s].ev):this.event(i[s].ev));else this.state.chatSelectIndex>-1?this.handleEventSelect(this.state.chatSelectIndex):this.event(this.state.messageId)},initEvent:function(){this.setState({chatOpacity:0,messageId:-1,messageNum:-1,messageMax:-1,chatSelectIndex:-1,chatSelectArray:[]})},handleKeyDown:function(t){if(t.preventDefault(),-1!=this.state.mapZindex)if(0==this.state.chatSelectArray.length)switch(t.keyCode){case 37:init.control.left=!0;break;case 65:init.control.left=!0;break;case 39:init.control.right=!0;break;case 68:init.control.right=!0;break;case 38:init.control.up=!0;break;case 87:init.control.up=!0;break;case 40:init.control.down=!0;break;case 83:init.control.down=!0;break;case 48:this.handleMap(0,0);break;case 49:this.handleMap(1,0);break;case 71:this.drawSpritesGrid();break;case 88:this.drawGridX();break;case 89:this.drawGridY();break;case 80:this.showSprites();break;case 27:this.backIndex(),this.initEvent();break;case 32:this.moveAnimate();break;case 13:this.moveAnimate()}else switch(t.keyCode){case 38:this.chatSelect(-1);break;case 87:this.chatSelect(-1);break;case 40:this.chatSelect(1);break;case 83:this.chatSelect(1);break;case 32:this.moveAnimate();break;case 13:this.moveAnimate();break;case 27:this.initEvent()}else{switch(t.keyCode){case 38:this.handleIndexBoxMove(-1);break;case 87:this.handleIndexBoxMove(-1);break;case 40:this.handleIndexBoxMove(1);break;case 83:this.handleIndexBoxMove(1)}if(0==this.state.indexBox)switch(t.keyCode){case 32:this.handleStart();break;case 13:this.handleStart()}}},handleKeyUp:function(t){switch(t.preventDefault(),t.keyCode){case 37:this.leftStopMove();break;case 65:this.leftStopMove();break;case 39:this.rightStopMove();break;case 68:this.rightStopMove();break;case 38:this.upStopMove();break;case 87:this.upStopMove();break;case 40:this.downStopMove();break;case 83:this.downStopMove()}},leftStopMove:function(){init.control.left=!1,init.map.left=!1},rightStopMove:function(){init.control.right=!1,init.map.right=!1},upStopMove:function(){init.control.up=!1,init.map.up=!1},downStopMove:function(){init.control.down=!1,init.map.down=!1},handleResize:function(){this.setState({windowWidth:this.getWindowWidth(),windowHeight:this.getWindowHeight(),isMoveLeft:this.getMoveLUPoint(this.getWindowWidth()),isMoveRight:this.getMoveRDPoint(this.getWindowWidth()),isMoveUp:this.getMoveLUPoint(this.getWindowHeight()),isMoveDown:this.getMoveRDPoint(this.getWindowHeight()),mapLeft:this.getResizeManPosX(),mapTop:this.getResizeManPosY()})},handleMap:function(t,e){this.handleAnimateSpeed(".1s"),this.handleFade(0),setTimeout(function(){this.setState({map:t,left:init.maps[t]["in"][e].x-1,top:init.maps[t]["in"][e].y-1,x:init.maps[t]["in"][e].x,y:init.maps[t]["in"][e].y}),this.drawObject(),this.handleResize(),setTimeout(function(){this.handleFade(1),setTimeout(function(){this.handleAnimateSpeed("0s")}.bind(this),100)}.bind(this),100)}.bind(this),100)},handleFade:function(t){this.setState({mapFade:t})},handleAnimateSpeed:function(t){this.setState({mapAnimateSpeed:t})},handleStart:function(){this.setState({mapZindex:1,indexBoxShow:0,indexShow:0,chatZindex:2}),setTimeout(function(){this.handleFade(1)}.bind(this),200)},backIndex:function(){this.setState({mapZindex:-1,indexBoxShow:1,indexShow:1,chatZindex:-1}),setTimeout(function(){this.handleFade(0)}.bind(this),300)},handleIndexBoxMove:function(t){switch(this.state.indexBox){case 0:this.setState({start:"transparent"});break;case 1:this.setState({load:"transparent"});break;case 2:this.setState({end:"transparent"})}switch(this.state.indexBox+t>2?t=(this.state.indexBox+t)%3:(t=this.state.indexBox+t,-1==t&&(t=2)),t){case 0:this.setState({indexBox:t,start:"white"});break;case 1:this.setState({indexBox:t,load:"white"});break;case 2:this.setState({indexBox:t,end:"white"})}},handleMouseOver:function(t,e){if(-1!=this.state.mapZindex)t!=this.state.chatSelectIndex&&$(".chatSelect").eq(this.state.chatSelectIndex).css("border-color","transParent"),e.target.style.borderColor="white",this.setState({chatSelectIndex:t});else{switch(this.state.indexBox){case 0:this.setState({start:"transparent"});break;case 1:this.setState({load:"transparent"});break;case 2:this.setState({end:"transparent"})}switch(t){case 0:this.setState({indexBox:t,start:"white"});break;case 1:this.setState({indexBox:t,load:"white"});break;case 2:this.setState({indexBox:t,end:"white"})}}},handleLoad:function(){this.backIndex(),this.drawObject(),init.spritesHeight=init.sprites.clientHeight,init.spritesWidth=init.sprites.clientWidth},componentWillMount:function(){},componentDidMount:function(){var t=document.getElementById("grid"),e=document.getElementById("firstCanvas"),i=document.getElementById("secondCanvas"),s=document.getElementById("spritesOpacity");init.sprites=document.getElementById("preimg"),init.context=t.getContext("2d"),init.fcontext=e.getContext("2d"),init.scontext=i.getContext("2d"),init.spcontext=s.getContext("2d"),$(window).on("load",this.handleLoad),$(window).on("resize",this.handleResize),$(window).on("keydown",this.handleKeyDown),$(window).on("keyup",this.handleKeyUp),$(window).on("touchstart",this.handleTouchStart),$(window).on("touchmove",this.handleTouchMove),$(window).on("touchend",this.handleTouchEnd),this.timer=setInterval(this.move.bind(this),init.man.moveSetInterVal)},componentWillUnmount:function(){$(window).off("resize",this.handleResize),$(window).off("keydown",this.handleKeyDown),$(window).off("keyup",this.handleKeyUp),$(window).off("touchstart",this.handleTouchStart),$(window).off("touchmove",this.handleTouchMove),$(window).off("touchend",this.handleTouchEnd),clearInterval(this.timer)},getTouchPos:function(t){return{x:t.originalEvent.touches[0].pageX,y:t.originalEvent.touches[0].pageY}},handleTouchStart:function(t){if(0!=this.state.mapFade){var e=this.getTouchPos(t);this.setState({startTouchX:e.x,startTouchY:e.y})}},handleTouchMove:function(t){if(0!=this.state.mapFade){t.preventDefault();var e=this.getTouchPos(t);e.x-this.state.startTouchX<-25?init.control.left=!0:(init.control.left=!1,init.map.left=!1),e.x-this.state.startTouchX>25?init.control.right=!0:(init.control.right=!1,init.map.right=!1),e.y-this.state.startTouchY<-25?init.control.up=!0:(init.control.up=!1,init.map.up=!1),e.y-this.state.startTouchY>25?init.control.down=!0:(init.control.down=!1,init.map.down=!1)}},handleTouchEnd:function(t){init.control.left=!1,init.map.left=!1,init.control.right=!1,init.map.right=!1,init.control.up=!1,init.map.up=!1,init.control.down=!1,init.map.down=!1},drawObject:function(){for(var t=new Image,e=this.state,i=init.firstCanvas[e.map],s=init.secondCanvas[e.map],n=0;n<i.length;n++)t.src=i[n].background,init.fcontext.drawImage(t,i[n].sourceX,i[n].sourceY,i[n].width,i[n].height,i[n].left,i[n].top,i[n].width,i[n].height);for(var n=0;n<s.length;n++)t.src=s[n].background,init.scontext.drawImage(t,s[n].sourceX,s[n].sourceY,s[n].width,s[n].height,s[n].left,s[n].top,s[n].width,s[n].height)},drawSpritesGrid:function(){if(this.state.spritesGrid)init.spcontext.clearRect(0,0,init.spritesWidth,init.spritesHeight);else{init.spcontext.beginPath();for(var t=1;t<init.spritesWidth/init.object.sizeX;t++)init.spcontext.moveTo(t*init.object.sizeX,0),init.spcontext.lineTo(t*init.object.sizeX,init.spritesHeight);for(var t=1;t<init.spritesHeight/init.object.sizeY;t++)init.spcontext.moveTo(init.object.sizeX,t*init.object.sizeY),init.spcontext.lineTo(init.spritesWidth,t*init.object.sizeY),init.spcontext.font="italic .5em Calibri",init.spcontext.textAlign="center",init.spcontext.fillText(t*init.object.sizeY,20,t*init.object.sizeY+4);init.spcontext.strokeStyle="#ff0000",init.spcontext.stroke()}this.setState({spritesGrid:!this.state.spritesGrid})},drawGridX:function(){if(this.state.gridX)init.context.clearRect(0,0,init.maps[this.state.map].col,init.maps[this.state.map].row);else{init.context.beginPath();for(var t=1;t<init.maps[this.state.map].col/init.object.sizeX;t++)init.context.moveTo(t*init.object.sizeX,init.object.sizeY),init.context.lineTo(t*init.object.sizeX,init.maps[this.state.map].row),init.context.font="italic .5em Calibri",init.context.textAlign="center",init.context.fillText(t*init.object.sizeX,t*init.object.sizeX,20);init.context.stroke()}this.setState({gridX:!this.state.gridX})},drawGridY:function(){if(this.state.gridY)init.context.clearRect(0,0,init.maps[this.state.map].col,init.maps[this.state.map].row);else{init.context.beginPath();for(var t=1;t<init.maps[this.state.map].row/init.object.sizeY;t++)init.context.moveTo(init.object.sizeX,t*init.object.sizeY),init.context.lineTo(init.maps[this.state.map].col,t*init.object.sizeY),init.context.font="italic .5em Calibri",init.context.textAlign="center",init.context.fillText(t*init.object.sizeY,20,t*init.object.sizeY+4);init.context.stroke()}this.setState({gridY:!this.state.gridY})},showSprites:function(){if(0!=this.state.mapFade){var t=this.state.spritesOpacity>0?0:1;this.setState({spritesOpacity:t})}},moveAnimate:function(){switch(this.state.manMoveImg){case 3:this.isEvents(this.props.left,0);break;case 2:this.isEvents(this.props.right,0);break;case 1:this.isEvents(0,this.props.up);break;case 4:this.isEvents(0,this.props.down)}},move:function(){var t=this.state,e=this.props,i=init.control,s=init.map;if((i.left||i.right||i.up||i.down)&&this.setState({manMoveAnimate:(t.manMoveAnimate+1)%4}),i.left&&this.setState({manMoveImg:3}),i.right&&this.setState({manMoveImg:2}),i.up&&this.setState({manMoveImg:1}),i.down&&this.setState({manMoveImg:4}),i.left&&t.x>e.min){var n=this.isMove(e.left,0);n?(this.setState({x:t.x+e.left,left:e.left*t.mapSizeX+t.left}),s.left=0!=t.mapLeft&&t.isMoveLeft-t.mapLeft==t.x?!0:!1):s.left=!1}if(i.right&&init.maps[this.state.map].col-init.man.sizeX*t.mapSizeX>t.x){var o=this.isMove(e.right,0);o?(this.setState({x:t.x+e.right,left:e.right*t.mapSizeX+t.left}),s.right=t.mapSizeX*init.maps[this.state.map].col+t.mapLeft>t.windowWidth&&t.isMoveRight-t.mapLeft==t.x?!0:!1):s.right=!1}if(i.up&&t.y>e.min){var a=this.isMove(0,e.up);a?(this.setState({y:t.y+e.up,top:e.up*t.mapSizeY+t.top}),s.up=0!=t.mapTop&&t.isMoveUp-t.mapTop==t.y?!0:!1):s.up=!1}if(i.down&&init.maps[this.state.map].row-init.man.sizeY*t.mapSizeY>t.y){var c=this.isMove(0,e.down);c?(this.setState({y:t.y+e.down,top:e.down*t.mapSizeY+t.top}),s.down=t.mapSizeY*init.maps[this.state.map].row+t.mapTop>t.windowHeight&&t.isMoveDown-t.mapTop==t.y?!0:!1):s.down=!1}s.left&&this.setState({mapLeft:t.mapLeft-e.left}),s.right&&this.setState({mapLeft:t.mapLeft-e.right}),s.up&&this.setState({mapTop:t.mapTop-e.up}),s.down&&this.setState({mapTop:t.mapTop-e.down})},render:function(){var t=this.state,e=init.maps;return React.createElement("body",null,React.createElement("div",{id:"index",style:{opacity:t.indexShow}},React.createElement("div",{id:"indexBox",style:{opacity:t.indexBoxShow}},React.createElement("ul",null,React.createElement("li",{style:{borderColor:t.start},onMouseOver:this.handleMouseOver.bind("null",0),onClick:this.handleStart},"START"),React.createElement("li",{style:{borderColor:t.load},onMouseOver:this.handleMouseOver.bind("null",1)},"LOAD"),React.createElement("li",{style:{borderColor:t.end},onMouseOver:this.handleMouseOver.bind("null",2)},"END"))),React.createElement("div",{id:"loadBox",style:{opacity:t.loadBoxShow}}," ")),React.createElement("div",{id:"map",style:{zIndex:t.mapZindex,transition:t.mapAnimateSpeed,opacity:t.mapFade,background:e[t.map].bg,WebkitTransform:"translate3D("+t.mapLeft+"px,"+t.mapTop+"px,0)",msTransform:"translate3D("+t.mapLeft+"px,"+t.mapTop+"px,0)",transform:"translate3D("+t.mapLeft+"px,"+t.mapTop+"px,0)",width:t.mapSizeX*e[t.map].col,height:t.mapSizeY*e[t.map].row}},React.createElement("div",{className:"man-container",style:{WebkitTransform:"translate3D("+t.left+"px,"+t.top+"px,0)",msTransform:"translate3D("+t.left+"px,"+t.top+"px,0)",transform:"translate3D("+t.left+"px,"+t.top+"px,0)",width:t.mapSizeX*init.man.sizeX,height:t.mapSizeY*init.man.sizeY,backgroundPosition:32*t.manMoveAnimate+"px "+48*t.manMoveImg+"px"}}),React.createElement("canvas",{id:"firstCanvas",width:e[t.map].col,height:e[t.map].row}),React.createElement("canvas",{id:"secondCanvas",width:e[t.map].col,height:e[t.map].row}),React.createElement("canvas",{id:"grid",width:e[t.map].col,height:e[t.map].row})),React.createElement("div",{className:"chat",onClick:this.handleChat,style:{opacity:t.chatOpacity,zIndex:t.chatZindex}},t.messageName," : ",t.message,React.createElement("ul",null,t.chatSelectArray)),React.createElement("div",{id:"pre",style:{opacity:t.spritesOpacity}},React.createElement("img",{id:"preimg",src:init.object.sprites}),React.createElement("canvas",{id:"spritesOpacity",width:init.spritesWidth,height:init.spritesHeight})))}});React.render(React.createElement(Root,null),document.body);