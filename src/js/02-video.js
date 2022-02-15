import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

/*player.on('timeupdate', throttle(   
    player.getCurrentTime().then(function(seconds) {
    localStorage.setItem('currentTime', JSON.stringify(sec));
    console.log('Saving time!');
})), 1000);*/
player.on('play', function() {
    console.log('played the video!');
});
player.on('timeupdate', throttle(function(){
    player.getCurrentTime().then(function(seconds) {
        console.log(seconds);
        localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
    });
},1000));
let startTime = JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(startTime); 