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
  private media: MediaFile;

  constructor(media: MediaFile) {
    this.media = media;
  }

  play(): void {
    this.media.play();
  }


  setMedia(media: MediaFile): void {
    this.media = media;
  }
}

const audio = new AudioFile();
const video = new VideoFile();
const pdf = new PDFFile();

const player = new MediaPlayer(audio);
player.play(); // Playing audio file...

player.setMedia(video);
player.play(); // Playing video file...

player.setMedia(pdf);
player.play(); 