import { Profile } from "./profileModel";

export interface Comment {
    commentId: number,
    commentText: string,
    profile: Profile
}
