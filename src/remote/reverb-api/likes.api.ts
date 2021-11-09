import { reverbClientWithAuth } from './reverbClient'

export const getNumLikes = async (postId: number): Promise<number> => {
    const { data } = await reverbClientWithAuth.get<number>('/api/like/get-number-of-likes/' + postId);
    return data;
}

export const likePost = async (postId: number) => {
    reverbClientWithAuth.put<void>('/api/like/like-post/' + postId);
}

export const checkIfPostCanBeLiked = async (postId: number): Promise<boolean> => {
    const { data: canLike } = await reverbClientWithAuth.get<boolean>('/api/like/check-if-liked/' + postId);

    return canLike;
}
