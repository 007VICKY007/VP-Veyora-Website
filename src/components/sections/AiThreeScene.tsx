"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Hotspot {
  id: string;
  xPercent: number;
  yPercent: number;
  title: string;
  subtitle: string;
}

export const AiThreeScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeHotspot, setActiveHotspot] = useState<string | null>("portal");
  const [isLoaded, setIsLoaded] = useState(false);

  const hotspots: Hotspot[] = [
    {
      id: "portal",
      xPercent: 44,
      yPercent: 32,
      title: "Architectural Neural Gateway",
      subtitle: "High-throughput enterprise AI inference gateway"
    },
    {
      id: "core",
      xPercent: 58,
      yPercent: 48,
      title: "Celestial Intelligence Core",
      subtitle: "Multi-agent autonomous reasoning swarm"
    },
    {
      id: "orbit",
      xPercent: 78,
      yPercent: 62,
      title: "Continuous Event Orbit",
      subtitle: "Bidirectional CRM, ERP & database synchronization"
    }
  ];

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // ── 1. SCENE & CAMERA ──
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0e1c, 0.045);

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.6, 6.4);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── 2. PROCEDURAL CELESTIAL TEXTURE GENERATOR ──
    // Generates a smooth, photographic lunar / gas-giant planet texture in memory
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      // Base celestial atmospheric gradient
      const grad = ctx.createLinearGradient(0, 0, 0, 512);
      grad.addColorStop(0, "#1e293b");
      grad.addColorStop(0.3, "#334155");
      grad.addColorStop(0.6, "#475569");
      grad.addColorStop(0.85, "#cbd5e1");
      grad.addColorStop(1, "#f8fafc");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 512);

      // Subtle atmospheric cloud bands
      for (let i = 0; i < 40; i++) {
        const y = Math.random() * 512;
        const h = 4 + Math.random() * 18;
        const alpha = 0.05 + Math.random() * 0.12;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(0, y, 1024, h);
      }
    }
    const planetTexture = new THREE.CanvasTexture(canvas);
    planetTexture.wrapS = THREE.RepeatWrapping;
    planetTexture.wrapT = THREE.ClampToEdgeWrapping;

    // ── 3. CELESTIAL PLANET SPHERE (Inspired by EOSAI) ──
    const sphereGroup = new THREE.Group();
    sphereGroup.position.set(0.1, 0.35, -0.1);

    const sphereGeo = new THREE.SphereGeometry(1.05, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      map: planetTexture,
      roughness: 0.35,
      metalness: 0.15,
      emissive: 0x0f172a,
      emissiveIntensity: 0.4
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereGroup.add(sphereMesh);

    // Luminous atmospheric glow halo
    const glowGeo = new THREE.SphereGeometry(1.09, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.12,
      side: THREE.BackSide
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    sphereGroup.add(glowMesh);

    mainGroup.add(sphereGroup);

    // ── 4. ARCHITECTURAL MONOLITH ARCHWAY (Warm Titanium & Stone) ──
    const archGroup = new THREE.Group();
    archGroup.position.set(-0.15, 0.3, -0.4);

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e2638,
      roughness: 0.28,
      metalness: 0.72
    });

    // Left Pillar
    const pillarGeo = new THREE.BoxGeometry(0.38, 3.6, 0.6);
    const leftPillar = new THREE.Mesh(pillarGeo, stoneMaterial);
    leftPillar.position.set(-1.18, 0, 0);
    archGroup.add(leftPillar);

    // Right Pillar
    const rightPillar = new THREE.Mesh(pillarGeo, stoneMaterial);
    rightPillar.position.set(1.18, 0, 0);
    archGroup.add(rightPillar);

    // Lintel (Top Beam)
    const lintelGeo = new THREE.BoxGeometry(2.74, 0.48, 0.6);
    const lintel = new THREE.Mesh(lintelGeo, stoneMaterial);
    lintel.position.set(0, 1.8, 0);
    archGroup.add(lintel);

    // Base plinth podium
    const plinthGeo = new THREE.BoxGeometry(3.0, 0.16, 1.4);
    const plinth = new THREE.Mesh(plinthGeo, stoneMaterial);
    plinth.position.set(0, -1.88, 0);
    archGroup.add(plinth);

    // Warm golden hairline contour line inside portal
    const archLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.98, -1.8, 0.31),
      new THREE.Vector3(-0.98, 1.55, 0.31),
      new THREE.Vector3(0.98, 1.55, 0.31),
      new THREE.Vector3(0.98, -1.8, 0.31)
    ]);
    const archLineMat = new THREE.LineBasicMaterial({
      color: 0xf5c200,
      transparent: true,
      opacity: 0.55
    });
    const archLine = new THREE.Line(archLineGeo, archLineMat);
    archGroup.add(archLine);

    mainGroup.add(archGroup);

    // ── 5. SATURN CELESTIAL ORBITAL RING ──
    const ringGroup = new THREE.Group();
    ringGroup.position.copy(sphereGroup.position);
    ringGroup.rotation.x = Math.PI * 0.36; // Tilted angle
    ringGroup.rotation.y = Math.PI * 0.06;

    // Elegant thin primary ring
    const ringGeo1 = new THREE.RingGeometry(1.65, 1.68, 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xfde047,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.75
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup.add(ring1);

    // Wider outer celestial ring
    const ringGeo2 = new THREE.RingGeometry(1.78, 2.05, 96);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.22
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringGroup.add(ring2);

    // Fine third halo perimeter
    const ringGeo3 = new THREE.RingGeometry(2.2, 2.22, 96);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.35
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ringGroup.add(ring3);

    mainGroup.add(ringGroup);

    // ── 6. CINEMATIC WATER REFLECTIVE BASE PLANE ──
    const waterGeo = new THREE.PlaneGeometry(10, 6, 32, 32);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x070b16,
      roughness: 0.15,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85
    });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.rotation.x = -Math.PI / 2;
    waterMesh.position.set(0, -1.95, 0);
    mainGroup.add(waterMesh);

    // ── 7. WARM DAWN & CELESTIAL LIGHTING ──
    // Ambient light with soft twilight slate tone
    const ambientLight = new THREE.AmbientLight(0x1e293b, 1.6);
    scene.add(ambientLight);

    // Warm sunrise directional key light (Golden hour sun)
    const sunLight = new THREE.DirectionalLight(0xffedd5, 3.4);
    sunLight.position.set(-3.5, 2.5, 4.0);
    scene.add(sunLight);

    // Golden dawn rim light from behind archway
    const sunriseRim = new THREE.PointLight(0xf59e0b, 4.5, 8);
    sunriseRim.position.set(0, 0.4, -1.8);
    scene.add(sunriseRim);

    // Subtle celestial cyan sky fill
    const skyFill = new THREE.DirectionalLight(0x38bdf8, 1.8);
    skyFill.position.set(3.5, 1.5, 2.0);
    scene.add(skyFill);

    setIsLoaded(true);

    // ── 8. MOUSE PARALLAX & ANIMATION LOOP ──
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
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth camera / mainGroup mouse parallax interpolation
      targetX += (mouseX * 0.3 - targetX) * 0.05;
      targetY += (mouseY * 0.2 - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.4 + Math.sin(elapsedTime * 0.12) * 0.04;
      mainGroup.rotation.x = -targetY * 0.25;

      // Slow planetary axial rotation
      sphereMesh.rotation.y = elapsedTime * 0.05;

      // Slow orbital ring precession
      ringGroup.rotation.z = elapsedTime * 0.035;

      renderer.render(scene, camera);
    };

    animate();

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
      glowGeo.dispose();
      pillarGeo.dispose();
      lintelGeo.dispose();
      plinthGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      waterGeo.dispose();
      sphereMat.dispose();
      glowMat.dispose();
      stoneMaterial.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      waterMat.dispose();
      planetTexture.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        aria-label="Cinematic 3D Neural Portal & Celestial Core"
      />

      {/* Atmospheric Dawn Horizon Soft Gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#080b14] via-transparent to-transparent opacity-90" />
      <div className="absolute inset-x-0 bottom-0 h-28 pointer-events-none bg-gradient-to-t from-[#080b14] to-transparent" />

      {/* Interactive Telemetry Hotspots */}
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
              <span className="absolute h-6 w-6 rounded-full bg-amber-400/30 animate-ping" />
              <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/90 bg-amber-400 shadow-[0_0_12px_#f5c200]">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </span>
            </button>

            {/* Hover / Active Telemetry Tooltip */}
            <div className={`absolute left-6 top-1/2 -translate-y-1/2 w-52 sm:w-64 pointer-events-none transition-all duration-300 ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}>
              <div className="rounded-xl border border-white/15 bg-black/85 backdrop-blur-xl p-3.5 shadow-2xl space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">
                    System Telemetry
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white leading-tight">
                  {spot.title}
                </h4>
                <p className="text-[11px] text-white/70 leading-tight">
                  {spot.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating Architectural HUD Spec Card */}
      <div className="absolute left-4 bottom-8 sm:left-6 sm:bottom-10 z-20 max-w-[280px] sm:max-w-[310px] rounded-2xl border border-white/15 bg-[#0a0f1d]/80 backdrop-blur-xl p-4 sm:p-5 shadow-2xl hidden sm:block pointer-events-auto hover:border-amber-400/40 transition-colors">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80 font-bold">
              SYS ARCHITECTURE v3.4
            </span>
          </div>
          <span className="text-[9px] font-mono text-amber-400 font-bold">
            ONLINE
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono text-white/75">
          <div className="flex justify-between">
            <span className="text-white/40">Studio:</span>
            <span className="text-white font-medium">VP VEYORA LABS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white/40">Engine:</span>
            <span className="text-amber-300 font-medium">Autonomous Agent Swarms</span>
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
          <span className="text-amber-400 font-mono">100% IP Handover</span>
        </div>
      </div>

    </div>
  );
};
