function setPlayHead() {
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let playHead = urlParams.get('playStart');

    if (playHead !== null) {
        let trySetPlayHead = setInterval(function(){
            try {
                let assetURI = player.getAssetUri();
                player.load(assetURI, playHead);
                clearInterval(trySetPlayHead)
            } catch (error) {
                console.log("Player not loaded yet...")
            }
        }, 1000)
    }
}

function embed(fn) {
    const script = document.createElement("script");
    script.text = `(${fn.toString()})();`;
    document.documentElement.appendChild(script);
}

embed(setPlayHead)
