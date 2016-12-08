// Creates the individual squares in the board
class Square extends React.Component {
  render() {
    // The render method is the core feature of React. It will deliver
    // components of html, with "props" - additional data or behavior to
    // use in your app.
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

// Header with game information above 3x3 grid
class Board extends React.Component {
  renderSquare(i) {

    return <Square value={i}/>;
  }
  render() {
    const status = 'Next player: X';
    // Notice how the Squares are being included. Unlike Angular, React
    // uses single braces to bind data. This is an early sight of the
    // one-way data binding React is known for.
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Gathers everything together for additional styling
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

// Rendering the containing component `Game`, attachign it to the lone
// #container in the index.html
ReactDOM.render(
  <Game />,
  document.getElementById('container')
);

// Checks all available combinations for a winner.
// Returns the winner or null if neither player has won.
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
