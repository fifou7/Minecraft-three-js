import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

console.log(THREE);
const canvas = document.querySelector("canvas.webgl");

const scene = new THREE.Scene();

// Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const camPos = {
  x: 0,
  y: 0,
  z: 10,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 10;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);

// Helper Axes
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xfff0ff,
  wireframe: true,
});

// Steve

const gltfLoader = new GLTFLoader();

gltfLoader.load("minecraft_-_steve/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  gltf.scene.position.set(0, 2.1, 0);
  gltf.scene.rotation.y = 3.2;
});

//craft table

const gltfLoader2 = new GLTFLoader();

gltfLoader2.load("crafting_table/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(-2, 1, -2);
  gltf.scene.rotation.y = 0;
});

// animaux

const gltfLoader3 = new GLTFLoader();

gltfLoader3.load("flamingo_-_minecraft_model/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  gltf.scene.position.set(-19, 0.5, -2.5);
  gltf.scene.rotation.y = 3;
});

const gltfLoader20 = new GLTFLoader();

gltfLoader20.load("flamingo_-_minecraft_model/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.1, 0.1, 0.1);
  gltf.scene.position.set(-19, 0.5, -2.5);
  gltf.scene.rotation.y = 3;
});

const gltfLoader4 = new GLTFLoader();

gltfLoader4.load("muddy_pig/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1.5, 1.5, 1.5);
  gltf.scene.position.set(1.75, 0.5, 1);
  gltf.scene.rotation.y = 6.4;
});

const gltfLoader5 = new GLTFLoader();

gltfLoader5.load("inflatable_flamingo/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(-19, 1.5, 3.5);
  gltf.scene.rotation.y = 6;
});

const gltfLoader6 = new GLTFLoader();

gltfLoader6.load("minecraft_cuy_guinea_pig/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1.25, 1.25, 1.25);
  gltf.scene.position.set(1.25, 0.5, -1.5);
  gltf.scene.rotation.y = 6;
});

const gltfLoader9 = new GLTFLoader();

gltfLoader9.load("minecraft_axolotl/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(-12, 0.9, -2.5);
  gltf.scene.rotation.y = 7;
});

const gltfLoader7 = new GLTFLoader();

gltfLoader7.load("noot_noot_meme_minecraft/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(10, 0.6, 4);
  gltf.scene.rotation.y = 0.5;
});

// infrastructures

const gltfLoader11 = new GLTFLoader();

gltfLoader11.load("minecraft_snowman/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(12, 0.45, -3);
  gltf.scene.rotation.y = 5.1;
});

const gltfLoader14 = new GLTFLoader();

gltfLoader14.load("voxel_palm_tree__minecraft_style/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(1, 1, 1);
  gltf.scene.position.set(-17, 0, 3);
  gltf.scene.rotation.y = 0;
});

// bridges

const gltfLoader12 = new GLTFLoader();

gltfLoader12.load("simple-bridge/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(4, 4, 4);
  gltf.scene.position.set(6.25, -2.1, 4.5);
  gltf.scene.rotation.y = 0;
});

const gltfLoader13 = new GLTFLoader();

gltfLoader13.load("simple-bridge/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(4, 4, 4);
  gltf.scene.position.set(4.75, -2.1, -6.2);
  gltf.scene.rotation.y = 1.58;
});

const gltfLoader15 = new GLTFLoader();

gltfLoader15.load("simple-bridge/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(4, 4, 4);
  gltf.scene.position.set(6.25, -2.1, 18);
  gltf.scene.rotation.y = 0;
});

const gltfLoader16 = new GLTFLoader();

gltfLoader16.load("simple-bridge/scene.gltf", (gltf) => {
  scene.add(gltf.scene);
  gltf.scene.scale.set(4, 4, 4);
  gltf.scene.position.set(17.95, -2.1, -6.2);
  gltf.scene.rotation.y = 1.58;
});

// lights

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

// Textures

