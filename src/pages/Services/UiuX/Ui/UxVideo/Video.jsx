import React from 'react';
import video from '../../../../../assets/New folder/5db05504-675a-476f-a925-7a037bb8d4aa.mp4';

const Video = () => {
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

export default Video;
