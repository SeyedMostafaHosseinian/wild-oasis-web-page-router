import { supabase } from "@/lib/supabase";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST")
    return res.status(405).send("get method not allowed");
  const data = JSON.parse(req.body);
  const { error } = await supabase.from("contact").insert([data]);

  if (error)
    return res
      .status(500)
      .send({ error: { message: "cannot send contacts data!" } });

  return res.status(200).send({ message: "contact" });
}
