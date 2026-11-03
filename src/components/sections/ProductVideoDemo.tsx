"use client";

import React, { useRef, useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  MonitorPlay
} from "lucide-react";

export const ProductVideoDemo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = 0;
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      video.requestFullscreen().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekPercent = clickX / rect.width;
    video.currentTime = seekPercent * duration;
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const features = [
    { title: "Autonomous Trigger Ingestion", desc: "Real-time webhook and multi-source API data capture" },
    { title: "Agentic Reasoning Pipeline", desc: "LLM + RAG vector search with structured schema normalization" },
    { title: "Supervised Action Staging", desc: "Human escalation checkpoints before dispatch to CRM / ERP" }
  ];

  return (
    <div className="space-y-8">
      
      {/* Video Browser / Studio Shell */}
      <div className="rounded-3xl border border-gray-200 bg-white shadow-editorial overflow-hidden">
        
        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-gray-200 bg-gray-50/90">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 hidden sm:inline-block text-[11px] font-mono text-gray-400">
              VP Veyora Automation Engine
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-gray-200 text-[10px] sm:text-xs font-mono text-gray-600 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="truncate max-w-[200px] sm:max-w-none">
              https://platform.vpveyora.com/live-demo/product-suite
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#ffe500] text-black font-mono font-bold text-[10px] uppercase">
              LIVE DEMO
            </span>
          </div>
        </div>

        {/* Video Canvas Container */}
        <div className="relative aspect-video bg-[#0a0a0a] group flex items-center justify-center overflow-hidden">
          
          <video
            ref={videoRef}
            src="/videos/product1.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-contain cursor-pointer"
            onClick={togglePlay}
          />

          {/* Central Play/Pause Trigger Overlay (Shown when paused or hovered) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute z-20 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-[#ffe500] text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
              aria-label="Play Video"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          )}

          {/* Bottom Floating Control Bar */}
          <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 sm:p-6 space-y-2.5 transition-opacity opacity-0 group-hover:opacity-100 focus-within:opacity-100">
            
            {/* Clickable Seek Progress Bar */}
            <div 
              className="h-1.5 w-full bg-white/20 rounded-full cursor-pointer relative overflow-hidden"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-[#ffe500] rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-white text-xs font-mono">
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="h-4 w-4 text-[#ffe500]" /> : <Play className="h-4 w-4 text-[#ffe500]" />}
                </button>

                <button
                  onClick={restartVideo}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors hidden sm:block"
                  aria-label="Restart Video"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="h-4 w-4 text-gray-400" /> : <Volume2 className="h-4 w-4 text-[#ffe500]" />}
                </button>

                <span className="text-[11px] text-gray-300">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-white/80">
                  VP Veyora Product Walkthrough
                </span>
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Fullscreen"
                >
                  <Maximize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Feature Breakdown Grid below the video */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feat, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl border border-gray-200 bg-white shadow-xs space-y-2"
          >
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#ffe500] text-black font-mono font-bold text-[10px]">
                0{idx + 1}
              </span>
              <h4 className="text-xs font-mono font-bold uppercase text-black">
                {feat.title}
              </h4>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              {feat.desc}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};
