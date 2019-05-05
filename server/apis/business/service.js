
 // Require Business model in our routes module
const Business = require('../../model');

class Methods {
    
    static getInstance() {
        if (!Methods.instance) {
            Methods.instance = new Methods();
        }

        return Methods.instance;
    }
    async create(data) {
        return Business.create(data);
    }
    async getAll(query ={}) {
        return Business.find(query);;
    }
    async get(query={}) {
        return Business.findOne(query);
    }

    async updateById(id, dataToUpdate) {        
        return Business.update({
            _id: id
        }, dataToUpdate, {
            new: true,
            upsert: true
        });
    }
   async deleteBusiness(id) {
      return  Business.findByIdAndRemove({_id:id});
       
    }

}

module.exports = Methods;