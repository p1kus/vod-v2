import { useState } from "react";

function App() {
  const videos = [
    {
      id: 1,
      title: "Shelby GT500",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      title: "Volkswagen GTI",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1630019210269-d0ebeee405f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Big Buck Bunny",
      url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail:
        "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  return (
    <div className="min-h-screen bg-gray-800 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            VOD - Popiołek Piotr, Piela Patryk
          </h1>
        </header>

        {/* Main Video Player */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-2xl bg-gray-900">
          <video
            controls
            className="w-full aspect-video"
            key={currentVideo.id}
            poster={currentVideo.thumbnail}
          >
            <source src={currentVideo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="p-4 bg-gray-900">
            <h2 className="text-xl font-bold text-white">
              {currentVideo.title}
            </h2>
          </div>
        </div>

        {/* Video Thumbnail Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setCurrentVideo(video)}
              className={`cursor-pointer transition-all duration-300 rounded-lg overflow-hidden group ${
                currentVideo.id === video.id
                  ? "ring-4 ring-blue-500 scale-[1.02]"
                  : "hover:scale-[1.03] hover:ring-2 hover:ring-gray-500"
              }`}
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover transition-opacity group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {video.title}
                  </h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-blue-500/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
