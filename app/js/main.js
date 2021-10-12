$(function () {
  // header nav handler for mobile
  const headerButton = $("#header-button");
  const headerNav = $("#header-nav");

  headerButton.on("click", () => {
    if (headerNav.css("right") === "0px") {
      headerNav.css("right", "-100%");
      headerNav.css("box-shadow", "none");
      $(document.body).css("overflow-y", "visible");
    } else {
      headerNav.css("right", "0px");
      headerNav.css("box-shadow", "0 0 4em 0 #000000b3");
      $(document.body).css("overflow-y", "hidden");
    }
  });
});
