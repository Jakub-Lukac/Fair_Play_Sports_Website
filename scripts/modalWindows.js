/*jQuery to handle events and performing some actions on the DOM elements */
/* jQuery - Javascript library */
$(document).ready(function () {
  // Handle click on playBtn
  // .ready - code will run only if DOM has been succesfully loaded
  $("div.playBtn").click(function (e) {
    console.log(1);
    var videoUrl = $(this).data("video-url");
    console.log("Video URL:", videoUrl); // Debugging
    $("video.modalVid").attr("src", videoUrl);

    $("section#modal").css({ display: "block", opacity: 0 });
    $("video.modalVid").css({ display: "block", marginTop: "-50px" });
    /*I am reusing this code, so in this case I do not want the table to be displayed */
    $("div.wrapper").css({ display: "none" });

    $("section#modal").animate({ opacity: 1 }, 500);
    $("video.modalVid").animate({ marginTop: "0px" }, 500);
  });

  $(".full-stats-link").click(function (e) {
    console.log(2);
    e.preventDefault(); // Prevent default link behavior (anchor)

    $("section#modal").css({ display: "block", opacity: 0 });
    $("div.wrapper").css({ display: "block", marginTop: "-50px" });
    /*I am reusing this code, so in this case I do not want the video to be displayed */
    $("video.modalVid").css({ display: "none" });

    $("section#modal").animate({ opacity: 1 }, 500);
    $("div.wrapper").animate({ marginTop: "0px" }, 500);
  });

  // Close modal window when click on black background
  $("div#darkBg").click(function (e) {
    $("section#modal").animate(
      { opacity: 0 },
      {
        duration: 500,
        complete: () => {
          $("section#modal").css({ display: "none" });
        },
      }
    );
    $("video#modalVid").animate({ marginTop: "+50px" }, 500);
    $("div.wrapper").animate({ marginTop: "+50px" }, 500);
  });
});
