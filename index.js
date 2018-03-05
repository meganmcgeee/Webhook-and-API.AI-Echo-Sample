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

restService.post("/echo", function(req, res) {
  var speech = "";
    switch (req.body.result.parameters.echoTest.toLowerCase()) {
      case "one":
        speech =
          'case 1 text';
        break;
      case "two":
        speech =
          'case 2 text';
        break;
      case "three":
        speech =
          'case three text';
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
