document.addEventListener("keydown", function (event) {
    if (event.code === "KeyA") {
        let soundA = new Audio()
        soundA.play();
    } else if (event.code === "KeyS") {
        let soundS = new Audio("/WhiteKeys/A.mp3");
        soundS.play();
    } else if (event.code === "KeyD") {
        let soundD = new Audio("/WhiteKeys/D.mp3");
        soundD.play();
    } else if (event.code === "KeyF") {
        let soundF = new Audio("/WhiteKeys/F.mp3");
        soundF.play();
    } else if (event.code === "KeyG") {
        let soundG = new Audio("/WhiteKeys/G.mp3");
        soundG.play();
    } else if (event.code === "KeyH") {
        let soundH = new Audio("/WhiteKeys/H.mp3");
        soundH.play();
    } else if (event.code === "KeyJ") {
        let soundJ = new Audio("/WhiteKeys/J.mp3");
        soundJ.play();
    }

    if (event.code === "KeyW") {
        let soundW = new Audio("/BlackKeys/W.mp3");
        soundW.play();
    } else if (event.code === "KeyE") {
        let soundE = new Audio("/BlackKeys/E.mp3");
        soundE.play();
    } else if (event.code === "KeyT") {
        let soundT = new Audio("/BlackKeys/T.mp3");
        soundT.play();
    } else if (event.code === "KeyY") {
        let soundY = new Audio("/BlackKeys/Y.mp3");
        soundY.play();
    } else if (event.code === "KeyU") {
        let soundU = new Audio("/BlackKeys/U.mp3");
        soundU.play();
    }
});