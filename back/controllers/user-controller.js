const userService = require("../service/user-service");
const HttpError = require("../errors/http-error");

class UserController {
	async registration(req, res, next) {
		try {
			const { email, password, firstName, lastName } = req.body;
			const userData = await userService.registration(email, password, firstName, lastName);
			res.cookie('refreshToken', userData.refreshToken, {
				maxAge: 30*24*60*60*1000, 
				httpOnly: true
			});
		} catch (error) {
			return next(
				new HttpError(
					error,
					500
				)
			);
		}
		return res.json();
	}

	async login(req, res, next) {
		try {

		} catch (error) {

		}
	}

	async logout(req, res, next) {
		try {

		} catch (error) {

		}
	}

	async refresh(req, res, next) {
		try {

		} catch (error) {

		}
	}

	async activate(req, res, next) {
		try {

		} catch (error) {

		}
	}

	async getUsers(req, res, next) {
		try {

		} catch (error) {

		}
	}
}

module.exports = new UserController();