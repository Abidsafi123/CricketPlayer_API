import mongoose  from "mongoose";
const playerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
      
        minlength:3,
        trim:true
    },
    country:{
        type:String,
        required:true,
        trim:true,
        minlength:4

    },
    dob:{
        type:Date,
        default:Date.now
    },
inningsPlayed:{
    type:Number,
    required:true,
    
},
team:{
    type:String,
    required:true,
    minlength:2
},
bestScores:{
    type:Number,
    required:true
},
events:{
    type:String,
    default:"cricket"
},
ranking:{
    type:Number,
    required:true,
    
}
    
})
const ranking = new mongoose.model("ranking",playerSchema);
export default ranking;