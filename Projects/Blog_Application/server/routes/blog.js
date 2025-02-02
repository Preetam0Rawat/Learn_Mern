import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from '../controller/blog.js'

const router = express.Router()

router.post('/', createBlog)
router.get('/', getAllBlogs)
router.get('/:id', getBlogById)
router.post('/:id', updateBlog)
router.delete('/:id', deleteBlog)


export default router;  