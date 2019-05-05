const router = require('express').Router();
const { create, update, getAll, get, deleteBusiness } = require(".//apis/business").businessCtrl;


// Defined store route
router.route('/add').post(create);

// Defined get data(index or listing) route
router.route('/').get(getAll);

// Defined edit route
router.route('/edit/:id').get(get);

//  Defined update route
router.route('/update/:id').put(update);

// Defined delete | remove | destroy route
router.route('/delete/:id').delete(deleteBusiness);

module.exports = router;