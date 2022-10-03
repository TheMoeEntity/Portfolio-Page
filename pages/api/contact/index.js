require('dotenv').config()
export default async function handler(req, res) {
    const mailer = require('nodemailer')
    
    const transporter = mailer.createTransport({
        port:465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS
        },
        secure: true
    })

    let mailData = {
        from: 'Moe\'s Portfolio page',
        to: 'mosesnwigberi@gmail.com',
        subject: `You have a message from ${req.body.firstName} in your portfolio page`,
        text: req.body.message + "| Sent from: " + req.body.email,
        html: `<div>
        ${req.body.message}
        </div><p>Sent from: ${req.body.email} <br />
        Sender's phone: ${req.body.phone}
        `
    }

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error);
                reject(error);
            } else {
                console.log("Server is ready to take our messages");
                resolve(success);
            }
        });
    });
    

    // transporter.sendMail(mailData, function(err,info) {
    //     let status
    //     if (err) {
    //         status = err
    //         console.log(err)
    //         res.status(500).json(status)
    //     } else {
    //         status = info
    //         console.log(info)
    //         res.status(200).json(status)
    //     }
        
    // })

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailData, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });
    res.status(200).end()
}


