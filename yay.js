    window.onload = function () {
        const music = document.getElementById("bgMusic");
        music.volume = 0.5;
        music.play().catch(() => {
            console.log("Autoplay blocked 😔 Waiting for interaction.");
        });
    };