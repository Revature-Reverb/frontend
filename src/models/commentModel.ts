import { Profile } from "./profileModel";

export interface Comment {
    commentId: number,
    commentText: string,
    date: string,
    profile: Profile
}



export const initialComment: Comment = {
    commentId: 0,
    commentText: "",
    date: "",
    profile: {
        id: 0,
        first_name: "",
        last_name: "",
        birthday: "",
        hobby: "",
        location: "",
        profile_img: "",
        header_img: "",
        about_me: ""
    }
}