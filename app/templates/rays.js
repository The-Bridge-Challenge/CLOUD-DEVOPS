// rays.js
const raysContainer = document.getElementById('rays-container');

document.addEventListener('mousemove', (e) => {
    createRay(e.clientX, e.clientY);
});

function createRay(x, y) {
    const ray = document.createElement('div');
    ray.className = 'ray';
    ray.style.left = `${x}px`;
    ray.style.top = `${y}px`;

    raysContainer.appendChild(ray);

    // Eliminar el rayo después de un tiempo
    setTimeout(() => {
        raysContainer.removeChild(ray);
    }, 1500);
}
