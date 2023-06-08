import React, { useRef } from "react"
import ReactPlayer from "react-player"

const VideoPlayer = ({ url, isPlaying }: { url: string, isPlaying?: boolean }) => {
    const ref = useRef(null as any)
    const playingVideo = isPlaying !== undefined ? isPlaying : true

    return (
        <div className="flex items-center justify-center w-full h-[50vh]  md:h-[50vh]">
            <div className="relative w-full h-full overflow-hidden">
                <ReactPlayer url={url} width="100%" height="100%" controls={false} playing={playingVideo}
                    playsinline={true} volume={0} muted={true} loop ref={ref}
                    onEnded={() => ref.current.showPreview()} config={{
                        file: {
                            attributes: {
                                controls: false,
                                autoPlay: playingVideo,
                            },
                        },
                        youtube: {
                            playerVars: { showinfo: 0 },
                        },
                    }} className="absolute top-0 left-0 w-full h-full" />
            </div>
        </div>
    );
};

export default VideoPlayer;
