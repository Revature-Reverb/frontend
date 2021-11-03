import { User } from "../../models/userModel";
import {reverbClient, reverbClientWithAuth} from './reverbClient'

export const createUser = async (neoUser: User): Promise<User> => {
  const {data: user} = await reverbClient.post<User>('/api/user', neoUser);

  return user;
}

export const removeUser = async (neoUser: User): Promise<User> => {
  const {data: user} = await reverbClient.delete<User>(`/api/user/${neoUser.userid}`);

  return user;
}

export const getUser = async (): Promise<User> => {
  const {data: user} = await reverbClientWithAuth.get<User>('/api/user/testWithAuth');

  return user;
}

export const changeUser = async (neoUser: User): Promise<User> => {
  const {data: user} = await reverbClient.put<User>(`/api/user/${neoUser.userid}`, neoUser);

  return user;
}
