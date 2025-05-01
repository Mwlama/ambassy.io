// "use client";

// import React, { useEffect, useRef, useState, useCallback } from "react";

// interface MousePosition {
//     x: number;
//     y: number;
// }

// function useMousePosition(): MousePosition {
//     const [mousePosition, setMousePosition] = useState<MousePosition>({
//         x: 0,
//         y: 0,
//     });

//     useEffect(() => {
//         const handleMouseMove = (event: MouseEvent) => {
//             setMousePosition({ x: event.clientX, y: event.clientY });
//         };

//         window.addEventListener("mousemove", handleMouseMove);
//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//         };
//     }, []);

//     return mousePosition;
// }

// interface ParticlesProps {
//     className?: string;
//     quantity?: number;
//     staticity?: number;
//     ease?: number;
//     size?: number;
//     refresh?: boolean;
//     color?: string;
//     vx?: number;
//     vy?: number;
// }

// function hexToRgb(hex: string): number[] {
//     hex = hex.replace("#", "");
//     const hexInt = parseInt(hex, 16);
//     const red = (hexInt >> 16) & 255;
//     const green = (hexInt >> 8) & 255;
//     const blue = hexInt & 255;
//     return [red, green, blue];
// }

// const Particles: React.FC<ParticlesProps> = ({
//     className = "",
//     quantity = 100,
//     staticity = 50,
//     ease = 50,
//     size = 0.4,
//     refresh = false,
//     color = "#ffffff",
//     vx = 0,
//     vy = 0,
// }) => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
//     const canvasContainerRef = useRef<HTMLDivElement>(null);
//     const context = useRef<CanvasRenderingContext2D | null>(null);
//     const circles = useRef<any[]>([]);
//     const mousePosition = useMousePosition();
//     const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
//     const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
//     const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

//     const initCanvas = useCallback(() => {
//         resizeCanvas();
//         // Particles function call removed as it expects arguments
//     }, [color, refresh]);

//     const onMouseMove = useCallback(() => {
//         if (canvasRef.current) {
//             const rect = canvasRef.current.getBoundingClientRect();
//             const { w, h } = canvasSize.current;
//             const x = mousePosition.x - rect.left - w / 2;
//             const y = mousePosition.y - rect.top - h / 2;
//             const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
//             if (inside) {
//                 mouse.current.x = x;
//                 mouse.current.y = y;
//             }
//         }
//     }, [mousePosition]);

//     useEffect(() => {
//         if (canvasRef.current) {
//             context.current = canvasRef.current.getContext("2d");
//         }
//         initCanvas();
//         animate();
//         window.addEventListener("resize", initCanvas);

//         return () => {
//             window.removeEventListener("resize", initCanvas);
//         };
//     }, [initCanvas]);

//     useEffect(() => {
//         onMouseMove();
//     }, [onMouseMove]);

//     type Circle = {
//         x: number;
//         y: number;
//         translateX: number;
//         translateY: number;
//         size: number;
//         alpha: number;
//         targetAlpha: number;
//         dx: number;
//         dy: number;
//         magnetism: number;
//     };

//     const resizeCanvas = () => {
//         if (canvasContainerRef.current && canvasRef.current && context.current) {
//             circles.current.length = 0;
//             canvasSize.current.w = canvasContainerRef.current.offsetWidth;
//             canvasSize.current.h = canvasContainerRef.current.offsetHeight;
//             canvasRef.current.width = canvasSize.current.w * dpr;
//             canvasRef.current.height = canvasSize.current.h * dpr;
//             canvasRef.current.style.width = `${canvasSize.current.w}px`;
//             canvasRef.current.style.height = `${canvasSize.current.h}px`;
//             context.current.scale(dpr, dpr);
//         }
//     };

//     const animate = useCallback(() => {
//         clearContext();
//         circles.current.forEach((circle: Circle, i: number) => {
//             circle.x += circle.dx + vx;
//             circle.y += circle.dy + vy;
//             circle.translateX +=
//                 (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
//                 ease;
//             circle.translateY +=
//                 (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
//                 ease;
//             drawCircle(circle, true);
//             if (
//                 circle.x < -circle.size ||
//                 circle.x > canvasSize.current.w + circle.size ||
//                 circle.y < -circle.size ||
//                 circle.y > canvasSize.current.h + circle.size
//             ) {
//                 circles.current.splice(i, 1);
//                 const newCircle = circleParams();
//                 drawCircle(newCircle, true);
//             }
//         });
//         window.requestAnimationFrame(animate);
//     }, [ease, staticity, vx, vy]);

//     return (
//         <div className={className} ref={canvasContainerRef} aria-hidden="true">
//             <canvas ref={canvasRef} className="h-full w-full" />
//         </div>
//     );
// };

// export default Particles;
// function drawCircle(circle: { x: number; y: number; translateX: number; translateY: number; size: number; alpha: number; targetAlpha: number; dx: number; dy: number; magnetism: number; }, arg1: boolean) {
//     throw new Error("Function not implemented.");
// }

// function clearContext() {
//     throw new Error("Function not implemented.");
// }

// function circleParams() {
//     throw new Error("Function not implemented.");
// }

