import './style.css'
import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()
const viewport_dimension = {
    width: 800,
    height: 600
}

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xeb1313 })
const mesh = new THREE.Mesh(geometry, material)

// Camera
const aspectRatio = viewport_dimension.width / viewport_dimension.height
const camera = new THREE.PerspectiveCamera(75, aspectRatio)

// Scene Add
scene.add(mesh)
scene.add(camera)

// Renderer
camera.position.y = 1
camera.position.z = 3
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(viewport_dimension.width, viewport_dimension.height)
renderer.render(scene, camera)