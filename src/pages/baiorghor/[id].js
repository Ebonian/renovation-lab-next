import Link from "next/link";
import { useContext, useEffect } from "react";
import { Context } from "../../context/main";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://renovation-lab-web-server.herokuapp.com/documents/sync"
  );
  const data = await res.json();

  const paths = data.map((data) => {
    return {
      params: { id: data._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://renovation-lab-web-server.herokuapp.com/document/" + id
  );
  const data = await res.json();

  return {
    props: { document: data },
  };
};

export default function BaiorghorID({ document }) {
  // id checking
  return (
    <div>
      <p>{document.members}</p>
    </div>
  );
}
