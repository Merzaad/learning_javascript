const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')
const gridSize = 5
const numCells = 100
const colors = ['#FFFFFF', '#FF0000']

// Initialize the board
const board = []
for (let i = 0; i < numCells; i++) {
  board[i] = []
  for (let j = 0; j < numCells; j++) {
    board[i][j] = 0 // 0 represents white, 1 represents red
  }
}

let isMouseDown = false

function toggleCellColor(x, y) {
  board[x][y] = 1 - board[x][y] // Toggle between 0 and 1
  drawBoard()
}

canvas.addEventListener('mousedown', function (event) {
  isMouseDown = true
  const rect = canvas.getBoundingClientRect()
  const x = Math.floor((event.clientX - rect.left) / gridSize)
  const y = Math.floor((event.clientY - rect.top) / gridSize)
  toggleCellColor(x, y)
})

canvas.addEventListener('mouseup', function () {
  isMouseDown = false
})

canvas.addEventListener('mousemove', function (event) {
  if (isMouseDown) {
    const rect = canvas.getBoundingClientRect()
    const x = Math.floor((event.clientX - rect.left) / gridSize)
    const y = Math.floor((event.clientY - rect.top) / gridSize)
    toggleCellColor(x, y)
  }
})

function drawBoard() {
  for (let i = 0; i < numCells; i++) {
    for (let j = 0; j < numCells; j++) {
      ctx.fillStyle = colors[board[i][j]]
      ctx.fillRect(i * gridSize, j * gridSize, gridSize, gridSize)
    }
  }
}

drawBoard()
