import Users from "../models/UserModel";
import jwt from "jsonwebtoken";

export const refreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken 
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decode) => {
            if(err) return res.sendStatus(403);
            const userId = user[0].id;
            const doctor_name = user[0].doctor_name;
            const email = user[0].email;
            const accessToken = jwt.sign({userId, doctor_name, email}, process.env.ACCESS_TOKEN_SECRET)
                expiresIn: '15s'
        });
        res.json({ accessToken });
    } catch (error) {
        console.log(error);
    }
}