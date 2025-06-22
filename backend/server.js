require('dotenv').config();
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import { scheduleMessage } from './scheduler';

const app = express();
app.use(cors());
app.use(json());

app.post('/api/schedule', (req, res) => {
  const tasks = req.body.tasks;
  tasks.forEach(task => {
    scheduleMessage(task);
  });
  res.json({ message: 'Tasks scheduled successfully!' });
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
