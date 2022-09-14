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
      res.send({ error: `Something went wrong ${err}` });
    } else {
      res.send({ res: result });
    }
  });
});
app.get('/getdata', (req, res) => {
  let query = `select * from measures;`;
  sql.query(query, (err, result) => {
    if (err) {
      res.send({ error: `Something went wrong ${err}` });
    } else {
      res.send({ res: result });
    }
  });
});
app.post('/save', (req, res) => {
  const calulatedValues = commonService.caluculateValues(req.body.saveData);
  var preparedData = commonService.prepareData(calulatedValues);
  let query = `delete from measures; 
    ALTER TABLE measures AUTO_INCREMENT = 1;
    INSERT INTO measures (title, years)
    VALUES `+ preparedData + `;`;

  sql.query(query, (err, result) => {
    if (err) {
      res.send({ error: `Something went wrong ${err}` });
    } else {
      res.send({ res: 'Data Saved Successfully' });
    }
  });

});
// login
app.post('/login', (req, res) => {
  const userName = req.body.loginData?.username;
  const password = req.body.loginData?.password;
  if (userName && password) {
    let query = `select * from users where userName ='${userName}' and password='${password}'`;
    sql.query(query, (err, result) => {
      if (result?.length > 0) {
        res.send({ message: 'success' });
      } else {
        res.send({ message: `Something went wrong ${err}` });
      }
    });
  } else {
    res.send({ message: 'Login falied' })
  }
});
app.listen(3000, () => {
  console.log('server listening on port 3000');
});