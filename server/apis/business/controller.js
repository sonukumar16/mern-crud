const Methods = require("./service");
const { ResponseHandler, HttpCode } = require("../../helpers");

class Controller extends Methods {
    constructor () {
        super();
    }

    static getInstance() {
        if (!Controller.instance) {
            Controller.instance = new Controller();
        }
        return Controller.instance;
    }

    async create(req, res, next) {
        try {
            const { person_name, business_name, business_gst_number } = req.body;
            const data = await super.create({
                person_name,
                business_name,
                business_gst_number
            });
            return ResponseHandler.successWithData(res, data, 'business in added successfully');
        } catch (error) {
			/* console.log("submenu error", error);
			if (error.code === 11000) {
				error.message = "This name is already exits.";
			} */
            next(error);
        }
    }
    async getAll(req, res, next) {
        try {
            const data = await super.getAll(req.body || {});
            data.length
                ? ResponseHandler.successWithData(res, data, "List of Colors with their code.")
                : ResponseHandler.noDataFound(res, "No data found");
        } catch (error) {
            console.log("ERRORrrrrrrrrrrrr", error);
            next(error);
        }
    }
    async get(req, res, next) {
        try {
            const data = await super.get(req.body || {});
            data
                ? ResponseHandler.successWithData(res, data, "Color with their code.")
                : ResponseHandler.noDataFound(res, "No data found");
        } catch (error) {
            console.log("ERRORrrrrrrrrrrrr", error);
            next(error);
        }
    }
    async update(req, res, next) {
        try {
            const { person_name, business_name, business_gst_number } = req.body;
            const data = await super.updateById(req.params.id,{
                person_name,
                business_name,
                business_gst_number
            });
            return ResponseHandler.successWithData(res, data, 'business updated successfully.');
       
        } catch (error) {
          
            next(error);
        }
    }
    async deleteBusiness(req, res, next) {
        try {
            const { name, code } = req.body;
            await super.deleteBusiness(req.params.id, {
                name,
                code,
            });
            return ResponseHandler.success(res, "Color updated successfully.");
        } catch (error) {
            console.log("ERRORrrrrrrrrrrrr", error);
            if (error.code === 11000) {
                error.message = "This name is already exits.";
            }
            next(error);
        }
    }


}
module.exports = Controller;
