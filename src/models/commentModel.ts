import { Profile } from "./profileModel";

export interface Comment {
    commentId: number,
    commentText: String,
    profile: Profile
}