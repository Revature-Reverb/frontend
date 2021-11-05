import { Profile } from "../../models/profileModel";
import { reverbClientWithAuth } from "./reverbClient"

export const getProfile = async () => {
    const {data: profile} = await reverbClientWithAuth.get<Profile>("/api/profile/getUsersProfile");
    
    return profile;
}

export const updateProfile = async (updatedProfile:Profile):Promise<Profile> => {
    const { data: profile } = await reverbClientWithAuth.put<Profile>("/api/profile/update", updatedProfile);
    return profile;
}
