
const data = JSON.parse(`{
    "albumID": "MC030",
    "artist": "Silver October",
    "artistID": "00",
    "title": "All World and the Glass Room ('23 Reissue)",
    "releaseDate": "2023-12-24",
    "tracklist": [
        {
            "title": "Teatree All-World-Relation",
            "duration": 331,
            "ISRC": "QZMEP2315336",
            "lyrics": "See, I told them we should just like, drive to someone's garage and be like, \\"hey, pay you a buck\\"\\nTo what?\\n\\nThe shadow... of your smile\\n\\nThere is no other side,\\nThis is it.",
            "trackID": "030_0",
            "subtext": "",
            "sublist": ""
        },
        {
            "title": "Sweet Blood",
            "duration": 312,
            "ISRC": "yea",
            "lyrics": "",
            "trackID": "030_1",
            "subtext": "feat. Snifo",
            "sublist": ""
        }
    ]
}`);

console.log(data, $);
//$(".title" ).attr("src",`img/assets/${data.albumID}_wordmark.png`);
$("._cover").attr("src",`img/assets/${data.albumID}_cover.png`);
$(".date"  ).html(`${data.releaseDate}`);
/*
let mm, ss;
for (var i = 0; i < data.tracklist.length; i++) {
    mm = Math.floor(parseInt(data.tracklist[i].duration) / 60);
    ss = parseInt(data.tracklist[i].duration) % 60;
    $(".tracklist").append(`
    <li class="track">
        <img class="track_icon" src="img/assets/play.png" alt="Play track" id="${data.tracklist[i].trackID}">
        <sup class="track_no">${i+1}</sup>
        <a href="#${data.tracklist[i].trackID}" class="track_title">${data.tracklist[i].title}</a>
        <span class="track_subtext">${data.tracklist[i].subtext}</span>
        <span class="track_duration">${mm}:${ss}</span>
    </li>
    `);
}
*/