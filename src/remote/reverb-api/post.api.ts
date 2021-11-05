import { PostModel } from "../../models/postModel";
import { reverbClient, reverbClientWithAuth } from './reverbClient'

export const createPost = async (neoPost: PostModel): Promise<PostModel> => {
  const {data: post} = await reverbClientWithAuth.post<PostModel>('/api/post/submit', neoPost);

  return post;
}

export const getAllPosts = async (): Promise<PostModel[]> => {
  const {data: posts} = await reverbClientWithAuth.get<PostModel[]>('/api/post/get-all-posts');

  return posts;
}