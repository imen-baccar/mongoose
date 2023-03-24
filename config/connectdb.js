const { connect } = require("mongoose");

const mongoose=rquire("mongoose")
const connectdb=async()=>{
    try {
    await mongoose.connect('mongodb://127.0.0.1:27017/firstdb');
    console.log("DB is connected")
        
    } catch (error) {
        console.log(error)
    }
}
module.exports =connectdb