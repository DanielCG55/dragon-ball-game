(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(s){if(s.ep)return;s.ep=!0;const t=i(s);fetch(s.href,t)}})();class h{constructor(e={x:0,y:0}){this.position=e}update(e){}draw(e,i){}keyboardEventDown(e){}keyboardEventUp(e){}}class x extends h{constructor(){super({x:0,y:0}),this.music=new Audio,this.music.src="backgroundMusic.mp3",this.music.volume=.3,this.music.loop=!1,this.music.autoplay=!0,this.music.play()}}const a=document.getElementById("canvas"),l=a.getContext("2d"),f={x:a.width/2,y:a.height/2};class E extends h{constructor(e={x:10,y:35}){super(e)}draw(e,i){const n=(1/i).toFixed(0);e.font="35px Consolas",e.fillStyle="#000",e.fillText(`FPS: ${n}`,this.position.x,this.position.y)}}class u extends h{constructor(e){super(e.position),this.elapsed=e.elapsed||180,this.elapsed<=180&&(setTimeout(u),alert("start the game"))}draw(e,i){e.translate(this.position.x,this.position.y);const n=this.elapsed-=i;e.font="35px consolas",e.fillStyle="#000",e.fillText("Time:",-70,0),e.fillText(`${n.toFixed(1)}`,40,0)}}const k=o=>o.x>50&&o.x<a.width-650&&o.y>110&&o.y<a.height-100;class P extends h{constructor(e){super(e.position),this.size=e.size,this.color=e.color||"#d62828",this.speed={x:0,y:0},this.maxSpeed=e.maxSpeed,this.initialPosition=e.position,this.image=new Image,this.image.src="sprites1.png",this.imagesPosition=[0,1,2,3,4,5],this.currentImagePosition=0,this.currentYposition=0,this.timer=0,this.hit=new Audio,this.hit.src="shout.ogg",this.hit.volume=1}draw(e,i){e.translate(this.position.x,this.position.y),e.drawImage(this.image,52*this.imagesPosition[this.currentImagePosition],this.currentYposition,50,60,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h)}update(e){let i={x:this.position.x+this.speed.x*(e+.5),y:this.position.y+this.speed.y*(e+.5)};k(i)&&(this.position=i),this.timer+=e,this.timer>=.1&&(this.currentImagePosition=(this.currentImagePosition+1)%1,this.timer=0)}keyboardEventDown(e){switch(e){case"ArrowRight":this.speed.x=this.maxSpeed,this.speed.y=0,this.imagesPosition=[1];break;case"ArrowLeft":this.speed.x=-this.maxSpeed,this.speed.y=0,this.imagesPosition=[2];break;case"ArrowUp":this.speed.y=-this.maxSpeed,this.speed.x=0,this.imagesPosition=[3];break;case"ArrowDown":this.speed.y=this.maxSpeed,this.speed.x=0,this.imagesPosition=[4];break;case" ":this.imagesPosition=[5],this.speed.y=0,this.speed.x=0}}keyboardEventUp(e){switch(e){case"ArrowRight":this.speed.x=0,this.speed.y=0,this.imagesPosition=[0];break;case"ArrowLeft":this.speed.x=0,this.speed.y=0,this.imagesPosition=[0];break;case"ArrowUp":this.speed.x=0,this.speed.y=0,this.imagesPosition=[0];break;case"ArrowDown":this.speed.x=0,this.speed.y=0,this.imagesPosition=[0];break;case" ":this.imagesPosition=[0],this.hit.play();break}}restart(){}}class A{constructor(){this.image=new Image,this.image.src="cellarena.png",this.title=new Image,this.title.src="title.png"}draw(e){e.drawImage(this.image,-210,55),e.drawImage(this.title,250,50,600,100)}}class v extends h{constructor(e){super(e.position),this.player=e.player,this.id=parseInt((Math.random()*1e4).toFixed(0)),this.expired=!1;const{x:i,y:n}=this.player.position;this.position={x:i,y:n},this.size={w:43,h:14},this.speed=Math.random()*10+5,this.image=new Image,this.image.src="weapon.png"}update(e){let i={x:this.position.x+this.speed*(e+.5),y:this.position.y};this.position=i,this.position.x>a.width&&(this.expired=!0)}draw(e,i){e.translate(this.position.x,this.position.y),e.drawImage(this.image,0,0,43,14,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h)}}class b extends h{constructor(e){super(),this.player=e,this.ammo=[]}addBullet(){const e=new v({player:this.player});this.ammo.push(e)}getAmmoActors(){return this.ammo}keyboardEventDown(e){e==" "&&this.addBullet()}update(e){const i=this.ammo.filter(n=>!n.expired);this.ammo=i}}const I=(o,e)=>Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2));class z extends h{constructor(e){super(e.position),this.enemyLength=35,this.size=e.size,this.color=e.color||"blue",this.initialPosition=e.position,this.image=new Image,this.image.src="clljr2.png",this.imagesPosition=[0],this.currentImagePosition=100,this.expired=!1}update(e){this.expired===!0&&this.imagesPosition[1]}draw(e,i){e.translate(this.position.x,this.position.y),e.drawImage(this.image,0,0,40,40,-this.size.w/2,-this.size.h/2,this.size.w,this.size.h)}}class M extends h{constructor(e){super({x:800,y:800}),this.enemies=[],this.completed=!1,this.nextEnemyToTouch=1,this.currentEnemyTouching=void 0,this.ammoManager=e.ammoManager,this.dead=new Audio,this.dead.src="celljr.wav",this.dead.volume=1;let i=100,n;setInterval(()=>{for(let t=1;t>0;t--)n=new z({position:{x:Math.random()*(1e3-600)+600,y:Math.random()*(500-100)+100},size:{w:70,h:70}}),this.enemies.push(n)},700),setInterval(()=>i--)}getEnemyActors(){return this.enemies}update(e){let i=this.enemies.filter(t=>!t.expired);this.enemies=i,this.enemies.map(t=>{this.ammoManager.getAmmoActors().map(r=>{I({x:t.position.x,y:t.position.y},{x:r.position.x,y:r.position.y})<=40&&(t.expired=!0,r.expired=!0,this.dead.play())})});let n=0;for(let t=0;t<this.enemies.length;t++)this.enemies[t].expired&&n++;n==this.enemies.length&&(this.completed=!0);const s=this.enemies.filter(t=>!t.expired);this.enemies=s}draw(e,i){e.translate(this.position.x,this.position.y),e.font="35px Consolas",e.fillStyle="#000",e.fillText(`CURRENT:${this.currentEnemyTouching}`,0,0),e.fillText(`NEXT:${this.nextEnemyToTouch}`,0,50)}keyboardEventDown(e){}}window.onload=()=>{const o=new P({position:{x:200,y:200},size:{w:100,h:100},maxSpeed:5,angle:-90}),e=new b(o),i=new M({ammoManager:e}),n=new E,s=new u({position:{x:f.x-50,y:35}}),t=new x,r=new A,c=[n,o,s,i,t,e];let y=0;const g=d=>{let m=(d-y)/1e3;y=d;const w=[...c,...e.getAmmoActors(),...i.getEnemyActors()];w.forEach(p=>{p.update(m)}),l.clearRect(0,0,a.width,a.height),r.draw(l),w.forEach(p=>{l.save(),p.draw(l,m),l.restore()}),window.requestAnimationFrame(g)};window.requestAnimationFrame(g),document.body.addEventListener("keydown",d=>{c.forEach(m=>{m.keyboardEventDown(d.key)})}),document.body.addEventListener("keyup",d=>{c.forEach(m=>{m.keyboardEventUp(d.key)})})};