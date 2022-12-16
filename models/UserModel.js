import { Sequelize } from "sequelize";
import db from '../config/Database.js';


const { DataTypes } = Sequelize;

const Users = db.define('users', {
    doctor_id:{
        type: DataTypes.INTEGER
    },
    doctor_name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    day:{
        type: DataTypes.STRING
    },
    time_start:{
        type: DataTypes.TIME
    },
    time_finish:{
        type: DataTypes.TIME
    },
    quota:{
        type: DataTypes.STRING
    },
    status:{
        type: DataTypes.BOOLEAN
    },
    date_range:{
        type: DataTypes.DATE
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default Users;



