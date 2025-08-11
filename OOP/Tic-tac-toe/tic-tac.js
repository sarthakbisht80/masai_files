"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var Player = /** @class */ (function () {
    function Player(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
    return Player;
}());
var TicTacToe = /** @class */ (function () {
    function TicTacToe(players) {
        this.board = [
            ["_", "_", "_"],
            ["_", "_", "_"],
            ["_", "_", "_"],
        ];
        this.players = players;
        this.currentPlayerIndex = 0;
        this.gameOver = false;
    }
    TicTacToe.prototype.printBoard = function () {
        console.log("\n  1 2 3");
        var rows = ["A", "B", "C"];
        for (var i = 0; i < 3; i++) {
            console.log(rows[i] + " " + this.board[i].join(" "));
        }
        console.log("");
    };
    TicTacToe.prototype.cellCoords = function (move) {
        // move like A1, B3 etc
        if (!/^[ABC][123]$/.test(move)) {
            throw new Error("Invalid input. Use format like A1, B2, C3.");
        }
        var row = move.charCodeAt(0) - "A".charCodeAt(0);
        var col = Number(move[1]) - 1;
        return [row, col];
    };
    TicTacToe.prototype.isCellEmpty = function (row, col) {
        return this.board[row][col] === "_";
    };
    TicTacToe.prototype.makeMove = function (move) {
        if (this.gameOver) {
            throw new Error("Game is already over. No more moves allowed.");
        }
        var _a = this.cellCoords(move), row = _a[0], col = _a[1];
        var player = this.players[this.currentPlayerIndex];
        var opponent = this.players[1 - this.currentPlayerIndex];
        // Check if move valid
        if (!this.isCellEmpty(row, col)) {
            throw new Error("Cell already occupied.");
        }
        // Diagonal lock rule check:
        if (row === 1 && col === 1) {
            // center cell B2
            if (!this.canClaimCenter(player, opponent)) {
                throw new Error("Center cell (B2) is locked and cannot be claimed by you.");
            }
        }
        this.board[row][col] = player.symbol;
        this.printBoard();
        if (this.checkWin(player.symbol)) {
            console.log("\uD83C\uDF89 ".concat(player.name, " wins!"));
            this.gameOver = true;
            return;
        }
        if (this.isBoardFull()) {
            console.log("It's a draw!");
            this.gameOver = true;
            return;
        }
        // Next turn
        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    };
    TicTacToe.prototype.canClaimCenter = function (player, opponent) {
        // Center cell is locked if opponent owns both diagonal corners
        // Diagonal corners: A1(0,0), C3(2,2) and A3(0,2), C1(2,0)
        // If opponent owns either pair fully, center locked for current player
        var board = this.board;
        var diag1LockedByOpponent = board[0][0] === opponent.symbol && board[2][2] === opponent.symbol;
        var diag2LockedByOpponent = board[0][2] === opponent.symbol && board[2][0] === opponent.symbol;
        // If center is empty, no lock applies
        if (board[1][1] === "_") {
            return true;
        }
        // If center taken by player => can claim
        if (board[1][1] === player.symbol) {
            return true;
        }
        // If center taken by opponent and opponent holds diagonal lock => player can't claim
        if (board[1][1] === opponent.symbol &&
            (diag1LockedByOpponent || diag2LockedByOpponent)) {
            return false;
        }
        return true; // No lock or no opponent diagonal lock, so can claim
    };
    TicTacToe.prototype.checkWin = function (symbol) {
        var b = this.board;
        // Check rows and columns
        for (var i = 0; i < 3; i++) {
            if (b[i][0] === symbol &&
                b[i][1] === symbol &&
                b[i][2] === symbol)
                return true;
            if (b[0][i] === symbol &&
                b[1][i] === symbol &&
                b[2][i] === symbol)
                return true;
        }
        // Check diagonals
        if (b[0][0] === symbol &&
            b[1][1] === symbol &&
            b[2][2] === symbol)
            return true;
        if (b[0][2] === symbol &&
            b[1][1] === symbol &&
            b[2][0] === symbol)
            return true;
        return false;
    };
    TicTacToe.prototype.isBoardFull = function () {
        for (var r = 0; r < 3; r++) {
            for (var c = 0; c < 3; c++) {
                if (this.board[r][c] === "_")
                    return false;
            }
        }
        return true;
    };
    return TicTacToe;
}());
// --- Registration & Game Loop ---
function getUserInput(prompt) {
    return __awaiter(this, void 0, void 0, function () {
        var rl;
        return __generator(this, function (_a) {
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            return [2 /*return*/, new Promise(function (resolve) {
                    rl.question(prompt, function (ans) {
                        rl.close();
                        resolve(ans.trim());
                    });
                })];
        });
    });
}
function registerPlayer(existingSymbols) {
    return __awaiter(this, void 0, void 0, function () {
        var name, symbol;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 3];
                    return [4 /*yield*/, getUserInput("Enter player name: ")];
                case 1:
                    name = _a.sent();
                    return [4 /*yield*/, getUserInput("Enter player symbol (single char, not '_'): ")];
                case 2:
                    symbol = _a.sent();
                    if (symbol.length !== 1) {
                        console.log("Symbol must be exactly one character.");
                        return [3 /*break*/, 0];
                    }
                    if (symbol === "_") {
                        console.log("Symbol '_' is reserved and cannot be used.");
                        return [3 /*break*/, 0];
                    }
                    if (existingSymbols.has(symbol)) {
                        console.log("Symbol '".concat(symbol, "' already taken. Choose another."));
                        return [3 /*break*/, 0];
                    }
                    existingSymbols.add(symbol);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/, new Player(name, symbol)];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var existingSymbols, player1, player2, game, currentPlayer, move, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Welcome to Tic-Tac-Toe (Diagonal-Lock Variant)!\n");
                    existingSymbols = new Set();
                    return [4 /*yield*/, registerPlayer(existingSymbols)];
                case 1:
                    player1 = _a.sent();
                    return [4 /*yield*/, registerPlayer(existingSymbols)];
                case 2:
                    player2 = _a.sent();
                    game = new TicTacToe([player1, player2]);
                    game.printBoard();
                    _a.label = 3;
                case 3:
                    if (!!game.gameOver) return [3 /*break*/, 8];
                    currentPlayer = game.players[game.currentPlayerIndex];
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, getUserInput("".concat(currentPlayer.name, " (").concat(currentPlayer.symbol, "), enter your move (e.g. A1, B3): "))];
                case 5:
                    move = _a.sent();
                    game.makeMove(move.toUpperCase());
                    return [3 /*break*/, 7];
                case 6:
                    e_1 = _a.sent();
                    console.log("Error:", e_1.message);
                    return [3 /*break*/, 7];
                case 7: return [3 /*break*/, 3];
                case 8:
                    console.log("Game over. Thanks for playing!");
                    return [2 /*return*/];
            }
        });
    });
}
main();
