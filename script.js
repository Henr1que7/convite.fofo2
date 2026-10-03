// ========================================
// CONTROLE DAS TELAS
// ========================================

const screens =
    document.querySelectorAll(".card");


function showScreen(number) {

    screens.forEach((screen, index) => {

        screen.classList.toggle(
            "active",
            index === number
        );

    });

}



// ========================================
// BOTÃO NÃO - ELE FOGE 😂
// ========================================

const noBtn =
    document.getElementById("noBtn");


function fugir() {

    const padding = 15;


    const maxX =
        window.innerWidth -
        noBtn.offsetWidth -
        padding;


    const maxY =
        window.innerHeight -
        noBtn.offsetHeight -
        padding;


    const x =
        Math.max(
            padding,
            Math.random() * maxX
        );


    const y =
        Math.max(
            padding,
            Math.random() * maxY
        );


    noBtn.style.position = "fixed";

    noBtn.style.left =
        `${x}px`;

    noBtn.style.top =
        `${y}px`;

    noBtn.style.zIndex = "999";
}



// Computador

noBtn.addEventListener(
    "mouseenter",
    fugir
);



// Celular

noBtn.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        fugir();

    }
);



// Caso consiga clicar

noBtn.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        fugir();

    }
);



// ========================================
// SIM
// ========================================

const yesBtn =
    document.getElementById("yesBtn");


yesBtn.addEventListener(
    "click",
    function() {

        showScreen(1);

    }
);



// ========================================
// HORÁRIO
// ========================================

const continueTime =
    document.getElementById(
        "continueTime"
    );


continueTime.addEventListener(
    "click",
    function() {

        const time =
            document.getElementById(
                "time"
            ).value;


        if (!time) {

            alert(
                "Escolhe um horário primeiro, gatinha 💜"
            );

            return;
        }


        document.getElementById(
            "finalTime"
        ).textContent =
            time;


        showScreen(2);

    }
);



// ========================================
// PIZZA
// ========================================

const continuePizza =
    document.getElementById(
        "continuePizza"
    );


continuePizza.addEventListener(
    "click",
    function() {

        showScreen(3);

    }
);



// ========================================
// FINAL
// ========================================

const finishBtn =
    document.getElementById(
        "finishBtn"
    );


finishBtn.addEventListener(
    "click",
    function() {

        showScreen(4);

    }
);



// ========================================
// CORAÇÕES
// ========================================

const hearts =
    document.querySelector(
        ".hearts"
    );


function createHeart() {

    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "heart";


    heart.textContent =
        Math.random() > .25
            ? "💜"
            : "♡";


    heart.style.left =
        `${Math.random() * 100}%`;


    heart.style.fontSize =
        `${14 + Math.random() * 22}px`;


    heart.style.animationDuration =
        `${5 + Math.random() * 5}s`;


    hearts.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        10000
    );

}



// Criar corações

setInterval(
    createHeart,
    550
);


// Corações iniciais

for (
    let i = 0;
    i < 10;
    i++
) {

    setTimeout(
        createHeart,
        i * 250
    );

}