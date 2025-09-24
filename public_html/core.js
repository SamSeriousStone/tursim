/*
Released under  GNU AFFERO General Public License v.3 ad maiorem Dei gloriam
Creator: Emanuele Ferri
Developer: Emanuele Ferri
Past tursim developer: Vincenzo Manto
If you want to contribute write an email to emanuele.ferri@gmail.com
*/

XHTML_NAMESPACE="http://www.w3.org/1999/xhtml";
SVG_NAMESPACE="http://www.w3.org/2000/svg";

CORE_SCRIPT="/core.js";
CORE_STYLE="/core.css";

INDEX="index.xhtml";
LOGIN_SCRIPT="/login.php";
LOGOUT_SCRIPT="/logout.php";
LOGGED_SCRIPT="/logged.php";
REGISTER_REQUEST_SCRIPT="/register_request.php";
PASSWORD_RESET_REQUEST_SCRIPT="/password_reset_request.php";
PASSWORD_RESET_CONFIRM_SCRIPT="/password_reset_confirm.php";
PASSWORD_CHANGE_SCRIPT="/password_change.php";
EMAIL_CHANGE_REQUEST_SCRIPT="/email_change_request.php";
ACCOUNT_DELETE_REQUEST_SCRIPT="account_delete_request.php";
EMAIL_CHECK_SCRIPT="/email_check.php";
USERNAME_CHECK_SCRIPT="/username_check.php";
PASSWORD_CHECK_SCRIPT="/password_check.php";
COPY_SCRIPT="/copy.php";
RENAME_SCRIPT="/rename.php";
MKDIR_SCRIPT="/mkdir.php";
PUBLISH_SCRIPT="/publish.php";
UNPUBLISH_SCRIPT="/unpublish.php";
TRASH_SCRIPT="/trash.php";
DELETE_SCRIPT="/delete.php";
FILE_EXPLORER_SCRIPT="/file_explorer.php";
GROUPS_SCRIPT="/groups.php";
MENU_SCRIPT="/menu.php";
SAVE_SCRIPT="/save.php";
UPLOAD_SCRIPT="/upload.php";

EXTS={
  ".json":"json",
  ".php":"json",
  ".xml":"xml",
  ".xhtml":"xhtml",
  ".txt":"txt",
  ".rb":"code",
  ".py":"code",
  ".js":"code",
  ".css":"code",
  ".m":"code",
  ".png":"img",
  ".jpg":"img",
  ".jpeg":"img",
  ".webp":"img",
  ".svg":"img",
  ".gif":"img",
  ".mp4":"video"
  }

_body={
  "logged_script":LOGGED_SCRIPT,
  "logged":false,
  "mobile":false,
  "snap_zone_width":4,
  "snap_zone_height":4,
  "desktop":
    {
    "sons":[
    	{
    	"tag":"launcher",
      "nomen":"login",
    	"source":[{"tag":"login"}]
    	},
    	{
    	"tag":"launcher",
      "nomen":"page",
    	"source":window.location.pathname=="/"?window.location.pathname+INDEX:window.location.pathname
    	},
      {
    	"tag":"launcher",
      "nomen":"toolbox",
    	"source":[{"tag":"toolbox"}]
    	},
    	{
    	"tag":"launcher",
      "nomen":"style_manager",
    	"source":[{"tag":"style_manager"}]
    	},
    	{
    	"tag":"launcher",
    	"nomen":"file_manager",
    	"source":[{"tag":"file_manager"}]
    	},
    	{
    	"tag":"launcher",
    	"nomen":"tursim",
    	"source":[{"tag":"tursim"}]
    	},
    	{
    	"tag":"launcher",
      "nomen":"register_request",
    	"source":[{"tag":"register_request"}]
    	},
    	{
    	"tag":"launcher",
      "nomen":"password_reset_request",
    	"source":[{"tag":"password_reset_request"}]
    	},
    	{
    	"tag":"launcher",
    	"nomen":"file_uploader",
    	"source":[{"tag":"file_uploader"}]
    	},
      {
    	"tag":"launcher",
      "nomen":"password_change",
    	"source":[{"tag":"password_change"}]
    	},
      {
    	"tag":"launcher",
      "nomen":"email_change_request",
    	"source":[{"tag":"email_change_request"}]
    	},
    	{
    	"tag":"launcher",
      "nomen":"account_delete_request",
    	"source":[{"tag":"account_delete_request"}]
    	}
    	]
    }
  };

_box=
  {
  "panel":true
  };

_toolbox=
  {
  "sons":[
   	{
    "tag":"launcher",
    "nomen":"two_column_layout",
    "source":[{"tag":"two_column_layout"}]
    },
    {
    "tag":"launcher",
    "nomen":"right_sidebar_layout",
    "source":[{"tag":"right_sidebar_layout"}]
    },
   	{
    "tag":"launcher",
    "nomen":"border_layout",
    "source":[{"tag":"border_layout"}]
    },
    {
    "tag":"launcher",
    "nomen":"alt_layout",
    "source":[{"tag":"alt_layout"}]
    },
   	{
    "tag":"launcher",
    "nomen":"slideshow",
    "source":[{"tag":"slideshow"}]
    },
   	{
    "tag":"launcher",
    "nomen":"hamburger",
    "source":[{"tag":"hamburger"}]
    }
    ]
  };

_img={
  "no_image_src":"/no_image.svg",
  "no_image_alt":"Image not found"
  }

_input={
  "value":""
  }


_login={
  "login_script":LOGIN_SCRIPT,
  "logout_script":LOGOUT_SCRIPT,
  "container":{
    "username":{
      "input":{
        "autocomplete":"username"
        }
      }
    }
  }

_labelled_email={
  "error":1,
  "check_script":EMAIL_CHECK_SCRIPT
  }

_labelled_username={
  "error":1,
  "check_script":USERNAME_CHECK_SCRIPT,
  "input":{
    "autocomplete":"off"
    }
  }
  
_labelled_password={
  "error":1,
  "check_script":PASSWORD_CHECK_SCRIPT,
  "show_button":{
    "title":"Show password"
    },
  "input":{
    "type":"password",
    "autocomplete":"new-password"
    }
  }

_labelled_registered_password={
  "input":{
    "type":"password",
    "autocomplete":"current-password"
    }
  }

_password_reset_request={
  "submit_script":PASSWORD_RESET_REQUEST_SCRIPT
  }

_password_reset_confirm={
  "submit_script":PASSWORD_RESET_CONFIRM_SCRIPT
  }

_register_request={
  "submit_script":REGISTER_REQUEST_SCRIPT
  }

_password_change={
  "submit_script":PASSWORD_CHANGE_SCRIPT
  }

_email_change_request={
  "submit_script":EMAIL_CHANGE_REQUEST_SCRIPT
  }

_account_delete_request={
  "submit_script":ACCOUNT_DELETE_REQUEST_SCRIPT
  }

_checkfield={
  "checked":false,
  "active":true
  }

_file_explorer={
  "copy_script":COPY_SCRIPT,
  "rename_script":RENAME_SCRIPT,
  "mkdir_script":MKDIR_SCRIPT,
  "publish_script":PUBLISH_SCRIPT,
  "unpublish_script":UNPUBLISH_SCRIPT,
  "trash_script":TRASH_SCRIPT,
  "delete_script":DELETE_SCRIPT,
  "trashed":false,
  "container":
    {
    "sons":FILE_EXPLORER_SCRIPT,
    "panel":false
    }
  };
_file_saver={
  "save_script":SAVE_SCRIPT,
  "is_private":false
  }
_file_uploader={
  "upload_script":UPLOAD_SCRIPT,
  "is_private":false
  }

_file_manager={
  "group_browser":
    {
    "container":
      {
      "sons":GROUPS_SCRIPT,
      "panel":false
      }
    },
  "file_browser":
    {
    "container":
      {
      "sons":MENU_SCRIPT
      },
    "cloneable":true
    }
  };

_style_manager={
  "file_manager":
    {
    "file_browser":
      {
      "container":
        {
        "_parameters":
          {
          "ext":".css"
          }
        }
      }
    }
  };

_win={
  "offset_x":64,
  "offset_y":64,
  "scale_width":2,
  "scale_height":2,
  "fullscreen":false
  };


_standard_win={
  "title_bar_height":32,
  "save_win":
    {
    "displayed":false
    }
  };

_file_browser={
  "include_excluded_in_json":true
  };

_hamburger={
  "panel":true,
  "checked":false
  };

_dropdown={
  "checked":false
  };

_tursim={
  "write":true,
  "move":true,
  "scale":1,
  "min_scale":0.4,
  "zoom_inc":0.1
  };
_tursim_state={
  "radius":40,
  "inner_circle_percentage":0.8,
  "font_size":18
   };
_tursim_link={
  "spike_height":12,
  "control_length":64,
  "angle":0.4,
  "font_size":12
  };

_a={
  "readable":true,
  "active":true
  };

_slideshow={
  };
_two_column_layout={
  };
_right_sidebar_layout={
  };
_border_layout={
  };
