// Botón de "Volver arriba"
const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnArriba.classList.add("mostrar");
    } else {
        btnArriba.classList.remove("mostrar");
    }
});

btnArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Animaciones en los proyectos al hacer scroll
const proyectos = document.querySelectorAll(".proyecto");

const mostrarProyectos = () => {
    proyectos.forEach(proyecto => {
        const posicion = proyecto.getBoundingClientRect().top;
        if (posicion < window.innerHeight - 100) {
            proyecto.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", mostrarProyectos);
mostrarProyectos();

// Animación para la barra de navegación
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header-visible");
    } else {
        header.classList.remove("header-visible");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Solo prevenir la acción si el enlace es interno
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
