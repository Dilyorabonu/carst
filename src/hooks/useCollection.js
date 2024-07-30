import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";

function useCollection(collectionName, whereName, orderName) {
  const [data, setData] = useState(null);
  const q = query(collection(db, collectionName));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const cars = [];
      querySnapshot.forEach((doc) => {
        cars.push({ id: doc.id, ...doc.data() });
      });
      setData(cars);
    });
  }, []);

  return { data };
}

export { useCollection };
