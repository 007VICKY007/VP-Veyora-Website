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

    // ── 1. SCENE & CAMERA (Clean Architectural Studio Light) ──
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xffffff, 0.03);

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
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ── 2. CELESTIAL PLANET SPHERE ──
    const sphereGroup = new THREE.Group();
    sphereGroup.position.set(0.1, 0.35, -0.1);

    const sphereGeo = new THREE.SphereGeometry(1.05, 64, 64);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: 0x18181b, // sleek graphite
      roughness: 0.3,
      metalness: 0.8
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereGroup.add(sphereMesh);

    // Fine wireframe geodesic energy cage in yellow
    const wireGeo = new THREE.IcosahedronGeometry(1.09, 2);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xffe500,
      wireframe: true,
      transparent: true,
      opacity: 0.35
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    sphereGroup.add(wireMesh);

    mainGroup.add(sphereGroup);

    // ── 3. ARCHITECTURAL MONOLITH ARCHWAY (Minimalist Architectural White & Stone) ──
    const archGroup = new THREE.Group();
    archGroup.position.set(-0.15, 0.3, -0.4);

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9, // crisp slate pearl
      roughness: 0.2,
      metalness: 0.2
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

    // Signature Canary Yellow Hairline Contour inside portal
    const archLineGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-0.98, -1.8, 0.31),
      new THREE.Vector3(-0.98, 1.55, 0.31),
      new THREE.Vector3(0.98, 1.55, 0.31),
      new THREE.Vector3(0.98, -1.8, 0.31)
    ]);
    const archLineMat = new THREE.LineBasicMaterial({
      color: 0xffe500,
      transparent: true,
      opacity: 0.95
    });
    const archLine = new THREE.Line(archLineGeo, archLineMat);
    archGroup.add(archLine);

    mainGroup.add(archGroup);

    // ── 4. CANARY YELLOW SATURN CELESTIAL ORBITAL RING ──
    const ringGroup = new THREE.Group();
    ringGroup.position.copy(sphereGroup.position);
    ringGroup.rotation.x = Math.PI * 0.36; // Tilted angle
    ringGroup.rotation.y = Math.PI * 0.06;

    // Thin crisp canary yellow primary ring
    const ringGeo1 = new THREE.RingGeometry(1.62, 1.66, 96);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xffe500,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup.add(ring1);

    // Secondary fine outer orbit
    const ringGeo2 = new THREE.RingGeometry(1.85, 1.87, 96);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x111827,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.25
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringGroup.add(ring2);

    mainGroup.add(ringGroup);

    // ── 5. LIGHTING ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.8);
    sunLight.position.set(-3.5, 4.0, 4.0);
    scene.add(sunLight);

    const yellowRim = new THREE.PointLight(0xffe500, 3.5, 8);
    yellowRim.position.set(0, 0.4, -1.8);
    scene.add(yellowRim);

    setIsLoaded(true);

    // ── 6. MOUSE PARALLAX & ANIMATION LOOP ──
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

      targetX += (mouseX * 0.3 - targetX) * 0.05;
      targetY += (mouseY * 0.2 - targetY) * 0.05;

      mainGroup.rotation.y = targetX * 0.4 + Math.sin(elapsedTime * 0.12) * 0.04;
      mainGroup.rotation.x = -targetY * 0.25;

      sphereMesh.rotation.y = elapsedTime * 0.05;
      wireMesh.rotation.y = -elapsedTime * 0.08;
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
      wireGeo.dispose();
      pillarGeo.dispose();
      lintelGeo.dispose();
      plinthGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      sphereMat.dispose();
      wireMat.dispose();
      stoneMaterial.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] flex items-center justify-center">
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        aria-label="3D AI Monolith & Kinetic Core"
      />

      {/* Interactive Telemetry Hotspots */}
      {isLoaded && hotspots.map((spot) => {
        const isActive = activeHotspot === spot.id;
        return (
          <div
            key={spot.id}
            style={{ left: `${spot.xPercent}%`, top: `${spot.yPercent}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
          >
            {/* Pulsing Yellow Radar Pin */}
            <button
              onClick={() => setActiveHotspot(isActive ? null : spot.id)}
              className="relative flex items-center justify-center p-2 focus:outline-none"
              aria-label={spot.title}
            >
              <span className="absolute h-6 w-6 rounded-full bg-[#ffe500]/40 animate-ping" />
              <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-black bg-[#ffe500] shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
              </span>
            </button>

            {/* Hover / Active Telemetry Tooltip */}
            <div className={`absolute left-6 top-1/2 -translate-y-1/2 w-52 sm:w-64 pointer-events-none transition-all duration-200 ${
              isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}>
              <div className="rounded-xl border border-gray-200 bg-white/95 backdrop-blur-xl p-3.5 shadow-editorial space-y-1">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ffe500] border border-black" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-black font-extrabold">
                    System Telemetry
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#0a0a0a] leading-tight">
                  {spot.title}
                </h4>
                <p className="text-[11px] text-gray-600 leading-tight">
                  {spot.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating Architectural HUD Spec Card (Styled like Brochure Info Block) */}
      <div className="absolute left-4 bottom-6 sm:left-6 sm:bottom-8 z-20 max-w-[280px] sm:max-w-[310px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl p-4 sm:p-5 shadow-editorial hidden sm:block pointer-events-auto hover:border-black transition-colors">
        <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-800 font-bold">
              SYS ARCHITECTURE v3.4
            </span>
          </div>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#ffe500] text-black font-bold">
            2026 ACTIVE
          </span>
        </div>

        <div className="space-y-1.5 text-[11px] font-mono text-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-400">Studio:</span>
            <span className="text-black font-medium">VP VEYORA LABS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Engine:</span>
            <span className="text-black font-medium">Autonomous Agent Swarms</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Markets:</span>
            <span className="text-black font-medium">UK · USA · UAE · EU · AUS</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Latency:</span>
            <span className="text-emerald-600 font-medium">&lt; 120ms Real-time</span>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500 font-mono">
          <span>Enterprise Bilateral NDA</span>
          <span className="text-black font-bold">100% IP Handover</span>
        </div>
      </div>

    </div>
  );
};
