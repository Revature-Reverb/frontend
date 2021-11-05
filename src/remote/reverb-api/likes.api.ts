import { Likes } from "../../models/likesModel";
import { reverbClient, reverbClientWithAuth } from './reverbClient'

export const getNumLikes = async (postId: number): Promise<Likes> => {
    const { data: numLikes } = await reverbClientWithAuth.get<Likes>('/api/like/get-number-of-likes/' + postId);

    return numLikes;
}

export const likePost = async (postId: number) => {
    reverbClientWithAuth.get<void>('/api/like/like-post/' + postId);
}

export const checkIfPostCanBeLiked = async (postId: number): Promise<boolean> => {
    const { data: canLike } = await reverbClientWithAuth.get<boolean>('/api/like/check-if-liked/' + postId);

    return canLike;
}
