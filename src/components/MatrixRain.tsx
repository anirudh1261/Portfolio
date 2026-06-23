import { useEffect, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Always match the visible viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01{}<>/*#=+-;:.abcdefghijklmnopqrstuvwxyz';
    const fontSize = 14;

    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1).map(() => Math.random() * -50);

    const draw = () => {
      // Fade existing content to transparent using destination-out
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'; // Controls fade speed (lower = longer trails)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Reset to default drawing mode for new characters
      ctx.globalCompositeOperation = 'source-over';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];

        // Lead character — slightly darker to account for fade
        ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Trail character
        if (drops[i] > 1) {
          const trailChar = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
          ctx.fillText(trailChar, i * fontSize, (drops[i] - 1) * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const handleResize = () => {
      resize();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -50);
    };

    window.addEventListener('resize', handleResize);
    const interval = setInterval(draw, 60);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
      }}
    />
  );
};

export default MatrixRain;
