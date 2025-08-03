// 2. Implementing Classes
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
// 3. MediaPlayer Class
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(media) {
        this.media = media;
    }
    MediaPlayer.prototype.playMedia = function () {
        this.media.play();
    };
    return MediaPlayer;
}());
// 4. Usage
var audioPlayer = new MediaPlayer(new AudioFile());
audioPlayer.playMedia();
var videoPlayer = new MediaPlayer(new VideoFile());
videoPlayer.playMedia();
var pdfViewer = new MediaPlayer(new PDFFile());
pdfViewer.playMedia();
