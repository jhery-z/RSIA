import Users from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { doctor_id, doctor_name, email, password, confPassword, day, time_start, time_finish, quota, status, date_range } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password dan Confirm Password tidak sama"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create({
            doctor_id: doctor_id,
            doctor_name: doctor_name,
            email: email,
            password: hashPassword,
            day: day,
            time_start: time_start,
            time_finish: time_finish,
            quota: quota,
            status: status,
            date_range: date_range
        });
        res.json({msg: "Input Data Berhasil"});
    } catch (error) {
        console.log(error);
    }
}