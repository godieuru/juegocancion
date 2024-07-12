const songs = [
    {
      title: "Baby One More Time",
      artist: "Britney Spears",
      src: "./media/musica/Britney Spears - Baby One More Time.mp4",
    },
    {
      title: "Genie in a Bottle",
      artist: "Christina Aguilera",
      src: "./media/musica/Christina Aguilera - Genie In A Bottle.mp4",
    },
    {
      title: "Basket Case",
      artist: "Green Day",
      src: "./media/musica/Green Day - Basket Case.mp4",
    },
    {
      title: "Smell Like a Teen Spirit",
      artist: "Nirvana",
      src: "./media/musica/Nirvana - Smells Like Teen Spirit.mp4",
    },
    {
      title: "Wonderwall",
      artist: "Oasis",
      src: "./media/musica/Oasis - Wonderwall.mp4",
    },
    {
      title: "Wannabe",
      artist: "Spice Girls",
      src: "./media/musica/Spice Girls - Wannabe.mp4",
    },
    {
      title: "Under the Bridge",
      artist: "Red Hot Chili Peppers",
      src: "./media/musica/Red Hot Chili Peppers - Under The Bridge.mp4",
    },
  ];
  
  let cancion = null;
  let intentos = 0;
  let currentTime = 0;
  let audio = null;
  
  function startGame() {
    intentos = 0;
    currentTime = 0;
    audio = null;
  
    cancion = songs[Math.floor(Math.random() * songs.length)];
    alert(`Artista: ${cancion.artist}`);
    reproducir();
  }
  
  function reproducir() {
    if (!audio) {
      audio = new Audio(cancion.src);
    }
    audio.currentTime = currentTime;
    audio.play();
  
    setTimeout(() => {
      audio.pause();
      currentTime = audio.currentTime;
      preguntatitulo();
    }, 5000);
  }
  
  function preguntatitulo() {
    const title = prompt("¿Cual es el nombre de la canción?");
    if (title.toLowerCase() === cancion.title.toLowerCase()) {
      alert("Muy bien");
      if (confirm("¿Te gustaría jugar de nuevo?")) {
        startGame();
      }
    } else {
      intentos++;
      if (intentos < 3) {
        alert("Prueba de nuevo. Escucha 5 segundos más.");
        reproducir();
      } else {
        alert("Perdiste =(");
        if (confirm("¿Te gustaría jugar de nuevo?")) {
          startGame();
        }
      }
    }
  }
  
  window.onload = function () {
    const startButton = document.getElementById("startButton");
    startButton.onclick = startGame;
  };
  