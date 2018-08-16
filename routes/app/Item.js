const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');


router.get('/',(req,res)=>{
	Item
	.find()
	.then(items=>res.json(items))
	.catch(err=>res.json(err))
});


router.post('/',(req,res)=>{
	const item = new Item();
	item.name = req.body.name;
	item.save()
	.then(()=>{
		Item
		.find()
		.then(items=>res.json(items))
		.catch(err=>res.json(err))
	}).catch(err=>res.json(err))
});

router.delete('/:id',(req,res)=>{
	Item
	.findOneAndRemove({ _id: req.params.id })
	.then(()=>{
		Item
		.find()
		.then(items=>res.json(items))
		.catch(err=>res.json(err))
	})
	.catch(err=>res.json(err))
});

module.exports = router;

