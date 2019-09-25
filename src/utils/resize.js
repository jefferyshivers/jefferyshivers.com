const EventType = {
  RESIZE: "resize",
  CLICK: "click"
};

const WindowSize = {
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

const WindowOrientation = {
  WIDE: "wide",
  TALL: "tall"
};

export class WindowParameters {
  constructor(size, orientation) {
    this._size = size;
    this._orientation = orientation;
  }

  isSmall() {
    return this._size === WindowSize.MOBILE;
  }

  isLandscape() {
    return this._orientation === WindowOrientation.WIDE;
  }
}

const matches = function (query) {
  return window.matchMedia(query).matches;
};

export const handleResize = function (cb) {
  let size;
  let orientation = WindowOrientation.TALL;
  if (!matches("(min-width: 600px)")) {
    size = WindowSize.MOBILE;
  } else if (window.innerWidth > window.innerHeight * 1.4) {
    orientation = WindowOrientation.WIDE;
    size = (matches("(min-width: 900px)"))
      ? WindowSize.DESKTOP
      : size = WindowSize.MOBILE;
  } else {
    orientation = WindowOrientation.TALL;
    size = WindowSize.DESKTOP;
  }

  return cb(new WindowParameters(size, orientation));
};
