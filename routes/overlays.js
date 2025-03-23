const NotionClient = require('../notion-client');

const express = require('express');
const router = express.Router();
const client = new NotionClient();

/* GET all overlays */
router.get('/', function(req, res, next) {
  client.getOverlays('1b8c4f6623d48047bc73f7ff37eb5bc9').then(overlays => {
    res.send(JSON.stringify(overlays));
  })
});

module.exports = router;
