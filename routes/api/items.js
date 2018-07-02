// ./routes/api/items.js

const express = require("express");
const router = express.Router();


// load up the Item.js module and call it Item
const Item = require('../../models/Item');

// GET request on api/items file.
// We want this to get all items
// the code below means, the router has arrived at this file in the current folder
// with a GET request.  Define what you want to happen when this request is made
// the function we are writing has no name, but has arguments "req" representing the parameters
// of the GET REQUEST.  "res" represents the response you are building to communicate back with 
// requester.
router.get('/', (req, res) =>{
	Item.find() // this is a mongoose command to do a find query on our mongodb.  This returns 
				// a Promise and you can build on the Promise.
	.sort({date:-1})
	.then( items => res.json(items));
});

// POST request on api/items file.
// We want to add an item to the shopping list
router.post('/', (req, res) =>{
	 
	Item.findOne({name:req.body.name})
	.exec( (err, item) => {
		var a = 1;
			try{
				a = parseInt(req.body.quantity);
			}
			finally{
				console.log("Bad value for quantity "+req.body.quantity);
			}
			if(a <=0)
				a = 1;// if you added to the shopping list, must be at least one...
		if(item == null){// first time in list
			console.log("FIRST TIME "+req.body.name);
			
			 var newItem = new Item({name:req.body.name,
								  quantity:a});
			 newItem.save()
					.then( item => res.json(item));		
		}
		else{
			console.log("not unique item "+req.body.name);
			var amt = item.toObject().quantity + a; 
			item.update({$set:{quantity:amt}})
			.then( item => res.json(item));	
		}

    });
});

// DELETE request on api/items/:id file.
// We want to delete an item from the list
// The id of the item will be passed along the route 
router.delete('/:id', (req, res) =>{
	console.log("deleting "+req.params.id);
	Item.findById(req.params.id)
	.then(item =>item.remove())
	.then( () => res.json({success: true}))
	.catch(err => res.status(404).json({success: false, error: err}));
});



module.exports = router;