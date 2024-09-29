import React from 'react';

const WebsiteOverviewVideo = () => {
  return (
    <div className="relative h-0 w-full pb-[56.25%]">
      {' '}
      {/* 16:9 aspect ratio */}
      <iframe
        title={'intro'}
        src={
          'https://www.youtube.com/embed/aP8u95RTCGE?iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=1&color=white'
        }
        allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        className="absolute left-0 top-0 h-full w-full"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WebsiteOverviewVideo;
