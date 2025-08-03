//media player
// 1. Interface
interface MediaFile {
  play(): void;
}

// 2. Implementing Classes
class AudioFile implements MediaFile {
  play(): void {
    console.log("Playing audio file...");
  }
}

class VideoFile implements MediaFile {
  play(): void {
    console.log("Playing video file...");
  }
}

class PDFFile implements MediaFile {
  play(): void {
    console.log("Displaying PDF document...");
  }
}

// 3. MediaPlayer Class
class MediaPlayer {
  private media: MediaFile; //accepting medaiFile

  constructor(media: MediaFile) {
    this.media = media;
  }

  playMedia(): void {
    this.media.play();
  }
}

// 4. Usage
const audioPlayer = new MediaPlayer(new AudioFile());
audioPlayer.playMedia();

const videoPlayer = new MediaPlayer(new VideoFile());
videoPlayer.playMedia();

const pdfViewer = new MediaPlayer(new PDFFile());
pdfViewer.playMedia();
