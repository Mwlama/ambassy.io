import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
  transparent?: boolean;
}

export const Vortex: React.FC<VortexProps> = ({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = "",
  transparent = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const center = useRef<[number, number]>([0, 0]);
  const tick = useRef(0);
  const noise3D = createNoise3D();
  const particlePropCount = 9;
  const particleProps = useRef<Float32Array>(new Float32Array(particleCount * particlePropCount));

  const HALF_PI = 0.5 * Math.PI;
  const TAU = 2 * Math.PI;
  const TO_RAD = Math.PI / 180;

  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const rangeHue = 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const noiseSteps = 3;

  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    let hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const resize = useCallback((canvas: HTMLCanvasElement) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center.current[0] = 0.5 * canvas.width;
    center.current[1] = 0.5 * canvas.height;
  }, []);

  const initParticle = useCallback((i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = center.current[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);

    particleProps.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  }, [rangeY, baseTTL, rangeTTL, baseSpeed, rangeSpeed, baseRadius, rangeRadius, baseHue]);

  const initParticles = useCallback(() => {
    tick.current = 0;
    particleProps.current = new Float32Array(particleCount * particlePropCount);
    for (let i = 0; i < particleProps.current.length; i += particlePropCount) {
      initParticle(i);
    }
  }, [initParticle, particleCount]);

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) =>
    x > canvas.width || x < 0 || y > canvas.height || y < 0;

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const updateParticle = useCallback(
    (i: number, ctx: CanvasRenderingContext2D) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;
      let x = particleProps.current[i],
        y = particleProps.current[i2],
        vx,
        vy,
        life,
        ttl,
        speed,
        x2,
        y2,
        radius,
        hue;

      const n = noise3D(x * xOff, y * yOff, tick.current * zOff) * noiseSteps * TAU;
      vx = lerp(particleProps.current[i3], Math.cos(n), 0.5);
      vy = lerp(particleProps.current[i4], Math.sin(n), 0.5);
      life = particleProps.current[i5];
      ttl = particleProps.current[i6];
      speed = particleProps.current[i7];
      x2 = x + vx * speed;
      y2 = y + vy * speed;
      radius = particleProps.current[i8];
      hue = particleProps.current[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

      life++;

      particleProps.current[i] = x2;
      particleProps.current[i2] = y2;
      particleProps.current[i3] = vx;
      particleProps.current[i4] = vy;
      particleProps.current[i5] = life;

      if (checkBounds(x, y, canvas) || life > ttl) initParticle(i);
    },
    [initParticle]
  );

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particleProps.current.length; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  }, [updateParticle]);

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick.current++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!transparent) {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);

    window.requestAnimationFrame(() => draw(canvas, ctx));
  }, [backgroundColor, transparent, drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.style.backgroundColor = "transparent";
    canvas.style.mixBlendMode = "screen";

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize(canvas);
    initParticles();
    draw(canvas, ctx);

    const handleResize = () => resize(canvas);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [draw, resize, initParticles]);

  return (
    <div className={cn("relative h-full w-full", containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>
      <div className={cn("relative z-10", className)}>
        {children}
      </div>
    </div>
  );
};
