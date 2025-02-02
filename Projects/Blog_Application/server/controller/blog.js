import Blog from "../models/blog.js"
import User from "../models/user.js";

export const createBlog = async(req, res) =>{
    const {title, description, author, selectedFile, tags} = req.body;

    try{
           const existing_user = await User.findById(author)

           if(!existing_user){
            return res.status(404).json({mssg : "User doesn't exist"})
           }

           const blog = new Blog({
            title,
            description,
            author,
            selectedFile,
            tags
           })

           await blog.save()

           return res.status(201). json({mssg : "Blog created successfully", blog})
    }
    catch(error){
        return res.status(500).json({mssg : "Error occured in creating the blog", error})
    }
}

export const getAllBlogs = async(req, res) =>{
    try {
        const blogs = await Blog.find({})
        return res.status(200).json(blogs)
        
    } catch (error) {
        return res.status(500).json({mssg : "Error occured in getting all the blogs", error})
    }
}


export const getBlogById = async(req, res) =>{
    const {id} = req.params
    try{
        const blog = await Blog.findById(id)
        if(!blog){
            return res.status(404).json({mssg : "Blog not found"})
        }
        return res.status(200).json(blog)
        
    } catch (error) {
        return res.status(500).json({mssg : "Error occured in getting the blog by ID", error})
    }
}

export const updateBlog = async(req, res) =>{
    const {id} = req.params
    const {title, description, selectedFile, tags}  = req.body
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(id, {title, description, selectedFile, tags}, {new : true})
       
        res.status(200).json(updatedBlog)
        
    } catch (error) {
        return res.status(500).json({mssg : "Error occured in updating the blog", error})
    }
}


export const deleteBlog = async(req, res) =>{
    const {id} = req.params
    try{
        await Blog.findByIdAndDelete(id)
       
        res.status(200).json({mssg : "Blog deleted successfully"})
        
    } catch (error) {
        return res.status(500).json({mssg : "Error occured in deleting the blog", error})
    }
}