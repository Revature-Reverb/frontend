import { Profile } from "./profileModel";
import { Comment } from "./commentModel";

export interface PostModel {
    id: number,
    title: string,
    postText: string,
    imageURL: string,
    date: string,
    profile: Profile,
    comments: Comment[]
}

export const initialPost: PostModel = {
    id: 0,
    title: "",
    postText: "",
    imageURL: "",
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
    },
    comments: []
}
