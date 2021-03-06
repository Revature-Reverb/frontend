import { Post } from "../../models/post";
import { reverbClientWithAuth } from './reverbClient'

export const createPost = async (neoPost: Post): Promise<Post> => {
  const {data: post} = await reverbClientWithAuth.post<Post>('/api/post/submit', neoPost);

  return post;
}

export const getAllPosts = async (): Promise<Post[]> => {
  const {data: posts} = await reverbClientWithAuth.get<Post[]>('/api/post/get-all-posts');

  return posts;
}
