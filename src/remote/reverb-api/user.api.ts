import { User } from "../../models/userModel";
import reverbClient from './reverbClient'

export const getUser = async (): Promise<User> => {
  const {data: user} = await reverbClient.get<User>('/api/user');

  return user;
}