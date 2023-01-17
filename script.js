"use strict";
const eyes = document.querySelectorAll(".eye");

const events = ["mousemove", "touchmove"];

const isDeviceTouchScreen = () => {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  }
};

events.forEach((eventType) => {
  document.body.addEventListener(eventType, (event) => {
    eyes.forEach((eye) => {
      // gets the eyes x poisition from their centers
      let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
      // gets the eyes y poisition from their centers
      let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

      // getting the cursor's position from the top left of the screen
      let x = !isDeviceTouchScreen() ? event.clientX : event.touches[0].clientX;
      let y = !isDeviceTouchScreen() ? event.clientY : event.touches[0].clientY;

      // subtract x position of mouse from x position of eye and...
      let radian = Math.atan2(x - eyeX, y - eyeY);
      let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
      eye.style.transform = "rotate(" + rotationDegrees + "deg)";
    });
  });
});
