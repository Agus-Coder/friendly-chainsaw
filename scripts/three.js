import * as THREE from "../node_modules/three/build/three.module.js";

//renderer

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas });

  // perspective camera

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  // Camera posicion
  camera.position.z = 2;

  // Scene

  const scene = new THREE.Scene();

  // a box

  const geometry = new THREE.IcosahedronGeometry(0.8,0);

  // material

  const material = new THREE.MeshPhongMaterial({ color: 'red' });

  // icosahedron

  const icosahedron = new THREE.Mesh(geometry, material);


  // add icosahedron to scene

  scene.add(icosahedron);

  // render icosahedron

  renderer.render(scene, camera);

  // animate icosahedron

  function render(time) {
    time *= 0.001; // convert time to seconds

    icosahedron.rotation.x = -time;
    icosahedron.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  // add directional light

  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

}

main();

export { main };
