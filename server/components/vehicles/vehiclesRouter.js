import express from 'express';
const router = express.Router();

router.get('/id', function(req, res){
  res.send('1');
});

export default router;