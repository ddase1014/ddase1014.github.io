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

//XMLHttpRequest����ʹ��GET��ʽ�첽��������
function getmydata(action){
xmlhttp.onreadystatechange=xmlhttpLoaded;
    xmlhttp.open("GET", action, false);
    xmlhttp.send();
return xmlhttp.responseText;
}
//XMLHttpRequest����ʹ��POST��ʽ�첽��������
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
//url���� 
return true;
}
 if(xmlhttp.status==404) {
//url������   
confirm("url������")
}
 
}

return false;
}
 //alert(getmydata("http://ddase.duoshuo.com/api/threads/listPosts.json?thread_key=1&url=http%3A%2F%2Fddase1014.cf%2F%3F%3D1&title=���滻�����µı���&require=site%2Cvisitor%2Cnonce%2Clang%2Cunread%2Clog%2CextraCss&site_ims=1487771695&v=16.6.16"));






