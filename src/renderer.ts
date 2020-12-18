// eslint-disable-next-line
const { ipcRenderer } = require('electron');

ipcRenderer.on('msgFromMain', (_event, text) => {
  const counter = document.getElementById('count');
  counter.innerText = text;
});
