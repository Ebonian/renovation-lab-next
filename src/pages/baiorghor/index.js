import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Context } from "../../context/main";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://renovation-lab-web-server.herokuapp.com/documents/sync"
  );
  const data = await res.json();

  return {
    props: { documents: data },
  };
};

export default function Baiorghor({ documents }) {
  const { session, checkIsTodayDate, mergeTodayProp } = useContext(Context);

  // auth checking
  // const router = useRouter();
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/auth");
  //   }
  // }, [session]);

  // today date checking
  const allCreatedDates = documents.map((x) => x.createdAt);
  const allEndDates = documents.map((x) => x.endDate);
  const showDates = allCreatedDates.map((e, i) =>
    checkIsTodayDate(e, allEndDates[i])
  );
  mergeTodayProp(documents, showDates);

  return (
    <div>
      {documents.map(
        (data, idx) =>
          data.isToday && (
            <div key={idx}>
              <Link href={`/baiorghor/${data._id}`}>
                <a>{data.reason}</a>
              </Link>
            </div>
          )
      )}
      <br />
    </div>
  );
}
