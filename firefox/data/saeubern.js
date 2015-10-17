//
//  saeubern.js  --  Elemente von reformierter Rechtschreibung säubern
//

var gender = true;
var schweiz = true;

function dreiDavorDanach( such, nicht) {
    var v = RegExp[ "$`"], n = RegExp[ "$'"];
    var m, i, a = [];

    for (i=0; i<3; i++) {
        m = v.match( /([a-zäöüß]+)\s+$/);
        if (!m)
            break;
        a.push( m[ 1]);
        v = RegExp[ "$`"]
    }
    for (i=0; i<3; i++) {
        m = n.match( /^\s+([a-zäöüß]+)/);
        if (!m)
            break;
        a.push( m[ 1]);
        n = RegExp[ "$'"]
    }
    for (i=0; i < a.length; i++) {
        if (a[i].match( nicht))
            return false;
        if (a[i].match( such))
            return true;
    }
    return false;
}

function saeubereString( s) {
    var r = s;

    r = r.replace( /([Ii]m +)F(?=olgenden)/g, "$1f");
    r = r.replace( /([Ii]m +)A(?=llgemeinen)/g, "$1a");
    r = r.replace( /([Ii]m +)Ü(?=brigen)/g, "$1ü");
    r = r.replace( /(\b(?:[Dd]es|[Aa]uf) +)W(?=eitere)/g, "$1w");
    r = r.replace( /([Ii]m +)W(?=esentlichen)/g, "$1w");
    r = r.replace( /([Dd]es +)Ö(?=fteren)/g, "$1ö");
    r = r.replace( /([Zz]u +)H(?=öherem)/g, "$1h");
    r = r.replace( /([Ss]eit +)L(?=angem|ängerem)/g, "$1l");

    r = r.replace( /([Pp]la)tz(?=ier)/g, "$1z");
    r = r.replace( /([Nn]u)mm(?=erier)/g, "$1m");
    r = r.replace( /([Ss])inf(?=oni)/g, "$1ymph");
    r = r.replace( /([Aa]l)b(?=tr[aä]um|dr[uü]ck)/g, "$1p");
    r = r.replace( /([Ss]elbst)st(?=ändig)/g, "$1");
    r = r.replace( /(Ro|Jä|Zä)h(heit)/g, "$1$2");
    r = r.replace( /\b(rau)(?=(e[mnrs]?)?\b|est|ge)/g, "$1h");
    r = r.replace( /\b(Rr]au)(?:igkeit)/g, "$1h");
    r = r.replace( /\b(Rau)(?!heit)(?=anstalt|b[aä]nk|bauz|bein|borst|eis|en|faser|frost|futter|fuß|haar|hacken|hafer|igkeit|leder|n[aä]cht|nächte|putz|reif|stimm|tiefe|zahn|zylinder)/g, "$1h");
    r = r.replace( /([Aa](?:uf|b)rau)(?=en)(?![bckmnpst])/g, "$1h");
    r = r.replace( /(A|(?:Kreuz|Treff|Pik|Grün|Herz|Rot|Karo|Schellen|Trumpf|Flieger)a)ss\b/g, "$1s");

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

    r = r.replace( /([Tt]i|[Mm]o|[Ss]t[eo])pp(?=s?\b)/g, "$1p");
    r = r.replace( /([Ss]tu)ck(?=ateur)/g, "$1kk");
    r = r.replace( /([Ss]pag)(?=etti)/g, "$1h");
    r = r.replace( /([Jj]og)(?=urt)/g, "$1h");
    r = r.replace( /((?:[A-ZÄÖÜ][a-zäöüß]+r|R)ally)\b/g, "$1e");
    r = r.replace( /([Tt]ol)l(?=patsch)/g, "$1");
    r = r.replace( /([Zz]ier)r(?=at)/g, "$1");
    r = r.replace( /([Pp]ort)monee/g, "$1emonnaie");

    r = r.replace( /([Pp]aragra)f/g, "$1ph");

    r = r.replace( /([Dd]ifferen|[Pp]oten)z(?=ial|iell)/g, "$1t");
    r = r.replace( /([Jj]usti)z(?=ia[rb]|iell)/g, "$1t");
    r = r.replace( /(substan|exponen|existen)z(?=iell)/g, "$1t");

    r = r.replace( /([bdfgklmnprt])\1\1(?=[aeiouyäöü])/g, "$1$1");

    r = r.replace( /ss(?=­)/, "ß");
    r = r.replace( /ss(t)?s/g, "ß$1s");
    r = r.replace( /((?:^|\W)(?:[AEIOUYÄÖÜaeiouyäöü]))ss(?![aeiouyäöü])/g, "$1ß");
    r = r.replace( /((?:^|\W)(?:[BbFfNnPp]a|[Mm][eiü]|[Rr][ou]|[FfGg]u))ss(?![aeiouäöüy])/g, "$1ß");
    r = r.replace( /((?:^|\W)(?!Frä|G[rl]a|I[br]i)[A-Za-zäöüÄÖÜ](?:[fnlprt][aeiouäöüy]))ss(?![aeiouäöüy])/g, "$1ß");
    r = r.replace( /((?:^|\W)(?:[ABD-ZÄÖÜabd-zäöüß]|ch|ck)+)ss(t(?:e[rnms]?)?)?\b(?!\S*\w)/g, "$1ß$2");
    r = r.replace( /([a-zäöü])ss(?=[bdfghjlmnqrvwx]\w*[aeiouyäöü]\w|c(?:[^h]|h(?:en\b|arakt|emi[eks]|irurg)))/g, "$1ß");
    r = r.replace( /([a-zäöü])ss(?=k(?!al[ae]|anda|izz|lav|ont[oi]|ript))/g, "$1ß");
    r = r.replace( /([a-zäöü])ss(?=z(?!ene))/g, "$1ß");
    r = r.replace( /ssp(?=f|re(?!ch|ng|i)|l[^i])/g, "ßp");

    r = r.replace( /([Mm]i)ss(?=ach|trau|ern|erfolg|t[oö]n)/g, "$1ß");
    r = r.replace( /((?:[Ss]ch|[Ff])l?[uo])ss(?!e[lmnrst]?|i[gl]|ung)/g, "$1ß");
    r = r.replace( /([Ss]pro)ss/g, "$1ß");
    r = r.replace( /(pa)ss(?=w[oö]rt|phrase)/g, "$1ß");
    r = r.replace( /([Aa]dre)ss(?!e|at|ier)/g, "$1ß");
    r = r.replace( /([Pp]roze|[Kk]ongre)ss(?!e|or|ion|ier)/g, "$1ß");
    r = r.replace( /ss(?=en(?:dlich|erg[ie]))/g, "ß");
    r = r.replace( /([Gg]u)ss(?=eiser?n)/g, "$1ß");
    r = r.replace( /([Bb]iogra)f/g, "$1ph");

    try {
        r = r.replace( /\bLeid\b/g, function( match) {
            return dreiDavorDanach( /^tu[tn]$/, null) ? "leid" : "Leid";
        });
        r = r.replace( /\bRecht\b/g, function( match) {
            return dreiDavorDanach( /^(?:ha(?:be|st|t|ben)|beh[aä]lt(?:e|st|t|en|et))$/, /^(k?ein|das)$/) ? "recht" : "Recht";
        });
    }
    catch (err) {
        // Dann geht's eben nicht.
    }

    r = r.replace( /([Kk]ennen)\s+(?=(?:ge)?lern)/g, "$1­");
    r = r.replace( /([Ll]eer)\s+(?=steh|gestand)/g, "$1­");
    r = r.replace( /([Mm]eist)\s+(?=gelesen)/g, "$1­");
    r = r.replace( /([Ww]ieder)\s+(?=beleb)/g, "$1­");
    r = r.replace( /([Ww]eiter)\s+(?=(?:ge)?reich)/g, "$1­");
    r = r.replace( /([Ll]ieb)\s+(?=gew[io]nn)/g, "$1­");
    r = r.replace( /([Ss]elbst)\s+(?=ernannt)/g, "$1­");

    if (schweiz) {
        r = r.replace( /((?:^|\W)(?:ver)?(?:[aAäÄ]u|[Gg]r[oö]))ss(?=e(?:\b|r|n(?!d)))/g, "$1ß");
    }

    if (gender) {
        r = r.replace( /([a-zäöüß]+)In(?:n(en))?\b/g, "$1$2");
    }

    return r;
}

function saeubereAttribut( elem, attr) {
    var t = elem.getAttribute( attr);
    if (t)
        elem.setAttribute( attr, saeubereString( t));
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
        saeubereAttribut( elem, "title");
        saeubereAttribut( elem, "placeholder");
    } else {
        elem.data = saeubereString( elem.data);
    }
}

function deutscheSeite() {
    var lang;
    var html = document.documentElement;

    if ("undefined" == typeof html)
        return false;

    lang = html.lang;
    if (!lang || lang == "")
        lang = html.getAttribute( 'xml:lang');
    if (!lang || lang == "") {
        if (document.location.hostname.match( /\.(?:de|at|ch|li)$/))
            return true;
    } else {
        if (lang.match( /^de/))
            return true;
    }
    return false;
}

function saeubere() {
    if (deutscheSeite()) {
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

self.port.on( "saeubereDokument", function( options) {
    gender = options.gender;
    saeubere();
});

