import client from "@/client";
import { groq } from "next-sanity";

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

export async function getProject(params: GetResourcesParams) {
    const { query, category, page } = params;

    return client.fetch(groq`*[_type == "resource"]{
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