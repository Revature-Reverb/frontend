import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";
import { Token } from "../../models/tokenModel";

export const getToken = async ( email: string, password: string ): Promise<Token> =>
{
    const userCredential = await signInWithEmailAndPassword( auth, email, password );
    return await userCredential.user.getIdTokenResult( true )
}
