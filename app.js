const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const userRoutes = require('./routes/users');
const classRoutes = require('./routes/classes');
const commentRoutes = require('./routes/comments');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/comments', commentRoutes);

mongoose.connect('mongodb://localhost:27017/virtual_classroom', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('new_comment', (comment) => {
    io.emit('new_comment', comment);
  });
});

module.exports = { app, server };
