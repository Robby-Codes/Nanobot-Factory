export const smoothScroll = (section, e) => {
  const section_1 = document.getElementById("clicker");
  const section_2 = document.getElementById("upgrades");
  const section_3 = document.getElementById("status");
  if (section == "clicker") {
    if (e.deltaY > 0) {
      section_2.scrollIntoView({ behavior: "smooth" });
    } else if (e.deltaY < 0) {
      section_1.scrollIntoView({ behavior: "smooth" });
    }
  } else if (section == "upgrades") {
    if (e.deltaY < 0) {
      section_1.scrollIntoView({ behavior: "smooth" });
    } else if (e.deltaY > 0) {
      section_3.scrollIntoView({ behavior: "smooth" });
    }
  } else if (section == "status") {
    if (e.deltaY < 0) {
      section_2.scrollIntoView({ behavior: "smooth" });
    } else if (e.deltaY > 0) {
      section_3.scrollIntoView({ behavior: "smooth" });
    }
  }
};
