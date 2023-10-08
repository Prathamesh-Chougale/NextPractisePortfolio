import { client } from "@/client";
import { groq } from "next-sanity";
import { buildQuery } from "./buildQuery";

export interface Resource {
    title: string;
    _id: string;
    downloadLink: string;
    image: string;
    views: number;
    slug: string;
    category: string;
}

interface GetResourcesParams {
    query: string;
    category: string;
    page: string;
}

export async function getProject({ query, category, page }: GetResourcesParams) {

    return client.fetch(groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
    })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    )
}