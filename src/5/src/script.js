import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

const group = new THREE.Group()
scene.add(group)

const cube_one = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube_two = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

group.add(cube_one)
group.add(cube_two)

cube_one.position.set(-1, 1, -0.5)
cube_two.position.set(1, -1, 0.5)
group.position.set(0, 0.25, 0)
group.rotation.set(Math.PI / 2, 0, 0, 'XYZ')

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
scene.add(camera)

/*
    Transform
*/
// Axes Helpter
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Position
camera.position.set(0, 0, 3)
// mesh.position.set(0.7, -0.6, 1)

// // Scale
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// mesh.rotation.set(Math.PI / 2, Math.PI / 2, Math.PI / 2, 'YXZ')

// Look-At
// camera.lookAt(new THREE.Vector3(-0.15, -0.5, 2))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)