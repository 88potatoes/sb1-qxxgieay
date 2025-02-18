import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ModelViewer = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0xffffff); // Set background color to white
    mount.appendChild(renderer.domElement);

    // Load the GLTF model
    const loader = new GLTFLoader();
    loader.load('/white_mesh.glb', (gltf) => {
      scene.add(gltf.scene);
    }, undefined, (error) => {
      console.error('An error occurred while loading the model:', error);
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Increase intensity
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.5); // Increase intensity
    directionalLight1.position.set(0, 200, 100);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1.5); // Add another directional light
    directionalLight2.position.set(0, -200, -100);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffffff, 1.5); // Add a point light
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1.5); // Add a spot light
    spotLight.position.set(-50, -50, 50);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    camera.position.z = 5;
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ModelViewer;