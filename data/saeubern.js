//
//  saeubern.js  --  Elemente von reformierter Rechtschreibung säubern
//

var gender = true;

function saeubereString( s) {
  var r = s;

  r = r.replace( /([Ii]m +)F(?=olgenden)/g, "$1f");
  r = r.replace( /([Ii]m +)A(?=llgemeinen)/g, "$1a");
  r = r.replace( /([Dd]es +)W(?=eiteren)/g, "$1w");
  r = r.replace( /([Dd]es +)Ö(?=fteren)/g, "$1ö");
  r = r.replace( /([Zz]u +)H(?=öherem)/g, "$1h");
  r = r.replace( /([Ss]eit +)L(?=angem|ängerem)/g, "$1l");

  r = r.replace( /([Pp]la)tz(?=ier)/g, "$1z");
  r = r.replace( /([Nn]u)mm(?=erier)/g, "$1m");
  r = r.replace( /([Ss])inf(?=oni)/g, "$1ymph");
  r = r.replace( /([Aa]l)b(?=tr[aä]um|dr[uü]ck)/g, "$1p");
  r = r.replace( /([Ss]elbst)st(?=ändig)/g, "$1");
  r = r.replace( /(Ro|Jä|Zä)h(heit)/g, "$1$2");
  r = r.replace( /\b(rau)(?=(e[mnrs]?)?\b|est|ge|haar|bein)/g, "$1h");
  r = r.replace( /\b(Rr]au)(?:igkeit)/g, "$1h");
  r = r.replace( /\b(Rau)\B(?:(?=haar|heit)|(?!h))/g, "$1h");
  r = r.replace( /\b(Rau)(?=anstalt|b[aä]nk|bauz|bein|eis|en|faser|frost|futter|fuß|haar|hacken|hafer|igkeit|leder|n[aä]cht|nächte|putz|reif|stimm|tiefe|zahn|zylinder)/g, "$1h");
  r = r.replace( /([Aa](?:uf|b)rau)(?=en)(?![bckmnpst])/g, "$1h");
  r = r.replace( /(A|(?:Kreuz|Treff|Pik|Grün|Herz|Rot|Karo|Schellen|Trumpf|Flieger)a)ss/g, "$1s");

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

  r = r.replace( /([Dd]ifferen|[Pp]oten)z(?=ial|iell)/g, "$1t");
  r = r.replace( /([Jj]usti)z(?=ia[rb]|iell)/g, "$1t");
  r = r.replace( /(substan|exponen|existen)z(?=iell)/g, "$1t");

  r = r.replace( /([bdfgklmnprt])\1\1(?=[aeiouyäöü])/g, "$1$1");
  r = r.replace( /sss/g, "ßs");
  r = r.replace( /\b((?:[ABD-ZÄÖÜabd-zäöüß]|ch|ck)+)ss(t(?:e[rnms])?)?\b/g, "$1ß$2");
  r = r.replace( /([Pp]a)ss(?=w[oö]rt|phrase)/g, "$1ß");
  r = r.replace( /([Aa]dre)ss(?!en?|at)/g, "$1ß");

  if (gender) {
    r = r.replace( /([a-zäöüß]+)In(?:n(en))?\b/g, "$1$2");
  }

  return r;
}

function saeubereElement( elem) {
  if (elem == null)
    return;
  if ("undefined" == typeof elem.data) {
    if (elem.localName != "code") {
      var i;
      var children = elem.childNodes;

      for (i = 0; i < children.length; ++i) {
        saeubereElement( children[ i]);
      }
    }
  } else {
    elem.data = saeubereString( elem.data);
  }
}

function saeubere() {
  var lang;

  try {
    lang = document.documentElement.lang;
  }
  catch (err) {
    lang = "";
  }

  if ("undefined" != typeof lang)
    if (lang == "" || lang.match( /^de/)) {
      if ("undefined" != typeof document.body)
        saeubereElement( document.body);
      if ("undefined" != typeof document.title)
        document.title = saeubereString( document.title);
    }
}


function findeKodierung() {
  var cs = document.characterSet;
  void "Hat scheints keine Relevanz."
}


saeubere();

