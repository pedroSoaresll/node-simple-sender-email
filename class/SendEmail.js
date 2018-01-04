const nodemailer = require('nodemailer')

/**
 * @class SendEmail
 * @constructor
 * @param {string} to
 * @param {string} subject
 * @param {string} html
 */

 class SendEmail {
    constructor (to, subject, html) {
        // info from
        this.username = 'Pedro Soares'
        this.useremail = 'pedro.soares@corebiz.com.br'
        this.userpass = 'abc@123AA'
        this.host = 'smtp.gmail.com'
        this.port = 587,
        this.secure = false

        // info to
        this.to = to
        this.subject = subject
        this.html = html
    }

    /**
     * @returns {void}
     */
    send () {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: this.host,
                port: this.port,
                secure: this.secure,
                auth: {
                    user: this.useremail,
                    pass: this.userpass
                }
            })
        
            const mailOptions = {
                from: `${this.username} <${this.useremail}>`,
                to: this.to,
                subject: this.subject,
                html: this.html
            }
        
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error)
                }
        
                console.log('message send: ', info.messageId)
                console.log('preview URL: ', nodemailer.getTestMessageUrl(info))
            })
        })
    }
}

module.exports = SendEmail