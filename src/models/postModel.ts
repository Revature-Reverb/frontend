import { Profile } from "./profileModel";
import { Comment } from "./commentModel";

export interface Post {
    title: String,
    postText: String,
    imageURL: String,
    profile: Profile,
    comments: Comment[]
};

// potential additions to model:
// name : ?