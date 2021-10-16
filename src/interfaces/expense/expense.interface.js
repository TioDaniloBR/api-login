'use strict'

const ExpenseSchema = require('../../models/expense/expense.model');
const dbFunctions = require('../../commons/dbFunctions/controller/dbFunctions.controller');

class Expense extends dbFunctions{

    constructor(){
        super();
    }

    async save(obj){
        return await this.saveObj(obj, ExpenseSchema);
    }

    async findOne(obj){
        return await this.findOneObj(obj, ExpenseSchema);
    }

    async findAll(obj = {}){
        return await this.findAllObj(obj,ExpenseSchema)
    }

    async updateOne(filter, obj){
        return await this.updateOneObj(filter, obj, ExpenseSchema);
    }

    async deleteOne(filter){
        return await this.deleteOneObj(filter, ExpenseSchema);
    }
}

module.exports = new Expense();