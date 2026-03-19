const bgm = document.getElementById("bgm");

if (bgm) {
  const startMusic = () => {
    bgm.volume = 0.3;
    bgm.play().catch(() => {
      console.error("Erro ao iniciar a música de fundo");
    });
    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
    document.removeEventListener("scroll", startMusic);
  };

  document.addEventListener("click", startMusic);
  document.addEventListener("keydown", startMusic);
  document.addEventListener("scroll", startMusic);
}
