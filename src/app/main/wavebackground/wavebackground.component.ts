import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';
@Component({
  selector: 'app-wavebackground',
  templateUrl: './wavebackground.component.html',
  styleUrls: ['./wavebackground.component.css'],
})
export class WavebackgroundComponent implements OnInit {
  Planematerial = new THREE.MeshLambertMaterial({
    color: 0x14ac00,
    side: THREE.DoubleSide,
  });
  ngOnInit(): void {
    this.createThreeJsBox();
  }
  createThreeJsBox(): void {
    const canvas = document.getElementById('canvas-box');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(202,210,197)");
    const ambientLight = new THREE.AmbientLight("rgb(132,169,140)");
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xeeeeee, 1, 100);
    pointLight.position.set(0, 20, -20);
    scene.add(pointLight);
    let geometry, material, plane;
    createPlane();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );
    camera.position.z = 7;
    camera.position.y = 5;
    camera.lookAt(new THREE.Vector3(0, 5, 0));
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setClearColor(0xe232222, 1);
    renderer.setSize(window.innerWidth, window.innerHeight, false);
    var noise4D = createNoise4D();
    const animate = function () {
      window.requestAnimationFrame(animate);
      for (var i = 0; i < geometry.getAttribute('position').count; i++) {
        var z = i + (Date.now() * 8) / 100000;
        geometry.getAttribute('position').setZ(i, noise4D(z, z, z, z) * 7);
        geometry.getAttribute('position').needsUpdate = true;
        plane.updateMatrix();
      }
      camera.rotateY(0.001);
      renderer.render(scene, camera);
    };
    animate();
    function createPlane() {
      geometry = new THREE.PlaneGeometry(400, 400, 75, 75);
      material = new THREE.MeshLambertMaterial({
        color: "rgb(53,79,82)",
        side: THREE.DoubleSide,
      });
      plane = new THREE.Mesh(geometry, material);
      scene.add(plane);
      plane.rotation.x = Math.PI / 2;
    }
    /***RESIZE***/
    // window.addEventListener('resize', () => {
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //   camera.aspect = window.innerWidth / window.innerHeight;
    //   camera.updateProjectionMatrix();
    //});
  }
}
