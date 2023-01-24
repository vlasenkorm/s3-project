import React, { useRef, useEffect } from "react";

export const Dot: React.FC<{ text?: string }> = ({ text = "set Text" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  interface drawProps {}

  const draw: (ctx: CanvasRenderingContext2D, count: number) => void = (
    ctx,
    frameCount
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.04) ** 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    let frameCount: number = 0;
    let animationFrameId: number = 0;

    if (context) {
      const render = () => {
        frameCount++;
        draw(context, frameCount);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <div>
      {text}
      <canvas ref={canvasRef} />
    </div>
  );
};
