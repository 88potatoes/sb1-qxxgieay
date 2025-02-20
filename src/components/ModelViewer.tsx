// export default ModelViewer;
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ModelViewer = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    // renderer.setClearColor(0xffffff);
    // renderer.setClearColor(0xf5f5f5); //
    // renderer.setClearColor(0xf5f7f8); // Very light blue-gray Very light gray
    renderer.setClearColor(0xf0f4f7); // Light cool gray
    // Increase exposure and enable tone mapping
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5; // Increase exposure
    renderer.outputEncoding = THREE.sRGBEncoding; // Better color representation

    mount.appendChild(renderer.domElement);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load(
      "/white_mesh.glb",
      (gltf) => {
        // Make materials more reflective
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material.metalness = 0.3; // Increase reflectivity
            child.material.roughness = 0.2; // Make surface smoother
          }
        });
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    // Enhanced Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0); // Increased intensity
    scene.add(ambientLight);

    // Main front light
    const frontLight = new THREE.DirectionalLight(0xffffff, 3.0);
    frontLight.position.set(0, 0, 10);
    scene.add(frontLight);

    // Top light
    const topLight = new THREE.DirectionalLight(0xffffff, 2.0);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);

    // Fill lights for sides
    const leftLight = new THREE.DirectionalLight(0xffffff, 1.5);
    leftLight.position.set(-10, 0, 0);
    scene.add(leftLight);

    const rightLight = new THREE.DirectionalLight(0xffffff, 1.5);
    rightLight.position.set(10, 0, 0);
    scene.add(rightLight);

    // Add hemisphere light for better ambient lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.0);
    scene.add(hemiLight);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.target.set(0, 0.6, 0);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    camera.position.set(0, 2, 3);
    camera.lookAt(0, 1, 0);
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%" }} />;
};

export default ModelViewer;
