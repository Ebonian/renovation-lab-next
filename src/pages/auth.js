import { useContext, useEffect } from "react";
import { Context } from "../context/main";
import Link from "next/link";

export default function Auth() {
  const { setEmail, setPassword, login, err } = useContext(Context);

  return <p>auth</p>;
}
