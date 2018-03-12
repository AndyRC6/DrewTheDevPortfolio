var nodemailer = require('nodemailer');

module.exports = {
    sendMail: function(req, res){
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                       user: process.env.EMAIL_ADDRESS,
                       pass: process.env.EMAIL_ADDRESS_PW
                   }
               });

            // setup email data with unicode symbols
            var mailOptions = {
                from: process.env.EMAIL_ADDRESS, // sender address
                to: 'andrew@drewthedev.com', // list of receivers
                subject: 'Subject of your email', // Subject line
                html: `<h1>${req.body.subject}</h1><p>First Name: ${req.body.firstName}</p><p>Last Name: ${req.body.lastName}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.message}</p>`// plain text body
              };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.render("contact", {error: true});
                }
                res.render("contact", {success: true});
            });
        });
    }
}