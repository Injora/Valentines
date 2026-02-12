        const letter = document.getElementById("letter");
        const music = document.getElementById("bg-music");
        const nobtn = document.getElementById("no");
        const yesBtn = document.getElementById("yes");
        const parent = document.getElementById("parent");

        letter.addEventListener("click", () => {
            if (letter.classList.contains("open")) return;

            letter.classList.add("open");

            setTimeout(() => {
                letter.classList.add("zoom");
            }, 900);

            setTimeout(() => {
                parent.style.opacity = 1;
                parent.style.scale = 1;
                parent.style.pointerEvents = "auto";

                letter.style.opacity = "0";
                letter.style.pointerEvents = "none";

                music.volume = 0.5;
                music.play().catch(() => { });
            }, 1600);
        });


        let count = 0
        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });

        yesBtn.addEventListener("click", () => {
            window.location.href = "yay.html";
        });
        let posX = 0;
        let posY = 0;
        nobtn.style.position = "relative";
        nobtn.style.transition = "transform 0.2s ease";
        function dodgeNoButton() {
            count++;

            const scale = 1 + count * 0.25;
            yesBtn.style.transform = "scale(1)";
            requestAnimationFrame(() => {
                yesBtn.style.transform = `scale(${scale})`;
            });

            const step = 8 + Math.random() * 8;
            let dx = (Math.random() > 0.5 ? 1 : -1) * step;
            let dy = (Math.random() > 0.5 ? 1 : -1) * step;

            const MIN_X = -40;
            const MAX_X = 40;
            const MIN_Y = -25;
            const MAX_Y = 25;

            let nextX = posX + dx;
            let nextY = posY + dy;
            if (nextX < MIN_X || nextX > MAX_X) dx *= -1;
            if (nextY < MIN_Y || nextY > MAX_Y) dy *= -1;

            posX += dx;
            posY += dy;

            nobtn.style.transform = `translate(${posX}vw, ${posY}vh)`;
        }
        nobtn.addEventListener("mouseover", dodgeNoButton);
        nobtn.addEventListener("touchstart", (e) => {
            e.preventDefault();
            dodgeNoButton();
        });