$(function () {
  const headerButton = $("#header-button");
  const headerNav = $("#header-nav");
  headerButton.on("click", () => {
    const displayProp = headerNav.css("top");
    const displayProp2 = headerNav.css("display");
    console.log(displayProp2)
    if (displayProp2 === "flex") {
      if (displayProp === "0px") {
        headerNav.css("top", "-500px");
      } else {
        headerNav.css("top", "0px");
      }
    } else {
        headerNav.css("top", "0px");
    }
  });
});
