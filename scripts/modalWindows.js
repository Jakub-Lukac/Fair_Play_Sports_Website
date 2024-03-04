$(document).ready(function () {
  // Handle click on playBtn
  $("div.playBtn").click(function (e) {
    var videoUrl = $(this).data("video-url");
    console.log("Video URL:", videoUrl); // Debugging
    $("video.modalVid").attr("src", videoUrl);

    $("section#modal").css({ display: "block", opacity: 0 });
    $("video.modalVid").css({ marginTop: "-50px" });

    $("section#modal").animate({ opacity: 1 }, 500);
    $("video.modalVid").animate({ marginTop: "0px" }, 500);
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
  });
});
