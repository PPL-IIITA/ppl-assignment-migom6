module.exports = class Gift{
    constructor(id, type, price, value, lux_rating, obtain_diff, util_value, util_class){
        this.id = id;
        this.type = type;
        this.price = price;
        this.value = value;
        this.lux_rating = lux_rating;
        this.obtain_diff = obtain_diff;
        this.util_value = util_value;
        this.util_class = util_class;
    }
}
