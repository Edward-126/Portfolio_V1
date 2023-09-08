

// -------------------------------- AutoType --------------------------------

var typed = new Typed(".input1", {
    strings: [
        " a Student",
        " T-126",
        " a Developer",
        " a Designer"
    ],
    // shuffle: true,
    typeSpeed: 150,
    backSpeed: 130,
    smartBackspace: true,
    backDelay: 1000,
    loop: true,
    cursorChar: '_'
})

var typed = new Typed(".input2", {
    strings: [
        " a Student",
        " T-126",
        " a Developer",
        " a Designer"
    ],
    typeSpeed: 150,
    backSpeed: 130,
    smartBackspace: true,
    backDelay: 1000,
    loop: true
})

// -------------------------------- AutoType --------------------------------

// -------------------------------- About --------------------------------

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

// -------------------------------- About --------------------------------

// -------------------------------- Mobile Menu --------------------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// -------------------------------- Mobile Menu --------------------------------

// -------------------------------- Contact form --------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyJGGz0terzFZ-aYJPwCpEU7nR1sKgJOKuGxGpXHC5izqC7kz-kxFM-L3IQ3UrIClo3Qw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


// -------------------------------- Contact form --------------------------------

// -------------------------------- Intro --------------------------------

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".text1", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".text-box", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

// -------------------------------- Intro --------------------------------