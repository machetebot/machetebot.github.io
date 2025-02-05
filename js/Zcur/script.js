window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
var c;  //canvas
var $;  //context
var w;  //width
var h;  //height
var num = 50;  //num points > length of line
var pts = [];  //point array
var pt_maxw = 4;  //max point width 
var pt_minw = 2;  //min point width
var spr = 0.419;  //springyness > higher will give a web-like effect / lower reduces the curvyness
var fric = 0.5;  // friction > the amount of control mousemoves have on lines.
var grav = 0;  //gravity > higher than 0 for starting pt will drag lines downward.
var fps = 1000 / 30;
var timer;
var ms; //mouse

  c = document.getElementById('canv');
  $ = c.getContext('2d');
  w = window.innerWidth;
  h = window.innerHeight;
  c.width = w;
  c.height = h;

function makePts(){
  for(var i = 0; i < num; i += 1){
    var x, y, w, h;
    w = Math.floor(Math.random() * (pt_maxw - pt_minw + 1)) + pt_minw;
    h = w;
    x = w * 0.7;
    y = h * 0.5;

    var pt = new Pt(x, y, w, h);
    pts[i] = pt;
  };
};

function save(){
  $.fillStyle = 'hsla(0,0%,0%,.25)';
  $.fillRect(0, 0, w, h);
};

function draw(){
  for(var i = 0; i < num; i += 1){
    var pt = pts[i];
    if(!ms) return;
    if(i === 0){
      pt.move(ms.x, ms.y);
      pt.draw(ms.x, ms.y);
    }else{
      pt.move(pts[i - 1].x, pts[i - 1].y);
      pt.draw(pts[i - 1].x, pts[i - 1].y);
    };
  };
};

function upd(){
  save();
  draw();
};

function Pt(x, y, w, h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.vx = 0;
  this.vy = 0;
  this.rad = w * 0.55;
  this.mass = 40;
  this.col = this.rndCol();
};

Pt.prototype = {
  move : function(t_x, t_y){
    var dx = t_x - this.x;
    var dy = t_y - this.y;;

    var ax = dx * spr;
    var ay = dy * spr;

    this.vx += ax;
    this.vy += ay;

    this.vy += grav * this.mass;

    this.vx *= fric;
    this.vy *= fric;

    this.x += this.vx;
    this.y += this.vy;

  },

  draw : function(t_x, t_y){
    $.save(); 
    $.beginPath();
    $.fillStyle = this.col;
    $.arc(this.x, this.y, this.rad, 0, Math.PI*2, false);
    $.fill();

    $.restore();

    $.save(); 

    $.beginPath();
    $.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    $.moveTo(t_x, t_y);
    $.lineTo(this.x, this.y);
    $.stroke();

    $.restore();
},

rndCol : function(){
    var r = Math.floor(Math.random() * 255 + 1);
    var g = Math.floor(Math.random() * 255 + 1);
    var b = Math.floor(Math.random() * 255 + 1);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

};

function go(){
  makePts();
  timer = setInterval(upd, fps);
};
function upd_ms_pos(e){
  ms = {};
  if(e){
    ms.x = e.pageX;
    ms.y = e.pageY;

  }else{
    ms.x = e.x + document.body.scrollLeft;
    ms.y = e.y + document.body.scrollTop;
  };
  return ms;
};
function msMove(e){
  upd_ms_pos(e);
};

window.onload = function(){
  document.onmousemove = function(e){
   msMove(e);
 };
 window.requestAnimFrame(go);
};