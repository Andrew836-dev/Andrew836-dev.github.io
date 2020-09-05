function newPortfolioEntry(portfolioData) {
    const html = `<div class="card col-6 col-4-md">
        <header>
            <h3>${portfolioData.name}</h3>
        </header>
        <p class="portfolio-text">${portfolioData.description}</p>
        <div class="portfolio-pic">
            <img src="./assets/img/${portfolioData.name}.jpg" alt="Preview of ${portfolioData.name}" />
        </div>
        <footer>
            <a class="button bg-primary text-white" href="${portfolioData.homepage}" target="_blank">Live Site</a>
            <a class="button bg-primary text-white pull-right"
                href="${portfolioData.html_url}" target="_blank">Repo</a>
        </footer>
    </div>`
    return html;
}

$("document").ready(function () {
    const $tabs = $(".tabs").children();

    $.get(`https://api.github.com/users/Andrew836-dev/repos?per_page=100`)
        .then(repos => {
            $("#githubPortfolio").empty();

            repos.forEach(repo => {
                if (repo.homepage) {
                    $("#githubPortfolio").append(newPortfolioEntry(repo));
                }
            });

            // slick isn't quite working the way I wanted it to.
            /*$("#githubPortfolio").slick({
                dots: true,
                appendDots: $("#portfolio"),
                centerMode: true,
                mobileFirst: true,
                slidesToShow: 1,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            centerMode: true,
                            slidesToShow: 3,
                            dots: true
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            slidesToShow: 2,
                            dots: true
                        }
                    }]
            });*/
        });

    $("#top").on("click", "a", function () {
        event.preventDefault();
        $tabs.removeClass("active");
        $(this).addClass("active");
        let id = $(this).attr("href");
        $(window).scrollTop($(id).offset().top - 100);
    });

    $(window).scroll(function () {
        let scrollPosition = $(window).scrollTop();
        $tabs.removeClass("active");
        if (scrollPosition > $("#contact").offset().top - 100) {
            $("#contact-link").addClass("active");
        } else if (scrollPosition > $("#about").offset().top - 100) {
            $("#about-link").addClass("active");
        } else if (scrollPosition > $("#portfolio").offset().top - 100) {
            $("#portfolio-link").addClass("active");
        }
    });
});