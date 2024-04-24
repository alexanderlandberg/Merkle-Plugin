// --- Init ---

if (window.location.href.indexOf("whoiswho.agency") > -1) {
    setInterval(() => {
        let dullanSelector = document.querySelector(".dullan");
        if (!dullanSelector) {
            addDullan();
            addNameClasses();
        }
    }, 10);
}

// --- Dullan ---

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

// --- Easer Egg ---

function easterEgg() {
    addPopping()
    addSliding()
}

function addSliding() {
    let newDiv = document.createElement("div");
    newDiv.classList.add("sliding");
    document.body.appendChild(newDiv);

    setTimeout(() => {
        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("sliding");
        document.body.appendChild(newDiv2);
    }, 3750);
    setTimeout(() => {
        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("sliding");
        document.body.appendChild(newDiv2);
    }, 7500);
    setTimeout(() => {
        let newDiv2 = document.createElement("div");
        newDiv2.classList.add("sliding");
        document.body.appendChild(newDiv2);
    }, 11250);
}

function addPopping() {

    let newDiv = document.createElement("div");
    newDiv.classList.add("popping");
    document.body.appendChild(newDiv);

    let randomNr = Math.floor(Math.random() * (3) + 1);

    if (randomNr === 1) {
        newDiv.classList.add("left");
        newDiv.style.top = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        setTimeout(() => {
            newDiv.style.left = 0;
        }, 1000);
    } else if (randomNr === 2) {
        newDiv.classList.add("top");
        newDiv.style.left = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        setTimeout(() => {
            newDiv.style.top = 0;
        }, 1000);
    } else {
        newDiv.classList.add("right");
        newDiv.style.top = `calc(${Math.floor(Math.random() * (100 - 0))}% - 100px)`;
        setTimeout(() => {
            newDiv.style.right = 0;
        }, 1000);
    }

    setTimeout(() => {
        addPopping();
    }, 1000);
}

// --- Add name classes to all profiless ---

function addNameClasses() {
    const profileNameList = document.querySelectorAll(".a-lead.o-userPreview__name");
    for (let i = 0; i < profileNameList.length; i++) {
        let profile = profileNameList[i].closest(".u-col-12");

        // add name as class to all
        let nameAsClass = profileNameList[i].innerHTML.trim().toLowerCase().split(' ').join('-');
        profile.classList.add(nameAsClass);

        // swap alex
        if (profileNameList[i].innerHTML.trim() === "Alexander Dons Lund" && profile.nextElementSibling.querySelector(".o-userPreview__name").innerHTML.trim() === "Alexander Ellegaard Landberg") {
            profile.nextElementSibling.parentNode.insertBefore(profile.nextElementSibling, profile);
        }
    }
}

// --- Change Theme ---

function addThemePicker() {
    let newBtn = document.createElement("div");
    newBtn.classList.add("theme-picker-button");
    newBtn.innerHTML = `Theme Picker`
    // newBtn.addEventListener("click", showThemePicker);
    document.querySelector("body").appendChild(newBtn);
}

let selectedTheme;
const themeList = {
    "totm": {
        "id": "totm",
        "name": "Theme of the month",
        "emoji": "🤞"
    },
    "christmas": {
        "id": "christmas",
        "name": "Christmas",
        "emoji": "🎄"
    },
    "easter": {
        "id": "easter",
        "name": "Easter",
        "emoji": "🐣"
    },
    "penguin": {
        "id": "penguin",
        "name": "Penguin",
        "emoji": "🐧"
    },
    "valentines": {
        "id": "valentines",
        "name": "Valentines",
        "emoji": "💝"
    },
    "bonk": {
        "id": "bonk",
        "name": "Bonk",
        "emoji": "🐕"
    },
}

function showThemePicker() {

    // build theme picker
    let newOuter = document.createElement("div");
    newOuter.classList.add("theme-picker");

    for (let i = 0; i < Object.keys(themeList).length; i++) {
        const key = Object.keys(themeList);

        let newLabel = document.createElement("label");
        let newInput = document.createElement("input");
        newInput.type = "radio";
        newInput.name = "theme";
        newInput.id = themeList[key[i]].id;
        newInput.value = themeList[key[i]].id;
        let newSpan = document.createElement("span");
        newSpan.innerHTML = `${themeList[key[i]].emoji} ${themeList[key[i]].name}`;

        // set default selected radio button
        if (`t-${themeList[key[i]].id}` === selectedTheme) {
            newInput.checked = true;
        } else if (themeList[key[i]].id === "totm") {
            newInput.checked = true;
        }

        // change theme
        newLabel.addEventListener("click", () => {
            if (selectedTheme) {
                document.querySelector("html").classList.remove(selectedTheme);
            }
            selectedTheme = `t-${themeList[key[i]].id}`;
            document.querySelector("html").classList.add(selectedTheme);
            setLocalStorage();
        });

        newLabel.appendChild(newInput);
        newLabel.appendChild(newSpan);
        newOuter.appendChild(newLabel);
    }

    document.querySelector("body").appendChild(newOuter);

}

// --- Local Storage ---

function setLocalStorage() {
    let localData = {
        "selectedTheme": selectedTheme
    }
    localStorage.setItem("EasterEggPlugin", JSON.stringify(localData));
}

function addFromLocalStorage() {
    let localData = JSON.parse(localStorage.getItem("EasterEggPlugin"));
    if (localData) {
        selectedTheme = localData.selectedTheme;
        document.querySelector("html").classList.add(selectedTheme);
    }
}


// --- Callbacks ---
addFromLocalStorage();
addThemePicker();
showThemePicker();