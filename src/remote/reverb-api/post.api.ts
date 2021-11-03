import { Post } from "../../models/postModel";
import reverbClient from './reverbClient'

export const createPost = async (neoPost: Post): Promise<Post> => {
  const {data: post} = await reverbClient.post<Post>('/api/post', neoPost);

  return post;
}

export const getPost = async (): Promise<Post> => {
  const {data: post} = await reverbClient.get<Post>('/api/post/testNoAuth');

  return post;
}