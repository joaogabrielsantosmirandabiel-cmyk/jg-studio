// =====================================
// WEBSTUDIO — PORTFÓLIO
// JAVASCRIPT
// =====================================


// =====================================
// ANO AUTOMÁTICO DO RODAPÉ
// =====================================

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// =====================================
// ANIMAÇÃO SUAVE AO CARREGAR
// =====================================

window.addEventListener("load", () => {

    const heroContent =
        document.querySelector(".hero-content");

    if (heroContent) {

        heroContent.style.opacity = "1";

        heroContent.style.transform =
            "translateY(0)";

    }

});


// =====================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// =====================================

const animatedElements =
    document.querySelectorAll(
        ".project-card, .service-card, .process-item"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


animatedElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


// =====================================
// ROLAGEM SUAVE DOS LINKS
// =====================================

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach((link) => {

    link.addEventListener(
        "click",

        (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(
                        targetId
                    );

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }

            }

        }

    );

});