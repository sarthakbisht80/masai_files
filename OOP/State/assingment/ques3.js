// ----- Concrete States -----
var PlayState = /** @class */ (function () {
    function PlayState() {
    }
    PlayState.prototype.play = function () {
        console.log("Already playing media.");
    };
    PlayState.prototype.pause = function (player) {
        console.log("Pausing media...");
        player.setState(new PauseState());
    };
    PlayState.prototype.stop = function (player) {
        console.log("Stopping media...");
        player.setState(new StopState());
    };
    return PlayState;
}());
var PauseState = /** @class */ (function () {
    function PauseState() {
    }
    PauseState.prototype.play = function (player) {
        console.log("Resuming media...");
        player.setState(new PlayState());
    };
    PauseState.prototype.pause = function () {
        console.log("Already paused.");
    };
    PauseState.prototype.stop = function (player) {
        console.log("Stopping media from paused state...");
        player.setState(new StopState());
    };
    return PauseState;
}());
var StopState = /** @class */ (function () {
    function StopState() {
    }
    StopState.prototype.play = function (player) {
        console.log("Starting media from beginning...");
        player.setState(new PlayState());
    };
    StopState.prototype.pause = function () {
        console.log("Cannot pause. Media is stopped.");
    };
    StopState.prototype.stop = function () {
        console.log("Media already stopped.");
    };
    return StopState;
}());
// ----- Context -----
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer() {
        this.state = new StopState(); // Initial state
    }
    MediaPlayer.prototype.setState = function (state) {
        this.state = state;
    };
    MediaPlayer.prototype.play = function () {
        this.state.play(this);
    };
    MediaPlayer.prototype.pause = function () {
        this.state.pause(this);
    };
    MediaPlayer.prototype.stop = function () {
        this.state.stop(this);
    };
    return MediaPlayer;
}());
// ----- Usage Example -----
var player = new MediaPlayer();
player.play();
player.pause();
player.play();
player.stop();
player.pause();
