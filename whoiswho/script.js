window.addEventListener("DOMContentLoaded", (event) => {
    console.log("window loaded");

    setInterval(() => {
        let dullanSelector = document.querySelector(".dullan");
        if (!dullanSelector) {
            addDullan();
        }
    }, 10);
});

function addDullan() {
    console.log("add dullan");
    let dullanImg = "https://www.livingwithbirds.com/images/web/tweetapedia/21-facts-on-wood-pigeon/21-facts-on-wood-pigeon-i1@2x.jpg?v=358";
    let html = `<div class="o-userPreview o-usersList__user" wire:click="$emitTo('organisms.user-details', 'show', '33d3e70f-60e1-4b21-8126-d543ae4e8777')">
        <div class="o-userPreview__imageContainer">
            <div class="o-userPreview__image" style="background-image: url(${dullanImg}); filter: grayscale(1);"></div>
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

    let newStyle = document.createElement("style");
    newStyle.innerHTML = `
    .due-walk {
		position: fixed;
	    bottom: -4px;
	    left: -200px;
	    width: 200px;
	    height: 200px;
	    background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7e2d0181-418f-4c08-be59-b9866d1f6d2a/d718ldp-526e54cd-5c36-408d-aa4c-9cdc2923fa90.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdlMmQwMTgxLTQxOGYtNGMwOC1iZTU5LWI5ODY2ZDFmNmQyYVwvZDcxOGxkcC01MjZlNTRjZC01YzM2LTQwOGQtYWE0Yy05Y2RjMjkyM2ZhOTAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IO71XV-IkBFYjhs3nMExn76j5vsFaIPDQych01WQgXk);
	    background-size: contain;
	    background-repeat: no-repeat;
	    background-position: bottom;
	    animation: kf_due-walk 15s linear infinite;
	}
	
	@keyframes kf_due-walk {
		100% {
			left: 100%;	
		}
	}
    `;
    document.body.appendChild(newStyle);
}

function addMoreDullan() {

    let newDiv = document.createElement("div");
    newDiv.classList.add("more-dullan");
    document.body.appendChild(newDiv);

    let newStyle = document.createElement("style");
    newStyle.innerHTML = `
    .more-dullan {
        position: fixed;
        background-image: url(https://static.wixstatic.com/media/135d23_04e850ca01de468aabc1e0d1e2853f51~mv2.png/v1/crop/x_0,y_0,w_1080,h_841/fill/w_558,h_446,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/135d23_04e850ca01de468aabc1e0d1e2853f51~mv2.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 200px;
        height: 150px;
        transition: all 2s ease-in;
        z-index: 99999;
    }
    `;
    document.body.appendChild(newStyle);

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