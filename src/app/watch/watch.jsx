"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
const result = [
  {
    id: 1,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/vid1.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
  {
    id: 2,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/vid2.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
  {
    id: 3,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/vid3.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
  {
    id: 4,
    video: "/watch/viewfeedbacks.mp4",
    poster: "/watch/vid4.svg",
    title: "Billings Outlaws vs. Desert Hawks",
    date: "23 Sept 2023",
  },
];
export default function Watch({ data }) {
  const videoRef = useRef(null);
  const [isVideoPlaying1, setIsVideoPlaying1] = useState(false);
  const videoRefs = useRef(result.map(() => React.createRef()));
  const [isVideoPlaying, setIsVideoPlaying] = useState({});

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
      <div className=" flex flex-col py-6 px-14">
        <div className=" uppercase font-magistraal text-4xl text-headingblue dark:text-white m-8 text-center">
          Watch
        </div>
        <div className=" flex flex-col gap-10 ">
          <div className="grid lg:grid-cols-11 mx-6 gap-10 place-items-center">
            <div className="col-span-6">
              <div className="relative rounded-xl ">
                {!isVideoPlaying1 && (
                  <div>
                    <img
                      src="/Home/COVERafl.svg"
                      className="absolute z-10 hidden rounded-xl"
                    />
                    <img
                      src="/watch/playicon.svg"
                      className="hidden absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 translate-y-28"
                      alt="Play Icon"
                    />
                    <div
                      className={`hidden gap-2 px-2 items-center font-magistraal uppercase text-white bg-hawks rounded-md absolute z-20 left-[490px] top-2`}>
                      <p>live</p>
                      <p className="bg-white w-2 h-2 rounded-full"></p>
                    </div>
                  </div>
                )}
              </div>
              <video
                ref={videoRef}
                className="relative rounded-xl"
                src="/watch/viewfeedbacks.mp4"
                poster="/Home/COVERafl.svg"
                controls
                onClick={handlePlayClick1}
                onEnded={() => setIsVideoPlaying1(false)}
              />
            </div>
            <div className="col-span-5 font-Roboto ">
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
              <p className="text-sm">
                Duis eget eros eu nisl convallis finibus. Nunc scelerisque
                varius posuere. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Fusce quis justo sit
                amet libero vestibulum scelerisque eu a libero. Pellentesque
                quis ultrices libero. Integer at gravida elit. Fusce consectetur
                bibendum luctus. Nulla porta metus non rhoncus vehicula.
              </p>
              <p className="flex gap-2 font-bold text-bgblue mt-2">
                Live Stream <img src="/Home/UnionBlack.svg" />
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-6 font-Roboto place-items-center mb-8">
            {result.map((item) => (
              <div key={item.id} className="relative rounded-xl ">
                <div>
                  <video
                    ref={videoRefs.current[item.id]}
                    className="relative rounded-xl"
                    src={item.video}
                    controls
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
