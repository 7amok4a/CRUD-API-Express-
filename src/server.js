import express from "express" ; 
import mongoose from "mongoose";
import productsRouter from "./routers/product.router.js"
import  dotenv from "dotenv" 

dotenv.config() ; 

const PORT =  process.env.PORT; 
const URL_DB =  process.env.URL_DB ;  
const app = express() ; 

app.use(express.urlencoded({extended : false}))
app.use(express.json()) ;

app.use('/api/v1/products' , productsRouter) ; 


// connection database 
mongoose.connect(URL_DB).then(() => {
  console.log(`Database is Connecting in ${URL_DB}`) ; 
  app.listen(PORT , () => {
    console.log(`Server is running in http://localhost:${PORT}`) ; 
})
}) ; 


