$(function () {
  const headerButton = $("#header-button");
  const headerNav = $("#header-nav");
  headerButton.on("click", () => {
    const displayProp = headerNav.css("display");
    if (displayProp !== "none") {
      headerNav.css("display", "none");
    } else {
      headerNav.css("display", "flex");
    }
  });
});
