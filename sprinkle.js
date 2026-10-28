 const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
canvas1.width= window.innerWidth;
canvas1.height=this.window.innerHeight;
const particlesarray=[];
window.addEventListener('resize',function () {
    canvas1.width= window.innerWidth;
    canvas1.height=this.window.innerHeight;
})
const mouse= {
    x:null,
    y:null
}
canvas1.addEventListener('mousemove',function(event){
    mouse.x=event.x;
    mouse.y=event.y;
    for(let i=0;i<5;i++){       //change i<5 to any number to inc or dec the sparkles !!DO NOT SET THE NUMBER TOO HIGH IT WILL HANG THE BROWSER
        particlesarray.push(new particles());
    }
})
class particles{
    constructor(){
        this.x=mouse.x;
        this.y=mouse.y;
        this.size = Math.random()*5+1;
        this.speedx=Math.random()*3-1.5;
        this.speedy=Math.random()*3-1.5;
    }
    update(){
        this.x+=this.speedx;
        this.y+=this.speedy;
        if(this.size>0){
            this.size-=0.1;
        }
    }
    draw(){
        ctx.fillStyle='white';
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,6);
        ctx.fill();
    }
};
function handleparticles(){
    for(let i=0;i<particlesarray.length;i++){
        particlesarray[i].update();
        particlesarray[i].draw();
        if(particlesarray[i].size<=0.1){
            particlesarray.splice(i,1);
            --i;
        }
    }
}
function animate(){
    ctx.clearRect(0,0,canvas1.width,canvas1.height);
    handleparticles();
    requestAnimationFrame(animate);
}
animate();