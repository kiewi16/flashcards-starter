// This is where your project starts.
console.log('Your project is running...'); 

const http = require('http');
let app = http.createServer();
const { startGame } = require('./src/game');

app.listen(3000, '127.0.0.1', undefined, () => {
  startGame();
  app.close();
});
console.log('Node server running on port 3000');