_alt_layout={
  };


_launcher={
  "win_attributes":
    {
    "style":{"width":"200px","height":"300px"}
    }
  }









/****************CORE****************/

/*
fetch_text=async function(url,json){
  const options=json?{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(json),cache:"no-store"}:{cache: "no-store"};
  var response=await fetch(url,options);
  return response.text();
  }
*/

open_in_win=function(jsons,author,path,win_json){
  var win=document.body.wins.insert("standard_win",win_json);
  win.set_title(author,path);
  win.container.insert_jsons(jsons);
  return win;
  }

load_in_win=async function(url,post_json,author,path,win_json){
  var jsons=await load(url,post_json);
  if(jsons) return open_in_win(jsons,author,path,win_json);
  else window.open(url,"_blank");
  }

load=async function(url,json){
  var ext=url.extname().toLowerCase();
  var type=EXTS[ext];
  if(type){
    var loader=window["load_"+type];
    return loader(url,json);
    }
  }
fetch_text=async function(url,data){ //data could be null, json or FormData
  var options={"method":"POST","cache":"no-store"};
  if(!(data instanceof FormData)){
    options.headers={"Content-Type":"application/json"};
    data=JSON.stringify(data);
    }
  options.body=data;
  var response=await fetch(url,options);
  return response.text();
  }
load_json=async function(url,json){
  //console.log(url);
  var s=await fetch_text(url,json);
  //console.log(s);
  return JSON.parse(s);
  }
load_xml=async function(url,json){
  var s=await fetch_text(url,json);
  var xml=new DOMParser().parseFromString(s,"application/xml");
  return [xml.documentElement.xml_to_json()];
  }
load_xhtml=async function(url,json){
  var s=await fetch_text(url,json);
  var xml=new DOMParser().parseFromString(s,"application/xml");
  return xml.body.xml_to_jsons();
  }
load_txt=async function(url,json){
  var s=await fetch_text(url,json);
  return [{"tag":"string","sons":[s]}];
  }
load_code=async function(url,json){
  var s=await fetch_text(url,json);
  return [{"tag":"code","sons":[s]}];
  }
load_img=function(url,json){console.log(url);
  return [{"tag":"img","src":url,"alt":url}];
  }
load_video=function(url,json){
  return [{"tag":"video","controls":true,"sons":[{"tag":"source","src":url,"type":"video/mp4"}]}];
  }

v=function(x,y,width,height){
  var p={};
  p.x=x;
  p.y=y;
  p.width=width;
  p.height=height;
  p.scale=function(w,h){
    var x=(p.x-(p.x%w))/w;
    var y=(p.y-(p.y%h))/h;
    return v(x,y);
    }
  p.module=function(){
    return Math.sqrt(p.x*p.x+p.y*p.y);
    }
  p.versor=function(){
    ip=p.module();
    return v(p.x/ip,p.y/ip);
    }
  p.mul=function(c){
    return v(p.x*c,p.y*c);
    }
  p.div=function(c){
    return p.mul(1/c);
    }
  p.sub=function(w){
    return v(p.x-w.x,p.y-w.y);
    }
  p.add=function(w){
    return v(p.x+w.x,p.y+w.y);
    }
  p.orthogonal=function(){
    return v(-p.y,p.x);
    }
  p.opposite=function(){
    return v(-p.x,-p.y);
    }
  p.under_orthogonal=function(){
    return v(p.y,-p.x);
    }
  p.rotate=function(angle){
    return v(p.x*Math.cos(angle)-p.y*Math.sin(angle),p.x*Math.sin(angle)+p.y*Math.cos(angle));
    }
  p.equal=function(w){
    return p.x==w.x&&p.y==w.y;
    }
  p.to_s=function(){
    return "("+p.x+","+p.y+")";
    }
  return p;
  }

window.location.get=function(key){
  return new URLSearchParams(this.search).get(key);
  }


url_exists=async function(url){
  try{
    var response=await fetch(url,{method:"HEAD"});
    return response.ok;
    }
  catch(error){
    return false;
    }
  }

is_mobile=function() {
  //return true;
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android/i.test(userAgent) ||
    (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) ||
    /Tablet|iPad/i.test(userAgent) ||
    (/Mobile|Android|iP(hone|od|ad)|IEMobile|Opera Mini/i.test(userAgent));
  }

get_size=function(){
  return Math.trunc(window.screen.height/360);
  }



String.prototype.filename=function(){
  var s=this.pathname();
  fn=s.substring(0,s.lastIndexOf("."));
  return fn==""?s:fn;
  }
String.prototype.pathname=function(){
  var s=this.slice();
  if(s.startsWith("http://") || s.startsWith("https://")) s=new URL(s).pathname;
  if(s.startsWith("/~")) s=s.substring(s.indexOf("/",2));
  return s.slice(s[0]=="/"?1:0);
  }


String.prototype.base_url=function(){
  return this.substring(0,this.lastIndexOf("/"))+"/";
  }

String.prototype.dirname=function(){
  if(this[this.length-1]=="/") var str=this.slice(0,-1);
  else var str=this;
  return str.substring(0,str.lastIndexOf("/")+1);
  }
String.prototype.basename=function(){
  var path=this.endsWith("/") ? this.slice(0, -1) : this;
  var url=path.substring(this.lastIndexOf("/")+1);
  return url.split("?")[0];
  }
String.prototype.stem=function() {
  var basename = this.basename();
  var index = basename.lastIndexOf(".");
  return index > 0 ? basename.substring(0, index) : basename;
  }
String.prototype.extname=function() {
  var basename = this.basename();
  var index = basename.lastIndexOf(".");
  return index > 0 ? basename.substring(index) : "";
  }
/*
String.prototype.extname = function(shift=0) {
  const url = this.split("?")[0];
  const last_dot = url.lastIndexOf(".");
  return last_dot > -1 ? url.substring(last_dot+shift) : "";
}
*/




String.prototype.to_json_url=function(){
  var s=this.split("/").slice(-1)[0];
  return s==""?this+"index.xhtml":s;
  }

String.prototype.contains=function(s){
  return this.toLowerCase().includes(s.toLowerCase());
  }




Element.prototype.get_mouse_position=function(e,orizontal="left",vertical="top"){
  var rect=this.getBoundingClientRect();
  return v(Math.abs(parseInt(e.clientX-rect[orizontal])),Math.abs(parseInt(e.clientY-rect[vertical])));
  }
Element.prototype.seth=function(key,value){
  this.del(key);
  this[key]=value;
  if(key!="class"&&this.getAttribute(key)==null&&(typeof value!="object")) this.dataset[key]=value;
  }
Element.prototype.set=function(key,value){
  this.seth(key,value);
  if(!this._attributes) this._attributes={};
  this._attributes[key]=value;
  }
Element.prototype.get=function(key){
  if(this._attributes) return this._attributes[key];
  }

Element.prototype.del=function(key)
  {
  delete this[key];
  this.removeAttribute(key);
  delete this.dataset[key];
  if(this._attributes) delete this._attributes[key];
  }
Element.prototype.rename=function(oldname,newname)
  {
  this.set(newname,this.get(oldname));
  this.del(oldname);
  }
Element.prototype.set_all=function(attr,value){
  this.set(attr,value)
  for(var child of this.children) child.set_all(attr,value);
  }
Element.prototype.rename_all=function(oldname,newname){
  if(this[oldname]) this.rename(oldname,newname)
  for(var child of this.children) child.rename_all(oldname,newname);
  }

Element.prototype.set_parameter=function(attr,value){
  if(!this._parameters) this.set("_parameters",{});
  this._parameters[attr]=value;
  }
Element.prototype.get_parameter=function(attr){
  if(this._parameters) return this._parameters[attr];
  }
Element.prototype.isa=function(cls){
  return this.tagName.toLowerCase()==cls.toLowerCase()||this.classList.contains(cls);
  }
Text.prototype.isa=function(cls){
  return false;
  }
Event.prototype.get_target=function(cls=""){
  var node=this.target;
  while(node&&(node.nomen&&!node.isa(cls))) node=node.parentNode;
  return node;
  }

Element.prototype.xml_to_jsons=function(){
  var jsons=[];
  for(var child of this.childNodes){
    if(child.tagName&&child.tagName=="script"&&child.type&&child.type=="application/json") jsons=jsons.concat(JSON.parse(child.textContent.trim()));
    else{
      var json=child.xml_to_json();
      if(json) jsons.push(json);
      }
    }
  return jsons;
  }
Element.prototype.xml_to_json=function(){
  var real_value=function(x){
    try{
      return JSON.parse(x);
       }
    catch{
      return x;
      }
    }
  var json={tag:this.tagName};
  if(this.attributes) for(var attr of this.attributes){
    var attr_name=attr.name.replace("data-","");
    json[attr_name]=real_value(attr.value);
    }
  var jsons=this.xml_to_jsons();
  for(var json_child of jsons){
    var container=json;
    var positions=json_child.pos?json_child.pos.split("."):[];
    for(var pos of positions){
      if(!container[pos]) container[pos]={};
      container=container[pos];
      }
    if(!container.sons) container.sons=[];
    container.sons.push(json_child);
    delete json_child.pos;
    }
  return json;
  }
