$(function () {
  // header nav handler for mobile
  const headerButton = $("#header-button");
  const headerNav = $("#header-nav");

  headerButton.on("click", () => {
    if (headerNav.css("top") === "0px") {
      headerNav.css("top", "-500px");
    } else {
      headerNav.css("top", "0px");
    }
  });
});
