//
//  index.js  --  Eingangspunkt
//

var self = require('sdk/self');
var tabs = require("sdk/tabs");


tabs.on( "ready", runScript);
function runScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("saeubern.js")
  });
}


var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton({
  id: "bsch-link",
  label: "Visit Bertram Scharpf",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open( "http://www.bertram-scharpf.de");
}

