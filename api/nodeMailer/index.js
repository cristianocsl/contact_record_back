const mailer = require('nodemailer');
 
module.exports = (email, nome, mensagem, anexo) => {
    const smtpTransport = mailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'msbtectestepratico@gmail.com',
            pass: 'vzrvrjjgpyhezfqo',
        },
        tls: {
            rejectUnauthorized: false,
        },
    });
    
    const mail = {
        from: 'Eng. de Sofwtare Cristiano <msbtectestepratico@gmail.com>',
        to: email,
        subject: `${nome} te enviou uma mensagem`,
        text: mensagem,
    };
    
    if (anexo) {
        mail.attachments = [];
        mail.attachments.push({
            filename: anexo.originalname,
            content: anexo.buffer,
        });
    }
    
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mail)
            .then((response) => {
                smtpTransport.close();
                return resolve(response);
            })
            .catch((error) => {
                smtpTransport.close();
                return reject(error);
            });
    });
};