const TextureLoader = new THREE.TextureLoader();
const grass = TextureLoader.load("/grass_carried.png");
const snow = TextureLoader.load("/snow.png");
const sand = TextureLoader.load("/sand.png");
const ground = TextureLoader.load("/ground.webp");
const autumn = TextureLoader.load("/autumn.png");

//île 1: île de Steve

const structure = new THREE.Group();
scene.add(structure);
structure.position.set(-2, 0, 2);

const blocisland1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland1);

ground.colorSpace = THREE.SRGBColorSpace;
ground.repeat.set(1, 1);
ground.wrapS = THREE.RepeatWrapping;
ground.wrapT = THREE.RepeatWrapping;
blocisland1.position.set(0, 0, 0);

const blocisland2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland2);
blocisland2.position.set(1, 0, 0);

const blocisland3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland3);
blocisland3.position.set(2, 0, 0);

const blocisland4 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland4);
blocisland4.position.set(3, 0, 0);

const blocisland5 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland5);
blocisland5.position.set(4, 0, 0);

const blocisland6 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland6);
blocisland6.position.set(0, 0, -1);

const blocisland7 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland7);
blocisland7.position.set(1, 0, -1);

const blocisland8 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland8);
blocisland8.position.set(2, 0, -1);

const blocisland9 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland9);
blocisland9.position.set(3, 0, -1);

const blocisland10 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland10);
blocisland10.position.set(4, 0, -1);

const blocisland11 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland11);
blocisland11.position.set(0, 0, -2);

const blocisland12 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland12);
blocisland12.position.set(1, 0, -2);

const blocisland13 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland13);
blocisland13.position.set(2, 0, -2);

const blocisland14 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland14);
blocisland14.position.set(3, 0, -2);

const blocisland15 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland15);
blocisland15.position.set(4, 0, -2);

const blocisland16 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland16);
blocisland16.position.set(0, 0, -3);

const blocisland17 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland17);
blocisland17.position.set(1, 0, -3);

const blocisland18 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland18);
blocisland18.position.set(2, 0, -3);

const blocisland19 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland19);
blocisland19.position.set(3, 0, -3);

const blocisland20 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland20);
blocisland20.position.set(4, 0, -3);

const blocisland21 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland21);
blocisland21.position.set(0, 0, -4);

const blocisland22 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland22);
blocisland22.position.set(1, 0, -4);

const blocisland23 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland23);
blocisland23.position.set(2, 0, -4);

const blocisland24 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland24);
blocisland24.position.set(3, 0, -4);

const blocisland25 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland25);
blocisland25.position.set(4, 0, -4);

const blocisland4_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland4_niveau_1);
blocisland4_niveau_1.position.set(1, -1, -1);

const blocisland5_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland5_niveau_1);
blocisland5_niveau_1.position.set(2, -1, -1);

const blocisland6_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland6_niveau_1);
blocisland6_niveau_1.position.set(3, -1, -1);

const blocisland7_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland7_niveau_1);
blocisland7_niveau_1.position.set(1, -1, -2);

const blocisland8_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland8_niveau_1);
blocisland8_niveau_1.position.set(2, -1, -2);

const blocisland9_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland9_niveau_1);
blocisland9_niveau_1.position.set(3, -1, -2);

const blocisland10_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland10_niveau_1);
blocisland10_niveau_1.position.set(1, -1, -3);

const blocisland11_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland11_niveau_1);
blocisland11_niveau_1.position.set(2, -1, -3);

const blocisland12_niveau_1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland12_niveau_1);
blocisland12_niveau_1.position.set(3, -1, -3);

const blocisland1_niveau_2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ map: ground })
);
structure.add(blocisland1_niveau_2);
blocisland1_niveau_2.position.set(2, -2, -2);

// Île 2: Biome hiver

const île2 = new THREE.Group();
scene.add(île2);
île2.position.set(10, 0, 5);

snow.colorSpace = THREE.SRGBColorSpace;
snow.repeat.set(1, 1);
snow.wrapS = THREE.RepeatWrapping;
snow.wrapT = THREE.RepeatWrapping;

