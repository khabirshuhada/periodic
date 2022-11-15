const table = [
    "F", "Mussyaidatul Mustafa", "23", 1, 1,
    "F", "Siti Katy", "22", 18, 1,
    "F", "Nurul Sykin", "21", 1, 2,
    "F", "Slyy Slyzz", "22", 2, 2,
    "M", "Idham Khabir", "32", 13, 2,
    "F", "Nur Salihahh", "24", 14, 2,
    "F", "Ain Hasni", "25", 15, 2,
    "F", "Damia Salim", "27", 16, 2,
    "M", "Syafiq Shamsuddin", "22", 17, 2,
    "M", "Aiman", "24", 18, 2,
    "F", "Siti Nurhasnizah", "24", 1, 3,
    "F", "Amzal Liyana", "24", 2, 3,
    "F", "Nur Afiqah", "24", 13, 3,
    "M", "Azim Mustaqim", "24", 14, 3,
    "M", "Wan Sulaiman", "35", 15, 3,
    "F", "Puteri Balqis", "31", 16, 3,
    "F", "Aisyah Nabila", "24", 17, 3,
    "F", "Safura Zulfa", "24", 18, 3,
    "M", "Muhammad Haris Fadilah Abdullah", "21", 1, 4,
    "F", "Za Ty", "24", 2, 4,
    "F", "Nor Hafisah", "24", 3, 4,
    "F", "Faten Norshitah", "24", 4, 4,
    "F", "Melati Sharudin", "24", 5, 4,
    "F", "Syafiqah Sulaiman", "24", 6, 4,
    "M", "Pak Ngah Enal Yeop", "54", 7, 4,
    "F", "Kak Haz", "51", 8, 4,
    "F", "Afiqah Azizuddin", "58", 9, 4,
    "M", "Aqim Izuddin", "58", 10, 4,
    "F", "Hidayah Ibrahim", "63", 11, 4,
    "F", "Ilmi Yusof", "65", 12, 4,
    "F", "Akma Hidayah", "69", 13, 4,
    "F", "Fairuz Khalit", "23", 14, 4,
    "F", "Nurul Manaf", "23", 15, 4,
    "M", "Firdaus Wong", "23", 16, 4,
    "F", "Khairun Nabilah", "23", 17, 4,
    "F", "Leyla Malini", "23", 18, 4,
    "F", "Fatin Amira", "23", 1, 5,
    "F", "Eina Ensutouch", "23", 2, 5,
    "M", "Oum Taiping", "23", 3, 5,
    "F", "Shahidatul Nabilah", "23", 4, 5,
    "F", "Natasya Yusoh", "23", 5, 5,
    "F", "Nurul Ain Syafiqah", "23", 6, 5,
    "F", "Syakirah Abdul Rashid", "23", 7, 5,
    "F", "Mar Diana", "25", 8, 5,
    "M", "Hariz Hamka", "25", 9, 5,
    "F", "Nurul Syahirah", "25", 10, 5,
    "F", "Sarrah Yusoff", "25", 11, 5,
    "F", "Hariyani Takdir", "25", 12, 5,
    "F", "Ummi Shahirah", "25", 13, 5,
    "F", "Ct Nurhafizah", "25", 14, 5,
    "F", "Aina Natasha", "27", 15, 5,
    "F", "Hanisah Yahaya", "27", 16, 5,
    "F", "Farah Atiqah", "27", 17, 5,
    "M", "Bahanizam Abu Bakar", "27", 18, 5,
    "F", "Fatehah Azmi", "27", 1, 6,
    "M", "Yong Keong Tan", "27", 2, 6,
    "F", "Sharifah NurZakiah", "27", 4, 9,
    "F", "Nurul Farhana Atira", "27", 5, 9,
    "F", "Farah Syamimi Sharif", "27", 6, 9,
    "F", "Hidayah Razak", "27", 7, 9,
    "F", "Yana Ahmad", "27", 8, 9,
    "F", "Farrah Shahira", "27", 9, 9,
    "M", "Syed Nasir Syed Mahadi", "27", 10, 9,
    "F", "Yatt MF", "27", 11, 9,
    "M", "Kaunseling Smdb", "27", 12, 9,
    "M", "Mohamad Safwan", "27", 13, 9,
    "M", "Tuan Sharou", "27", 14, 9,
    "F", "Zuraidah Mat Zali", "27", 15, 9,
    "F", "Aini Izzati Mohd Rosli", "26", 16, 9,
    "M", "Mohd Pouzi Zakaria", "26", 17, 9,
    "F", "Nurul Nadia", "26", 18, 9,
    "M", "Hidayat Ismail", "26", 4, 6,
    "M", "Ahmad Zulhilmi", "26", 5, 6,
    "F", "AiFaa Zulkifli", "26", 6, 6,
    "M", "Awzan Kerr", "26", 7, 6,
    "M", "Muhd Ruzaini", "26", 8, 6,
    "F", "Fina Trd", "26", 9, 6,
    "F", "Hani Wan Junit", "26", 10, 6,
    "F", "Maizatul Naziha", "26", 11, 6,
    "F", "FaHira EYra", "26", 12, 6,
    "F", "Ummu Husmairaa", "26", 13, 6,
    "F", "Nurul Fatin", "26", 14, 6,
    "F", "Maya Abd Nasir", "26", 15, 6,
    "F", "Khairun Nabila", "26", 16, 6,
    "F", "NurHidayah Halim", "23", 17, 6,
    "F", "Noor Hasnida", "23", 18, 6,
    "M", "Muhammad Shakirin Samin", "23", 1, 7,
    "F", "Nur Afiqah", "23", 2, 7,
    "F", "Norlidya Karsa", "23", 4, 10,
    "F", "Shakira Ismail", "23", 5, 10,
    "F", "IeKa HayAt", "24", 6, 10,
    "F", "Atikah Raimi", "24", 7, 10,
    "F", "Aqilah Bahaudin", "24", 8, 10,
    "F", "Risha Syazwani", "24", 9, 10,
    "F", "Alya Shahrir", "24", 10, 10,
    "F", "Hanisatul Husna", "24", 11, 10,
    "F", "Zahiah Zafirah", "24", 12, 10,
    "F", "Nur Syafika", "24", 13, 10,
    "F", "Sahira Shaufee", "24", 14, 10,
    "F", "Mutmainnah Zailan", "24", 15, 10,
    "F", "Laili NoorHana", "24", 16, 10,
    "F", "Fatin Farhana Shamsuddin", "24", 17, 10,
    "F", "Nurul Syifa Zarkasi", "24", 18, 10,
    "F", "Nurul Najihah Jiha", "24", 4, 7,
    "F", "Siti Fairuz", "24", 5, 7,
    "M", "Hilaluddin Rozali", "24", 6, 7,
    "M", "Roslan Mohamad Ali Smkdb", "24", 7, 7,
    "F", "Nor Hasni Ismail", "24", 8, 7,
    "F", "Syahirah Ghazali", "24", 9, 7,
    "F", "Nur Izzati", "24", 10, 7,
    "F", "Mira Ariff", "24", 11, 7,
    "M", "Dharma Putra", "24", 12, 7,
    "F", "Nurul Atikah", "24", 13, 7,
    "F", "Izzati Ithnin", "24", 14, 7,
    "F", "Shafika Ika", "24", 15, 7,
    "F", "Aiyn Nia", "24", 16, 7,
    "F", "Ainina Anas", "24", 17, 7,
    "M", "Ridzuan Hashim", "24", 18, 7
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: [], cone: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');
    addClickListener(targets.cone, 'cone');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 4000 - 2000;
        object.position.y = Math.random() * 4000 - 2000;
        object.position.z = Math.random() * 4000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

function htmlElement(table, i) {
    let element = document.createElement('div');
    element.className = 'element';
/*     element.style.backgroundColor = 'rgba(255,20,147,' + (Math.random() * 0.5 + 0.25) + ')'; */
    if(table[i]=='F'){
        element.style.backgroundColor = 'rgba(255,20,147' + (Math.random() * 0.5 + 0.25) + ')';
       }else{
        element.style.backgroundColor = 'rgba(0,0,255' + (Math.random() * 0.5 + 0.25) + ')';
       } 

    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i + 1].split(" ")[0];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = table[i + 2] + '<br>' + table[i];
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);

    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 140) - 1330;
    object.position.y = -(table[index + 4] * 180) + 990;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();
    let coneVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addConeObject(coneVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();

    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);

    targets.sphere.push(object);
}

function addConeObject(coneVector, index) {
    
const theta=index * 4 + Math.PI;
const y=-(index * 12) + 450;
let object = new THREE.Object3D();
object.position.setFromCylindricalCoords(theta, y);
coneVector.x = object.position.x * 2;
coneVector.y = object.position.y;
coneVector.z = object.position.z * 2;

object.lookAt(coneVector);

targets.cone.push(object);

}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {

    renderer.render(scene, camera);

}

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}

//test