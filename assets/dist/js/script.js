function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoPlayerContainer', {
    height: '360',
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
    videoContainer.style.display = 'block';
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

function closeVideo() {
  var videoContainer = document.getElementById('videoPlayerContainer');
  videoContainer.style.display = 'none';

  if (player) {
    player.pauseVideo();
  }
}

var videoModal = document.getElementById('videoModal');

if (videoModal) {
  videoModal.addEventListener('click', function(event) {
    if (event.target === videoModal) {
      closeVideo();
    }
  });
}