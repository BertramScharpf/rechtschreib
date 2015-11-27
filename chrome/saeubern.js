//
//  saeubern.js  --  Elemente von reformierter Rechtschreibung säubern
//

var gender = true;
var schweiz = true;

function woerterDavorDanach( anz, such, nicht) {
    var v = RegExp[ "$`"], n = RegExp[ "$'"];
    var m, i;

    for (i=0; i<anz; i++) {
        if (v) {
            if (m = v.match( /([a-z\u00c0-\u017f]+)\s+$/)) {
                v = RegExp[ "$`"];
                if (m[ 1].match( nicht))
                    return false;
                if (m[ 1].match( such))
                    return true;
            } else
                if (n)
                    v = null;
                else
                    break;
        }
        if (n) {
            if (m = n.match( /^\s+([a-z\u00c0-\u017f]+)/)) {
                n = RegExp[ "$'"]
                if (m[ 1].match( nicht))
                    return false;
                if (m[ 1].match( such))
                    return true;
            } else
                if (v)
                    n = null;
                else
                    break;
        }
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
    r = r.replace( /([Dd]el)f(?=in(?![gk]e[rnlms]\b))/g, "$1ph");

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
    r = r.replace( /((?:^|\W)(?!Frä|G[rl]a|I[br]i)[A-Za-zäöüÄÖÜ](?!nis)(?:[fnlprt][aeiouäöüy]))ss(?![aeiouäöüy])/g, "$1ß");
    r = r.replace( /((?:^|\W)(?![a-zäöüß]*wiss\.)(?:[ABD-ZÄÖÜabd-zäöüß]|ch|ck)+)ss(t(?:e[rnms]?)?)?\b(?=[-­.,;:!?]|$|(?!\S*\w))/g, "$1ß$2");
    r = r.replace( /([a-zäöü])ss(?=[bdfgjlmnqrvwx]\w*[aeiouyäöü]\w|c(?:[^h]|h(?:en\b|arakt|emi[eks]|irurg))|h(?!ow))/g, "$1ß");
    r = r.replace( /([a-zäöü])ss(?=k(?!al[ae]|anda|izz|lav|ont[oi]|ript))/g, "$1ß");
    r = r.replace( /([a-zäöü])ss(?=z(?!en[ae]))/g, "$1ß");
    r = r.replace( /ssp(?=f|re(?!ch|ng|i)|l[^i])/g, "ßp");

    r = r.replace( /([Mm]i)ss(?=ach|trau|ern|erfolg|t[oö]n)/g, "$1ß");
    r = r.replace( /((?:[Ss]ch|[Ff])l?[uo])ss(?!e[lmnrst]?|i[gl]|ung)/g, "$1ß");
    r = r.replace( /([Ss]pro)ss/g, "$1ß");
    r = r.replace( /([Gg]u)ss/g, "$1ß");
    r = r.replace( /([Nn]u)ss(?=pal­?m)/g, "$1ß");
    r = r.replace( /([Gg]e)wiss\b/g, "$1ß");
    r = r.replace( /(pa)ss(?=w[oö]rt|phrase)/g, "$1ß");
    r = r.replace( /([Aa]dre)ss(?!e|at|ier)/g, "$1ß");
    r = r.replace( /([Pp]roze|[Kk]ongre)ss(?!e|or|ion|ier)/g, "$1ß");
    r = r.replace( /ss(?=en(?:dlich|erg[ie]))/g, "ß");
    r = r.replace( /([Gg]u)ss(?=eiser?n)/g, "$1ß");
    r = r.replace( /([Bb]iogra)f/g, "$1ph");

    if (schweiz) {
        r = r.replace( /((?:^|\W)(?:ver)?(?:[aAäÄ]u|[Gg]r[oö]))ss(?=e(?:\b|r|n(?!d)))/g, "$1ß");
    }

    r = r.replace( /s­?(?=t(?!a[lgt]|ip|o[dnr]|um|yp|ür)(?:[aeiouäöüy](?:c[hk]|st|[ghklmnrst])?\b))/g, "­s‍");
    r = r.replace( /(\B[bcdfghjklmnprtvwxz][aeiouäöüy])s­?tr(?![äa](?:[iku]|ch|nk)|e[tnu]|ibu|unk|[aoä]u|)/g, "$1­s‍tr");

    r = r.replace( /\bLeid\b/g, function( match) {
        return woerterDavorDanach( 8, /^(?:tu[tn]|getan)$/i, null) ? "leid" : match;
    });
    r = r.replace( /\bRecht\b/g, function( match) {
        return woerterDavorDanach( 8, /^(?:ha(?:be|st|t|ben)|beh[aä]lt(?:e|st|t|en|et))$/i, /^(k?ein|das)$/) ? "recht" : match;
    });
    r = r.replace( /\bBescheid\b/g, function( match) {
        return woerterDavorDanach( 6, /^(?:we?iß|wissen|wußte|gewußt|(?:ge)?g[aei]b|(?:ge)?sag)/i, null) ? "bescheid" : match;
    });
    r = r.replace( /\bKürzeren\b/g, function( match) {
        return woerterDavorDanach( 6, /^(?:zieh|(?:ge)?zog)/i, null) ? "kürzeren" : match;
    });
    r = r.replace( /(im\s+)G(roßen\s+und\s+)G(?=anzen)/g, "$1g$2g");
    r = r.replace( /(im\s+)V(?=oraus)/g, "$1v");
    r = r.replace( /(vor\s+)K(?=urzem)/g, "$1k");
    r = r.replace( /(seit\s+)L(?=angem)/g, "$1l");

    r = r.replace( /([Kk]ennen)\s+(?=(?:ge)?lern)/g, "$1­");
    r = r.replace( /([Ll]eer)\s+(?=steh|gestand)/g, "$1­");
    r = r.replace( /([Mm]eist)\s+(?=gelesen)/g, "$1­");
    r = r.replace( /([Ww]ieder)\s+(?=beleb)/g, "$1­");
    r = r.replace( /([Ww]eiter)\s+(?=(?:ge)?reich)/g, "$1­");
    r = r.replace( /([Ll]ieb)\s+(?=gew[io]nn)/g, "$1­");
    r = r.replace( /([Ss]elbst)\s+(?=ernannt)/g, "$1­");
    r = r.replace( /([Hh]erbei)\s+(?=(?:ge)?(?:wünsch|sehn))/g, "$1­");
    r = r.replace( /([Ff]risch)\s+(?=(?:ge)?halt)/g, "$1­");
    r = r.replace( /([Gg]ut)\s+(?=geh|gegangen|aussehend)/g, "$1­");
    r = r.replace( /([Vv]iel)\s+(?=be(?:fahren|achtet))/g, "$1­");
    r = r.replace( /([Ww]eiter)\s+(?=entwick)/g, "$1­");
    r = r.replace( /([Gg]efangen)\s+(?=n[aeä]hm|nimm|genommen|(?:ge)?h[aä]lt)/g, "$1­");
    r = r.replace( /(Aufsehen)\s+(?=erreg)/g, function( match) {
        var auf = RegExp[ "$1"], ers = match;
        var pre = (RegExp[ "$`"].match( /\S+(?=\s*$)/)||[""])[ 0];
        if (!pre.match( /viel|großes|kaum|kein/i)) {
            if (!pre.match( /[.!?:]$/))
                auf = auf.toLowerCase();
            ers = auf + "­";
        }
        return ers;
    });

    if (gender) {
        r = r.replace( /([a-z\u00c0-\u017f]+)In(?:n(en))?/g, "$1$2");
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


var umlautTiefe;

function findeUmlaut( elem) {
    var data;
    if (!elem)
        return false;
    data = elem.data;
    if ("undefined" != typeof data) {
        if (data.match( /[äöüßÄÖÜ]/))
            return true;
        umlautTiefe -= data.length;
    } else {
        var children = elem.childNodes;
        if ("undefined" != typeof children) {
            var i;
            for (i = 0; i < children.length && umlautTiefe > 0; ++i) {
                switch (elem.localName) {
                    case "script":
                    case "style":
                        continue;
                }
                if (findeUmlaut( children[ i]))
                    return true;
            }
        }
    }
    return false;
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
        umlautTiefe = 5000;
        if (findeUmlaut( document.body))
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

chrome.extension.sendRequest( {	'action' : 'is_active'},
    function( response) {
        saeubere();
    }
);


