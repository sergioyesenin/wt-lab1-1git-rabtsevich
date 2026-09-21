AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: false,      // анимации проигрываются при каждом проходе
  offset: 80
});

const section = document.getElementById('mediaSection');
const audio   = document.getElementById('bgAudio');
const btn     = document.getElementById('audioBtn');

audio.volume = 0.55;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      audio.play()
        .then(() => btn.classList.add('d-none'))
        .catch(() => btn.classList.remove('d-none')); // браузер запретил автозапуск
    } else {
      audio.pause();
      audio.currentTime = 0; // сбрасываем, чтобы при возврате начиналось с начала
    }
  });
}, { threshold: 0.5 });

observer.observe(section);

btn.addEventListener('click', () => {
  audio.play();
  btn.classList.add('d-none');
});