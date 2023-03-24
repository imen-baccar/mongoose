const mongoose=require("mongoose");
const schema=mongoose.Schema
const produitschema=new schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        
    }
})
const product=mongoose.model('produit',produitschema)
module.exports=product