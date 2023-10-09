import { Resource, getProject } from "@/sanity/sanity-util";
import React from "react";

const sanity = async () => {
  const projects = await getProject({ query: "", category: "", page: "1" });
  return (
    <div>
      {projects.map((p: Resource) => (
        <div key={p._id}>{p.title}</div>
      ))}
    </div>
  );
};

export default sanity;
