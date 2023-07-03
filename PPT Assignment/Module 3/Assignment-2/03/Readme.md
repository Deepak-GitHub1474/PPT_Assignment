# What is VW/VH ?
   In CSS, `VW` and `VH` are units of measurement that represent `viewport width` and `viewport height`, respectively. They are relative units based on the size of the viewport, which is the visible area of the web page in the browser window.
   These units are useful when we want to create responsive designs that adapt to different screen sizes and aspect ratios. Which allowing for a consistent user experience across various devices.

  - `VW (Viewport Width)`: The VW unit represents a percentage of the viewport's width. One unit of vw is equal to 1% of the viewport's width. For example, if the viewport is 1000 pixels wide, 1vw would be equal to 10 pixels.

  - `VH (Viewport Height)`: The vh unit represents a percentage of the viewport's height. One unit of vh is equal to 1% of the viewport's height. For instance, if the viewport is 800 pixels tall, 1vh would be equal to 8 pixels.

  .container {
  width: 80vw;  /* Sets the width of an element to 80% of the viewport width */
  height: 50vh; /* Sets the height of an element to 50% of the viewport height */
  font-size: 3vw; /* Sets the font size relative to the viewport width */
  padding: 2vh; /* Sets the padding relative to the viewport height */
}
