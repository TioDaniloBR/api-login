'use strict'

const jwt = require('jsonwebtoken');

const LoginInterface = require('../../../interfaces/login/login.interface');

class Login{

    constructor(){}

    async registration(req){
        const { body } = req;
        const { username, password, email, name } = body;

        const objToSave = {username,password,email,name}
        
        try{
            let error = [];
            !username ? error.push("Username é obrigatório"):null;
            !password ? error.push('Password é obrigatório'):undefined;
            !email ? error.push('Email é obrigatório'):undefined;
            !name ? error.push('Nome é obrigatório'):undefined;
            
            if(error.length){
                throw error; 
            }
            return await LoginInterface.save(objToSave);
            
        }catch(error){
            let dbresponse = [];
            if(typeof(error) === Array){
                let objToSend = {};
                error.forEach((element)=>{
                    console.log(element);
                    objToSend.error.push(element);
                });
                dbresponse = objToSend;
            }
            dbresponse = {error};
        }
        
    }

    async authenticate(req){
        const {username, password } = req.body;
        const filter = {username:username, password:password};
        const excludedFields = {"__v":0, "password":0}

        const userDoc = await LoginInterface.find(filter,excludedFields);
        
        if(userDoc.length === 1){
            const username = userDoc[0].username;
            const id = userDoc[0]._id.toString();
            const userdata = {id,username}

            const token = jwt.sign({userdata}, process.env.SECRET,{expiresIn:process.env.EXPIRES_IN});
            const objReturn = {
                auth: true,
                token: token
            }
            return objReturn;
        }
        const error = {"error":"usuário/senha incorretos."};
        return error;
        
    }

    authorized(req, res, next){
        const bearerToken = req.headers['authorization'];
        if(!bearerToken){
            return res.status(500).json({auth:false, message:'No one authorization method was provided'});
        }
        const token = bearerToken.split(' ')[0] === 'Bearer' ? bearerToken.split(' ')[1] : null;
        if(!token){
            return res.status(401).json({auth:false, message:'No token provided'});
        }
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if(err){
                return res.status(500).json({auth:false, message:"Not Authorized"});
            }
            req.userdata = decoded.userdata;
            next();
        });
    }

    async testAuthorization(req){
        const dados = [];
        try{
            const userdata = req.userdata;
            return userdata;
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async findOne(req){
        const params = req.params;
        try{
            return await LoginInterface.findOne(params);
        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = new Login();