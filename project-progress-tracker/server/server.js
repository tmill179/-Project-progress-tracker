const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
const milestones = [
  {id:1, name:'Create Angular Components', status:'Completed'},
  {id:2, name:'Implement Reactive Forms', status:'Completed'},
  {id:3, name:'Develop Express Backend', status:'In Progress'}
];
app.get('/', (req,res) => res.send('Project Progress Tracker API is running!'));
app.get('/milestones', (req,res) => {
  console.log('GET request received for milestones');
  res.status(200).json(milestones);
});
app.post('/milestones', (req,res) => {
  const {name,status} = req.body ?? {};
  if(typeof name !== 'string' || !name.trim() || !['Not Started','In Progress','Completed'].includes(status)) {
    return res.status(400).json({message:'Enter a milestone name and a valid status.'});
  }
  console.log('New milestone received:');
  console.log('Name:', name);
  console.log('Status:', status);
  // Module 8 only acknowledges the request. No database or array update.
  res.status(200).json({message:'Milestone received successfully!'});
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
