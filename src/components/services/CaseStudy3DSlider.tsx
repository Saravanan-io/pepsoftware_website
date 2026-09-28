"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight, Sparkles } from "lucide-react";
import * as THREE from "three";
import { RevealOnScroll } from "../shared/RevealOnScroll";

export const CASE_STUDY_SLIDES = [
  {
    id: "organic-edge",
    title: "Organic Edge",
    subtitle: "Eco Farming & Organic Marketplace",
    image: "/images/case-studies/organic-edge.jpg",
    slug: "organic-edge-e-commerce",
  },
  {
    id: "giving-heart",
    title: "Giving Heart",
    subtitle: "Charity & Volunteer Network",
    image: "/images/case-studies/giving-heart.jpg",
    slug: "charity-donation-app",
  },
  {
    id: "bee-sure",
    title: "Bee Sure",
    subtitle: "Honey Producer & Marketplace",
    image: "/images/case-studies/bee-sure.jpg",
    slug: "honey-bee-management-app",
  },
  {
    id: "healthcare-dashboard",
    title: "BloodDrop",
    subtitle: "Healthcare Medical Dashboard",
    image: "/images/case-studies/healthcare-dashboard.jpg",
    slug: "healthcare-dashboard",
  },
  {
    id: "glamify",
    title: "Glamify",
    subtitle: "Salon Booking Website & App",
    image: "/images/case-studies/glamify.jpg",
    slug: "salon-booking-website",
  },
  {
    id: "feature-film",
    title: "Feature Film",
    subtitle: "Movie Tickets Booking App",
    image: "/images/case-studies/feature-film.jpg",
    slug: "movie-ticket-booking-app",
  },
  {
    id: "udaraa",
    title: "Udaraa",
    subtitle: "Patient Token Management System",
    image: "/images/case-studies/udaraa-patient.jpg",
    slug: "patient-token-management-app",
  },
];

