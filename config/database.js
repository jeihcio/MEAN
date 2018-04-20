var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exemplo");

mongoose.connection.on("connected", function(){
	console.log("Conectado ao MongoDB!");
});