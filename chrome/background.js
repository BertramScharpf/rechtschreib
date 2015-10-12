//
//  background.js  --  Switch active state
//

var active = true;

var normal_icons = {
    "19":  "images/gruen-19.png",
    "38":  "images/gruen-38.png"
};
var inactive_icons = {
    "19":  "images/grau-19.png",
    "38":  "images/grau-38.png"
};

function switchActive() {
    active = !active;
    chrome.browserAction.setIcon( {
        path : (active ? normal_icons : inactive_icons) 
    });
}
chrome.browserAction.onClicked.addListener( switchActive);


function onRequest( request, sender, callback) {
    if (request.action == 'is_active') {
        if (active)
            callback();
    }
}
chrome.extension.onRequest.addListener(	onRequest);

