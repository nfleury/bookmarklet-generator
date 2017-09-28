// check for config
console.log('BOOKMARKLET_CONFIG',BOOKMARKLET_CONFIG);
if (!BOOKMARKLET_CONFIG){
throw new Error("No BOOKMARKLET_CONFIG defined");
}

// load external scripts
if (BOOKMARKLET_CONFIG.urls && BOOKMARKLET_CONFIG.urls.length>0){
    for(var i=0;i<BOOKMARKLET_CONFIG.urls.length;i++){
        var url = BOOKMARKLET_CONFIG.urls[i]
        var s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = url;
            document.body.appendChild(s);
    }
}
// load main script if available
if (BOOKMARKLET_CONFIG.script){
    var s = document.createElement('script');
    s.type = 'text/javascript';
    var code = BOOKMARKLET_CONFIG.script;
    try {
        s.appendChild(document.createTextNode(code));
        document.body.appendChild(s);
    } catch (e) {
        s.text = code;
        document.body.appendChild(s);
    }
}

