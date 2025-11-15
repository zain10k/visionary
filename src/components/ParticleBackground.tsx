import { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface Star {
  position: THREE.Vector3;
  originalPosition: THREE.Vector3;
}

interface ShootingStar {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  trail: THREE.Vector3[];
  endPosition: THREE.Vector3;
  size: number;
  depth: number;
  maxTrailLength: number;
  startPosition: THREE.Vector3;
  totalDistance: number;
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Store star positions for constellation connections
    const starPositions: Star[] = [];

    // Realistic star distribution - using spherical distribution for depth
    const createStarField = (count: number, radius: number, size: number, opacity: number, color: [number, number, number]) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        // Spherical distribution for realistic star field
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = radius * (0.5 + Math.random() * 0.5);

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        // Store star position for constellation connections (only for near stars)
        if (radius <= 80) {
          starPositions.push({
            position: new THREE.Vector3(x, y, z),
            originalPosition: new THREE.Vector3(x, y, z),
          });
        }

        // Subtle color variation (mostly white/blue, occasional warm stars)
        const colorVariation = Math.random();
        let starColor: [number, number, number];
        if (colorVariation < 0.7) {
          // White/blue stars (most common)
          const blueTint = 0.85 + Math.random() * 0.15;
          starColor = [blueTint, blueTint, 1.0];
        } else if (colorVariation < 0.9) {
          // Slightly warm stars
          starColor = [1.0, 0.95 + Math.random() * 0.05, 0.9 + Math.random() * 0.1];
        } else {
          // Rare warm stars
          starColor = [1.0, 0.85 + Math.random() * 0.15, 0.7 + Math.random() * 0.2];
        }

        colors[i * 3] = starColor[0] * color[0];
        colors[i * 3 + 1] = starColor[1] * color[1];
        colors[i * 3 + 2] = starColor[2] * color[2];

        sizes[i] = size * (0.5 + Math.random() * 0.5);
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: size,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: opacity,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    // Multiple layers of stars for realistic depth
    const nearStars = createStarField(2000, 80, 0.02, 0.8, [1, 1, 1]);
    scene.add(nearStars);

    const midStars = createStarField(3000, 150, 0.015, 0.6, [0.95, 0.95, 1.0]);
    scene.add(midStars);

    const farStars = createStarField(4000, 250, 0.01, 0.4, [0.9, 0.9, 1.0]);
    scene.add(farStars);

    // Create constellation lines connecting nearby stars
    const createConstellationLines = () => {
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions: number[] = [];
      const lineColors: number[] = [];

      // Connect stars that are within a certain distance
      const maxConnectionDistance = 12;
      const maxConnectionsPerStar = 2; // Limit connections to avoid clutter

      for (let i = 0; i < starPositions.length; i++) {
        const star1 = starPositions[i];
        const connections: { distance: number; star: Star }[] = [];

        // Find nearby stars
        for (let j = i + 1; j < starPositions.length; j++) {
          const star2 = starPositions[j];
          const distance = star1.position.distanceTo(star2.position);

          if (distance < maxConnectionDistance) {
            connections.push({ distance, star: star2 });
          }
        }

        // Sort by distance and take the closest ones
        connections.sort((a, b) => a.distance - b.distance);
        const selectedConnections = connections.slice(0, maxConnectionsPerStar);

        // Create lines to selected stars
        for (const connection of selectedConnections) {
          const star2 = connection.star;
          
          // Add line vertices
          linePositions.push(
            star1.position.x, star1.position.y, star1.position.z,
            star2.position.x, star2.position.y, star2.position.z
          );

          // Very subtle color matching distant stars
          lineColors.push(
            0.9, 0.9, 1.0, // Start point - matching far star color
            0.9, 0.9, 1.0  // End point - matching far star color
          );
        }
      }

      lineGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lineGeometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(lineColors, 3)
      );

      const lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.02, // Very subtle, matching distant star visibility
        blending: THREE.AdditiveBlending,
        linewidth: 1,
      });

      return new THREE.LineSegments(lineGeometry, lineMaterial);
    };

    const constellationLines = createConstellationLines();
    scene.add(constellationLines);

    // Shooting stars system
    const shootingStars: ShootingStar[] = [];
    const shootingStarGroup = new THREE.Group();
    scene.add(shootingStarGroup);

    const createShootingStar = (): ShootingStar => {
      const range = 80;
      const depthRange = 60; // Z-depth variation for 3D effect
      
      // Random starting position on one edge of the view
      const side = Math.floor(Math.random() * 4);
      let startX, startY, startZ;
      let endX, endY, endZ;

      // Add depth variation (z-position)
      const depth = -depthRange + Math.random() * depthRange * 2;
      startZ = depth;
      
      // Calculate start and end positions on opposite edges
      switch (side) {
        case 0: // Top to Bottom
          startX = (Math.random() - 0.5) * range * 1.5;
          startY = range;
          endX = (Math.random() - 0.5) * range * 1.5;
          endY = -range;
          endZ = depth + (Math.random() - 0.5) * 10; // Slight depth variation
          break;
        case 1: // Right to Left
          startX = range;
          startY = (Math.random() - 0.5) * range * 1.5;
          endX = -range;
          endY = (Math.random() - 0.5) * range * 1.5;
          endZ = depth + (Math.random() - 0.5) * 10;
          break;
        case 2: // Bottom to Top
          startX = (Math.random() - 0.5) * range * 1.5;
          startY = -range;
          endX = (Math.random() - 0.5) * range * 1.5;
          endY = range;
          endZ = depth + (Math.random() - 0.5) * 10;
          break;
        default: // Left to Right
          startX = -range;
          startY = (Math.random() - 0.5) * range * 1.5;
          endX = range;
          endY = (Math.random() - 0.5) * range * 1.5;
          endZ = depth + (Math.random() - 0.5) * 10;
      }

      const startPos = new THREE.Vector3(startX, startY, startZ);
      const endPos = new THREE.Vector3(endX, endY, endZ);

      // Calculate total distance for progress tracking
      const totalDistance = startPos.distanceTo(endPos);

      // Calculate direction from start to end
      const direction = new THREE.Vector3()
        .subVectors(endPos, startPos)
        .normalize();

      // Much slower movement for subtle effect
      const speed = 0.08 + Math.random() * 0.05;
      const velocity = direction.multiplyScalar(speed);

      // Calculate size based on depth (closer = larger, farther = smaller)
      // Depth ranges from -60 to +60, we want size to vary inversely
      const normalizedDepth = (depth + depthRange) / (depthRange * 2); // 0 to 1
      const size = 0.05 + (1 - normalizedDepth) * 0.08; // Larger when closer (depth negative)

      // Random max trail length - some stars have longer trails, some shorter
      const maxTrailLength = 15 + Math.random() * 35; // Range: 15 to 50

      return {
        position: startPos.clone(),
        velocity: velocity,
        trail: [startPos.clone()],
        endPosition: endPos,
        size: size,
        depth: depth,
        maxTrailLength: maxTrailLength,
        startPosition: startPos.clone(),
        totalDistance: totalDistance,
      };
    };

    const updateShootingStars = () => {
      // Occasionally spawn a new shooting star (rare and subtle)
      if (Math.random() < 0.25 && shootingStars.length < 5) {
        const newStar = createShootingStar();
        shootingStars.push(newStar);
      }

      // Update existing shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];

        // Update position
        star.position.add(star.velocity);

        // Calculate progress (0 to 1) - how far along the path
        const distanceTraveled = star.startPosition.distanceTo(star.position);
        const progress = Math.min(1, distanceTraveled / star.totalDistance);

        // Calculate current max trail length - starts small and grows
        // Use an easing function to make it grow smoothly (ease-out for acceleration effect)
        const trailGrowthFactor = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
        const currentMaxTrailLength = Math.max(3, star.maxTrailLength * trailGrowthFactor);

        // Add to trail
        star.trail.push(star.position.clone());
        
        // Keep trail length dynamic based on progress (growing as star moves)
        if (star.trail.length > currentMaxTrailLength) {
          star.trail.shift();
        }

        // Check if star has reached or passed the end position
        const distanceToEnd = star.position.distanceTo(star.endPosition);
        const previousDistance = star.trail.length > 1 
          ? star.trail[star.trail.length - 2].distanceTo(star.endPosition)
          : Infinity;
        
        // Remove if reached the end (within 2 units) or passed it (distance increasing)
        if (distanceToEnd < 2 || (distanceToEnd > previousDistance && previousDistance < Infinity)) {
          shootingStars.splice(i, 1);
        }
      }
    };

    const renderShootingStars = () => {
      // Clear previous shooting star meshes
      while (shootingStarGroup.children.length > 0) {
        const child = shootingStarGroup.children[0];
        shootingStarGroup.remove(child);
        if (child instanceof THREE.Line || child instanceof THREE.Points) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      }

      // Render each shooting star with trail
      for (const star of shootingStars) {
        if (star.trail.length < 2) continue;

        // Create trail line
        const trailGeometry = new THREE.BufferGeometry();
        const trailPositions = new Float32Array(star.trail.length * 3);
        const trailColors = new Float32Array(star.trail.length * 3);

        for (let i = 0; i < star.trail.length; i++) {
          const point = star.trail[i];
          trailPositions[i * 3] = point.x;
          trailPositions[i * 3 + 1] = point.y;
          trailPositions[i * 3 + 2] = point.z;

          // Fade trail from bright to dim
          const fade = i / star.trail.length;
          const opacity = 0.3 * (1 - fade * 0.7); // Subtle fade
          trailColors[i * 3] = 0.9 * opacity;
          trailColors[i * 3 + 1] = 0.95 * opacity;
          trailColors[i * 3 + 2] = 1.0 * opacity;
        }

        trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
        trailGeometry.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));

        // Adjust trail width based on depth (closer = thicker)
        const trailWidth = Math.max(1, star.size * 15);
        
        const trailMaterial = new THREE.LineBasicMaterial({
          vertexColors: true,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending,
          linewidth: trailWidth,
        });

        const trailLine = new THREE.Line(trailGeometry, trailMaterial);
        shootingStarGroup.add(trailLine);

        // Add bright head point with depth-based size
        const headGeometry = new THREE.BufferGeometry();
        headGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute([
            star.position.x,
            star.position.y,
            star.position.z,
          ], 3)
        );

        const headMaterial = new THREE.PointsMaterial({
          size: star.size,
          sizeAttenuation: true,
          color: 0xffffff,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending,
        });

        const headPoint = new THREE.Points(headGeometry, headMaterial);
        shootingStarGroup.add(headPoint);
      }
    };

    // Very subtle nebula using volumetric fog-like effect
    const createSubtleNebula = (position: [number, number, number], color: [number, number, number], intensity: number) => {
      const geometry = new THREE.BufferGeometry();
      const particleCount = 1500;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        // Gaussian distribution for more natural cloud shape
        const gaussian = () => {
          let u = 0, v = 0;
          while (u === 0) u = Math.random();
          while (v === 0) v = Math.random();
          return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        };

        const radius = Math.abs(gaussian()) * 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = position[0] + radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = position[1] + radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = position[2] + radius * Math.cos(phi);

        const dist = Math.sqrt(
          Math.pow(positions[i * 3] - position[0], 2) +
          Math.pow(positions[i * 3 + 1] - position[1], 2) +
          Math.pow(positions[i * 3 + 2] - position[2], 2)
        );
        const falloff = Math.max(0, 1 - dist / 20);
        const particleIntensity = intensity * falloff * (0.3 + Math.random() * 0.4);

        colors[i * 3] = color[0] * particleIntensity;
        colors[i * 3 + 1] = color[1] * particleIntensity;
        colors[i * 3 + 2] = color[2] * particleIntensity;

        sizes[i] = 0.15 + Math.random() * 0.1;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.PointsMaterial({
        size: 0.25,
        sizeAttenuation: true,
        vertexColors: true,
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    // Very subtle, realistic nebula colors (deep space colors)
    const nebula1 = createSubtleNebula([-40, 15, -80], [0.15, 0.2, 0.35], 0.3);
    scene.add(nebula1);

    const nebula2 = createSubtleNebula([35, -20, -100], [0.2, 0.15, 0.25], 0.25);
    scene.add(nebula2);

    const nebula3 = createSubtleNebula([0, 25, -60], [0.18, 0.18, 0.3], 0.2);
    scene.add(nebula3);

    camera.position.z = 5;

    // Very subtle animation - slow drift
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Very slow rotation for parallax effect
      nearStars.rotation.y += 0.0001;
      midStars.rotation.y += 0.00006;
      farStars.rotation.y += 0.00004;

      // Rotate constellation lines with stars
      constellationLines.rotation.y += 0.0001;

      // Subtle nebula drift - using absolute positions to prevent drift
      nebula1.position.x = -40 + Math.sin(time * 0.3) * 2;
      nebula1.position.y = 15 + Math.cos(time * 0.2) * 1.5;
      nebula2.position.x = 35 + Math.cos(time * 0.25) * 2;
      nebula2.position.y = -20 + Math.sin(time * 0.3) * 2.5;
      nebula3.position.x = Math.sin(time * 0.2) * 1.5;
      nebula3.position.y = 25 + Math.cos(time * 0.25) * 2;

      // Update and render shooting stars
      updateShootingStars();
      renderShootingStars();

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement.parentNode) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose shooting star geometries
      while (shootingStarGroup.children.length > 0) {
        const child = shootingStarGroup.children[0];
        shootingStarGroup.remove(child);
        if (child instanceof THREE.Line || child instanceof THREE.Points) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      }
      
      renderer.dispose();
      nearStars.geometry.dispose();
      (nearStars.material as THREE.Material).dispose();
      midStars.geometry.dispose();
      (midStars.material as THREE.Material).dispose();
      farStars.geometry.dispose();
      (farStars.material as THREE.Material).dispose();
      constellationLines.geometry.dispose();
      (constellationLines.material as THREE.Material).dispose();
      nebula1.geometry.dispose();
      (nebula1.material as THREE.Material).dispose();
      nebula2.geometry.dispose();
      (nebula2.material as THREE.Material).dispose();
      nebula3.geometry.dispose();
      (nebula3.material as THREE.Material).dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

