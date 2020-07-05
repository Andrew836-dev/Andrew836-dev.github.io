function setupPage() {
    var portfolioProjects = [
        {
            title: "Weather Dashboard",
            imageSrc: "./assets/img/weather-thumbnail.png",
            imageAlt: "Preview of a weather forecast",
            description: "An app that uses API calls for weather reports.",
            liveHref: "https://andrew836-dev.github.io/weather-dashboard/",
            repoHref: "https://github.com/Andrew836-dev/weather-dashboard/"
        },
        {
            title: "Doggo Breed Information",
            imageSrc: "https://gussell87.github.io/doggo/assets/doggoMobile.jpg",
            imageAlt: "Preview of dog breed information app",
            description: "An app that uses API calls to show information about dog breeds. Group project where I was responsible for the javascript",
            liveHref: "https://gussell87.github.io/doggo/",
            repoHref: "https://github.com/gussell87/doggo/"
        },
        {
            title: "Javascript Quizzer",
            imageSrc: "./assets/img/quiz-thumbnail.png",
            imageAlt: "Preview of a Javascript quiz game",
            description: "A quiz about Javascript written in Javascript",
            liveHref: "https://andrew836-dev.github.io/quiz-game/",
            repoHref: "https://github.com/Andrew836-dev/quiz-game/"
        },
        {
            title: "Javascript Tetris",
            imageSrc: "./assets/img/tetris-thumbnail.jpg",
            imageAlt: "Preview of my Tetris inspired game",
            description: "Tetris game based on a FreeCodeCamp tutorial video. I've added on-screen arrows for touch screen control.",
            liveHref: "https://andrew836-dev.github.io/Javascript-tetris/",
            repoHref: "https://github.com/Andrew836-dev/Javascript-tetris"
        }
    ];
    var portfolioRoot = document.getElementById("portfolio");

    for (var i = 0; i < portfolioProjects.length; i++) {
        var dualContainer = document.createElement("div");
        dualContainer.classList.add("row", "justify-content-center");
        dualContainer.appendChild(singleContainer(portfolioProjects[i]));
        if (portfolioProjects[i + 1]) {
            i++;
            dualContainer.appendChild(singleContainer(portfolioProjects[i]));
        }
        portfolioRoot.appendChild(dualContainer);
    }

    function singleContainer(portfolioObject) {
        var singleContainer = document.createElement("div");
        var title = document.createElement("h5");
        var imgContainer = document.createElement("div");
        var image = document.createElement("img");
        var description = document.createElement("p");
        var buttonDiv = document.createElement("div");
        var liveLink = document.createElement("a");
        var repoLink = document.createElement("a");
        image.setAttribute("src", portfolioObject.imageSrc);
        image.setAttribute("alt", portfolioObject.imageAlt);
        liveLink.setAttribute("target", "_blank");
        liveLink.setAttribute("href", portfolioObject.liveHref);
        repoLink.setAttribute("target", "_blank");
        repoLink.setAttribute("href", portfolioObject.repoHref);
        description.textContent = portfolioObject.description;
        title.textContent = portfolioObject.title;
        liveLink.textContent = "Live Site";
        repoLink.textContent = "Repo";
        singleContainer.classList.add("card-body", "col-12", "col-sm-6");
        title.classList.add("card-subtitle", "text-center");
        imgContainer.classList.add("img-thumbnail", "text-center", "overflow-hidden", "portfolio-pic");
        description.classList.add("card-text", "portfolio-text");
        buttonDiv.classList.add("row", "justify-content-between", "px-3");
        repoLink.classList.add("btn", "btn-primary", "text-white", "col-5")
        liveLink.classList.add("btn", "btn-primary", "text-white", "col-5")
        imgContainer.appendChild(image);
        buttonDiv.appendChild(liveLink);
        buttonDiv.appendChild(repoLink);
        singleContainer.appendChild(title);
        singleContainer.appendChild(imgContainer);
        singleContainer.appendChild(description);
        singleContainer.appendChild(buttonDiv);
        return singleContainer;
    }
}