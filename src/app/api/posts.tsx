import { NextApiRequest, NextApiResponse } from "next";
import graphQLClient from "../../graphql/graphQLClient";
import { GET_BLOGPOSTS } from "../../graphql/queries";

interface IBlog {
  blog: {}[];
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;

  const { blog }: IBlog = await graphQLClient.request(GET_BLOGPOSTS, {
    limit: 5,
    page: Number(page),
  });

  res.json(blog);
}
