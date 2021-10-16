'use strict'

const { schema } = require("../../../models/income/income.model");

class dbFunctions{
    constructor(){
        
    }
    async saveObj(obj, schema){
        try{
            let response;
            await schema.init()
            .then( () => {response = schema.create(obj)})
            .catch((error)=>{ response = error});
            return response;
        }catch(error){
            console.log(error); 
            return {error:error};
        }
    }

    async findOneObj(obj, schema){
        try{
            
            let response = await schema.find(obj);
            return response;
        }catch(error){
            console.log(error); 
            return {error:error};
        }
    }

    async findAllObj(obj, schema){
        try{
            let response = await schema.find(obj);
            return response;
        }catch(error){
            console.log(error); 
            return {error:error};
        }
    }

    async updateOneObj(filter, obj, schema){
        try{
            let response;
            await schema.init()
            .then( () => {response = schema.findOneAndUpdate(filter, obj)})
            .catch( (error) => {response = error});
            return response;

        }catch(error){
            console.log(error); 
            return {error:error};
        }
    }

    async deleteOneObj(filter, schema){
        try{
            let response;
            await schema.init()
            .then( () => {response = schema.findOneAndDelete(filter)})
            .catch( (error) => {response = error});
            return response;
        }catch(error){
            console.log(error); 
            return {error:error};
        }
    }
}

module.exports = dbFunctions;