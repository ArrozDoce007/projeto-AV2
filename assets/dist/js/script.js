function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoPlayerContainer', {
    height: '480',
    width: '100%',
    videoId: 'GoFDpkN0GRM',
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0,
    },
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    var videoContainer = document.getElementById('videoPlayerContainer');
    videoContainer.style.display = 'none';
  }
}

function playVideo() {
  if (!player) {
    onYouTubeIframeAPIReady();
  }

  var videoContainer = document.getElementById('videoPlayerContainer');
  videoContainer.style.display = 'block';

  player.playVideo();
}

document.addEventListener('DOMContentLoaded', function () {
  myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), { interval: 5000 });
});

function scrollDownToVideo() {

  const videoContainer = document.getElementById('videoPlayerContainer');
  
  videoContainer.scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.carousel-caption button.btn-dark').addEventListener('click', scrollDownToVideo);