Text.prototype.xml_to_json=function(){
  if(this.nodeValue!=""&&this.nodeValue!="\n") return this.nodeValue;
  }
Text.prototype.to_json=function(include_excluded_in_json){
  return this.nodeValue;
  }

Element.prototype.to_jsons=function(include_excluded_in_json=this.include_excluded_in_json){
  var jsons=[];
  for(var child of this.childNodes) if(!child.nomen&&(include_excluded_in_json||!child.excluded)) jsons.push(child.to_json(include_excluded_in_json));
  return jsons;
  }

Element.prototype.to_json=function(include_excluded_in_json=this.include_excluded_in_json,p=el(this.get_tag())){
  var json=this.get_attributes();
  var deep=(typeof this.sons!='string' && this.sons!==false);   //you can stop to_json also by set sons=false
  var json_p=p.get_attributes();
  for(var key in json) if(json_p[key]&&json_p[key]==json[key]) delete json[key];
  if(!p.is_locked()) json.tag=this.get_tag();  //root
  for(var child of this.children) if(child.is_locked()){
    var json_child=child.to_json(include_excluded_in_json,p[child.nomen]);
    if(Object.keys(json_child).length>0) json[child.nomen]=json_child;
    }
  if(deep){ //json.sons could be a string if it is an external resource
    var jsons=this.to_jsons(include_excluded_in_json);
    if(jsons.length>0) json.sons=jsons;
    }
  return json;
  }

Element.prototype.is_locked=function(){
  return this.nomen&&this.parentNode[this.nomen]==this;
  }

Element.prototype.get_attributes=function(){
  var json={};
  for(var key in this._attributes){
    if(key=="sons" && typeof this.sons=="object") continue;
    if(key=="nomen"&&this.is_locked()) continue;
    if(key=="style") json.style=this.style.cssText;
    json[key]=this.get(key);
    }
  return json;
  }


Element.prototype.round_clockwise=function()
  {
  if(this.children.length>0) this.appendChild(this.firstChild);
  }
Element.prototype.round_anticlockwise=function()
  {
  if(this.children.length>0) this.insertBefore(this.lastChild,this.firstChild);
  }
Element.prototype.remove_children=function()
  {
  while(this.firstChild) if(!this.firstChild.nomen) this.removeChild(this.firstChild);
  }
Element.prototype.detach_children=function()
  {
  while(this.firstChild) if(!this.firstChild.nomen) this.detach(this.firstChild);
  }
Element.prototype.append_char=function(c){
  this.set_text(this.textContent+c);
  }
Element.prototype.delete_last_char=function(){
  var text=this.textContent;
  if(text!="") this.set_text(text.substring(0,text.length-1));
  }

Element.prototype.set_text=function(text){
  this.remove_children();
  this.ins_text(text);
  }
Element.prototype.get_text=function(){
  return this.textContent;
  }
Element.prototype.ins_text=function(text,next){
  return this.attach(document.createTextNode(text),next);
  }
Element.prototype.ins=function(nomen,tag,json={},next){
  var json=merge(json,this[nomen]);
  json.nomen=nomen;
  this.del(nomen);
  this.del("panel");
  return this[nomen]=this.attach(el(tag,json,this.namespaceURI),next);
  }
Element.prototype.insert_jsons=async function(jsons=[],next){
  if(typeof jsons=="string"){
    this.set_parameters();
    jsons=await load(jsons,this._parameters);
    }
  for(var json of jsons){
    if(typeof json=="string") this.attach(document.createTextNode(json),next);
    else this.insert_json(json,next);
    }
  this.dispatchEvent(new CustomEvent("insert_jsons"));
  }
Element.prototype.insert_json=function(json,next){
  return this.insert(json.tag,json,next);
  }
Element.prototype.insert=function(tag,json,next){
  var child=this.attach(el(tag,json,this.namespaceURI),next);
  child.insert_sons();
  return child;
  }
Element.prototype.insert_sons=function(){
  if(this.sons) this.insert_jsons(this.sons);
  for(var child of this.children) if(child.nomen) child.insert_sons();
  }
Text.prototype.insert_sons=function(){}



Element.prototype.reload=async function(dispatch=false)
  {
  if(dispatch) this.dispatchEvent(new CustomEvent("init"));
  if(this.sons&&(typeof this.sons=="string")){
    this.remove_children();
    this.insert_jsons(this.sons);
    }
  else for(var child of this.children) child.reload(dispatch);
  }

Element.prototype.set_parameters=function() //OVERRIDE IF NECESSARY
  {
  }


Element.prototype.insert_before=function(node,next){
  if(typeof next=="number") next=this.children[next];
  return this.insertBefore(node,next);
  }

Element.prototype.attach=function(node,next){
  this.insert_before(node,next);
  this.dispatchEvent(new CustomEvent("deep_attach",{"bubbles":true,"detail":{"attached":node,"next":next}}));
  this.dispatchEvent(new CustomEvent("attach",{"detail":{"attached":node,"next":next}}));
  node.dispatchEvent(new CustomEvent("attached",{"detail":{"parent":this}}));
  return node;
  }
Element.prototype.detach=function(node){
  this.removeChild(node);
  this.dispatchEvent(new CustomEvent("deep_detach",{"bubbles":true,"detail":{"detached":node}}));
  this.dispatchEvent(new CustomEvent("detach",{"detail":{"detached":node}}));
  return node;
  }
Element.prototype.attach_children=function(node,next){
  for(var child of node.childNodes) this.attach(child,next);
  }

Element.prototype.seek=function(s,t,contained=false){
  var found=false;
  for(var child of this.children){
    if(child.container&&child.action) var displayed=child.container.seek(s,t,contained||child.action.innerText.contains(s));
    else var displayed=(contained||child.innerText.contains(s))&&(!child.title||child.title.contains(t));
    child.set("excluded",!displayed);
    found=found||displayed;
    }
  return found;
  }

Element.prototype.get_tag=function(){
  var tag=this.classList[this.classList.length-1];
  if(tag&&window[tag]) return tag;
  else return this.tagName.toLowerCase();
  }

Element.prototype.is_writable=function(){
  var node=this;
  while(node){
    if(node.sons&&(typeof node.sons=="string")) return false;
    node=node.parentNode;
    }
  return true;
  }

Element.prototype.set_position=function(p=this.get_position()){
  this.style.left=parseInt(p.x)+"px";
  this.style.top=parseInt(p.y)+"px";
  if(p.width) this.style.width=parseInt(p.width)+"px";
  if(p.height) this.style.height=parseInt(p.height)+"px";
  }

Element.prototype.get_position=function(){
  var rect=this.getBoundingClientRect();
  return v(rect.x,rect.y,rect.width,rect.height);
  }

Element.prototype.contains=function(p){
  var rect=this.getBoundingClientRect();
  return rect.x<=p.x&&p.x<=rect.x+rect.width&&rect.y<=p.y&&p.y<=rect.y+rect.height;
  }
Element.prototype.distance=function(p){
  var rect=this.getBoundingClientRect();
  var center=v((rect.right+rect.left)/2,(rect.bottom+rect.top)/2);
  return center.sub(p).module();
  }

Element.prototype.get_descendant_by_position=function(p,child=this.lastElementChild){
  while(child){
    if(child.contains(p)) return child.get_descendant_by_position(p);
    child=child.previousElementSibling;
    }
  return this;
  }
 

Element.prototype.get_children=function(attr,value){
  var children=[];
  for(var child of this.children) if(child[attr]==value) children.push(child);
  return children;
  }
Element.prototype.attach_prev=function(){
  if(this.previousElementSibling) return this.parentNode.attach(this,this.previousElementSibling);
  }
Element.prototype.attach_next=function(){
  if(this.nextElementSibling) return this.parentNode.attach(this.nextElementSibling,this);
  }
HTMLLinkElement.prototype.get_href=function(){
  return new URL(this.href).pathname;
  }
HTMLHeadElement.prototype.get_style=function(href){
  for(var child of this.children) if(child.href&&child.get_href()==href) return child;
  }
HTMLHeadElement.prototype.get_styles=function(){
  var styles=[];
  for(var child of this.children) if(child.href) styles.push(child.get_href());
  return styles;
  }


addEventListener("load",
  async function(e){
    document.documentElement.set("mobile",is_mobile());
    document.documentElement.set("size",get_size());
    var jsons=document.body.xml_to_jsons();
    document.documentElement.removeChild(document.body);
    document.documentElement.insert("body");
    document.body.wins.insert("standard_win",{"fullscreen":true}).container.insert_jsons(jsons);
    var open_wins=window.location.get("open_wins");
    if(open_wins) for(var jsons of open_wins.split("|")) open_in_win(JSON.parse(jsons));
    var load_wins=window.location.get("load_wins");
    if(load_wins) for(var url of load_wins.split("|")) load_in_win(url);
    }
  );

