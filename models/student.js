const mongoose = require("mongoose");
const schema = mongoose.Schema;

let StudentSchema = new schema({
    first_name:String,
    last_name:String,
    father_name:String,
    mother_name:String,
    class:Number,
    roll_number:Number,
    registration_number:Number,
    contact_number:Number,
});

module.exports = mongoose.model("Student",StudentSchema);