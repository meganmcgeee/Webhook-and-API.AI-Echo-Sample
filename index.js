"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/poppy", function(req, res) {
  let speech = '';
  switch(req.body.result.parameters.echoText.toLowerCase()){
    case "dog":
      speech = 'Doges are funny';
        break;
      case "plant":
        speech ='I like this plant';
        break;
    case "poppy":
        speech = 'I am poppy.';
        break;
  }
  return res.json({
    speech: speech,
    displayText: speech,
    source: "webhook-echo-sample"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
