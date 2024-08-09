const nodemailer = require("nodemailer");

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host:process.env.SMTP_HOST,
			post:process.env.SMTP_PORT,
			secure:false,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		});
	}
	async sendActivationMail(to, link) {
		console.log("to: ", to);
		await this.transporter.sendMail({
			from: process.env.SMTP_USER,
			to,
			subject: 'Account activation for ' + process.env.API_URL,
			text: '',
			html: `
				<div>
					<h1>Tap on link for activation</h1>
					<a href="${link}">${link}</a>
				</div>
			`
		});
 }
}

module.exports = new MailService;