document.addEventListener('DOMContentLoaded', function() {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const albumCover = document.getElementById('album-cover');
    const albumName = document.getElementById('album-name');
  
    // Array de objetos que contienen las imágenes y sus nombres
    const albums = [
      {
        src: "https://indierocks.sfo3.digitaloceanspaces.com/wp-content/uploads/2021/10/Black-Country-New-Road-AntsFromUpThere_2021.jpeg",
        name: "Ants From Up There - Black Country New Roads"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/a/a0/Blonde_-_Frank_Ocean.jpeg",
        name: "Blonde - Frank Ocean"
      },
      {
        src: "https://upload.wikimedia.org/wikipedia/en/7/7d/Fishmans_Long_Season.jpg",
        name: "Long Season - Fishmans"
      }
    ];
  
    let currentIndex = 0;
  
    function updateAlbum(index) {
      albumCover.src = albums[index].src;
      albumName.innerHTML = `<h6>${albums[index].name}</h6>`;
    }
  
    leftArrow.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Evita la propagación del evento
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : albums.length - 1;
      updateAlbum(currentIndex);
    });
  
    rightArrow.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Evita la propagación del evento
      currentIndex = (currentIndex < albums.length - 1) ? currentIndex + 1 : 0;
      updateAlbum(currentIndex);
    });
  });