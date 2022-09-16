(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();

    var getValues = () => new Promise((e, t) => {
        try {
            let n = window.webpackJsonp.map(e => Object.keys(e[1]).map(t => e[1][t])).reduce((e, t) => [...e, ...t], []).find(e => /\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/.test(e.toString()) && /\(new TextEncoder\)\.encode\(\"(.+?)\"\)/.test(e.toString())).toString();
            e({
                blooketBuild: n.match(/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}/)[0],
                secret: n.match(/\(new TextEncoder\)\.encode\(\"(.+?)\"\)/)[1]
            })
        } catch {
            t("Could not fetch details")
        }
    })
    var encodeValues = async (e, t) => {
        let d = window.crypto.getRandomValues(new Uint8Array(12));
        return window.btoa(Array.from(d).map(e => String.fromCharCode(e)).join("") + Array.from(new Uint8Array(await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv: d
        }, await window.crypto.subtle.importKey("raw", await window.crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t)), {
            name: "AES-GCM"
        }, !1, ["encrypt"]), (new TextEncoder).encode(JSON.stringify(e))))).map(e => String.fromCharCode(e)).join(""))
    };
            fetch("https://api.blooket.com/api/users", { credentials: "include" }).then(x => x.json()).then(x => {
                getValues().then(async e => {
                    fetch("https://api.blooket.com/api/users/add-rewards", {
                        method: "put",
                        credentials: "include",
                        headers: {
                            "content-type": "application/json",
                            "X-Blooket-Build": e.blooketBuild
                        },
                        body: await encodeValues({
                            name: x.name,
                            addedTokens: 500,
                            addedXp: 300
                        }, e.secret)
                    });
                    fetch("https://api.blooket.com/api/users/add-rewards", {
                        method: "put",
                        credentials: "include",
                        headers: {
                            "content-type": "application/json",
                            "X-Blooket-Build": e.blooketBuild
                        },
                        body: await encodeValues({
                            name: x.name,
                            addedTokens: 500,
                            addedXp: 300
                        }, e.secret)
                    }).then(() => alert('Added daily tokens, and XP!')).catch(() => alert('There was an error adding rewards!'));;
                }).catch(() => alert('There was an error encoding this request.'));
            }).catch(() => alert('There was an error fetching username!'));
})();;
