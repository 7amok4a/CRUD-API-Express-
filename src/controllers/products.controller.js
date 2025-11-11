import { Product } from "../modules/products.module.js"

const createProduct = async(req , res) => {
    console.log(req.body) ;
    try {
        const product = await Product.create(req.body) ; 
        res.status(200).json({product}) ; 
    } catch (err){
        res.status(500).json({message : err.message}) ; 
    }
}

const getAllProducts = async (req, res) => {

    try {
        const allProducts = await Product.find({}) ; 
        res.status(200).json({allProducts}) ;  

    } catch (err) {
        res.status(500).json({message : err.message}) ;       
    } 

}

const getProductById = async (req, res) => {
    const {id} = req.params ; 
    console.log(id) ; 
    try {
        const product = await Product.findById(id) ; 
        if (!product) 
            return res.status(404).json({message : 'product not found'}) ; 
        res.status(200).json({product}) ;  

    } catch (err) {
        res.status(500).json({message : err.message}) ;       
    } 

}


const updateProductById  = async (req , res)=> {
    const {id} = req.params ; 
    console.log(id) ; 
    try {
        const product = await Product.findById(id) ; 
        if (!product) 
            return res.status(404).json({message : 'product not found'}) ; 
       
        await Product.updateOne({ _id: id }, req.body);
        res.status(200).json({message : 'Product is Updated'}) ; 
    }catch(err) {
        res.status(500).json({message : err.message}) ;  
    }
}

const deleteProductById = async(req , res) => {
    const {id} = req.params ; 
    try {
        const product = await Product.findById(id) ; 
        if (!product) 
            return res.status(404).json({message : 'product not found'}) ; 
        await Product.deleteOne({_id : id}) ; 
        res.status(200).json({message : 'Product is deleted'}) ; 
    }catch(err) {
        res.status(500).json({message : err.message}) ; 
    }
} 



export default {
    createProduct , 
    getAllProducts , 
    getProductById , 
    updateProductById , 
    deleteProductById
} ; 