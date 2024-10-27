import CabinView from "@/components/CabinView";
import { getCabin } from "@/lib/data-service";
import { generateTitle } from "@/lib/utils";
import { TITLES_ENUM } from "@/types/constants/titles-enum";
import Head from "next/head";
import { useParams } from "next/navigation";
import React from "react";

export async function getServerSideProps({
  params,
}: {
  params: Record<string, any>;
}) {
  const cabin = await getCabin(params?.cabinId);
  return { props: { cabin } };
}

export default function Cabin({ cabin }: { cabin: Record<string, any> }) {
  return (
    <>
      <Head>
        <title>{generateTitle(TITLES_ENUM.CABIN + " #" + cabin?.id)}</title>
      </Head>
      <CabinView cabin={cabin} />
    </>
  );
}
