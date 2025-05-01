import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  videoFile: string;
  link: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: '',
    videoFile: '/videos/UGC1.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '2',
    title: '',
    videoFile: '/videos/UGC6.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '3',
    title: '',
    videoFile: '/videos/UGC7.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '4',
    title: '',
    videoFile: '/videos/UGC8.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '5',
    title: '',
    videoFile: '/videos/UGC4.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '6',
    title: '',
    videoFile: '/videos/UGC2.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '7',
    title: '',
    videoFile: '/videos/UGC3.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
  {
    id: '8',
    title: '',
    videoFile: '/videos/UGC5.mp4',
    link: 'https://www.tiktok.com/@ambassy.io',
  },
];

const VideoBanner: React.FC = () => {
    return (
      <div className="w-full overflow-hidden">
        <div className="video-banner-scroll">
          <div className="flex gap-4">
            {videos.concat(videos).map((video, index) => (
              <a
                key={`${video.id}-${index}`}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-none w-[250px] group"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg bg-transparent transition-transform group-hover:scale-105">
                  <div className="aspect-[9/16]">
                    <video
                      src={video.videoFile}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors rounded-2xl" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default VideoBanner;
