var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'ntnhan2308',			//email ID
	    pass: 'Nhan2308@'				//Password 
    }
});
function sendMail(email , otp){
	var details = {
		from: 'ntnhan2308@gmail.com', // sender address same as above
		to: email, 					// Receiver's email id
		subject: 'Your OTP is ', // Subject of the mail.
		html: otp					// Sending OTP 
	};


	transporter.sendMail(details, function (error, data) {
		if(error)
			console.log(error)
		else
			console.log(data);
		});
	}

module.exports = {sendMail};