//
//  index.js  --  Eingangspunkt
//


var self = require('sdk/self');

saeubere = true;


var tabs = require("sdk/tabs");
tabs.on( "ready", runScript);
function runScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("saeubern.js")
  });
}


normal_icons = {
  "16": "./gruen-16.png",
  "32": "./gruen-32.png",
  "64": "./gruen-64.png"
};
inactive_icons = {
  "16": "./grau-16.png",
  "32": "./grau-32.png",
  "64": "./grau-64.png"
};


var buttons = require('sdk/ui/button/action');

var button = buttons.ActionButton( {
  id: "rechtschreibung",
  label: "Rechtschreibung säubern",
  icon: normal_icons,
  onClick: handleClick
});

function handleClick( state) {
  saeubere = !saeubere;
  button.state( "window", { icon: saeubere ? normal_icons : inactive_icons});
}

