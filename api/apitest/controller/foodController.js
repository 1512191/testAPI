var food = require('./../model/food')
exports.FoodPage = function(req, res){
    var perPage = 5;
    var page = parseInt(req.query.page, 10) || 1;
    food
        .find({})
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function(err, result) {
            food.count().exec(function(err, count) {
                if (err) return next(err)
                res.json({
                    mon_ans: result,
                    current: page,
					pages: Math.ceil(count / perPage),
					size:perPage
                }) 
            })
        })
        
}