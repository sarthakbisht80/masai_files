interface PlayerState {
    play(player: MediaPlayer): void;
    pause(player: MediaPlayer): void;
    stop(player: MediaPlayer): void;
}

// ----- Concrete States -----
class PlayState implements PlayerState {
    play(): void {
        console.log("Already playing media.");
    }

    pause(player: MediaPlayer): void {
        console.log("Pausing media...");
        player.setState(new PauseState());
    }

    stop(player: MediaPlayer): void {
        console.log("Stopping media...");
        player.setState(new StopState());
    }
}

class PauseState implements PlayerState {
    play(player: MediaPlayer): void {
        console.log("Resuming media...");
        player.setState(new PlayState());
    }

    pause(): void {
        console.log("Already paused.");
    }

    stop(player: MediaPlayer): void {
        console.log("Stopping media from paused state...");
        player.setState(new StopState());
    }
}

class StopState implements PlayerState {
    play(player: MediaPlayer): void {
        console.log("Starting media from beginning...");
        player.setState(new PlayState());
    }

    pause(): void {
        console.log("Cannot pause. Media is stopped.");
    }

    stop(): void {
        console.log("Media already stopped.");
    }
}

// ----- Context -----
class MediaPlayer {
    private state: PlayerState;

    constructor() {
        this.state = new StopState(); // Initial state
    }

    setState(state: PlayerState): void {
        this.state = state;
    }

    play(): void {
        this.state.play(this);
    }

    pause(): void {
        this.state.pause(this);
    }

    stop(): void {
        this.state.stop(this);
    }
}

// ----- Usage Example -----
const player = new MediaPlayer();

player.play();  
player.pause();  
player.play();   
player.stop();   
player.pause();  
