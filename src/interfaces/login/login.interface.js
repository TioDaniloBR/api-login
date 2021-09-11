'use strict'

const LoginSchema = require('../../models/login/login.model');

class Login{

    async save(request){

        try{
            let response;
            await LoginSchema.init()
            .then( () => {response = LoginSchema.create(request)})
            .catch((error)=>{ response = error});
            return await response;
        }catch(error){
            console.log(error); 
            return {error:error};
        }
    }

    async findAll(filter = {}){
        return await LoginSchema.find(filter).lean();
    }

    async find(filter,fields = {}){
        try{
            return await LoginSchema.find(filter,fields).lean();
        }catch(error){
            console.log(error);
        }

    }

    async update(){

    }

    async delete(){

    }
}

module.exports = new Login();