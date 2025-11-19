// GOOD VIBES MUSIC — controle das barras animadas
const audio = document.getElementById("gv-audio");
const bars = document.querySelectorAll(".sound-bars span");

if (audio) {
    audio.addEventListener("play", () => {
        bars.forEach(b => b.style.animationPlayState = "running");
    });

    audio.addEventListener("pause", () => {
        bars.forEach(b => b.style.animationPlayState = "paused");
    });

    // começa pausado
    bars.forEach(b => b.style.animationPlayState = "paused");
}
// GOOD VIBES — PARTÍCULAS FLUTUANDO
const particlesContainer = document.querySelector(".particles-wrapper");

if (particlesContainer) {
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        // posições e velocidade aleatórias
        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDuration = 4 + Math.random() * 6 + "s";
        particle.style.opacity = Math.random();

        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    // cria 1 partícula a cada 300ms
    setInterval(createParticle, 300);
}
// GOOD VIBES — NIGHT MODE
const nightBtn = document.getElementById("nightToggle");

if (nightBtn) {
    nightBtn.addEventListener("click", () => {
        document.body.classList.toggle("night");

        if (document.body.classList.contains("night")) {
            nightBtn.textContent = "☀️ Light Mode";
        } else {
            nightBtn.textContent = "🌙 Night Mode";
        }
    });
}
// GOOD VIBES — CARD 3D INTERATIVO
const card = document.getElementById("card3D");

if (card) {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // cálculo do efeito 3D
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 12; 
        const rotateY = ((x - centerX) / centerX) * -12;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        // brilho acompanhando o mouse
        const shine = card.querySelector(".shine");
        shine.style.left = `${x}px`;
        shine.style.top = `${y}px`;
    });

    // Quando o mouse sai, o card volta ao normal
    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0deg) rotateY(0deg)";
    });
}
