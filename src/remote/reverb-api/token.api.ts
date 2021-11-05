import { signInWithEmailAndPassword } from "@firebase/auth";
import swal from "sweetalert";
import { auth } from "../../firebase";
import { Token } from "../../models/tokenModel";

export const getToken = async (email: string, password: string): Promise<Token> => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const token = await userCredential.user.getIdTokenResult(true)
        return token;

    }catch(error: any){
        const errorCode = error.code.slice(5);
        swal("Uh oh!", errorCode, "error");
        return errorCode;
    }


    // console.log("userCredential: ", userCredential);

}