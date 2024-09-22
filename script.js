function playAudio() {
  var audio = document.getElementById('audio');
  
  if (audio.paused) {
      audio.play(); // Si el audio está en pausa, comienza a reproducir
  } else {
      audio.pause(); // Si el audio está reproduciéndose, se pausa
  }
}
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };