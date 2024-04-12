import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import init from './init';

import './style.css';

const { sizes, camera, scene, canvas, controls, renderer } = init();

camera.position.set(0, 2, 5);

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(50,50),
    new THREE.MeshStandardMaterial({
        color: `#444444`,
        metalness: 0,
        roughness: 0.5,
    }),
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.23);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
dirLight.position.set(2, 12, 4);
dirLight.castShadow = true;
dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
scene.add(dirLight);
const clickableObjects = [];

const loader = new GLTFLoader();
loader.load(
    '/models/Chasovnya/Chasovnya.gltf',
    (gltf) => {
        console.log(gltf);
        gltf.scene.scale.set(1, 1, 1);
		gltf.scene.position.set(-15, 0.4, 15);
		clickableObjects.push(gltf.scene);
		scene.add(gltf.scene);
});

loader.load(
	'/models/LaboraK/LaboraK.gltf',
	(gltf) => {
		gltf.scene.scale.set(1, 1, 1);
		gltf.scene.position.set(-15, -0.9, 54);
		scene.add(gltf.scene);
	}
)	
// 15 0.4 15
//-15 -0.9 54
const tick = () => {
	controls.update();
	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};
tick();

/** Базовые обпаботчики событий длы поддержки ресайза */
window.addEventListener('resize', () => {
	// Обновляем размеры
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Обновляем соотношение сторон камеры
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Обновляем renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.render(scene, camera);
});

window.addEventListener('dblclick', () => {
	if (!document.fullscreenElement) {
		canvas.requestFullscreen();
	} else {
		document.exitFullscreen();
	}
});

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

renderer.domElement.addEventListener('click', onClick);

function onClick(event) {
    // Получаем координаты мыши
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Обновляем луч из камеры
    raycaster.setFromCamera(mouse, camera);
    
    // Определяем объекты, через которые проходит луч
	var intersects = raycaster.intersectObjects(clickableObjects, true);
    
    if (intersects.length > 0) {
        console.log('Объект был нажат:', intersects[0].object);
		window.open('https://www.npi-tu.ru', '_blank')
}
}

