import * as THREE from'https://unpkg.com/three@0.126.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/FBXLoader.js';

let camera;
let scene;
let renderer
const width = 1000
const height = 720
const canvasElement = document.querySelector('#myCanvas');

window.addEventListener('DOMContentLoaded', init);

function init() {

    scene = new THREE.scene()
    scene.add(new THREE.AxesHelper(5))

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000)
    camera.position.set(0, 0, 5)
    const controls = new THREE.OrbitControls(camera, canvasElement);

    tick();
}
function tick() {
    // レンダリング
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
}