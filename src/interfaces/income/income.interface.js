'use strict'

const IncomeSchema = require('../../models/income/income.model');
const dbFunctions = require('../../commons/dbFunctions/controller/dbFunctions.controller');

class Income extends dbFunctions{

    constructor(){
        super();
    }

    async save(obj){
        return await this.saveObj(obj, IncomeSchema);
        // try{
        //     let response;
        //     await IncomeSchema.init()
        //     .then( () => {response = IncomeSchema.create(obj)})
        //     .catch((error)=>{ response = error});
        //     return await response;
        // }catch(error){
        //     console.log(error); 
        //     return {error:error};
        // }
    }

    async findOne(obj){
        return await this.findOneObj(obj, IncomeSchema);
    }

    async findAll(obj = {}){
        return await this.findAllObj(obj,IncomeSchema)
    }

    async updateOne(filter, obj){
        return await this.updateOneObj(filter, obj, IncomeSchema);
    }

    async deleteOne(filter){
        return await this.deleteOneObj(filter, IncomeSchema);
    }
}

module.exports = new Income();