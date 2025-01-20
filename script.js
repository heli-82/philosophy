const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach(player => {
    player.volume = 0.1;
    player.addEventListener('play', () => {
        audioPlayers.forEach(otherPlayer => {
            if (otherPlayer !== player && !otherPlayer.paused) {
                otherPlayer.pause();
            }
        });
    });
});
