import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Context } from "../context/main";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://renovation-lab-web-server.herokuapp.com/documents/sync"
  );
  const data = await res.json();

  return {
    props: { documents: data },
  };
};

export default function index({ documents }) {
  // console.log(documents);
  const { session, logout } = useContext(Context);

  const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/auth");
  //   }
  // }, [session]);

  return (
    <div>
      <p>acc</p>
      <p>{session?.email}</p>
      <p onClick={logout}>logout</p>
      <Link href="/auth">
        <a>login</a>
      </Link>
      <br />
      <Link href="/baiorghor">
        <a>baiorghor</a>
      </Link>
    </div>
  );
}
