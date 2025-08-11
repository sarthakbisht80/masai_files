import * as readline from "readline";

type Cell = "_" | string; // "_" means empty, else player symbol

class Player {
  name: string;
  symbol: string;

  constructor(name: string, symbol: string) {
    this.name = name;
    this.symbol = symbol;
  }
}

class TicTacToe {
  board: Cell[][];
  players: [Player, Player];
  currentPlayerIndex: number;
  gameOver: boolean;

  constructor(players: [Player, Player]) {
    this.board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];
    this.players = players;
    this.currentPlayerIndex = 0;
    this.gameOver = false;
  }

  printBoard() {
    console.log("\n  1 2 3");
    const rows = ["A", "B", "C"];
    for (let i = 0; i < 3; i++) {
      console.log(rows[i] + " " + this.board[i].join(" "));
    }
    console.log("");
  }

  cellCoords(move: string): [number, number] {
    // move like A1, B3 etc
    if (!/^[ABC][123]$/.test(move)) {
      throw new Error("Invalid input. Use format like A1, B2, C3.");
    }
    const row = move.charCodeAt(0) - "A".charCodeAt(0);
    const col = Number(move[1]) - 1;
    return [row, col];
  }

  isCellEmpty(row: number, col: number) {
    return this.board[row][col] === "_";
  }

  makeMove(move: string): void {
    if (this.gameOver) {
      throw new Error("Game is already over. No more moves allowed.");
    }

    const [row, col] = this.cellCoords(move);
    const player = this.players[this.currentPlayerIndex];
    const opponent = this.players[1 - this.currentPlayerIndex];

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
      console.log(`🎉 ${player.name} wins!`);
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
  }

  canClaimCenter(player: Player, opponent: Player): boolean {
    // Center cell is locked if opponent owns both diagonal corners
    // Diagonal corners: A1(0,0), C3(2,2) and A3(0,2), C1(2,0)
    // If opponent owns either pair fully, center locked for current player

    const board = this.board;

    const diag1LockedByOpponent =
      board[0][0] === opponent.symbol && board[2][2] === opponent.symbol;
    const diag2LockedByOpponent =
      board[0][2] === opponent.symbol && board[2][0] === opponent.symbol;

    // If center is empty, no lock applies
    if (board[1][1] === "_") {
      return true;
    }

    // If center taken by player => can claim
    if (board[1][1] === player.symbol) {
      return true;
    }

    // If center taken by opponent and opponent holds diagonal lock => player can't claim
    if (
      board[1][1] === opponent.symbol &&
      (diag1LockedByOpponent || diag2LockedByOpponent)
    ) {
      return false;
    }

    return true; // No lock or no opponent diagonal lock, so can claim
  }

  checkWin(symbol: string): boolean {
    const b = this.board;
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      if (
        b[i][0] === symbol &&
        b[i][1] === symbol &&
        b[i][2] === symbol
      ) return true;
      if (
        b[0][i] === symbol &&
        b[1][i] === symbol &&
        b[2][i] === symbol
      ) return true;
    }
    // Check diagonals
    if (
      b[0][0] === symbol &&
      b[1][1] === symbol &&
      b[2][2] === symbol
    ) return true;
    if (
      b[0][2] === symbol &&
      b[1][1] === symbol &&
      b[2][0] === symbol
    ) return true;

    return false;
  }

  isBoardFull(): boolean {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (this.board[r][c] === "_") return false;
      }
    }
    return true;
  }
}

// --- Registration & Game Loop ---
async function getUserInput(prompt: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    rl.question(prompt, (ans) => {
      rl.close();
      resolve(ans.trim());
    });
  });
}

async function registerPlayer(existingSymbols: Set<string>): Promise<Player> {
  let name: string;
  let symbol: string;
  while (true) {
    name = await getUserInput("Enter player name: ");
    symbol = await getUserInput("Enter player symbol (single char, not '_'): ");
    if (symbol.length !== 1) {
      console.log("Symbol must be exactly one character.");
      continue;
    }
    if (symbol === "_") {
      console.log("Symbol '_' is reserved and cannot be used.");
      continue;
    }
    if (existingSymbols.has(symbol)) {
      console.log(`Symbol '${symbol}' already taken. Choose another.`);
      continue;
    }
    existingSymbols.add(symbol);
    break;
  }
  return new Player(name, symbol);
}

async function main() {
  console.log("Welcome to Tic-Tac-Toe (Diagonal-Lock Variant)!\n");

  const existingSymbols = new Set<string>();
  const player1 = await registerPlayer(existingSymbols);
  const player2 = await registerPlayer(existingSymbols);

  const game = new TicTacToe([player1, player2]);
  game.printBoard();

  while (!game.gameOver) {
    const currentPlayer = game.players[game.currentPlayerIndex];
    try {
      const move = await getUserInput(
        `${currentPlayer.name} (${currentPlayer.symbol}), enter your move (e.g. A1, B3): `
      );
      game.makeMove(move.toUpperCase());
    } catch (e: any) {
      console.log("Error:", e.message);
    }
  }
  console.log("Game over. Thanks for playing!");
}

main();
