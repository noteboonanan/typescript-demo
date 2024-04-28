import { Request, Response } from 'express';
import prisma from '../client';

prisma.$connect();

const createBlogPost = async (req: Request, res: Response) => {
  console.log("req");
  res.status(200).json(req.body);
  // try {
    
    
  //   const { title, content } = req.body;
  //   const newBlogPost = await prisma.post.create({
  //     data: {
  //       title,
  //       content,
  //     },
  //   });
  //   res.status(200).json(newBlogPost);
  // } catch (e) {
  //   res.status(500).json({ error: e });
  // }
}

const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const blogPosts = await prisma.post.findMany();
    res.status(200).json(blogPosts);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createBlogPost,
  getBlogPosts,
};