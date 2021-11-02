import { Post } from "../../models/postModel";
import reverbClient from './reverbClient'

export const createPost = async (neoUser: Post): Promise<Post> => {
  const {data: post} = await reverbClient.post<Post>('/api/post', neoUser);

  return post;
}

export const getPost = async (): Promise<Post> => {
  const {data: post} = await reverbClient.get<Post>('/api/post/testNoAuth');

  return post;
}