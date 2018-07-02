// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const items = require("./routes/api/items");
const path = require("path");

// bodyParser middleware

app.use(bodyParser.json());  // allows app to parse requests

const db = require('./config/keys').mongoURI;
 
mongoose
	.connect(db)
	.then(() => console.log("Mongo DB has Connected"))
	.catch( err => console.log(err));

//Use Routes
app.use("/api/items", items);

// serve static assets if this site is now in production
if(process.env.NODE_ENV === 'production'){
	// use the index.html that is located in that folder
	app.use(express.static('client/build'));
	// any request that is not "api/items" goes to the index.html
	app.get("*", (req,res) => {
		res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
	});
}



const port = 5000;//process.env.PORT || 5000;

// second parameter is callback.  Not necessary, but is invoked when app.listen completes
app.listen(port, () => console.log(`Server started on port ${port}`));