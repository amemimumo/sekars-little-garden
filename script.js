// HERO BUTTON

const enterButton = document.querySelector("#enterGarden");

const backgroundMusic = document.querySelector("#backgroundMusic");


if (enterButton) {

    enterButton.addEventListener("click", () => {


        // play music

        if (backgroundMusic) {

            backgroundMusic.volume = 0.4;

            backgroundMusic.play();

        }



        // scroll to meadow

        document.querySelector(".birthday-meadow")
            .scrollIntoView({

                behavior: "smooth"

            });


    });

}


// MEADOW BUTTON

const memoryButton = document.querySelector("#memoryGardenButton");


if (memoryButton) {

    memoryButton.addEventListener("click", () => {

        document.querySelector(".memory-garden")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}
// MEMORY FLOWERS

const flowers = document.querySelectorAll(".flower");

const memoryImage = document.querySelector("#memoryImage");

const memoryText = document.querySelector("#memoryText");

const sparkleContainer = document.querySelector(".sparkles");



flowers.forEach((flower) => {


    flower.addEventListener("click", () => {


        // sparkle effect

        createSparkles(flower);



        // remove active from other flowers

        flowers.forEach((item) => {

            item.classList.remove("active");

        });



        // activate selected flower

        flower.classList.add("active");



        const image = flower.dataset.image;

        const text = flower.dataset.text;



        // hide current image

        memoryImage.classList.remove("show");



        setTimeout(() => {


            memoryImage.src =
                "assets/images/memory/" + image;


            memoryText.innerHTML = text;


            memoryImage.classList.add("show");


        }, 400);



    });


});




// SPARKLE FUNCTION

function createSparkles(element) {


    const rect = element.getBoundingClientRect();


    for (let i = 0; i < 6; i++) {


        const sparkle = document.createElement("div");


        sparkle.className = "sparkle";


        sparkle.style.left =
            rect.left + Math.random() * 100 + "px";


        sparkle.style.top =
            rect.top + Math.random() * 100 + "px";


        if (sparkleContainer) {

            sparkleContainer.appendChild(sparkle);

        }



        setTimeout(() => {

            sparkle.remove();

        }, 1000);


    }

}
const musicToggle =
    document.querySelector("#musicToggle");


if (musicToggle) {


    musicToggle.addEventListener("click", () => {


        if (backgroundMusic.paused) {


            backgroundMusic.play();

            musicToggle.innerHTML = "🔊";


        } else {


            backgroundMusic.pause();

            musicToggle.innerHTML = "🔇";


        }


    });


}

// LETTER OPEN SYSTEM

const letterCards = document.querySelectorAll(".letter-card");

const openedLetter = document.querySelector(".opened-letter");

const letterTitle = document.querySelector("#letterTitle");

const letterContent = document.querySelector("#letterContent");


const letters = {

    one: {

    title: "From Rara 🌷",

    content:
`Selamat ulang tahun Sekar 🥰💛

Semoga harapan-harapannya segera dikabulkan, dipanjangkan umurnya.

Hal yang paling penting juga semoga selalu sehat dan bahagia dimanapun Sekar berada yaaa 🌻✨

Semoga di tahun-tahun berikutnya kita tetap bisa bertemu dan bersenang-senang lagii 💖`

},


    two: {

    title: "From Ame 🌸",

    content:
`Sekar, my lady,

Wishing you a wonderful birthday. 🥰

No words can express how much I miss you.

Eat plenty of delicious foods yaa, and when you're back let's actually bake something together (or you bake and I eat lol).

I love you, Sekar! 💖`

},

};



letterCards.forEach((card)=>{

    card.addEventListener("click",()=>{


        const id = card.dataset.letter;


        letterTitle.textContent =
        letters[id].title;


        openedLetter.classList.add("show");


        typeWriter(
            letterContent,
            letters[id].content
        );


    });

});
    // GARDEN TO LETTERS

    const openLetters =
        document.querySelector("#openLetters");

    console.log(openLetters);


    const finalGarden =
        document.querySelector(".final-garden");



    if (openLetters && finalGarden) {


        openLetters.addEventListener("click", () => {


            finalGarden.scrollIntoView({

                behavior: "smooth"

            });


        });


    }
    
let typingTimer;


function typeWriter(element, text){

    if(!element) return;


    clearTimeout(typingTimer);


    element.textContent = "";


    const characters = Array.from(text);

    let i = 0;


    function write(){

        if(i < characters.length){

            element.textContent += characters[i];

            i++;

            typingTimer = setTimeout(write,50);

        }

    }


    write();

}
document
.querySelector("#openLetters")
.addEventListener("click",()=>{


    document
    .querySelector(".final-garden")
    .scrollIntoView({

        behavior:"smooth"

    });


});
// RETURN TO GARDEN

const returnGarden =
    document.querySelector("#returnGarden");

const memoryGarden =
    document.querySelector(".memory-garden");


if (returnGarden && memoryGarden) {

    returnGarden.addEventListener("click", () => {

        memoryGarden.scrollIntoView({

            behavior:"smooth"

        });

    });

}