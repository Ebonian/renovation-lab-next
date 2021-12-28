import { createContext, useEffect, useState } from "react";
import moment from "moment";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

export const Context = createContext(null);

export default function MainContext({ children }) {
  // firebase auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [session, setSession] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setSession(currentUser);
  });

  const [err, setErr] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email + ".com",
        password
      );
      console.log(user);
    } catch (error) {
      setErr(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  // date checking func
  function checkIsTodayDate(start, end) {
    const today = new Date();
    const formattedToday = moment(today).format("MM/DD/YYYY");

    const dateFrom = moment(start).format("MM/DD/YYYY");
    const dateTo = moment(end).format("MM/DD/YYYY");
    const dateCheck = formattedToday;

    const d1 = dateFrom.split("/");
    const d2 = dateTo.split("/");
    const c = dateCheck.split("/");

    const from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]);
    const to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    const check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    return check >= from && check <= to;
  }

  function mergeTodayProp(objectWithArray, array) {
    objectWithArray.map((e, i) => {
      e["isToday"] = array[i];
    });

    return objectWithArray;
  }

  return (
    <Context.Provider
      value={{
        setEmail,
        setPassword,
        email,
        password,
        login,
        logout,
        session,
        setErr,
        err,
        checkIsTodayDate,
        mergeTodayProp,
      }}
    >
      {children}
    </Context.Provider>
  );
}
