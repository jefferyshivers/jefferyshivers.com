// layout

const Event = {
  RESIZE: "resize",
  CLICK: "click"
};

const Size = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

const Orientation = {
  WIDE: "wide",
  TALL: "tall"
};

const matches = function (query) {
  return window.matchMedia(query).matches;
};

const reLayout = function (size, orientation) {
  const body = document.body;
  body.classList = "";
  body.classList.add(size, orientation);
};

const onResize = function () {
  if (!matches("(min-width: 600px)")) {
    reLayout(Size.MOBILE, Orientation.TALL);
  } else if (window.innerWidth > window.innerHeight * 1.4) {
    if (matches("(min-width: 900px)")) {
      reLayout(Size.DESKTOP, Orientation.WIDE);
    } else {
      reLayout(Size.MOBILE, Orientation.WIDE);
    }
  } else {
    reLayout(Size.DESKTOP, Orientation.TALL);
  }
};

onResize();

window.addEventListener(Event.RESIZE, onResize);

// navigation

const navButtons = document.querySelectorAll("nav button");

const section = function (id) {
  return document.querySelector(`section#${id}`);
};

navButtons.forEach(function (button) {
  button.addEventListener(Event.CLICK, function () {
    section(this.innerText).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});
