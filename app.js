const paragraphs = document.querySelectorAll(".banner-disc");

document.addEventListener("scroll", function () {
    paragraphs.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("banner-disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}






const text = document.querySelectorAll(".about-disc");

document.addEventListener("scroll", function () {
    text.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("about-disc--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}






const pic = document.querySelectorAll(".about-img");

document.addEventListener("scroll", function () {
    pic.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("about-img--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}






const skill = document.querySelectorAll(".skill-box");

document.addEventListener("scroll", function () {
    skill.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("skill-box--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}





const port = document.querySelectorAll(".port-box");

document.addEventListener("scroll", function () {
    port.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("port-box--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}



const web = document.querySelectorAll(".website-box");

document.addEventListener("scroll", function () {
    web.forEach((paragraph) => {
        if (isInview(paragraph)) {
            paragraph.classList.add("website-box--visible");
        }
    });
});

function isInview(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
            (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );   
}
