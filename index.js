const sendEmail = require('./class/SendEmail')

const emailsender = new sendEmail('pedrodepaivasoaresll@gmail.com', 'Testando a classe de email', 'apenas um assunto qualquer, nem precisa ler literalmente, testnado se deu certo a contrução da classe')
emailsender.send()