mouse_position=v(0,0);
mouse_shift=v(0,0);
addEventListener("mousemove",
  function(e){
    mouse_shift=document.documentElement.get_mouse_position(e).sub(mouse_position);
    mouse_position=document.documentElement.get_mouse_position(e);
    }
  );


Element.prototype.change_position=function(p){
  this.set_position(this.get_position().add(p));
  }

HTMLHeadElement.prototype.inner_html=function(){
  var xmlns=' xmlns='+'"'+XHTML_NAMESPACE+'"';
  var regex=new RegExp(xmlns,"g");
  var inner_html=this.innerHTML.replace(regex,'').replace(/"/g, "'");
  return inner_html;
  }

merge=function(h1={},h2={}){
  const result={...h1};
  for(var key in h2){
    if(result[key] instanceof Object && h2[key] instanceof Object && !Array.isArray(result[key]) && !Array.isArray(h2[key])) result[key]=merge(result[key],h2[key]);
    else result[key]=h2[key];
    }
  return result;
  }


/****************CONSTRUCTORS****************/

el=function(tag,json={},ns=XHTML_NAMESPACE){
  ns=tag=="svg"?SVG_NAMESPACE:ns;
  if(el.caller.name!=tag) json=merge(window["_"+tag],json);
  if(typeof window[tag]=="function"&&(!el.caller||el.caller.name!=tag)){
    var o=window[tag](json);
    if(o.classList) o.classList.add(tag);
    }
  else{
    var o=document.createElementNS(ns,tag);
    for(var key in json) if(key!="tag") o.set(key,json[key]);
    if(json.class) o.classList.add(...json.class.split(" "));
    }
  o.dispatchEvent(new CustomEvent("init"));
  return o;
  }

body=function(a){
  var o=el("body",a);
  o.ins("desktop","div");
  o.ins("wins","div");
  o.ins("path_dialog","path_dialog");
  o.addEventListener("init",
    async function(e){
      var logged=await load_json(o.logged_script);
      o.set("logged",logged);
      }
    );
  o.addEventListener("mousemove",
    function(e){
      var win=this.wins.win;
      if(win){
        if(win.fullscreen) win.reposition(mouse_position);
	      else win.change_position(mouse_shift);
        if(win.isa("standard_win")){
  	      if(mouse_position.y<o.snap_zone_height){
            this.wins.win.set("fullscreen",true);
            this.wins.win=null;
            }
          else if(mouse_position.x<o.snap_zone_width){
            this.wins.win.set("fullscreen","left");
            this.wins.win=null;
            }
          else if(mouse_position.x>window.innerWidth-o.snap_zone_width){
            this.wins.win.set("fullscreen","right");
            this.wins.win=null;
            }
          }
        }
      }
    );
  o.addEventListener("mouseup",
    function(e){
      this.wins.win=null;
      }
    );
  return o;
  }
  
box=function(a){
  var o=el("div",a);
  o.seth("child_count",0);
  o.addEventListener("attach",
    function(e){
      o.seth("child_count",o.children.length);
      }
    );
  o.addEventListener("detach",
    function(e){
      o.seth("child_count",o.children.length);
      }
    );
  return o;
  }

string=function(a){
  return el("p",a);
  }

desktop=function(a){
  return el("div",a);
  }


two_column_layout=function(a){
  var o=el("box",a);
  o.ins("left","box");
  o.ins("right","box");
  return o;
  }

right_sidebar_layout=function(a){
  var o=el("box",a);
  o.ins("main","box");
  o.ins("sidebar","box");
  return o;
  }

border_layout=function(a){
  var o=el("box",a);
  o.ins("top","box");
  o.ins("left","box");
  o.ins("center","box");
  o.ins("right","box");
  o.ins("bottom","box");
  return o;
  }

alt_layout=function(a){
  var o=el("box",a);
  o.ins("header","box");
  o.ins("sidebar","box");
  o.ins("main","box");
  o.ins("footer","box");
  return o;
  }

img=function(a){
  var o=el("img",a);
  o.addEventListener("error",
    function(e){
      o.set("src",o.no_image_src);
      o.set("alt",o.no_image_alt)
      }
    );
  return o;
  }

input=function(a){
  var o=el("input",a);
  if(o.type!="password"&&o.type!="file") o.addEventListener("input",function(e){o.set("value",o.value);});
  return o;
  }

textarea=function(a){
  var o=el("textarea",a);
  o.addEventListener("input",function(e){o.set("value",o.value);});
  return o;
  }

button=function(a){
  var o=el("button",merge({type:"button"},a));
  if(o.value) {o.set_text(o.value);o.sons=false;}
  if(!o.title&&o.nomen) o.set("title",o.nomen);
  return o;
  }



win=function(a){
  var o=el("box",a);
  o.ins("title_bar","div");
  o.title_bar.ins("close_button","button");
  o.ins("container","box");
  o.reposition=function(mouse_position){
    if(o.fullscreen==true) o.set_position({"x":mouse_position.x-window.innerWidth/4,"width":window.innerWidth/2});
    o.set_position({"height":window.innerHeight/2});
    o.set("fullscreen",false);
    }
  o.title_bar.addEventListener("mousedown",
    function(e){
      document.body.wins.win=o;
      o.dist=o.get_mouse_position(e);
      }
    );
  o.title_bar.close_button.addEventListener("mousedown",function(e){e.stopPropagation();});
  o.title_bar.close_button.addEventListener("click",
    function(e){
      if(o.nomen) o.set("displayed",false);
      else o.parentNode.detach(o);
      }
    );
  o.addEventListener("attached",
    function(e){
      var position=v(o.offset_x,o.offset_y,window.innerWidth/2,window.innerHeight/2);
      if(o.previousElementSibling){
        var previous_position=o.previousElementSibling.get_position();
        position.x=(previous_position.x+o.offset_x)%(window.innerWidth/2);
        position.y=(previous_position.y+o.offset_y)%(window.innerHeight/2);
        }
      o.set_position(position);
      }
    );
  o.set_safe_position=function(position=this.get_position()){
    position.width=Math.min(position.width,window.innerWidth-o.offset_x);
    position.height=Math.min(position.height,window.innerHeight-o.offset_y);
    this.set_position(position);
    }
  return o;
  }

standard_win=function(a){
  var o=el("win",a);
  o.ins("textarea","textarea");
  o.title_bar.ins("edit_button","button");
  o.title_bar.ins("control_button","button");
  o.title_bar.ins("save_button","button");
  o.title_bar.ins("path","div"); 
  o.title_bar.ins("author","div");
  o.ins("save_win","win");
  o.save_win.container.ins("file_saver","file_saver");
  o.set("edit_mode",false);
  o.set("control_mode",false);
  o.set_title=function(author="",path=""){
    o.title_bar.author.set_text(author)
    o.title_bar.path.set_text(path.filename());
    o.title_bar.path.title=path.extname();
    if(document.body.logged==author) o.save_win.container.file_saver.folder.set("value",path.dirname());
    o.save_win.container.file_saver.file.set("value",path.stem());
    var extname=path.extname();
    var ext=[".json",".xhtml"].includes(extname)?extname:".json";
    o.save_win.container.file_saver.ext.set("value",ext);
    }
  o.bring_to_front=function(){
    while(o.nextSibling) document.body.wins.insertBefore(o.nextSibling,o);
    }


  o.title_bar.addEventListener("mousedown",
    function(e){
      o.set_safe_position();
      o.bring_to_front();
      }
    );
  o.title_bar.save_button.addEventListener("mousedown",function(e){e.stopPropagation();});
  o.title_bar.control_button.addEventListener("mousedown",function(e){e.stopPropagation();});
  o.title_bar.edit_button.addEventListener("mousedown",function(e){e.stopPropagation();});

  o.title_bar.control_button.addEventListener("click",
    function(e){
      o.set("control_mode",!o.control_mode);
      }
    );
  o.title_bar.edit_button.addEventListener("click",
    function(e){
      o.set("edit_mode",!o.edit_mode);
      if(o.edit_mode) o.textarea.value=JSON.stringify(o.container.to_jsons());
      else{
        try{
          var jsons=JSON.parse(o.textarea.value);
          o.container.remove_children();
          o.container.insert_jsons(jsons);
          }
        catch(e){
          alert("EDIT ERROR! Changes not applied");
          }
        }
      }
    );
  o.title_bar.save_button.addEventListener("click",
    function(e){
      if(document.body.logged){
        o.save_win.set("displayed",true);
        o.save_win.set_position(o.get_position().add(v(o.offset_x,o.offset_y)));
        }
      else{
        open_in_win([{"tag":"login"}],"","login",{"scale_width":4,"scale_height":3});
        }
      }
    );
  o.title_bar.addEventListener("dblclick",
    o.insert_content=function(e){
      if(document.body.mobile) return false;
      var node=document.body.get_descendant_by_position(mouse_position,o.previousElementSibling);
      while(node&&node!=this&&!node.panel) node=node.parentNode;
      if(node&&node.panel&&node.is_writable()){
        var min_distance=Infinity;
        var attached=node.appendChild(document.createElement("span"));
        var n=node.children.length;
        for(var i=0;i<n;i++){
          var distance=attached.distance(mouse_position);
          if(distance<min_distance){
            min_distance=distance;
            next=attached.nextElementSibling;
            }
          node.insertBefore(attached,attached.previousElementSibling);
          }
        node.removeChild(attached);
        node.attach_children(o.container,next);
        o.parentNode.detach(o);
        }
      }
    );
  o.save_win.container.file_saver.save_button.addEventListener("click",
    async function(e){
      o.save_win.container.file_saver.data=JSON.stringify(o.container.to_jsons());
      var saved=await o.save_win.container.file_saver.save();
      if(saved) o.set_title(document.body.logged,o.save_win.container.file_saver.folder.value+o.save_win.container.file_saver.file.value+o.save_win.container.file_saver.ext.value);
      }
    );
  o.addEventListener("mousedown",
    function(e){
      var t=e.target;
      if(this.control_mode){
        if(t.parentNode.panel||t.cloneable){
	        var mp=t.get_mouse_position(e,"right");
	        if(mp.y<o.title_bar_height){
	          if(mp.x<o.title_bar_height&&t.is_writable()&&!t.nomen) t.parentNode.detach(t);
	          else{
	            document.body.wins.win=document.body.wins.insert("standard_win");
	            document.body.wins.win.set_safe_position(t.get_position());
	            console.log(JSON.stringify(t.to_json()));
	            document.body.wins.win.container.insert_json(t.to_json());
	            }
	          }
          }
        }
      }
    );
  return o;
  }


file_browser=function(a){
  var o=el("box",a);
  o.ins("file","input");
  o.ins("ext","input");
  o.ins("container","box");
  o.container.addEventListener("insert_jsons",
    function(e){
      o.container.seek(o.file.value,o.ext.value);
      }
    );
  o.file.addEventListener("input",
    function(e){
      o.container.seek(o.file.value,o.ext.value);
      if(document.body.mobile) o.set("checked",true);
      }
    );
   o.ext.addEventListener("input",
    function(e){
      o.container.seek(o.file.value,o.ext.value);
      if(document.body.mobile) o.set("checked",true);
      }
    );
  o.file.addEventListener("click",
    function(e){
      if(document.body.mobile) o.set("checked",!o.checked);
      }
    );
  o.ext.addEventListener("click",
    function(e){
      if(document.body.mobile) o.set("checked",!o.checked);
      }
    );
  return o;
  }



file_manager=function(a){
  var o=el("box",a);
  o.ins("group_browser","file_browser");
  o.ins("file_browser","file_browser");
  o.group_browser.container.addEventListener("attach",
    function(e){
      var users=o.file_browser.container.get_parameter("users");
      if(users){
        var attached=e.detail.attached;
        var user=attached.value;
        if(users.includes(user)) attached.set("checked",true);
        }
      }
    );
  o.group_browser.container.addEventListener("click",
    function(e){
      var selected=[];
      for(var child of this.children) if(child.checked) selected.push(child.value);
      o.file_browser.container.set_parameter("users",selected);
      o.file_browser.container.reload(); 
      }
    );
  return o;
  }


style_manager=function(a){
  var o=el("box",a);
  o.ins("file_manager","file_manager");
  o.ins("style_master","style_master");
  o.ins("toolbar","box");
  o.toolbar.ins("up","button");
  o.toolbar.ins("remove","button");
  o.toolbar.ins("down","button");

  o.file_manager.file_browser.container.addEventListener("deep_attach",
    function(e){
      var child=e.detail.attached;
      if(child.href){ //text node doesn't have get_href
        child.set("active",false);
        child.addEventListener("click",
          function(e){
            o.style_master.append_style(child.get("href"));
            }
          );
        }
      }
    );
  o.toolbar.remove.addEventListener("click",
    function(e){
      o.style_master.remove_style();
      }
    );
  o.toolbar.up.addEventListener("click",
    function(e){
      o.style_master.up_style();
      }
    );
  o.toolbar.down.addEventListener("click",
    function(e){
      o.style_master.down_style();
      }
    );
  return o;
  }


style_master=function(a){
  var o=el("box",merge(a,{"sons":false}));
  o.get_selected_style=function(){
    for(var child of o.children) if(child.checked) return document.head.get_style(child.value);
    }
  o.append_style=function(href){
    if(!document.head.get_style(href)){
      document.head.insert("link",{"href":href,"rel":"stylesheet","type":"text/css"});
      document.body.wins.reload(true);
      }
    }
  o.remove_style=function(){
    var selected_style=o.get_selected_style();
    if(selected_style&&selected_style.get_href()!=CORE_STYLE) {
      document.head.detach(selected_style);
      document.body.wins.reload(true);
      }
    }
  o.up_style=function(){
    var selected_style=o.get_selected_style();
    if(selected_style&&selected_style.previousElementSibling.tagName=="link"){
      selected_style.attach_prev();
      document.body.wins.reload(true);
      }
    }
  o.down_style=function(){
    var selected_style=o.get_selected_style();
    if(selected_style&&selected_style.nextElementSibling&&selected_style.nextElementSibling.tagName=="link"){
      selected_style.attach_next();
      document.body.wins.reload(true);
      }
    }
  o.addEventListener("click",
    function(e){
      var target=e.target;
      if(target!=o.style_master) for(var child of o.children) child.set("checked",child!=target?false:!target.checked);
      }
    );
  o.addEventListener("init",
    function(e){
      o.remove_children();
      var hrefs=document.head.get_styles();
      for(var href of hrefs){
        var child=o.insert("div",{"value":href,"checked":false});
        child.ins_text(href);
        } 
      }
    );
  return o;
  }
 

toolbox=function(a){
  var o=el("box",a);
  return o;
  }

path_dialog=function(a){
  var o=el("dialog",a);
  o.ins("stem","input");
  o.ins("ext","input")
  o.ins("ok","button");
  o.ins("cancel","button");
  o.folder="";
  o.blacklist=new Set();
  o.set("displayed",false);
  o.show=function(){
    o.showModal();
    o.set("displayed",true);
    }
  o.hide=function(){
    o.close();
    o.set("displayed",false);
    } 
  o.get_path=function(){
    return o.folder+o.stem.value+o.ext.value;
    }
  o.evaluate_overwrite=function(){
    o.set("overwrite",o.blacklist.has(o.get_path()));
    }
  o.set_value=function(folder,stem,ext,blacklist=new Set()){
    o.show();
    o.folder=folder;
    o.stem.value=stem;
    o.ext.value=ext;
    o.blacklist=blacklist;
    o.evaluate_overwrite();
    o.stem.focus();
    }
  o.get_value=function(){
    return new Promise(
    function(resolve){
      o.show();
      o.ok.onclick=function(e){
        if(o.stem.value!=""){
          resolve(o.get_path());
          o.hide();
          }
        }
      o.cancel.onclick=function(e){
        resolve(false);
        o.hide();
        }
      }
      );
    }
  o.stem.addEventListener("input",
    function(e){
      o.evaluate_overwrite();
      }
    );
  return o;
  }

labelled_input=function(a){
  var o=el("div",a);
  o.ins("label","label");
  o.ins("input","input");
  o.ins("message","div");
  o.input.addEventListener("input",
    async function(e){
      if(o.check_script){
        var error=await load_json(o.check_script,{"data":this.value});
        o.set('error',error);
        }
      }
    );
  return o;
  }

labelled_email=function(a){
  return el("labelled_input",a);
  }
labelled_username=function(a){
  return el("labelled_input",a);
  }
labelled_password=function(a){
  var o=el("labelled_input",a);
  o.ins("show_button","button",{},o.message);
  o.show_button.addEventListener("click",
    function(e){
      if(o.input.type=="password") o.input.set("type","text");
      else o.input.set("type","password");
      }
    );
  return o;
  }
labelled_registered_password=function(a){
  return el("labelled_input",a);
  }

password_requirements=function(a){
  return el("div",a);
  }



form_box=function(a){
  var o=el("box",a);
  o.ins("container","box");
  o.ins("submit_button","button");
  o.clear_form=function(){
    for(var child of o.container.children){
      if(child.isa("labelled_input")){
        child.input.set("value","");
        }
      }
    }
  o.get_values=function(){
    var values=o.values||{};
    values['host']=window.location.hostname;
    for(var child of o.container.children) if(child.isa("labelled_input")) values[child.nomen]=child.input.value;
    return values;
    }
  return o;
  }

submitter=function(a){
  var o=el("form_box",a);
  o.no_errors=function(){
    for(var child of o.container.children) if(child.isa("labelled_input")&&child.error&&child.error!=0) return false;
    return true;
    }
  o.submit_button.addEventListener("click",
    async function(e){
      if(o.no_errors()) await load_in_win(o.submit_script,o.get_values());
      }
    );
  return o;
  }

register_request=function(a){
  var o=el("submitter",a);
  o.container.ins("email","labelled_email");
  o.container.ins("username","labelled_username");
  o.container.ins("password","labelled_password");
  return o;
  }


email_change_request=function(a){
  var o=el("submitter",a);
  o.container.ins("current_password","labelled_registered_password");
  o.container.ins("new_email","labelled_email");
  return o;
  }

password_change=function(a){
  var o=el("submitter",a);
  o.container.ins("current_password","labelled_registered_password");
  o.container.ins("new_password","labelled_password");
  return o;
  }

password_reset_request=function(a){
  var o=el("submitter",a);
  o.container.ins("email","labelled_input");
  return o;
  }

password_reset_confirm=function(a){
  var o=el("submitter",a);
  o.container.ins("new_password","labelled_password");
  return o;
  }

account_delete_request=function(a){
  var o=el("submitter",a);
  o.container.ins("current_password","labelled_registered_password");
  return o;
  }

login=function(a){
  var o=el("form_box",a);
  o.container.ins("username","labelled_input");
  o.container.ins("password","labelled_registered_password");
  o.container.ins("logged_as","div",{"sons":false});
  o.addEventListener("init",
    function(e){
      o.container.logged_as.set_text(document.body.logged?document.body.logged:"");
      }
    );
  o.submit_button.addEventListener("click",
    async function(e){
      if(document.body.logged) var logged=await load_json(o.logout_script);
      else var logged=await load_json(o.login_script,o.get_values());
      document.body.set("logged",logged);
      document.body.wins.reload(true);
      }
    );
  return o;
  }

checkfield=function(a){
  var o=el("button",a);
  o.addEventListener("click",
    function(e){
      if(o.active) o.set("checked",!o.checked);
      }
    );
  return o;
  }

file_explorer=function(a){
  var o=el("box",a);

  o.ins("toolbar","box");
  o.toolbar.ins("unpublish_button","button");
  o.toolbar.ins("publish_button","button");
  o.toolbar.ins("copy_button","button");
  o.toolbar.ins("move_button","button");
  o.toolbar.ins("restore_button","button");
  o.toolbar.ins("trash_button","button");
  o.toolbar.ins("delete_button","button");
  o.toolbar.ins("mkdir_button","button");
  o.toolbar.ins("trashed_button","button");
 

  o.ins("up_button","button");

  o.ins("folder","input",{"readOnly":true,"value":""}); 
  o.ins("container","box");

/*
  o.container.addEventListener("init",
    function(e){
      o.folder.set("value","");
      }
    );
*/
  o.container.set_parameters=function(){
    this.set_parameter("folder",o.folder.value);
    this.set_parameter("trashed",o.trashed); 
    };

  o.sources=new Set();
  o.add_source=function(path){
    o.sources.add(path);
    o.update_titles();
    }
  o.delete_source=function(path){
    o.sources.delete(path);
    o.update_titles();
    }
  o.has_source=function(path){
    return o.sources.has(path);
    }

  o.container.addEventListener("attach",
    function(e){
      var child=e.detail.attached;
      if(child.isa("file_info")){
        child.checkfield.set("checked",o.has_source(child.path));
        child.checkfield.set("active",o.trashed==child.trashed);
        child.checkfield.addEventListener("click",
          function(e){
            e.preventDefault();
            e.stopPropagation();
            if(child.checkfield.active){
              if(child.checkfield.checked) o.add_source(child.path);
              else o.delete_source(child.path); 
              }
            }
          );
        if(child.is_folder){
          child.stem.addEventListener("click",
            function(e){
              e.stopPropagation();
              e.preventDefault();
              o.delete_source(child.path);
              o.folder.set("value",child.path+"/");
              o.container.reload();
              }
            );
          }
        else{
          child.addEventListener("click",
            async function(e){
              e.stopPropagation();
              e.preventDefault();
              var public_file='.'+crypto.randomUUID()+child.path.extname();
              await load_json(o.rename_script,{"source":child.path,"dest":public_file});
              if(!child.readable) await load_json(o.publish_script,{"path":public_file});
              load_in_win("/~"+child.author+"/"+public_file,child.parameters,child.author,child.path);
              if(!child.readable) await load_json(o.unpublish_script,{"path":public_file});
              load_json(o.rename_script,{"source":public_file,"dest":child.path});
              }
            );
          }
        }
      }
    );
  o.get_paths=function(){
    var paths=new Set();
    for(var child of o.container.children) paths.add(child.path);
    return paths;
    }
  o.repeat_execute=async function(action,json={}){
    for(source of o.sources){
      await load_json(action,merge(json,{"path":source}))
      o.delete_source(source);
      }
    await document.body.wins.reload();
    }
  o.dialog_execute=async function(action,stem,ext=""){
    document.body.path_dialog.set_value(o.folder.value,stem,ext,o.get_paths());
    var response=await document.body.path_dialog.get_value();
    if(response) await load_json(action,{"path":response});
    await document.body.wins.reload();
    }
  o.repeat_dialog_execute=async function(action){
    var blacklist=o.get_paths();
    for(source of o.sources){
      var stem=source.stem();
      if(o.trashed) stem=stem.slice(1,-20);
      document.body.path_dialog.set_value(o.folder.value,stem,source.extname(),blacklist);
      var response=await document.body.path_dialog.get_value();
      if(response){
        await load_json(action,{"source":source,"dest":response});
        blacklist.add(response);
        }
      o.delete_source(source);
      }
    await document.body.wins.reload();
    }
  o.toolbar.copy_button.addEventListener("click",
    function(e){
      o.repeat_dialog_execute(o.copy_script);
      }
    );
  o.toolbar.move_button.addEventListener("click",
    function(e){
      o.repeat_dialog_execute(o.rename_script);
      }
    );
  o.toolbar.restore_button.addEventListener("click",
    function(e){
      o.repeat_dialog_execute(o.rename_script);
      }
    );
  o.toolbar.unpublish_button.addEventListener("click",
    function(e){
      o.repeat_execute(o.unpublish_script);
      }
    );
  o.toolbar.publish_button.addEventListener("click",
    function(e){
      o.repeat_execute(o.publish_script);
      }
    );
  o.toolbar.trash_button.addEventListener("click",
    function(e){
      o.repeat_execute(o.trash_script);
      }
    );
  o.toolbar.delete_button.addEventListener("click",
    async function(e){
      o.repeat_execute(o.delete_script);
      }
    );
  o.toolbar.mkdir_button.addEventListener("click",
    async function(e){
      o.dialog_execute(o.mkdir_script,"New folder");
      }
    );
  o.toolbar.trashed_button.addEventListener("click",
    function(e){
      o.set("trashed",!o.trashed);
      o.delete_sources();
      o.container.reload();
      }
    );
  o.up_button.title="Parent folder";
  o.toolbar.mkdir_button.title="New folder";
  o.update_titles=function(){
    o.toolbar.unpublish_button.title="Unpublish\n";
    o.toolbar.publish_button.title="Publish\n";
    o.toolbar.copy_button.title="Copy\n";
    o.toolbar.move_button.title="Move\n";
    o.toolbar.restore_button.title="Restore\n";
    o.toolbar.trash_button.title="Trash\n";
    o.toolbar.delete_button.title="Delete permanently\n";
    for(var source of o.sources){
      o.toolbar.unpublish_button.title+=source+"\n";
      o.toolbar.publish_button.title+=source+"\n";
      o.toolbar.copy_button.title+=source+"\n";
      o.toolbar.move_button.title+=source+"\n";
      o.toolbar.restore_button.title+=source+"\n";
      o.toolbar.trash_button.title+=source+"\n";
      o.toolbar.delete_button.title+=source+"\n";
      }
    }
  o.delete_sources=function(){
    o.sources.clear();
    o.update_titles();
    }
  o.up_button.addEventListener("click",
    function(e){
      o.folder.set("value",o.folder.value.dirname());
      o.container.reload();
      }
    );

  o.update_titles();
  return o;
  }

file_info=function(a){
  var o=el("box",a);
  o.ins("checkfield","checkfield");
  o.ins("stem","div");
  o.ins("ext","div");
  o.ins("time","time");
  o.ins("accessibility","div");
  return o;
  }

file_saver=function(a){
  var o=el("file_explorer",a);
  o.ins("file_label","label");
  o.ins("file","input",{"value":""});
  o.ins("ext","select");
  o.ext.ins("json","option",{"value":".json"}).ins_text(".json");
  o.ext.ins("xhtml","option",{"value":".xhtml"}).ins_text(".xhtml");
  o.ins("private_button","button");
  o.ins("save_button","button");
  o.get_path=function(){
    return o.folder.value+o.file.value+o.ext.value;
    }
  o.evaluate_overwrite=function(){
    o.set("overwrite",o.get_paths().has(o.get_path()));
    }
  o.container.addEventListener("attach",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.container.addEventListener("detach",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.file.addEventListener("input",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.ext.addEventListener("input",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.private_button.addEventListener("click",
    function(e){
      o.set("is_private",!o.is_private);
      }
    );
  o.save=async function(e){
    if(o.file.value!=""){
      var parameters={"path":o.get_path(),"is_private":o.is_private};
      try{
        if(o.ext.value==".json") parameters.data=o.data;
        else if(o.ext.value==".xhtml"){
          var s="";
          s+="<!DOCTYPE html>"
          s+="<html xmlns='http://www.w3.org/1999/xhtml'>"
          s+="<head>";
          s+=document.head.inner_html();
          s+="</head>"
          s+="<body>"
          s+="<script type='application/json'>"
          s+="<![CDATA[";
          s+=o.data;
          s+="]]>"
          s+="</script>";
          s+="</body>"
          s+="</html>";
          parameters.data=s;
          }
        await load_json(o.save_script,parameters);
        document.body.wins.reload();
        return true;
        }
      catch(e){
        alert("SAVE ERROR");
        return false;
        }
      }
    }
  return o;
  }


file_uploader=function(a){
  var o=el("file_explorer",a);
  o.enctype="multipart/form-data";
  o.ins("file_label","label");
  o.ins("file","input",{"value":""});
  o.ins("ext","input");
  o.ins("datafile","input",{"type":"file"});
  o.ins("private_button","button");
  o.ins("upload_button","button");

  o.get_path=function(){
    return o.folder.value+o.file.value+o.ext.value;
    }
  o.evaluate_overwrite=function(){
    o.set("overwrite",o.get_paths().has(o.get_path()));
    }
  o.container.addEventListener("attach",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.container.addEventListener("detach",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.file.addEventListener("input",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.ext.addEventListener("input",
    function(e){
      o.evaluate_overwrite();
      }
    );
  o.datafile.addEventListener("change",
    function(e){
      o.file.set("value",o.datafile.files[0].name.stem());
      o.ext.set("value",o.datafile.files[0].name.extname());
      o.evaluate_overwrite();
      }
    );
  o.private_button.addEventListener("click",
    function(e){
      o.set("is_private",!o.is_private);
      }
    );
  o.upload_button.addEventListener("click",
    async function(e){
      if(o.file.value!=""&&o.datafile.files.length>0){
        var data=new FormData();
        data.append("source",o.datafile.files[0]);
        data.append("dest",o.get_path());
        data.append("is_private",o.is_private);
        await load_json(o.upload_script,data);
        document.body.wins.reload();
        }
      }
    );
  return o;
  }

slideshow=function(a){
  var o=el("box",a);
  o.ins("container","box");
  o.ins("left","button");
  o.ins("right","button");
  o.left.addEventListener("click",function(){o.container.round_clockwise();});
  o.right.addEventListener("click",function(){o.container.round_anticlockwise();});
  return o;
  }

hamburger=function(a)
  {
  var o=el("div",a);
  o.addEventListener("click",
    function(e){
      if(document.documentElement.mobile) o.set("checked",!o.checked);
      }
    );
  return o;
  }


a=function(a){
  var o=el("a",a);
  if(!o.href) o.href=o.author?"/~"+o.author+"/"+o.path:o.path;
  o.addEventListener("click",
    function(e){
      e.preventDefault();
      if(o.active) load_in_win(o.get("href"),o.parameters,o.author,o.path,o.win_attributes);
      }
    );
  return o;
  }


select=function(a){
  var o=el("select",a);
  o.addEventListener("change",function(e){o.dataset.value=o.value;});
  o.addEventListener("attach",function(e){if(e.detail.attached.value==o.dataset.value) e.detail.attached.selected=true;});
  return o;
  }


dropdown=function(a){
  var o=el("box",a);
  o.ins("action","div");
  o.ins("container","box");
  o.action.addEventListener("click",function(e){o.set("checked",!o.checked);});
  return o;
  }

launcher=function(a){
  var o=el("button",a);
  o.addEventListener("click",
    function(e){
      open_in_win(o.source,"",o.nomen,o.win_attributes);
      }
    );
  return o;
  }

/****************TURSIM****************/

SVGCircleElement.prototype.set_position=function(p){
  this.setAttribute("cx",p.x);
  this.setAttribute("cy",p.y);
  }
SVGTextElement.prototype.set_position=function(p){
  this.setAttribute("x",p.x);
  this.setAttribute("y",p.y);
  }
SVGCircleElement.prototype.get_position=function(){
  return v(parseInt(this.getAttribute("cx")),parseInt(this.getAttribute("cy")));
  }
SVGTextElement.prototype.get_position=function(){
  return v(parseInt(this.getAttribute("x")),parseInt(this.getAttribute("y")));
  }
SVGGElement.prototype.change_position=function(p){
  for(var child of this.children) if(child.change_position) child.change_position(p);
  }

Element.prototype.position=function(){
  return Array.prototype.indexOf.call(this.parentNode.childNodes,this);
  }

tursim=function(a){
  var o=el("box",a);
  o.ins("title_bar","box");
  o.title_bar.ins("automata","button");
  o.title_bar.ins("mealy","button");
  o.title_bar.ins("turing","button");
  o.title_bar.ins("step","button");
  o.title_bar.ins("zoomout","button");
  o.title_bar.ins("zoomin","button");
  o.ins("tape","box");
  o.tape.ins("left","input");
  o.tape.ins("center","input");
  o.tape.center.setAttribute("maxlength","1");
  o.tape.ins("right","input");
  o.ins("graph","svg");
  o.graph.ins("states","g");
  o.graph.ins("links","g");
  o.graph.setAttribute("tabindex","0");

  o.pointer={"position":v(0,0)};
  o.pointer.set_position=function(position){
    o.pointer.position=position;
    }
  o.pointer.get_position=function(){
    return o.pointer.position;
    }
  o.pointer.get_radius=function(){
    return 0;
    }
  o.tape.center.addEventListener("mousedown",
    function(e){
      if(o.tape.center.value==" ") o.tape.center.set("value","");
      }
    );

  o.redraw_links=function(){
    o.graph.links.remove_children();
    for(var state of o.graph.states.children){
      var transitions=state.transitions;
      for(var read in transitions){
        var transition=transitions[read];
        var write=o.write?"͵"+transition.write:"";
        var move=o.move?"͵"+["<","-",">"][transition.move+1]:"";
        var next=transition.next;
        var label=read+write+move;
        var link=o.get_link(state,next);
        if(link) link.text.set_text(link.text.get_text()+"  "+label);
        else{
          var link=o.graph.links.insert("tursim_link",{"start":state,"end":next});
          link.text.set_text(label);
          link.draw(o.scale);
          }
        }
      }
    o.link=o.get_link(o.start,o.pointer);
    }

  o.set_start=function(start){
    for(var state of o.graph.states.children) state.set("start",false);
    start.set("start",true);
    o.start=start;
    }

  o.remove_transitions=function(){
    for(var state of o.graph.states.children){
      for(var read in state.transitions){
        var transition=state.transitions[read];
        if(transition.next==o.start) state.remove_transition(read);
        }
      }
    }

  o.check_nodes=function(){
    for(var x of o.graph.states.children){
      var y=o.graph.states.firstChild;
      while(y&&(x==y||x.text.get_text()!=y.text.get_text())) y=y.nextSibling;
      x.set("ok",y==null&&x.text.get_text()!="");
      }
    }

  o.get_link=function(start,end){
    for(var link of o.graph.links.children){
      if(link.start==start && link.end==end) return link;
      }
    }

  o.is_automata=function(){
    for(var state of o.graph.states.children){
      for(var read in state.transitions){
        var transition=state.transitions[read];
        if(read!=transition.write||transition.move!=1) return false;
        }
      }
    return true;
    }

  o.is_mealy=function(){
    for(var state of o.graph.states.children){
      for(var read in state.transitions){
        var transition=state.transitions[read];
        if(transition.move!=1) return false;
        }
      }
    return true;
    }

  o.step=function(){
    var left=o.left_value();
    var read=o.center_value();
    var right=o.right_value();
    if(o.start){
      o.start.set("writable",false);
      var transition=o.start.get_transition(read);
      if(transition){
        var tape=left+transition.write+right;
        var i=left.length+transition.move;
        o.tape.left.value=tape.substring(0,i);
        o.tape.center.value=tape[i];
        o.tape.right.value=tape.substring(i+1);
        o.set_start(transition.next);
        const e=new CustomEvent("input");
        o.tape.left.dispatchEvent(e);
        o.tape.center.dispatchEvent(e);
        o.tape.right.dispatchEvent(e);
        }
      }
    }
  o.zoom=function(zoom){
    var center=v(o.graph.get_position().width/2,o.graph.get_position().height/2);
    var new_scale=o.scale+zoom;
    if(new_scale>=o.min_scale){
      for(var state of o.graph.states.children){
        state.draw(new_scale);
        state.set_position(state.get_position().sub(center).div(o.scale).mul(new_scale).add(center));
        }
      for(var link of o.graph.links.children) link.draw(new_scale);
      o.set("scale",new_scale);
      }
    }
    
  o.left_value=function(){
    var s=o.tape.left.value;
    return s==null||s==""?" ":s;
    }
  o.center_value=function(){
    var s=o.tape.center.value[0];
    return s==null||s==""?" ":s;
    }
  o.right_value=function(){
    var s=o.tape.right.value;
    return s==null||s==""?" ":s;
    }

  o.title_bar.automata.addEventListener("click",
    function(e){
      if(o.is_automata()){
        o.set("write",false);
        o.set("move",false);
        o.redraw_links();
        }
      }
    );
  o.title_bar.mealy.addEventListener("click",
    function(e){
      if(o.is_mealy()){
        o.set("write",true);
        o.set("move",false);
        o.redraw_links();
        }
      }
    );
  o.title_bar.turing.addEventListener("click",
    function(e){
      o.set("write",true);
      o.set("move",true);
      o.redraw_links();
      }
    );
  o.title_bar.step.addEventListener("click",
    function(e){
      o.step();
      }
    );
  o.title_bar.zoomout.addEventListener("click",
    function(e){
      o.zoom(-o.zoom_inc);
      }
    );
  o.title_bar.zoomin.addEventListener("click",
    function(e){
      o.zoom(o.zoom_inc);
      }
    );

  o.attach_transition=function(){
    o.transition.next=o.start;
    o.transition=null;
    o.redraw_links();
    }

  o.insert_jsons=function(jsons=[[],[],["","",""]],next){
    for(var s of jsons[0]){
      var state=o.graph.states.insert("tursim_state",{"start":s[1],"acceptable":s[2],"x":s[3],"y":s[4]});
      state.text.set_text(s[0]);
      if(state.start) o.start=state; 
      state.draw(o.scale);
      }
    for(var t of jsons[1]){
      var state=o.graph.states.children[t[0]];
      var read=t[1];
      var next=o.graph.states.children[t[2]];
      var write=t[3];
      var move=t[4];
      state.append_transition(read,next,write,move);
      }
    o.tape.left.value=jsons[2][0];
    o.tape.center.value=jsons[2][1];
    o.tape.right.value=jsons[2][2];
    o.redraw_links();
    o.check_nodes();
    return true;
    }


  o.to_json=function(include_excluded_in_json){
    var ss=[];
    for(var state of o.graph.states.children){
      ss.push([state.text.get_text(),state.start,state.acceptable,state.get_position().x,state.get_position().y])
      }
    var tt=[];
    for(var state of o.graph.states.children){
      for(var read in state.transitions){
        var transition=state.get_transition(read);
        t=[state.position(),read,transition.next.position(),transition.write,transition.move]
        tt.push(t);
        }
      }
    var tape=[o.tape.left.value,o.tape.center.value,o.tape.right.value];
    var json=this.get_attributes();
    json.tag=this.get_tag();
    json.sons=[ss,tt,tape];
    return json;
    }

  o.graph.addEventListener("mousedown",
    function(e){
      if(o.start) o.start.set("writable",false);
      var target=e.get_target();
      if(target.get_tag()=="tursim_state"){
        o.selected=target;
        o.set_start(o.selected);
        if(o.transition) o.attach_transition();
        }
      else o.selected=o.graph.states;
      o.selected.lastPosition=o.graph.get_mouse_position(e);
      }
    );

  o.graph.addEventListener("mousemove",
    function(e){
      var position=o.graph.get_mouse_position(e);
      o.pointer.set_position(position);
      if(o.selected){
        o.selected.change_position(mouse_shift);
        o.selected.lastPosition=position;
        for(var link of o.graph.links.children) link.draw(o.scale);
        }
      else if(o.link) o.link.draw(o.scale);
      }
    );

  o.graph.addEventListener("mouseup",
    function(e){
      o.selected=null;
      }
    );

  o.graph.addEventListener("dblclick",
    function(e){
      var target=e.get_target();
      if(target.get_tag()=="tursim_state"){
        target.set("writable",true);
        }
      else{
        var mp=o.graph.get_mouse_position(e);
        var target=o.graph.states.insert("tursim_state",{"x":mp.x,"y":mp.y,"writable":true,"ok":false});
        target.draw(o.scale);
        }
      o.set_start(target);
      if(o.transition) o.attach_transition();
      }
    );

  o.graph.addEventListener("keydown",
    function(e){
      e.preventDefault();
      var c=e.key;
      if(o.start.writable){
        if(c=="Backspace"){
          if(o.start.text.get_text()==""){
            o.remove_transitions();
            o.start.remove();
            o.start=null;
            o.redraw_links();
            }
          else o.start.text.delete_last_char();
          }
        else if(c=="Enter") o.start.set("writable",false);
        else if(c.length==1) o.start.text.append_char(c);
        o.check_nodes();
        }
      else{
        if(!o.transition){
          o.transition=o.start.get_transition(c);
          if(o.transition) o.transition.next=o.pointer;
          else if(c.length==1) o.transition=o.start.append_transition(c,o.pointer,c,1);
          }
        else{
          if(c=="Backspace") o.start.remove_transition(o.transition.read);
          else if(c=="ArrowLeft") o.transition.move=-1;
          else if(c=="ArrowRight") o.transition.move=1;
          else if(c=="ArrowUp"||c=="ArrowDown") o.transition.move=0;
          else if(c.length==1) o.transition.write=c;
          }
        o.redraw_links();
        }
      }
    );

  return o;
  }

tursim_state=function(a){
  var o=el("g",merge({"writable":false,"ok":true,"acceptable":false,"transitions":{}},a),SVG_NAMESPACE);
  o.ins("outer_circle","circle");
  o.outer_circle.setAttribute("tabindex",0);
  o.ins("inner_circle","circle");
  o.ins("text","text");
  o.append_transition=function(read,next,write,move){
    return o.transitions[read]={"start":o,"read":read,"next":next,"write":write,"move":move};
    }
  o.get_transition=function(read){
    return o.transitions[read];
    }
  o.remove_transition=function(read){
    delete(o.transitions[read]);
    }
  o.get_position=function(){
    return v(o.x,o.y);
    }
  o.get_radius=function(){
    return parseInt(o.outer_circle.getAttribute("r"));
    }
  o.set_position=function(p){
    o.set("x",parseInt(p.x));
    o.set("y",parseInt(p.y))
    for(var child of o.children) child.set_position(p);
    }
  o.change_position=function(p){
    o.set_position(o.get_position().add(p));
    }
  o.outer_circle.addEventListener("contextmenu",
    function(e){
      e.preventDefault();
      o.set("acceptable",!o.acceptable);
      }
    );
  o.draw=function(scale=1){
    o.outer_circle.setAttribute("r",o.radius*scale);
    o.inner_circle.setAttribute("r",o.radius*o.inner_circle_percentage*scale);
    o.text.style.fontSize=parseInt(o.font_size*scale)+"px";
    o.set_position(v(o.x,o.y));
    }
  return o;
  }

tursim_link=function(a){
  var o=el("g",a,SVG_NAMESPACE);
  o.ins("line","path");
  o.ins("polygon","polygon");
  o.ins("text","text");
  o.draw=function(scale=1){
    if(o.start==o.end){
      var versor=v(0,1);
      var middle=o.start.get_position().sub(versor.mul(o.start.get_radius()));
      var start=o.start.get_position().sub(versor.mul(o.start.get_radius()).rotate(-o.angle));
      var end=o.start.get_position().sub(versor.mul(o.end.get_radius()).rotate(o.angle));
      var control_length=o.control_length*scale;
      var start_control=start.sub(versor.mul(control_length));
      var end_control=end.sub(versor.mul(control_length));
      var label=middle.sub(versor.mul(control_length));
      }
    else{
      var versor=o.end.get_position().sub(o.start.get_position()).versor();
      var start=o.start.get_position().add(versor.mul(o.start.get_radius()).rotate(-o.angle));
      var end=o.end.get_position().sub(versor.mul(o.end.get_radius()).rotate(o.angle));
      var versor=end.sub(start).versor(); //more precision for a link to the pointer
      var start_control=start;
      var end_control=end;
      var distance=end.sub(start).module();
      var label=start.add(versor.mul(distance/4));
      if(!(label.x&&label.y)) var label=v(-100,-100);
      }
    var h=versor.mul(-o.spike_height*scale);
    var a=end;
    var m=end.add(h);
    var orthogonal=h.orthogonal();
    var b=m.add(orthogonal);
    var c=m.sub(orthogonal);
    o.line.setAttribute("d","M "+parseInt(start.x)+","+parseInt(start.y)+" C "+parseInt(start_control.x)+","+parseInt(start_control.y)+" "+parseInt(end_control.x)+","+parseInt(end_control.y)+" "+parseInt(end.x)+","+parseInt(end.y));
    o.polygon.setAttribute("points",parseInt(a.x)+","+parseInt(a.y)+" "+parseInt(b.x)+","+parseInt(b.y)+" "+parseInt(c.x)+","+parseInt(c.y));
    o.text.setAttribute("x",parseInt(label.x));
    o.text.setAttribute("y",parseInt(label.y));
    o.text.style.fontSize=parseInt(o.font_size*scale)+"px";
    }
  return o;
  }
