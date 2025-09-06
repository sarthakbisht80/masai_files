var AudioFile = /** @class */ (function () {
    function AudioFile() {
    }
    AudioFile.prototype.play = function () {
        console.log("Playing audio file...");
    };
    return AudioFile;
}());
var VideoFile = /** @class */ (function () {
    function VideoFile() {
    }
    VideoFile.prototype.play = function () {
        console.log("Playing video file...");
    };
    return VideoFile;
}());
var PDFFile = /** @class */ (function () {
    function PDFFile() {
    }
    PDFFile.prototype.play = function () {
        console.log("Displaying PDF document...");
    };
    return PDFFile;
}());
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(media) {
        this.media = media;
    }
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.setMedia = function (media) {
        this.media = media;
    };
    return MediaPlayer;
}());
var audio = new AudioFile();
var video = new VideoFile();
var pdf = new PDFFile();
var player = new MediaPlayer(audio);
player.play(); // Playing audio file...
player.setMedia(video);
player.play(); // Playing video file...
player.setMedia(pdf);
player.play();
