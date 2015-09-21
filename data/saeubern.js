//
//  saeubern.js  --  Elemente von reformierter Rechtschreibung säubern
//

function saeubereString( s) {
  var r = s;

  r = r.replace( /sss/g, "ßs");
  r = r.replace( /ss(t(?:e[rnms])?)?\b/g, "ß$1");
  r = r.replace( /([bdfgklmnprt])\1\1(?=[aeiouyäöü])/g, "$1$1");
  r = r.replace( /([Pp]a)ss(?=w[oö]rt|phrase)/g, "$1ß");
  r = r.replace( /([Aa]dre)ss(?!en?|at)/g, "$1ß");

  r = r.replace( /([Pp]la)tz(?=ier)/g, "$1z");
  r = r.replace( /([Nn]u)mm(?=erier)/g, "$1m");
  r = r.replace( /([Ss])inf(?=oni)/g, "$1ymph");
  r = r.replace( /Albtraum/g, "Alptraum");
  r = r.replace( /([Ss]elbst)st(?=ändig)/g, "$1");
  r = r.replace( /(Ro|Jä|Zä)h(heit)/g, "$1$2");
  r = r.replace( /\b(rau)(e[mnrs]?)/g, "$1h$2");

  r = r.replace( /(ufw)ä(?=ndig)/g, "$1e");
  r = r.replace( /(chw)ä(?=nglich)/g, "$1e");
  r = r.replace( /([Ss]t)ä(?=ngel)/g, "$1e");
  r = r.replace( /\b(beh)ä(?=nde)/g, "$1e");
  r = r.replace( /([Gg])ä(?=ms)/g, "$1e");
  r = r.replace( /([Gg]r)ä(?=uel)/g, "$1e");
  r = r.replace( /([Bb])ä(?=ndel)/g, "$1e");
  r = r.replace( /([Bb]el)ä(?=mmer)/g, "$1e");
  r = r.replace( /([Qq]u)ä(?=ntchen)/g, "$1e");
  r = r.replace( /([Ee]inbl)ä(?=u)/g, "$1e");
  r = r.replace( /([Ss]chn)ä(?=uz)/g, "$1e");

  r = r.replace( /([Pp]ant)(?=er)/g, "$1h");
  r = r.replace( /([Kk]änguru)\b/g, "$1h");
  r = r.replace( /([Dd]el)f(?=in)/g, "$1ph");

  r = r.replace( /([Tt]i|[Mm]o|[Ss]t[eo])pp\b/g, "$1p");
  r = r.replace( /([Ss]tu)ck(?=ateur)/g, "$1kk");
  r = r.replace( /([Ss]pag)(?=etti)/g, "$1h");
  r = r.replace( /([Jj]og)(?=urt)/g, "$1h");
  r = r.replace( /([Rr]ally)\b/g, "$1e");
  r = r.replace( /([Tt]ol)l(?=patsch)/g, "$1");
  r = r.replace( /([Zz]ier)r(?=at)/g, "$1");

  r = r.replace( /([Pp]aragra)f/g, "$1ph");

  r = r.replace( /([Ii]m +)F(?=olgenden)/g, "$1f");
  r = r.replace( /([Ii]m +)A(?=llgemeinen)/g, "$1a");
  r = r.replace( /([Dd]es +)W(?=eiteren)/g, "$1w");
  r = r.replace( /([Dd]es +)Ö(?=fteren)/g, "$1ö");
  r = r.replace( /([Zz]u +)H(?=öherem)/g, "$1h");
  r = r.replace( /([Ss]eit +)L(?=angem|ängerem)/g, "$1l");

  r = r.replace( /([Dd]ifferen|[Pp]oten)z(?=ial|iell)/g, "$1t");
  r = r.replace( /([Jj]usti)z(?=ia[rb]|iell)/g, "$1t");
  r = r.replace( /(substan|exponen|existen)z(?=iell)/g, "$1t");

  return r;
}

function saeubereElement( elem) {
  if ("undefined" == typeof elem.data) {
    var i;
    var children = elem.childNodes;

    for (i = 0; i < children.length; ++i) {
      saeubereElement( children[ i]);
    }
  } else {
    elem.data = saeubereString( elem.data);
  }
}


function findeKodierung() {
  var cs = document.characterSet;
  void "Hat scheints keine Relevanz."
}


var lang;
try {
  lang = document.documentElement.lang;
}
catch (err) {
  lang = "";
}

if ("undefined" != typeof lang)
  if (lang == "" || lang.match( /^de/))
    saeubereElement( document.body);

