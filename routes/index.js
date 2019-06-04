var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');

var Employee = require("../models/employee")

/* GET home page. */
router.get("/", function(req, res) {
  res.render('index');
});

router.get("/about", function(req, res) {
  Employee.find(function(err, docs){
    var employees = docs;
    res.render('about', {employees: employees})
    console.log(employees);
  });

});

router.get("/contact", function(req, res) {
  res.render('contact')
});


router.post("/contact", function (req, res) {
  let mailOpts, smtpTrans;
  
smtpTrans = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    sendMail: true,
    auth: {
      user: "91cbcd253c9384",
      pass: "37b5d17d297697"
    }  
  });

  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: 'rbajaj852@gmail.com',
    subject: req.body.subject,
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, info) {
    if (error) {
      return console.log(error);
    }
    else {
       console.log("success" + info.response);
       res.render('index');
    }
  });
});

module.exports = router;
