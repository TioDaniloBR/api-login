'use strict'

const jwt = require('jsonwebtoken');
const expenseInterface = require('../../../interfaces/expense/expense.interface');

class Expense{

    async create(req){
        const { body } = req;
        try{
            return await expenseInterface.save(body);

        }catch(error){
            console.log(error);
            return error;
        }

    }

    async findAll(req){
        const { body = {} } = req || {};
        try{
            return await expenseInterface.findAll(body);
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async findOne(req){
        try{
            return await expenseInterface.findOne();
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async update(req){
        const {body} = req;
        const {id, obj} = body;
        try{
            return await expenseInterface.updateOne(id,obj);
        }catch(error){
            console.log(error);
            return error;
        }
    }

    async delete(req){
        const {body} = req;
        const {id} = body;
        try{
            return await expenseInterface.deleteOne(id);
        }catch(error){
            console.log(error);
            return error;
        }
    }
}

module.exports = new Expense();