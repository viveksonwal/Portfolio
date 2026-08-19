/*==================================================
THREE.JS HERO BACKGROUND
==================================================*/

const canvas = document.getElementById("three-bg");

if (canvas && typeof THREE !== "undefined") {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /*==============================
    PARTICLES
    ==============================*/

    const geometry = new THREE.BufferGeometry();

    const particleCount = 1200;

    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {

        positions[i] = (Math.random() - 0.5) * 18;

    }

    geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({

        color: 0x6C63FF,

        size: 0.03,

        transparent: true,

        opacity: 0.8

    });

    const particles = new THREE.Points(
        geometry,
        material
    );

    scene.add(particles);

    /*==============================
    MOUSE
    ==============================*/

    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener("mousemove", (e) => {

        mouseX = (e.clientX / window.innerWidth) * 2 - 1;

        mouseY = (e.clientY / window.innerHeight) * 2 - 1;

    });

    /*==============================
    ANIMATE
    ==============================*/

    function animate() {

        requestAnimationFrame(animate);

        particles.rotation.y += 0.0008;

        particles.rotation.x += 0.0003;

        particles.rotation.y += mouseX * 0.0005;

        particles.rotation.x += mouseY * 0.0005;

        renderer.render(scene, camera);

    }

    animate();

    /*==============================
    RESIZE
    ==============================*/

    window.addEventListener("resize", () => {

        camera.aspect =
            window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    });

}