const pageAlbum = {
    title: "All World and the Glass Room ('23 Reissue)",
    artist: "Silver October",
    albumID: "030",
    artistID: "00",
};

const tracklist = [
    {
        title: "Teatree All-World-Relation",
        duration: 331,
        ISRC: "QZMEP2315336",
        lyrics: `See, I told them we should just like, drive to someone's garage and be like, "hey, pay you a buck"\nTo what?\n\nThe shadow... of your smile\n\nThere is no other side,\nThis is it.`,
        trackID: "030_0",
        subtext: "",
        sublist: "",
    },
    {
        title: "Sweet Blood",
        duration: 312,
        ISRC: "yea",
        lyrics: "",
        trackID: "030_1",
        subtext: "feat. Snifo",
        sublist: "",
    }
];

const currentTrack = {
    title: "no track selected",
    duration: 0,
    ISRC: "",
    lyrics: "the maulcat.us website supports streaming of all albums.\nall albums are also downloadable for free.",
    trackID: undefined,
    subtext: "",
    sublist: "",
}

const play_button = document.querySelector(".playing_track .track .track_icon");
const playing_title = document.querySelector(".playing_track .track .track_title");
const playing_duration = document.querySelector(".playing_track .track .track_duration_");
const playing_currentTime = document.querySelector(".track_currentTime");

const wave_top = document.querySelector(".wave_top");
const wave_bottom = document.querySelector(".wave_bottom");
const playhead = document.querySelector(".playhead");
const _container = document.querySelector(".seek");
let _width, updateInterval, mx;
let playing, mouseon, cMinutes, cSeconds, d;
let __src;

const page_lyrics = document.querySelector(".lyrics");
const page_ISRC = document.querySelector(".ISRC");
const audio = document.querySelector("audio");

play_button.onmouseover = function() {
    __src = this.src.replace(".png", "_hovered.png");
    this.src = __src;
    this.style.cursor = "pointer";
}
play_button.onmouseout = function() {
    __src = this.src.replace("_hovered.png", ".png");
    this.src = __src;
}
play_button.onclick = function() {
    toggleTrack(undefined);
};
document.querySelector("#wave_position").oninput = function() {
    wave_top.style.width = `${this.value}%`;
    playhead.style.left = `${(414 * (this.value / 100)) - 8}px`;
}
_container.onmousemove = function(e) {
    wave_top.style.opacity = 0.8;
    if (_width == 0) _width = wave_top.offsetWidth;
    wave_top.style.width = `${e.clientX - _container.getBoundingClientRect().left}px`;
    mouseon = true;
}
_container.onclick = function(e) {
    _width = e.clientX - _container.getBoundingClientRect().left;
    updatePlaybar(_width);
    audio.currentTime = audio.duration * (e.clientX - _container.getBoundingClientRect().left) / 414;
    updateDuration();
}
_container.onmouseleave = function() {
    wave_top.style.width = `${_width}px`;
    _width = 0;
    wave_top.style.opacity = 1;
    mouseon = false;
    updatePlaybar((audio.currentTime/audio.duration)*414);
}

function updatePlaybar(w) {
    playhead.style.left = `${w - 8}px`;
    if (mouseon) return;
    wave_top.style.width = `${w}px`;
}
function updateDuration() {
    cMinutes = Math.floor(audio.currentTime / 60).toString();
    cSeconds = Math.floor(audio.currentTime % 60).toString();
    i = `${cMinutes.padStart(2,'0')}:${cSeconds.padStart(2,'0')}`;
    playing_currentTime.innerHTML = i;
}

function toggleTrack(id) {
    console.log(id);
    // if track ID is diff than current one, play new track & update the playing track section
    if (!audio.paused) {
        audio.pause();
        play_button.src = "img/assets/play.png";
    } else if (id == undefined) {
        toggleTrack(`${pageAlbum.albumID}_0`);
    } else if (id !== currentTrack.id) {
        newTrack = tracklist.find(item => item.trackID === id);
        if (newTrack == undefined) return console.error("Invalid track ID");
        updatePlayingTrack(newTrack);
    } else {
        audio.play();
        play_button.src = "img/assets/pause.png";
    }
}

function updatePlayingTrack(newTrack) {
    audio.src = `audio/MC${newTrack.trackID}.flac`;
    play_button.src = "img/assets/pause.png";
    playing_title.innerHTML = newTrack.title;
    playing_duration.innerHTML = `${Math.floor((newTrack.duration/60)).toString().padStart(2,'0')}:${Math.floor((newTrack.duration%60)).toString().padStart(2,'0')}`;

    wave_top.src = `img/assets/MC${newTrack.trackID}_wave.png`;
    wave_bottom.style.mask = `url(img/assets/MC${newTrack.trackID}_wave.png)`;
    wave_bottom.style.setProperty('-webkit-mask',`url(img/assets/MC${newTrack.trackID}_wave.png)`);
    wave_bottom.style.maskSize = "414px 41px";
    wave_bottom.style.setProperty('-webkit-mask-size',"414px 41px");
    _container.style.display = "block";

    page_lyrics.innerHTML = newTrack.lyrics.replaceAll("\n", "<br>");
    page_ISRC.innerHTML = newTrack.ISRC;
    document.title = `${pageAlbum.artist} - ${newTrack.title} | Maulcat f.k.a. Maulcat Records`;

    playing = true;
    setInterval(function() {
        if (audio.paused) return;
        updatePlaybar((audio.currentTime/audio.duration)*414);
        updateDuration();
    }, 10)
    audio.play();
    console.log(`Now playing: ${pageAlbum.artist} [${pageAlbum.artistID}] - ${newTrack.title} [${pageAlbum.albumID}]`);
}