import React, { useRef, useEffect } from 'react';

export const SmokeVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.0; // Movimento natural e contínuo

    // Inicia imediatamente no ponto onde a fumaça já está ativa e visível (eliminando os ~3s iniciais pretos)
    const setStartTime = () => {
      if (video.currentTime < 3.0) {
        video.currentTime = 3.0;
      }
    };

    if (video.readyState >= 1) {
      setStartTime();
    } else {
      video.addEventListener('loadedmetadata', setStartTime, { once: true });
    }

    // No loop contínuo, reinicia em 3.0s antes do fade-out preto dos últimos segundos
    const handleTimeUpdate = () => {
      if (video.currentTime >= 42.5) {
        video.currentTime = 3.0;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    video.play().catch(() => {
      // Fallback silencioso para políticas de autoplay
    });

    return () => {
      video.removeEventListener('loadedmetadata', setStartTime);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div 
      className="absolute inset-x-0 top-0 h-[65%] sm:h-[70%] md:h-[72%] z-[5] pointer-events-none select-none overflow-hidden"
      aria-hidden="true"
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.25) 60%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.25) 60%, transparent 100%)',
      }}
    >
      <video
        ref={videoRef}
        src="/smoke.mp4#t=3.0"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover object-top opacity-45 mix-blend-screen filter contrast-120 brightness-110 pointer-events-none select-none"
        style={{
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};
