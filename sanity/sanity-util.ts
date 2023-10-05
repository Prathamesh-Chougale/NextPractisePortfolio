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

export async function getProject() {
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