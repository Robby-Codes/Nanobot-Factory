// Scroll animation used on Home Section, Upgrade Section, and Stats Section.
// Designed to scroll on one turn of the mouse wheel.
// However, if the screen size is too small, it switches to a regular scroll.
export const smoothScroll = (section, e) => {
  const section_1 = document.getElementById("clicker");
  const section_2 = document.getElementById("upgrades");
  const section_3 = document.getElementById("status");
  var windowWidth = window.innerWidth;
  var windowHeight = window.outerHeight;
  console.log(windowWidth, windowHeight);
  if (windowWidth > 764 && windowHeight > 700) {
    const body = document.getElementsByTagName("BODY")[0];
    body.style.overflowY = "hidden";
    if (section === "clicker") {
      if (e.deltaY > 0) {
        section_2.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY < 0) {
        section_1.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "upgrades") {
      if (e.deltaY < 0) {
        section_1.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY > 0) {
        section_3.scrollIntoView({ behavior: "smooth" });
      }
    } else if (section === "status") {
      if (e.deltaY < 0) {
        section_2.scrollIntoView({ behavior: "smooth" });
      } else if (e.deltaY > 0) {
        section_3.scrollIntoView({ behavior: "smooth" });
      }
    }
  } else {
    const body = document.getElementsByTagName("BODY")[0];
    body.style.overflowY = "scroll";
  }
};
