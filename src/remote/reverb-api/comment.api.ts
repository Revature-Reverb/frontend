import { Comment } from "../../models/commentModel";
import reverbClient from './reverbClient'

export const createComment = async (neoUser: Comment): Promise<Comment> => {
  const {data: comment} = await reverbClient.post<Comment>('/api/user', neoUser);

  return comment;
}

export const getComment = async (): Promise<Comment> => {
  const {data: comment} = await reverbClient.get<Comment>('/api/user/testNoAuth');

  return comment;
}

