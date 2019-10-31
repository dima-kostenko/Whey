const express = require("express");
const bodyParser = require("body-parser");
var mailer = require("nodemailer");
  
const app = express();
  
const jsonParser = bodyParser.json()

app.get("/buy", jsonParser, function (request, response) {
    response.sendFile(__dirname + "/src/app/app.component.html");
});
let Address;
let Phone;
app.post("/buy", jsonParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    Address = request.body.address;
    Phone = request.body.phone;
});
  
app.get("/", function(request, response){
    response.sendFile(__dirname + "/index.html");
});

var smtpTransport = mailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "kdimainfo@gmail.com",
        pass: "2004Kds11"
    }
});

var mail = {
    from: "User",
    to: "kdimainfo@gmail.com",
    subject: "Order",
    text: Address,Phone
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
});
  
app.listen(3000);