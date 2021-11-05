import { Comment } from "../../models/commentModel";
import { reverbClient, reverbClientWithAuth } from './reverbClient'

export const createComment = async (postId: number, neoComment: Comment): Promise<Comment> => {
  const {data: post} = await reverbClientWithAuth.post<Comment>('/api/comment/submit/'+postId, neoComment);

  return post;
}
