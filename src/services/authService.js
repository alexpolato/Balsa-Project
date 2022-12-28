import { doc, setDoc } from "firebase/firestore";
import { db } from "../autentication/base";

export async function saveUser(email, uid) {
  await setDoc(doc(db, "users", uid), {
    name: email.split("@")[0],
    email,
    isAdmin: false,
  });
}
