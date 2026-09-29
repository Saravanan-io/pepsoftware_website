"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
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

function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

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

    // Safely attempt WebGL initialization
    let renderer: THREE.WebGLRenderer | null = null;
    if (checkWebGLSupport()) {
      try {
        renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true,
          powerPreference: "default",
        });
      } catch {
        try {
          renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: false,
          });
        } catch {
          renderer = null;
        }
      }
    }

    // -------------------------------------------------------------
    // BRANCH A: WebGL Renderer available
    // -------------------------------------------------------------
    if (renderer) {
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

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 20);
      camera.position.z = 2;

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.domElement.style.position = "absolute";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.touchAction = "pan-y";
      container.appendChild(renderer.domElement);

      const geometry = new THREE.PlaneGeometry(1, 1, 20, 20);
      const gapWidth = getWidth(options.gap);
      const planeSpace = getPlaneWidth(container, camera) * gapWidth;
      const slideAmount = CASE_STUDY_SLIDES.length;

      const totalImage = Math.ceil(width / planeSpace) + 1 + slideAmount * 2;
      const initialOffset = Math.ceil(width / (2 * planeSpace) - 0.5);

      const imageList: (typeof CASE_STUDY_SLIDES)[number][] = [];
      for (let i = 0; i < totalImage; i++) {
        imageList.push(CASE_STUDY_SLIDES[i % slideAmount]);
      }

      const loader = new THREE.TextureLoader();
      const planes: THREE.Mesh[] = [];
      const loopSpan = gapWidth * slideAmount;

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
        if (renderer) renderer.domElement.style.cursor = "grabbing";
      };

      const onPointerMove = (e: PointerEvent) => {
        if (!renderer) return;
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        if (isDragging) {
          const deltaX = e.clientX - lastPointerX;
          lastPointerX = e.clientX;
          if (Math.abs(e.clientX - startPointerX) > 6) {
            hasMoved = true;
          }
          const currentPlaneWidth = getPlaneWidth(container, camera);
          const worldDelta = deltaX / currentPlaneWidth;
          scenePosX += worldDelta;
          dragVelocity = worldDelta;
        } else {
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(planes);
          renderer.domElement.style.cursor = intersects.length > 0 ? "pointer" : "grab";
        }
      };

      const onPointerUp = () => {
        if (isDragging && !hasMoved) {
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
        if (renderer) renderer.domElement.style.cursor = "grab";
      };

      const onPointerCancel = () => {
        isDragging = false;
        if (renderer) renderer.domElement.style.cursor = "grab";
      };

      const onMouseEnter = () => {
        isHovered = true;
      };

      const onMouseLeave = () => {
        isHovered = false;
        isDragging = false;
        if (renderer) renderer.domElement.style.cursor = "grab";
      };

      const canvasEl = renderer.domElement;
      canvasEl.addEventListener("pointerdown", onPointerDown);
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      canvasEl.addEventListener("pointercancel", onPointerCancel);
      canvasEl.addEventListener("mouseenter", onMouseEnter);
      canvasEl.addEventListener("mouseleave", onMouseLeave);

      let previousTime = performance.now();

      const animate = (currentTime: number) => {
        if (destroyed || !renderer) return;

        const timePassed = Math.min(currentTime - previousTime, 64);
        previousTime = currentTime;

        if (isDragging) {
          // Direct drag follow
        } else {
          if (Math.abs(dragVelocity) > 0.0005) {
            scenePosX += dragVelocity;
            dragVelocity *= 0.92;
          }

          const speedFactor = isHovered ? 0.35 : 1.0;
          const deltaMove = options.direction * timePassed * 0.00001 * options.speed * speedFactor;
          scenePosX += deltaMove;
        }

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

      const handleResize = () => {
        if (!container || destroyed || !renderer) return;
        const newWidth = container.clientWidth || window.innerWidth;
        const newHeight = container.clientHeight || 540;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth, newHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener("resize", handleResize);

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
    }

    // -------------------------------------------------------------
    // BRANCH B: CSS 3D Curved Slider Engine (Zero WebGL error fallback)
    // Preserves identical 3D upward curve, speed, direction, drag & inertia!
    // -------------------------------------------------------------
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 540;

    const track = document.createElement("div");
    track.style.position = "absolute";
    track.style.inset = "0";
    track.style.perspective = "1100px";
    track.style.perspectiveOrigin = "50% 50%";
    track.style.transformStyle = "preserve-3d";
    track.style.touchAction = "pan-y";
    track.style.cursor = "grab";
    track.style.userSelect = "none";
    track.style.overflow = "hidden";
    container.appendChild(track);

    const slideAmount = CASE_STUDY_SLIDES.length;
    let cardWidth = Math.min(Math.max(Math.round(height * 0.58), 260), 380);
    let cardHeight = cardWidth;
    let gap = Math.round(cardWidth * (options.gap / 100));
    let stride = cardWidth + gap;
    let loopSpan = slideAmount * stride;

    const sets = Math.max(3, Math.ceil(width / loopSpan) + 2);
    const totalCards = sets * slideAmount;
    const initialOffset = Math.floor(totalCards / 2);

    const cards: HTMLDivElement[] = [];

    for (let i = 0; i < totalCards; i++) {
      const slide = CASE_STUDY_SLIDES[i % slideAmount];
      const card = document.createElement("div");
      card.className = "group";
      card.style.position = "absolute";
      card.style.top = "50%";
      card.style.left = "50%";
      card.style.width = `${cardWidth}px`;
      card.style.height = `${cardHeight}px`;
      card.style.marginTop = `${-cardHeight / 2}px`;
      card.style.marginLeft = `${-cardWidth / 2}px`;
      card.style.borderRadius = "20px";
      card.style.overflow = "hidden";
      card.style.border = "1px solid rgba(198, 194, 193, 0.75)";
      card.style.boxShadow =
        "0 20px 40px -15px rgba(21, 21, 21, 0.16), 0 0 1px rgba(21, 21, 21, 0.25)";
      card.style.willChange = "transform";
      card.style.cursor = "pointer";
      card.dataset.slug = slide.slug;
      card.dataset.title = slide.title;

      const img = document.createElement("img");
      img.src = slide.image;
      img.alt = slide.title;
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover";
      img.style.pointerEvents = "none";
      img.draggable = false;
      card.appendChild(img);

      const overlay = document.createElement("div");
      overlay.style.position = "absolute";
      overlay.style.inset = "0";
      overlay.style.borderRadius = "20px";
      overlay.style.pointerEvents = "none";
      overlay.style.boxShadow = "inset 0 0 0 1px rgba(255, 255, 255, 0.15)";
      card.appendChild(overlay);

      track.appendChild(card);
      cards.push(card);
    }

    setIsLoaded(true);

    let scenePosX = 0;
    let isDragging = false;
    let isHovered = false;
    let startPointerX = 0;
    let lastPointerX = 0;
    let dragVelocity = 0;
    let hasMoved = false;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      hasMoved = false;
      startPointerX = e.clientX;
      lastPointerX = e.clientX;
      dragVelocity = 0;
      track.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - lastPointerX;
        lastPointerX = e.clientX;
        if (Math.abs(e.clientX - startPointerX) > 6) {
          hasMoved = true;
        }
        scenePosX += deltaX;
        dragVelocity = deltaX;
      }
    };

    const onPointerUp = (e: PointerEvent) => {
      if (isDragging && !hasMoved) {
        const target = e.target as HTMLElement | null;
        const cardEl = target?.closest("[data-slug]") as HTMLElement | null;
        if (cardEl && cardEl.dataset.slug) {
          router.push(`/work/${cardEl.dataset.slug}`);
        }
      }
      isDragging = false;
      track.style.cursor = "grab";
    };

    const onPointerCancel = () => {
      isDragging = false;
      track.style.cursor = "grab";
    };

    const onMouseEnter = () => {
      isHovered = true;
    };

    const onMouseLeave = () => {
      isHovered = false;
      isDragging = false;
      track.style.cursor = "grab";
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerCancel);
    track.addEventListener("mouseenter", onMouseEnter);
    track.addEventListener("mouseleave", onMouseLeave);

    let previousTime = performance.now();

    const animate = (currentTime: number) => {
      if (destroyed) return;

      const timePassed = Math.min(currentTime - previousTime, 64);
      previousTime = currentTime;

      if (isDragging) {
        // Direct pointer follow
      } else {
        if (Math.abs(dragVelocity) > 0.0005) {
          scenePosX += dragVelocity;
          dragVelocity *= 0.92;
        }

        const speedFactor = isHovered ? 0.35 : 1.0;
        // Options: speed = 30, direction = -1
        const deltaMove =
          options.direction * timePassed * 0.05 * (options.speed / 30) * speedFactor;
        scenePosX += deltaMove;
      }

      while (scenePosX <= -loopSpan) {
        scenePosX += loopSpan;
      }
      while (scenePosX > 0) {
        scenePosX -= loopSpan;
      }

      const halfWidth = width / 2;
      const totalSpan = totalCards * stride;
      const halfSpan = totalSpan / 2;

      for (let i = 0; i < totalCards; i++) {
        let cardCenter = (i - initialOffset) * stride + scenePosX;

        while (cardCenter < -halfSpan) cardCenter += totalSpan;
        while (cardCenter > halfSpan) cardCenter -= totalSpan;

        const normX = cardCenter / (halfWidth || 1);

        // Parabolic upward curve matching WebGL shader:
        const cardY = -Math.pow(normX, 2) * (height * 0.16);
        const rotY = -normX * 12;
        const rotZ = normX * 3.5;
        const cardZ = -Math.pow(normX, 2) * 50;
        const scale = Math.max(0.85, 1 - Math.pow(normX, 2) * 0.08);

        cards[i].style.transform = `translate3d(${cardCenter}px, ${cardY}px, ${cardZ}px) rotateY(${rotY}deg) rotateZ(${rotZ}deg) scale(${scale})`;
      }

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

    const handleResize = () => {
      if (!container || destroyed) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 540;
      cardWidth = Math.min(Math.max(Math.round(height * 0.58), 260), 380);
      cardHeight = cardWidth;
      gap = Math.round(cardWidth * (options.gap / 100));
      stride = cardWidth + gap;
      loopSpan = slideAmount * stride;

      cards.forEach((card) => {
        card.style.width = `${cardWidth}px`;
        card.style.height = `${cardHeight}px`;
        card.style.marginTop = `${-cardHeight / 2}px`;
        card.style.marginLeft = `${-cardWidth / 2}px`;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointercancel", onPointerCancel);
      track.removeEventListener("mouseenter", onMouseEnter);
      track.removeEventListener("mouseleave", onMouseLeave);

      if (track.parentElement === container) {
        container.removeChild(track);
      }
    };
  }, [router]);

  return (
    <section className="relative py-20 lg:py-28 bg-[#F7F8F8] text-[#151515] overflow-hidden select-none border-y border-[#C6C2C1]/40">
      {/* Background Dot Texture */}
      <div className="absolute inset-0 bg-dot-light opacity-30 pointer-events-none" />

      {/* Signature Logo-Themed Ambient Glow behind 3D slider */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-[#502D6D]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[450px] bg-[#FCB116]/[0.08] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-4 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
              <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                CASE STUDY
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-[#151515] tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
                Case Studies
              </span>
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
                <div className="w-10 h-10 border-2 border-[#C6C2C1]/40 border-t-[#502D6D] rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Bottom CTA Button */}
          <div className="relative z-30 flex justify-center -mt-8 sm:-mt-10">
            <RevealOnScroll delay={0.1}>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#151515] hover:bg-[#502D6D] text-[#F7F8F8] hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-xl shadow-[#151515]/15 hover:shadow-[#502D6D]/25 hover:scale-105 cursor-pointer"
              >
                <span>See more</span>
                <ArrowUpRight className="w-4 h-4 text-[#FCB116] transition-colors" />
              </Link>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
