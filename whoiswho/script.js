setInterval(() => {
    let dullanSelector = document.querySelector(".dullan");
    if (!dullanSelector) {
        addDullan();
        addNewImages();
    }
}, 10);

function addDullan() {
    let html = `<div class="o-userPreview o-usersList__user" wire:click="$emitTo('organisms.user-details', 'show', '33d3e70f-60e1-4b21-8126-d543ae4e8777')">
        <div class="o-userPreview__imageContainer">
            <div class="o-userPreview__image"></div>
        </div>
        <div class="o-userPreview__content">
            <small class="a-label o-userPreview__breadcrumb">
                Aviation
            </small>
            <div class="o-userPreview__line"></div>
            <h4 class="a-lead o-userPreview__name">
                Dullan Mortensen
            </h4>
            <label class="a-small o-userPreview__title">
                Due Diligence Officer
            </label>
        </div>
    </div>`;

    let newProfile = document.createElement("div");
    newProfile.classList.add("u-col-12", "md:u-col-6", "lg:u-col-4", "xl:u-col-3", "dullan");
    newProfile.innerHTML = html;
    newProfile.addEventListener("click", easterEgg);

    const profileWrapper = document.querySelector("body > main > div > div > div.u-row");
    profileWrapper.insertBefore(newProfile, profileWrapper.firstChild);
}

function easterEgg() {
    addMoreDullan()
    addDueWalk()
}

function addDueWalk() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("due-walk");
    document.body.appendChild(newDiv);

    setTimeout(() => {
        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("due-walk");
        document.body.appendChild(newDiv2);
    }, 3750);
    setTimeout(() => {
        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("due-walk");
        document.body.appendChild(newDiv2);
    }, 7500);
    setTimeout(() => {
        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("due-walk");
        document.body.appendChild(newDiv2);
    }, 11250);
}

function addMoreDullan() {

    let newDiv = document.createElement("div");
    newDiv.classList.add("more-dullan");
    document.body.appendChild(newDiv);

    //let randomNr = Math.floor(Math.random() * (4) + 1);
    let randomNr = Math.floor(Math.random() * (3) + 2); // disable bottom

    // randomNr = 4;

    if (randomNr === 1) {
        newDiv.style.bottom = "-150px";
        newDiv.style.left = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        setTimeout(() => {
            newDiv.style.bottom = 0;
        }, 1000);
    } else if (randomNr === 2) {
        newDiv.style.left = "-175px";
        newDiv.style.top = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        newDiv.style.transform = "rotate(90deg)";
        setTimeout(() => {
            newDiv.style.left = "-25px";
        }, 1000);

    } else if (randomNr === 3) {
        newDiv.style.top = "-150px";
        newDiv.style.left = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        newDiv.style.transform = "rotate(180deg)";
        setTimeout(() => {
            newDiv.style.top = 0;
        }, 1000);

    } else {
        newDiv.style.right = "-175px";
        newDiv.style.top = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        newDiv.style.transform = "rotate(-90deg)";
        setTimeout(() => {
            newDiv.style.right = "-25px";
        }, 1000);

    }

    setTimeout(() => {
        addMoreDullan();
    }, 1000);
}

function addNewImages() {
    const profileList = [
        {
            "name": "Bobby Hollingsworth",
            "img": "https://alexanderlandberg.github.io/merkle-gifs/gifs/bobby.gif"
        },
        {
            "name": "Thomas Gjermansen",
            "img": "https://alexanderlandberg.github.io/merkle-gifs/gifs/tbone-scratch.gif"
        },
        {
            "name": "Sune Brodersen",
            "img": "https://hips.hearstapps.com/hmg-prod/images/elvis-presley-american-rock-n-roll-legend-news-photo-1690830848.jpg"
        },
        {
            "name": "Ulrik Mailand",
            "img": "https://texasarchive.org/sites/default/files/images_end/test/2015_01674_tn.jpg"
        },
        {
            "name": "Nicklas Frandsen",
            "img": "https://img6.fresherslive.com/latestnews/2023/05/taylor-lautner-ethnicity-what-is-taylor-lautner-ethnicity-6476c35b8b71e63598516-900.webp"
        }
    ]
    const profileNameList = document.querySelectorAll(".a-lead.o-userPreview__name");
    for (let i = 0; i < profileNameList.length; i++) {
        for (let j = 0; j < profileList.length; j++) {
            console.log("TEST")
            if (profileNameList[i].innerHTML.includes(profileList[j].name)) {
                let profile = profileNameList[i].closest(".u-col-12");
                profile.querySelector(".o-userPreview__image").style.backgroundImage = `url(${profileList[j].img})`;
                profile.querySelector(".o-userPreview__image").style.filter = "grayscale(1)";
            }
        }
    }
}