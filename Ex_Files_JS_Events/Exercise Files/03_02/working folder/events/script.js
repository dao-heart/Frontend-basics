'use strict'
var jukeBox = document.querySelector('ul.player');
jukeBox.addEventListener('click', function (e){
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'player'
    e.target.id = "playing"
    var songName = e.target.getAttribute('data-src');
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer)
    audioPlayer.play();
    audioPlayer.addEventListener('ended', function(){
        audioPlayer.parentNode.removeChild(audioPlayer);
        e.target.id=""
    }, false)

    
}, false);