const mongoose = require('mongoose');
const { MOGOURI } = require('./config/dev');

const connection = mongoose.connect(MOGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log('conneted to dataBase')
}).catch((err)=>{
    console.log(err)
})
module.exports=connection; 











// const mongoose = require('mongoose')

// const connection = mongoose.connect("mongodb+srv://dbUser:dbUser@cluster0.hukxgoj.mongodb.net?retryWrites=true&w=majority",{
//     useNewUrlParser:true,
//     useUnifiedTopology:true

// }).then(()=>{
//     console.log('conneted to dataBase')
// }).catch((err)=>{
//     console.log(err)
// })

// module.exports=connection; 


//mongodb+srv://shoaibp915687:3zhqr%uVxS*qNWK@cluster0.hukxgoj.mongodb.net/?retryWrites=true&w=majority



//userData=> 3zhqr%uVxS*qNWK
//                                      mongodb+srv://shoaibp915687:9156879709@cluster0.ifns4tt.mongodb.net/userData?retryWrites=true&w=majority
// const connection = mongoose.connect("mongodb+srv://shoaibp915687:3zhqr%uVxS*qNWK@cluster0.ifns4tt.mongodb.net/userData?retryWrites=true&w=majority")
// .then(()=>{










