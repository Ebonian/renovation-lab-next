import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Context } from "../context/main";
import Link from "next/link";

export default function Auth() {
  const { setEmail, setPassword, login, session, err, setErr } =
    useContext(Context);

  const router = useRouter();

  useEffect(() => {
    if (session?.email) {
      router.push("/");
    }

    setErr("");
  }, [session]);

  return (
    <div className="flex justify-center md:justify-between w-full h-screen bg-banner1 bg-cover bg-bottom font-athiti">
      <div className="flex-grow bg-black opacity-25 hidden sm:flex" />
      <div className="flex h-screen w-full sm:max-w-[340px] flex-grow justify-center items-center px-8 select-none bg-white">
        <div className="flex flex-grow flex-col mb-16">
          <div className="flex justify-between items-end mb-10">
            <h1 className="text-4xl font-semibold opacity-25">เข้าสู่ระบบ</h1>
          </div>
          <input
            type="text"
            name="email"
            placeholder="อีเมล"
            className="bg-gray-100 h-12 outline-none px-3 py-1.5 border border-gray-300 focus:border-gray-400 mt-1"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="รหัสผ่าน"
            className="bg-gray-100 h-12 outline-none px-3 py-1.5 border border-gray-300 focus:border-gray-400 mt-1"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          {err && (
            <div className="w-full text-right text-red-500 font-medium">
              {err.slice(10).slice(0, -1)}
            </div>
          )}
          <br />

          <div className="flex w-full justify-end items-center font-medium">
            <Link href="/">
              <a className="cursor-pointer opacity-50 hover:opacity-80 mr-7">
                ข้าม
              </a>
            </Link>
            <div
              className="flex justify-center items-center px-4 py-2 bg-gray-100 duration-300 cursor-pointer hover:bg-gray-200 border hover:border-gray-300"
              onClick={login}
            >
              <p>เข้าสู่ระบบ</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-10 opacity-25">
          <p>
            Developed by <span className="underline">PPS Renovation Lab</span>
          </p>
        </div>
      </div>
    </div>
  );
}