const custom_material = new THREE.MeshBasicMaterial({
  map: snow,
});

// Cubes niveau 0
for (let x = 0; x < 10; x++) {
  for (let z = 0; z < 10; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom_material
    );
    bloc.position.set(x, 0, -z);
    île2.add(bloc);
  }
}

// Cubes niveau -1
for (let x = 1; x < 9; x++) {
  for (let z = 1; z < 9; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom_material
    );
    bloc.position.set(x, -1, -z);
    île2.add(bloc);
  }
}

// Cubes niveau -2
for (let x = 2; x < 8; x++) {
  for (let z = 2; z < 8; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom_material
    );
    bloc.position.set(x, -2, -z);
    île2.add(bloc);
  }
}

// Cubes niveau -3
for (let x = 3; x < 7; x++) {
  for (let z = 3; z < 7; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom_material
    );
    bloc.position.set(x, -3, -z);
    île2.add(bloc);
  }
}

// Cubes niveau -4
for (let x = 4; x < 6; x++) {
  for (let z = 4; z < 6; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom_material
    );
    bloc.position.set(x, -4, -z);
    île2.add(bloc);
  }
}

// Cube niveau -5
const blocNiveau5 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  custom_material
);
blocNiveau5.position.set(4.5, -5, -4.5); // Centré
île2.add(blocNiveau5);

// île 3: Biome été

const île3 = new THREE.Group();
scene.add(île3);
île3.position.set(-20, 0, 5);

sand.colorSpace = THREE.SRGBColorSpace;
sand.repeat.set(1, 1);
sand.wrapS = THREE.RepeatWrapping;
sand.wrapT = THREE.RepeatWrapping;

const custom2_material = new THREE.MeshBasicMaterial({
  map: sand,
});

// Cubes niveau 0
for (let x = 0; x < 10; x++) {
  for (let z = 0; z < 10; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom2_material
    );
    bloc.position.set(x, 0, -z);
    île3.add(bloc);
  }
}

// Cubes niveau -1
for (let x = 1; x < 9; x++) {
  for (let z = 1; z < 9; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom2_material
    );
    bloc.position.set(x, -1, -z);
    île3.add(bloc);
  }
}

// Cubes niveau -2
for (let x = 2; x < 8; x++) {
  for (let z = 2; z < 8; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom2_material
    );
    bloc.position.set(x, -2, -z);
    île3.add(bloc);
  }
}

// Cubes niveau -3
for (let x = 3; x < 7; x++) {
  for (let z = 3; z < 7; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom2_material
    );
    bloc.position.set(x, -3, -z);
    île3.add(bloc);
  }
}

// Cubes niveau -4
for (let x = 4; x < 6; x++) {
  for (let z = 4; z < 6; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom2_material
    );
    bloc.position.set(x, -4, -z);
    île3.add(bloc);
  }
}

// Cube niveau -5
const blocNiveau5_île3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  custom2_material
);
blocNiveau5_île3.position.set(4.5, -5, -4.5); // Centré
île3.add(blocNiveau5_île3);

// île 4: Biome Printemps

const île4 = new THREE.Group();
scene.add(île4);
île4.position.set(-5, 0, -10);

grass.colorSpace = THREE.SRGBColorSpace;
grass.repeat.set(1, 1);
grass.wrapS = THREE.RepeatWrapping;
grass.wrapT = THREE.RepeatWrapping;

const custom3_material = new THREE.MeshBasicMaterial({
  map: grass,
});

// Cubes niveau 0
for (let x = 0; x < 10; x++) {
  for (let z = 0; z < 10; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom3_material
    );
    bloc.position.set(x, 0, -z);
    île4.add(bloc);
  }
}

// Cubes niveau -1
for (let x = 1; x < 9; x++) {
  for (let z = 1; z < 9; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom3_material
    );
    bloc.position.set(x, -1, -z);
    île4.add(bloc);
  }
}

