const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");

const userModel = require("../models/user-model");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");

class UserService {
	async registration(email, password, firstName, lastName, ) {
		const candidate = await userModel.findOne({email});
		if (candidate !== null) {
			throw new Error(`User with email ${email} exists`);
		}
		const hashPassword = await bcrypt.hash(password, 3);
		const activationLink = uuid.v4();
		const user = await userModel.create({
			firstName, 
			lastName, 
			email, 
			password: hashPassword,
			activationLink
		});
		await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

		const userDto = new UserDto(user);
		const tokens = tokenService.generateTokens({...userDto});
		await tokenService.saveToken(userDto.id, tokens.refreshToken);

		return { ...tokens, user: userDto }
	}
}

module.exports = new UserService;