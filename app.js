const sql = require("./db/db");
const commonService = require("./services/common.service");
// Requiring the module
const cors = require("cors");
const express = require('express');
const app = express();
app.use(express.json());
var corsOptions = {
    origin: "*"
  };
  app.use(cors(corsOptions));
// Handling '/' request
app.delete('/delete', (req, res) => {
        let query = `delete from measures;`;
     
      sql.query(query, (err, result) => {
        if (err) {
        res.send({error: `Something went wrong ${err}`});
        } else{
        res.send({res: result});
        }
      });
    });
app.get('/getdata', (req, res) => {
    let query = `select * from measures;`;
  sql.query(query, (err, result) => {
    if (err) {
    res.send({error: `Something went wrong ${err}`});
    } else{
    res.send({res: result});
    }
  });
});
app.post('/save', (req, res) => {
    console.log(req.body, '$$$$')
    
const calulatedValues = commonService.caluculateValues(req.body.data);
var preparedData = commonService.prepareData(calulatedValues);
    let query = `INSERT INTO measures (title, years)
    VALUES `+preparedData+`;`;
 
  sql.query(query, (err, result) => {
    if (err) {
    res.send({error: `Something went wrong ${err}`});
    } else{
    res.send({res: result});
    }
  });
    
});
app.listen(3000, () => {
    console.log('server listening on port 3000');
});