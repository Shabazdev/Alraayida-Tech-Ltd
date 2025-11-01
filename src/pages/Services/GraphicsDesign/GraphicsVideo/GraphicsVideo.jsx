import React from 'react';
import video from '../../../../assets/New folder/d757cf09-4103-44c8-ae31-68b129a9a5e3.mp4';

const GraphicsVideo = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
  );
};

export default GraphicsVideo;
