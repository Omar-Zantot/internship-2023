function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}

const sections = [
  selectElementByClass("home"),
  selectElementByClass("mohamed"),
  selectElementByClass("omar"),
  selectElementByClass("bavly"),
  selectElementByClass("lamya"),
  selectElementByClass("farida"),
  selectElementByClass("nada"),
];

const navItems = {
  home: selectElementByClass("homeNavItem"),
  mohamed: selectElementByClass("mohamedNavItem"),
  omar: selectElementByClass("omarNavItem"),
  bavly: selectElementByClass("bavlyNavItem"),
  lamya: selectElementByClass("lamyaNavItem"),
  farida: selectElementByClass("faridaNavItem"),
  nada: selectElementByClass("nadaNavItem"),
};

// intersection observer setup
const observerOptions = {
  root: null, // null or delete refers to viewport
  rootMargin: "0px", // normal margin values
  threshold: 0.5, // 0-1 >> refers to the part of next section enters the viewport
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      navItem.classList.add("active");
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove("active");
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
// IntersectionObserver accepts callback function + options object

sections.forEach((sec) => observer.observe(sec));
