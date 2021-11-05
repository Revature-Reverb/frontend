import { Profile } from "../../models/profileModel";
import { reverbClientWithAuth } from "./reverbClient"

export const getProfile = async () => {
    const {data: profile} = await reverbClientWithAuth.get<Profile>("/profile/findprofile");

    return profile;
}
