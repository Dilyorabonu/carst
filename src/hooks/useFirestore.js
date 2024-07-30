import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function useFirestore() {
  const navigate = useNavigate();

  const addDocument = async (data, collectionName) => {
    await addDoc(collection(db, collectionName), {
      ...data,
      createted_at: serverTimestamp(),
    })
      .then(() => {
        toast.success("New Car added !");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return { addDocument };
}

export { useFirestore };
