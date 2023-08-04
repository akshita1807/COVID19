$(document).ready(function () {
    function navbarOpen() {
        $("body").toggleClass("stop-scroll");
        $("#navbar-slide-container").toggleClass("active");
        $("#navbar-slide-backfill").css({ display: "block", background: "rgba(0,0,0,0.4)" });
    }

    function navbarClose() {
        $("body").toggleClass("stop-scroll");
        $("#navbar-slide-container").toggleClass("active");
        $("#navbar-slide-backfill").css({ display: "none", background: "transparent" });
    }

    $("#navbar-open").click(navbarOpen);
    $("#navbar-close").click(navbarClose);

    $("#navbar-slide-backfill").click(navbarClose);
    $("#slide-home").click(() => {
        location.href = "index.html";
        navbarClose();
    });
    $("#slide-services").click(() => {
        location.href = "index.html#service";
        navbarClose();
    });
    $("#slide-blog").click(() => {
        location.href = "blog.html";
        navbarClose();
    });
    $("#slide-contact").click(() => {
        location.href = "index.html#contact";
        navbarClose();
    });
    $("#slide-book").click(() => {
        location.href = "appoint.html";
        navbarClose();
    });
});
