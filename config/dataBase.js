const mongoose=require("mongoose")
/*const dbSetup=()=>{
    mongoose.connect("mongodb://localhost:27017/nov-notes-app")

.then(()=>{
    console.log('connected to db')
})
.catch(()=>{
    console.log(err)
})
}*/
const CONNECTION_URL=process.env.MONGOLAB_URL
module.exports=dbSetup