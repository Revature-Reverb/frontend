import { Post } from "../../models/postModel";
import { reverbClient, reverbClientWithAuth } from './reverbClient'

export const createPost = async (neoPost: Post): Promise<Post> => {
  const {data: post} = await reverbClientWithAuth.post<Post>('/api/post', neoPost);

  return post;
}

export const getPost = async (): Promise<Post> => {
  const {data: post} = await reverbClientWithAuth.get<Post>('/api/post/testNoAuth');

  return post;
}