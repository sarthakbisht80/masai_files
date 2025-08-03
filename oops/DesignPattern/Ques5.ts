//media player
interface MediaFile {
  play(): void;
}

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

class MediaPlayer {
  private media: MediaFile; //accepting medaiFile

  constructor(media: MediaFile) {
    this.media = media;
  }

  playMedia(): void {
    this.media.play();
  }
}


const audioPlayer = new MediaPlayer(new AudioFile());
audioPlayer.playMedia();

const videoPlayer = new MediaPlayer(new VideoFile());
videoPlayer.playMedia();

const pdfViewer = new MediaPlayer(new PDFFile());
pdfViewer.playMedia();
