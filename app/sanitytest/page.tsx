import { Resource, getProject } from "@/sanity/sanity-util";
import React from "react";

const sanity = async () => {
  const projects = await getProject({ query: "", category: "", page: "1" });
  return (
    <div>
      {projects.map((p: Resource) => (
        <div key={p._id}>{p.title}</div>
      ))}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/unxAnJBy12Q?si=2OwalLE8XdRvWDUO"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      {/* check whether headphone is connected or not */}

      {/* {(global.navigator.mediaDevices as any)
        .getAudioTracks()
        .some(
          (track: MediaStreamTrack) =>
            track.kind === "audiooutput" &&
            (track.getSettings() as any).deviceId?.includes("headphones")
        ) ? (
        // Headphones are connected
        <div>Headphones are connected</div>
      ) : (
        // Headphones are not connected
        <div>Headphones are not connected</div>
      )} */}
    </div>
  );
};

export default sanity;
