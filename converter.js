var Converter = require("csvtojson").Converter;
var  request = require("request");

var csvConverter=new Converter({constructResult:true});

module.exports =  function(req,res){ 
	
	var converter =  request(req.query.q)
 		 .pipe(csvConverter)
  		 .on('end_parsed', function(err,jsonObj) { 
  			if(err!= null) { 
  			   console.log(err);
  			   res.status(500).send("Oops! Error occured while converting:");
  		    }
   		    else res.status(200).send(jsonObj);
  		})
       
}
