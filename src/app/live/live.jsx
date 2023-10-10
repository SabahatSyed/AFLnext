"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import ReactPlayer from "react-player";

const result = [
  {
    id: 1,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/video1.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
  {
    id: 2,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/video2.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
  {
    id: 3,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/video3.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
  {
    id: 4,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/video4.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
];
export default function Watch({ data }) {
  const videoRef = useRef(null);
  const [isVideoPlaying1, setIsVideoPlaying1] = useState(false);
  const videoRefs = useRef(result.map(() => React.createRef()));
  const [isVideoPlaying, setIsVideoPlaying] = useState({});
  const [read,setRead]=useState(false)
  const handlePlayClick = (id) => {
    const videoRef = videoRefs.current[id].current;

    if (videoRef) {
      videoRef.play();
      setIsVideoPlaying({ ...isVideoPlaying, [id]: true });
    }
  };
  const handlePlayClick1 = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying1(true);
    }
  };
  return (
    <div>
      <ReactPlayer
        poster="/watch/livevid.svg"
        url="https://www.twitch.tv/thisisfg"
        width="100%"
        height="640px"
      />

     {/*} <video
        ref={videoRef}
        className="relative w-full"
        src="https://www.youtube.com/watch?v=Ok1PRNGvXZg"
        controls
        onClick={handlePlayClick1}
        onEnded={() => setIsVideoPlaying1(false)}
  />*/}
      <div className=" flex flex-col py-6 px-14">
        <div className=" flex flex-col gap-10 ">
          <div className="mx-6 gap-10 place-items-center">
            <div className=" font-roboto ">
              <p className=" text-3xl font-medium mb-2">
                Billing Outlaws vs. Desert Hawks{" "}
              </p>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque mattis, risus vel sodales ultricies, libero enim
                facilisis velit, eget convallis odio nunc quis ante. Praesent
                ultricies placerat magna eget sagittis. Aliquam tincidunt
                gravida eleifend. Ut cursus semper mi malesuada sagittis.
              </p>
              <p className="text-sm  ">
                Duis eget eros eu nisl convallis finibus. Nunc scelerisque
                varius posuere. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Fusce quis justo sit
                amet libero vestibulum scelerisque
                {!read && (
                  <span
                    onClick={() => setRead(true)}
                    className="text-bgblue cursor-pointer font-medium">
                    ...Read More{" "}
                  </span>
                )}
                {read && (
                  <span>
                    eu a libero. Pellentesque quis ultrices libero. Integer at
                    gravida elit. Fusce consectetur bibendum luctus. Nulla porta
                    metus non rhoncus vehicula.
                  </span>
                )}
                {read && (
                  <span
                    onClick={() => setRead(false)}
                    className="text-bgblue cursor-pointer font-medium">
                    {" "}
                    Read Less{" "}
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className=" uppercase font-magistraal text-xl text-headingblue dark:text-white mx-6 ">
            Up Next
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6 font-roboto place-items-center mb-8">
            {result.map((item) => (
              <div key={item.id} className="relative rounded-xl ">
                <div>
                  <video
                    ref={videoRefs.current[item.id]}
                    className="relative rounded-xl"
                    src={item.video}
                    controls={isVideoPlaying[item.id]}
                    poster={item.poster}
                    onEnded={() =>
                      setIsVideoPlaying({ ...isVideoPlaying, [item.id]: false })
                    }
                    onClick={() => handlePlayClick(item.id)}
                  />
                </div>
                <div className="my-2 mx-1">
                  <p className=" font-medium text-lg">{item.title}</p>
                </div>
                <div>
                  {" "}
                  <p className="text-sm text-bgblue font-medium mx-1">
                    Streamed: {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
