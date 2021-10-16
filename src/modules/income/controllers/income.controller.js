'use strict'

const jwt = require('jsonwebtoken');
const incomeInterface = require('../../../interfaces/income/income.interface');



class Income{
    async create(req){
        const { body } = req;
        try{
            return await incomeInterface.save(body);

        }catch(error){
            console.log(error);
            return error;
        }

    }
    async findAll(req){
        const { body = {} } = req || {};
        try{
            return await incomeInterface.findAll(body);
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async findOne(req){
        try{
            return await incomeInterface.findOne();
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async update(req){
        const {body} = req;
        const {id, obj} = body;
        try{
            return await incomeInterface.updateOne(id,obj);
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async delete(req){
        const {body} = req;
        const {id} = body;
        try{
            return await incomeInterface.deleteOne(id);
        }catch(error){
            console.log(error);
            return error;
        }
    }

}

module.exports = new Income();