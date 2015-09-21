//
//  index.js  --  Eingangspunkt
//

var self = require('sdk/self');

require("sdk/tabs").on( "ready", runScript);


function runScript(tab) {
  tab.attach({
    contentScriptFile: self.data.url("saeubern.js")
  });
}

