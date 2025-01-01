  /////////////////////////
 // Coded by Zharlzzz//
/////////////////////////

////////////////////////////
// Get the page being viewed

function getPage()
{
 var page = _geturl();
 if (page == null)
 {
  page = _getcbpage();
 } else {
  return page;
 }
 return page;
}

/////////////////////////////////
// Functions to help get the page

function _getcbpage()
{
 var userRegex = new RegExp("javascript:startChat\\('(.*?)','.*?'", "i");
 var el = document.getElementById("chatbutton_div")
 if (el == null) {
  return null;
 } else {
  html = el.innerHTML;
 }
 var username = userRegex.exec(html);
 if (username != null)
 {
  username = username[1];
 }
 return username;
}

function _geturl()
{
 var userRegex = new RegExp("chatango\\.com/fpix\\?(.*)", "i");
 var username = userRegex.exec(window.location);
 if (username != null)
 {
  username = username[1];
  return username;
 }
 var userRegex = new RegExp("https?://(www\\.)?([^\\.]*?)\\.chatango.com", "i");
 var username = userRegex.exec(window.location);
 if (username != null)
 {
  username = username[2];
  return username;
 }
 return username;
}

////////////////////////////////
// Get the user viewing the page

var vmethod = "";
function getViewer()
{
 var username = _getcbviewer();
 vmethod = "_getcbviewer";
 if (username == null)
 {
  username = _getcookie("id.chatango.com");
  // There's a bug in chatango code that sometimes sets the user's cookie to "None"
  // So we have to avoid this result, unfortunately
  if (username == "None") {
   username = null;
  }
  vmethod = "_getcookie";
 }
 if (username != null && username.indexOf("@") != -1)
 {
  username = null;
 }
 return username;
}

///////////////////////////////////
// Functions to help get the viewer

function _getcbviewer()
{
 var userRegex = new RegExp("javascript:startChat\\('.*?','(.*?)'", "i");
 var el = document.getElementById("chatbutton_div")
 if (el == null) {
  return null;
 } else {
  html = el.innerHTML;
 }
 var username = userRegex.exec(html);
 if (username != null)
 {
  username = username[1];
 }
 return username;
}

function _getcookie(c_name)
{
 var i,x,y,ARRcookies=document.cookie.split(";");
 for (i=0;i<ARRcookies.length;i++)
 {
  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
  x=x.replace(/^\s+|\s+$/g,"");
  if (x==c_name)
  {
   return unescape(y);
  }
 }
}

///////////////////
// Gather the infoz

var up = getPage();
var un = getViewer();
var rf = document.referrer;

///////////////////////////////////
// If the user is an anon, set that

 if (un == null || un == undefined)
 {
  un = "_anon";
 }

////////////////////////////////////////////////
// Set the referer to something if it's null

 if (rf == null || rf == undefined)
 {
  rf = "";
 }

if (up != null)
{
 img = document.createElement("img");
 img.setAttribute("src", "http://chtracker.info/?log=true&vmethod=" + vmethod + "&page=" + escape(up) + "&username=" + escape(un) + "&referer=" + escape(rf) + "&id=" + Math.floor(Math.random() * 9999999999));
 el = document.getElementById("chatbutton_div");
 if (el == null || el == undefined)
 {
  el = document.getElementById("buyers_ad");
 }
 if (el == null || el == undefined)
 {
  el = document.getElementById("left_container");
 }
 el.appendChild(img);
}