import { Profile } from "./profileModel";
import { Comment } from "./commentModel";

export interface PostModel {
    id: number,
    title: String,
    postText: String,
    imageURL: String,
    date: String,
    profile: Profile,
    comments: Comment[]
};
