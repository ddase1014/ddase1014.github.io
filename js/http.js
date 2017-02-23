var xmlhttp=poster();

function poster(){
    var request = false;
    if(window.XMLHttpRequest) {
      request = new XMLHttpRequest();
      if(request.overrideMimeType) {
        request.overrideMimeType('text/xml');
      }
    } else if(window.ActiveXObject) {
      var versions = ['Microsoft.XMLHTTP', 'MSXML.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.7.0', 'Msxml2.XMLHTTP.6.0', 'Msxml2.XMLHTTP.5.0', 'Msxml2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP'];
      for(var i=0; i<versions.length; i++) {
        try {
          request = new ActiveXObject(versions[i]);
        } catch(e) {}
      }
    }
    return request;
}

//XMLHttpRequest对象使用GET方式异步发送数据
function getmydata(action){
xmlhttp.onreadystatechange=xmlhttpLoaded;
    xmlhttp.open("GET", action, false);
    xmlhttp.send();
return xmlhttp.responseText;
}
//XMLHttpRequest对象使用POST方式异步发送数据
function postmydata(action,data){
xmlhttp.onreadystatechange=xmlhttpLoaded;
    xmlhttp.open("POST", action, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   xmlhttp.setRequestHeader("Content-Type", "text/xml");
xmlhttp.setRequestHeader("charset", "utf-8");
xmlhttp.send(data);
return xmlhttp.responseText;
}
function xmlhttpLoaded() {

if(xmlhttp.readyState == 4) {
if(xmlhttp.status == 200) {
//url存在 
return true;
}
 if(xmlhttp.status==404) {
//url不存在   
confirm("url不存在")
}
 
}

return false;
}
 //alert(getmydata("http://ddase.duoshuo.com/api/threads/listPosts.json?thread_key=1&url=http%3A%2F%2Fddase1014.cf%2F%3F%3D1&title=请替换成文章的标题&require=site%2Cvisitor%2Cnonce%2Clang%2Cunread%2Clog%2CextraCss&site_ims=1487771695&v=16.6.16"));






