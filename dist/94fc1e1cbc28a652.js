import*as THREE from"three";import{GLTFLoader}from"three/examples/jsm/loaders/GLTFLoader";import init from"./init";import"./style.css";const{sizes,camera,scene,canvas,controls,renderer}=init();camera.position.set(0,20,-70);const hemiLight=new THREE.HemisphereLight(16777215,16777215,.23);hemiLight.position.set(0,50,0),scene.add(hemiLight);const dirLight=new THREE.DirectionalLight(16777215,.54);dirLight.position.set(2,12,4),dirLight.castShadow=!0,dirLight.shadow.mapSize=new THREE.Vector2(1024,1024),scene.add(dirLight);const clickableObjects=[],interactiveObjects=[],addObjectWithLink=(e,s)=>{clickableObjects.push({object:e.scene,url:s}),scene.add(e.scene)};function addObjectWithTooltip(e,s){e.userData.tooltipText=s,interactiveObjects.push(e),scene.add(e)}const loader=new GLTFLoader;loader.load("models/Chasovnya/Chasovnya.gltf",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/20");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Часовня"),scene.add(e.scene)})),loader.load("models/LaboraK/LaboraK.gltf",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/10");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Лабораторный корпус (ЛК)"),scene.add(e.scene)})),loader.load("models/Glavniy/Glavniy.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/7");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Главный корпус (ГЛ)"),scene.add(e.scene)})),loader.load("models/Gorniy/Gorniy.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/9");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Горный корпус (ГГ)"),scene.add(e.scene)})),loader.load("models/Him/Him.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/13");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Химический корпус (Х)"),scene.add(e.scene)})),loader.load("models/RT/RT.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/11");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Робототехнический Корпус (РТ)"),scene.add(e.scene)})),loader.load("models/Energo/Energo.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/12");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Энергетический корпус (ЭН)"),scene.add(e.scene)})),loader.load("models/Plane/PlanePam.glb",(e=>{console.log(e),e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0);const s=e.scene.children[80],t=e.scene.children[79],o=e.scene.children[78];s.scale.set(1,1,1),addObjectWithTooltip(s,"Памятник-стела погибшим политехникам"),addObjectWithTooltip(t,"Памятник Галины Петровой"),addObjectWithTooltip(o,"Памятник Галины Петровой"),scene.add(e.scene)})),loader.load("models/Stadion/Stadion.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/UBK/UBK.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/15");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Учебно-библиотечный корпус (УБК)"),scene.add(e.scene)})),loader.load("models/UFP/UFP.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/14");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"УФП"),scene.add(e.scene)})),loader.load("models/Kitchen/Kitchen.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0);const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Столовая"),scene.add(e.scene)})),loader.load("models/Manej/Manej.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/14");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Спортивный комплекс (Манеж)"),scene.add(e.scene)})),loader.load("models/Pool/Pool.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),addObjectWithLink(e,"http://pgsgif.ru/node/14");const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),addObjectWithTooltip(s,"Спортивный комплекс"),scene.add(e.scene)})),loader.load("models/Cup/Cup.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0);const s=e.scene;s.scale.set(1,1,1),s.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Prohodnie/biggates.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Prohodnie/gates.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Prohodnie/gates2.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Prohodnie/oldsmallgates.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Prohodnie/Proh.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Prohodnie/Prohod.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)})),loader.load("models/Tec/Tec.glb",(e=>{e.scene.scale.set(1,1,1),e.scene.position.set(0,0,0),scene.add(e.scene)}));const tick=()=>{controls.update(),renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick(),window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),renderer.render(scene,camera)})),window.addEventListener("dblclick",(()=>{document.fullscreenElement?document.exitFullscreen():canvas.requestFullscreen()}));var raycaster=new THREE.Raycaster,mouse=new THREE.Vector2;function onClick(e){mouse.x=e.clientX/window.innerWidth*2-1,mouse.y=-e.clientY/window.innerHeight*2+1,raycaster.setFromCamera(mouse,camera);var s=raycaster.intersectObjects(clickableObjects.map((e=>e.object)),!0);if(s.length>0){let e=s[0].object;for(;e.parent&&!clickableObjects.some((s=>s.object===e));)e=e.parent;const t=clickableObjects.find((s=>s.object===e));t&&t.url&&(console.log("Переход по ссылке:",t.url),window.open(t.url,"_blank"))}}function showTooltip(e){const s=document.getElementById("tooltip");s.textContent=e,s.style.display="block"}function hideTooltip(){document.getElementById("tooltip").style.display="none"}function onPointer(e){mouse.x=e.clientX/window.innerWidth*2-1,mouse.y=-e.clientY/window.innerHeight*2+1,raycaster.setFromCamera(mouse,camera);var s=raycaster.intersectObjects(interactiveObjects,!0);if(s.length>0){for(var t=s[0].object;t&&!t.userData.tooltipText;)t=t.parent;t?showTooltip(t.userData.tooltipText):hideTooltip()}else hideTooltip()}function onMouseMove(e){mouse.x=e.clientX/window.innerWidth*2-1,mouse.y=-e.clientY/window.innerHeight*2+1,raycaster.setFromCamera(mouse,camera),raycaster.intersectObjects(clickableObjects.map((e=>e.object)),!0).length>0?renderer.domElement.style.cursor="pointer":renderer.domElement.style.cursor="auto"}renderer.domElement.addEventListener("click",onClick),renderer.domElement.addEventListener("mousemove",onMouseMove),renderer.domElement.addEventListener("mousemove",onPointer);