// Cubes niveau -2
for (let x = 2; x < 8; x++) {
  for (let z = 2; z < 8; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom3_material
    );
    bloc.position.set(x, -2, -z);
    île4.add(bloc);
  }
}

// Cubes niveau -3
for (let x = 3; x < 7; x++) {
  for (let z = 3; z < 7; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom3_material
    );
    bloc.position.set(x, -3, -z);
    île4.add(bloc);
  }
}

// Cubes niveau -4
for (let x = 4; x < 6; x++) {
  for (let z = 4; z < 6; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom3_material
    );
    bloc.position.set(x, -4, -z);
    île4.add(bloc);
  }
}

// Cube niveau -5
const blocNiveau5_île4 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  custom3_material
);
blocNiveau5_île4.position.set(4.5, -5, -4.5); // Centré
île4.add(blocNiveau5_île4);

// île 5: Biome automne

const île5 = new THREE.Group();
scene.add(île5);
île5.position.set(-5, 0, 20.5);

autumn.colorSpace = THREE.SRGBColorSpace;
autumn.repeat.set(1, 1);
autumn.wrapS = THREE.RepeatWrapping;
autumn.wrapT = THREE.RepeatWrapping;

const custom4_material = new THREE.MeshBasicMaterial({
  map: autumn,
});

// Cubes niveau 0
for (let x = 0; x < 10; x++) {
  for (let z = 0; z < 10; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom4_material
    );
    bloc.position.set(x, 0, -z);
    île5.add(bloc);
  }
}

// Cubes niveau -1
for (let x = 1; x < 9; x++) {
  for (let z = 1; z < 9; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom4_material
    );
    bloc.position.set(x, -1, -z);
    île5.add(bloc);
  }
}

// Cubes niveau -2
for (let x = 2; x < 8; x++) {
  for (let z = 2; z < 8; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom4_material
    );
    bloc.position.set(x, -2, -z);
    île5.add(bloc);
  }
}

// Cubes niveau -3
for (let x = 3; x < 7; x++) {
  for (let z = 3; z < 7; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom4_material
    );
    bloc.position.set(x, -3, -z);
    île5.add(bloc);
  }
}

// Cubes niveau -4
for (let x = 4; x < 6; x++) {
  for (let z = 4; z < 6; z++) {
    const bloc = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      custom4_material
    );
    bloc.position.set(x, -4, -z);
    île5.add(bloc);
  }
}

// Cube niveau -5
const blocNiveau5_île5 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  custom4_material
);
blocNiveau5_île5.position.set(4.5, -5, -4.5); // Centré
île5.add(blocNiveau5_île5);

renderer.render(scene, camera);

const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

let angleX = 0;
let angleY = 10;
let radius = 10;
let speed = 0.02;

const tick = () => {
  // Rotation continue si flèches sont pressées
  if (keysPressed.ArrowLeft) angleY -= speed;
  if (keysPressed.ArrowRight) angleY += speed;
  if (keysPressed.ArrowUp) angleX -= speed;
  if (keysPressed.ArrowDown) angleX += speed;

  // Mise à jour des positions
  camPos.x = Math.cos(angleX) * Math.cos(angleY) * radius;
  camPos.y = Math.sin(angleX) * radius;
  camPos.z = Math.cos(angleX) * Math.sin(angleY) * radius;

  camera.position.set(camPos.x, camPos.y, camPos.z);
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();

window.addEventListener("keydown", (e) => {
  if (e.key in keysPressed) keysPressed[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  if (e.key in keysPressed) keysPressed[e.key] = false;
});

// Zoom molette
window.addEventListener("wheel", (e) => {
  radius += e.deltaY * 0.01;
  radius = Math.max(1, radius); // Empêche le zoom négatif

  camPos.x = Math.cos(angleX) * Math.cos(angleY) * radius;
  camPos.y = Math.sin(angleX) * radius;
  camPos.z = Math.cos(angleX) * Math.sin(angleY) * radius;
});
