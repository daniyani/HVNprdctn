$(document).ready(function(){
$('.slider').slick({

});
});
var player;
$('.button-play').on('click',   function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '590',
          width: '100%',
          videoId: 'cjQQ9JYGgTM',
          events: {
            'onReady': videoPlay,
            
          }
        });
      })

      function videoPlay(event) {
        event.target.player.playVideo();
      }