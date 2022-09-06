const request = require("postman-request")
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(process.argv)

const address = process.argv[2]

if(!address){
    console.log('Please provide an Address!!')
}
else{
    geocode(address, (error, {latitude,longitude,location}) => {
        if(error){
            return console.log(error)
        }
    
        forecast(latitude,longitude,(error,dat) =>{
            if (error){
                return console.log(error)
            }
            console.log(location)
            console.log(dat)   
            
        })
    })
}




// forecast('30.686529409119498','76.66229761784999',(error,data) =>{
//     console.log("Error",error)
//     console.log("data",data)
// })