import { Post, CreatePostData } from '@/types/post';

const POSTS_KEY = 'dual-portal-posts';

export const getPosts = (): Post[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const posts = localStorage.getItem(POSTS_KEY);
    if (!posts) return [];
    
    return JSON.parse(posts).map((post: any) => ({
      ...post,
      createdAt: new Date(post.createdAt),
      updatedAt: new Date(post.updatedAt),
    }));
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
};

export const savePosts = (posts: Post[]): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
  } catch (error) {
    console.error('Error saving posts:', error);
  }
};

export const createPost = (data: CreatePostData): Post => {
  const newPost: Post = {
    id: generateId(),
    title: data.title,
    content: data.content,
    author: data.author,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  
  const posts = getPosts();
  posts.unshift(newPost);
  savePosts(posts);
  
  return newPost;
};

export const deletePost = (id: string): boolean => {
  const posts = getPosts();
  const filteredPosts = posts.filter(post => post.id !== id);
  
  if (filteredPosts.length === posts.length) {
    return false; // Post not found
  }
  
  savePosts(filteredPosts);
  return true;
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};