import { generateTitle } from "@/lib/utils";
import { TITLES_ENUM } from "@/types/constants/titles-enum";
import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";

export default function Cabin() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <Head>
        <title>
          {generateTitle(TITLES_ENUM.CABIN + " #" + params?.cabinId)}
        </title>
      </Head>
      <div>Cabin</div>
    </>
  );
}