export function CaseStudy3DSlider() {
  const mountRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let destroyed = false;
    let animId: number;

    // WebGL Options matching pepsoftwares.com
    const options = {
      speed: 30,
      gap: 10,
      curve: 12,
      direction: -1,
    };

    function getWidth(gap: number) {
      return 1 + gap / 100;
    }

    function getPlaneWidth(el: HTMLElement, cam: THREE.PerspectiveCamera) {
      const vFov = (cam.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFov / 2) * cam.position.z;
      const aspect = el.clientWidth / (el.clientHeight || 540);
      const width = height * aspect;
      return el.clientWidth / width;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 540;

    // 1. Scene, Camera, WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20);
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.touchAction = "pan-y";
    container.appendChild(renderer.domElement);

    // 2. Geometry & Shader
    const geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
    const gapWidth = getWidth(options.gap);
    const planeSpace = getPlaneWidth(container, camera) * gapWidth;
    const slideAmount = CASE_STUDY_SLIDES.length;

    // Calculate total images needed to cover screen seamlessly plus wrapping buffer
    const totalImage = Math.ceil(width / planeSpace) + 1 + slideAmount * 2;
    const initialOffset = Math.ceil(width / (2 * planeSpace) - 0.5);

    const imageList: (typeof CASE_STUDY_SLIDES)[number][] = [];
    for (let i = 0; i < totalImage; i++) {
      imageList.push(CASE_STUDY_SLIDES[i % slideAmount]);
    }

    const loader = new THREE.TextureLoader();
    const planes: THREE.Mesh[] = [];
    const loopSpan = gapWidth * slideAmount;

    // 3. Load Textures and Build Meshes
    let loadedCount = 0;
    imageList.forEach((item, i) => {
      loader.load(
        item.image,
        (texture) => {
          if (destroyed) return;
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.generateMipmaps = true;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;

          const material = new THREE.ShaderMaterial({
            uniforms: {
              tex: { value: texture },
              curve: { value: options.curve },
            },
            vertexShader: `
              uniform float curve;
              varying vec2 vertexUV;
              void main(){
                  vertexUV = uv;
                  vec3 newPosition = position;
                  float distanceFromCenter = abs(modelMatrix * vec4(position, 1.0)).x;
                  newPosition.y *= 1.0 + (curve / 100.0) * pow(distanceFromCenter, 2.0);
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
              }
            `,
            fragmentShader: `
              uniform sampler2D tex;
              varying vec2 vertexUV;
              void main(){
                  vec4 col = texture2D(tex, vertexUV);
                  // Subtle border overlay to define card edges cleanly on light background
                  vec2 borderDist = min(vertexUV, 1.0 - vertexUV);
                  float edge = min(borderDist.x, borderDist.y);
                  if (edge < 0.0035) {
                      col = mix(col, vec4(0.776, 0.761, 0.757, 1.0), 0.65);
                  }
                  gl_FragColor = col;
              }
            `,
            transparent: true,
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.x = -1 * options.direction * (i - initialOffset) * gapWidth;
          mesh.userData = { slug: item.slug, title: item.title };
          planes.push(mesh);
          scene.add(mesh);

          loadedCount++;
          if (loadedCount >= Math.min(slideAmount, imageList.length)) {
            setIsLoaded(true);
          }
        },
        undefined,
        (err) => {
          console.warn("Failed loading texture", item.image, err);
        }
      );
    });

    // 4. Interaction & Smooth Dragging State
    let scenePosX = 0;
    let isDragging = false;
    let isHovered = false;
    let startPointerX = 0;
    let lastPointerX = 0;
    let dragVelocity = 0;
    let hasMoved = false;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      hasMoved = false;
      startPointerX = e.clientX;
      lastPointerX = e.clientX;
      dragVelocity = 0;
      renderer.domElement.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - lastPointerX;
        lastPointerX = e.clientX;
        if (Math.abs(e.clientX - startPointerX) > 6) {
          hasMoved = true;
        }
        // Convert screen pixel delta to Three.js world units
        const currentPlaneWidth = getPlaneWidth(container, camera);
        const worldDelta = deltaX / currentPlaneWidth;
        scenePosX += worldDelta;
        dragVelocity = worldDelta;
      } else {
        // Hover pointer cursor detection
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(planes);
        renderer.domElement.style.cursor = intersects.length > 0 ? "pointer" : "grab";
      }
    };

    const onPointerUp = () => {
      if (isDragging && !hasMoved) {
        // User clicked without dragging: Navigate to the clicked project!
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(planes);
        if (intersects.length > 0) {
          const hitSlug = intersects[0].object.userData.slug;
          if (hitSlug) {
            router.push(`/work/${hitSlug}`);
          }
        }
      }
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
    };

    const onPointerCancel = () => {
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      isDragging = false;
      renderer.domElement.style.cursor = "grab";
    };

    const canvasEl = renderer.domElement;
    canvasEl.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    canvasEl.addEventListener("pointercancel", onPointerCancel);
    canvasEl.addEventListener("mouseenter", onMouseEnter);
    canvasEl.addEventListener("mouseleave", onMouseLeave);

    // 5. Animation Loop
    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      if (destroyed) return;

      const timePassed = Math.min(currentTime - previousTime, 64);
      previousTime = currentTime;

      if (isDragging) {
        // Follow pointer directly
      } else {
        // Apply inertia if released from drag
        if (Math.abs(dragVelocity) > 0.0005) {
          scenePosX += dragVelocity;
          dragVelocity *= 0.92;
        }

        // Automatic continuous translation
        const speedFactor = isHovered ? 0.35 : 1.0;
        const deltaMove = options.direction * timePassed * 0.00001 * options.speed * speedFactor;
        scenePosX += deltaMove;
      }

      // Seamless infinite wrapping
      while (scenePosX <= -loopSpan) {
        scenePosX += loopSpan;
      }
      while (scenePosX > 0) {
        scenePosX -= loopSpan;
      }

      scene.position.x = scenePosX;
      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const nowVisible = entry.isIntersecting;
        if (nowVisible && !isVisible) {
          isVisible = true;
          previousTime = performance.now();
          animId = requestAnimationFrame(animate);
        } else if (!nowVisible && isVisible) {
          isVisible = false;
          cancelAnimationFrame(animId);
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(container);

    animId = requestAnimationFrame(animate);

    // 6. Responsive Resize Handler
    const handleResize = () => {
      if (!container || destroyed) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || 540;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 7. Cleanup
    return () => {
      destroyed = true;
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      canvasEl.removeEventListener("pointerdown", onPointerDown);
      canvasEl.removeEventListener("pointercancel", onPointerCancel);
      canvasEl.removeEventListener("mouseenter", onMouseEnter);
      canvasEl.removeEventListener("mouseleave", onMouseLeave);

      planes.forEach((plane) => {
        if (plane.material instanceof THREE.ShaderMaterial) {
          if (plane.material.uniforms?.tex?.value) {
            plane.material.uniforms.tex.value.dispose();
          }
          plane.material.dispose();
        }
      });
      geometry.dispose();
      renderer.dispose();

      if (canvasEl.parentElement === container) {
        container.removeChild(canvasEl);
      }
    };
  }, [router]);

  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F8F8] text-[#151515] overflow-hidden select-none border-y border-[#C6C2C1]/40">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      {/* Subtle warm ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] bg-[#C86A28]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#544643]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E9E8E6] border border-[#C6C2C1] text-xs font-bold uppercase tracking-wider text-[#C86A28] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CASE STUDY</span>
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#151515] tracking-tight">
              Case Study
            </h2>
            <p className="text-sm sm:text-base text-[#544643] font-normal leading-relaxed mt-4 max-w-2xl mx-auto">
              &ldquo;We redesigned a healthcare dashboard and reduced task completion time by 40%. Users loved the clarity and flow.&rdquo;
            </p>
          </RevealOnScroll>
        </div>

        {/* 3D WebGL Curved Slider Container */}
        <div className="relative w-full">
          <div
            ref={mountRef}
            className="relative w-full h-[460px] sm:h-[520px] md:h-[580px] overflow-hidden"
          >
            {/* Fallback loading state while WebGL textures prepare */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-[#C6C2C1]/40 border-t-[#C86A28] rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Bottom CTA Button */}
          <div className="relative z-30 flex justify-center -mt-8 sm:-mt-10">
            <RevealOnScroll delay={0.1}>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#151515] hover:bg-[#C86A28] text-[#F7F8F8] hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-xl shadow-[#151515]/15 hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <span>See more</span>
                <ArrowUpRight className="w-4 h-4 text-[#C86A28] group-hover:text-white transition-colors" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
