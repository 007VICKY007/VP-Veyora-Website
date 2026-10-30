"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hotspot {
  id: string;
  xPercent: number; // percentage in container
  yPercent: number;
  title: string;
  subtitle: string;
}

export const AiThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>("core");
  const [isLoaded, setIsLoaded] = useState(false);

  const hotspots: Hotspot[] = [
    {
      id: "portal",
      xPercent: 48,
      yPercent: 32,
      title: "Monolith Neural Portal",
      subtitle: "High-throughput vector memory & reasoning gateway"
    },
    {
      id: "core",
      xPercent: 54,
      yPercent: 52,
      title: "Celestial AI Core",
      subtitle: "Autonomous multi-agent orchestration engine"
    },
    {
      id: "orbit",
      xPercent: 78,
      yPercent: 62,
      title: "Continuous Orbital Sync",
      subtitle: "Bi-directional event pipelines & CRM automation"
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    // Atmospheric cosmic fog matching deep navy/obsidian
    scene.fog = new THREE.FogExp2(0x050714, 0.05);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for mouse parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── 1. ARCHITECTURAL MONOLITH PORTAL (Inspired by EOSAI reference) ──
    // Archway outer frame
    const portalGroup = new THREE.Group();
    portalGroup.position.set(-0.2, 0.3, -0.6);

    // Vertical monolith pillars
    const pillarGeo = new THREE.BoxGeometry(0.35, 3.4, 0.5);
    const monolithMat = new THREE.MeshStandardMaterial({
      color: 0x181c2e,
      roughness: 0.25,
      metalness: 0.85,
      envMapIntensity: 1.0
    });

    const leftPillar = new THREE.Mesh(pillarGeo, monolithMat);
    leftPillar.position.set(-1.1, 0, 0);
    portalGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(pillarGeo, monolithMat);
    rightPillar.position.set(1.1, 0, 0);
    portalGroup.add(rightPillar);

    // Top beam
    const topBeamGeo = new THREE.BoxGeometry(2.55, 0.45, 0.5);
    const topBeam = new THREE.Mesh(topBeamGeo, monolithMat);
    topBeam.position.set(0, 1.7, 0);
    portalGroup.add(topBeam);

    // Base podium / plinth
    const plinthGeo = new THREE.BoxGeometry(2.8, 0.15, 1.2);
    const plinth = new THREE.Mesh(plinthGeo, monolithMat);
    plinth.position.set(0, -1.75, 0);
    portalGroup.add(plinth);

    // Delicate neon edge line inside portal
    const portalArchLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.9, -1.6, 0.26),
      new THREE.Vector3(-0.9, 1.45, 0.26),
      new THREE.Vector3(0.9, 1.45, 0.26),
      new THREE.Vector3(0.9, -1.6, 0.26)
    ]);
    const portalArchLineMat = new THREE.LineBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.6
    });
    const portalArchLine = new THREE.Line(portalArchLineGeo, portalArchLineMat);
    portalGroup.add(portalArchLine);

    mainGroup.add(portalGroup);

    // ── 2. CELESTIAL AI SPHERE (Core) ──
    const coreGroup = new THREE.Group();
    coreGroup.position.set(0.1, 0.2, 0.2);

    // Inner glowing sphere
    const sphereGeo = new THREE.SphereGeometry(0.85, 48, 48);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x0b132b,
      emissive: 0x1d1145,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.9
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    coreGroup.add(sphereMesh);

    // Outer wireframe energy shell
    const wireGeo = new THREE.IcosahedronGeometry(0.98, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wireMesh);

    // Violet secondary wireframe
    const wireGeo2 = new THREE.IcosahedronGeometry(1.08, 1);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const wireMesh2 = new THREE.Mesh(wireGeo2, wireMat2);
    coreGroup.add(wireMesh2);

    mainGroup.add(coreGroup);

    // ── 3. SATURN-LIKE CELESTIAL ORBITAL RINGS ──
    const ringGroup = new THREE.Group();
    ringGroup.position.copy(coreGroup.position);
    ringGroup.rotation.x = Math.PI * 0.38; // Tilted angle like reference
    ringGroup.rotation.y = Math.PI * 0.08;

    // Thin elegant outer ring
    const ringGeo1 = new THREE.RingGeometry(1.4, 1.43, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup.add(ringMesh1);

    // Wider subtle secondary ring
    const ringGeo2 = new THREE.RingGeometry(1.52, 1.75, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringGroup.add(ringMesh2);

    // Third fine perimeter ring
    const ringGeo3 = new THREE.RingGeometry(1.9, 1.92, 80);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4
    });
    const ringMesh3 = new THREE.Mesh(ringGeo3, ringMat3);
    ringGroup.add(ringMesh3);

    mainGroup.add(ringGroup);

    // ── 4. FLOATING CELESTIAL PARTICLES & ORBITAL DUST ──
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.3 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.9;

      particlePositions[i * 3] = radius * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * 0.5;
      particlePositions[i * 3 + 2] = radius * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.035,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    coreGroup.add(particleSystem);

    // ── 5. LIGHTING ──
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x0e1428, 1.8);
    scene.add(ambientLight);

    // Primary cyan key light from front-left
    const keyLight = new THREE.DirectionalLight(0x00f2fe, 3.2);
    keyLight.position.set(-3, 3, 4);
    scene.add(keyLight);

    // Electric violet rim light from back-right
    const rimLight = new THREE.DirectionalLight(0xa855f7, 4.0);
    rimLight.position.set(4, 2, -2);
    scene.add(rimLight);

    // Subtle warm starlight fill from bottom
    const fillLight = new THREE.PointLight(0xfff5ea, 1.2, 10);
    fillLight.position.set(0, -2, 2);
    scene.add(fillLight);

    setIsLoaded(true);

    // ── 6. INTERACTION & ANIMATION ──
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width) * 2 - 1;
      mouseY = -(y / rect.height) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera / mainGroup mouse parallax interpolation
      targetX += (mouseX * 0.35 - targetX) * 0.05;
      targetY += (mouseY * 0.25 - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.5 + Math.sin(elapsedTime * 0.15) * 0.05;
      mainGroup.rotation.x = -targetY * 0.3;

      // Celestial core continuous idle rotation
      wireMesh.rotation.y = elapsedTime * 0.12;
      wireMesh.rotation.x = elapsedTime * 0.08;
      wireMesh2.rotation.y = -elapsedTime * 0.09;
      wireMesh2.rotation.z = elapsedTime * 0.06;

      // Rings slow orbital precession
      ringGroup.rotation.z = elapsedTime * 0.06;

      // Particle system rotation
      particleSystem.rotation.y = elapsedTime * 0.05;

      // Breathing scale for inner sphere
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.02;
      sphereMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    // ── 7. RESIZE HANDLER ──
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      wireGeo.dispose();
      wireGeo2.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      pillarGeo.dispose();
      topBeamGeo.dispose();
      plinthGeo.dispose();
      monolithMat.dispose();
      sphereMat.dispose();
      wireMat.dispose();
      wireMat2.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[700px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        aria-label="Interactive 3D AI Engine Monolith Visualizer"
      />

      {/* Atmospheric Horizon Gradient Layer */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#04040c] via-transparent to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none bg-gradient-to-t from-[#04040c] to-transparent" />

      {/* Interactive Telemetry Hotspots (Matching Reference 1 & 2) */}
      {isLoaded && hotspots.map((spot) => {
        const isActive = activeHotspot === spot.id;
        return (
          <div
            key={spot.id}
            style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
          >
            {/* Pulsing Radar Pin */}
            <button
              onClick={() => setActiveHotspot(isActive ? null : spot.id)}
              className="relative flex items-center justify-center p-2 focus:outline-none"
              aria-label={spot.title}
            >
              <span className="absolute h-6 w-6 rounded-full bg-cyan-400/30 animate-ping" />
              <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/80 bg-cyan-400 shadow-[0_0_12px_#00f2fe]">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </span>
            </button>

            {/* Hover / Active Telemetry Tooltip */}
            <div className={`absolute left-6 top-1/2 -translate-y-1/2 w-52 sm:w-60 pointer-events-none transition-all duration-300 ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}>
              <div className="rounded-xl border border-white/15 bg-black/80 backdrop-blur-xl p-3 shadow-2xl space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold">
                    Telemetry Node
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {spot.title}
                </h4>
                <p className="text-[11px] text-white/60 leading-tight">
                  {spot.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating HUD Architectural Spec Card (Inspired by ZROBIM reference) */}
      <div className="absolute left-4 bottom-8 sm:left-8 sm:bottom-12 z-20 max-w-[280px] sm:max-w-[320px] rounded-2xl border border-white/15 bg-black/60 backdrop-blur-xl p-4 sm:p-5 shadow-2xl hidden sm:block pointer-events-auto hover:border-cyan-400/40 transition-colors">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/70 font-bold">
              SYS ARCHITECTURE v3.4
            </span>
          </div>
          <span className="text-[9px] font-mono text-cyan-400 font-bold">
            LIVE ONLINE
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono text-white/70">
          <div className="flex justify-between">
            <span className="text-white/40">Studio:</span>
            <span className="text-white font-medium">VP VEYORA LABS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Engine:</span>
            <span className="text-cyan-300 font-medium">Autonomous Agent Swarms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Markets:</span>
            <span className="text-white font-medium">UK · USA · UAE · EU · AUS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Latency:</span>
            <span className="text-emerald-400 font-medium">&lt; 120ms Real-time</span>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
          <span>Enterprise Bilateral NDA</span>
          <span className="text-cyan-400 font-mono">100% IP Handover</span>
        </div>
      </div>

    </div>
  );
};
