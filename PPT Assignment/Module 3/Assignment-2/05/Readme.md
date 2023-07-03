# How is Border-box different from Content Box? ?

  - Border Box:`The box-sizing: border-box` value modifies the box model behavior. The width and height we set explicitly with width and height properties apply to the entire element, including the content area, padding, and border. The margin is added outside of the specified width and height.This box model behavior is often more intuitive and makes it easier to calculate and control the size of elements, especially in complex layouts. Using box-sizing: border-box can simplify layout calculations as you don't need to subtract padding and border values from the specified width to get the desired content area size.

  - Content Box:`The box-sizing: content-box` value is the default behavior of elements.The width and height we set explicitly with width and height properties only apply to the content area of the element, and the padding, border, and margin are added to it.This is the traditional box model behavior.

  From above explanation we can conclude that `box-sizing: border-box` doesn't add extra space of padding in width once we set the width, Whereas in `box-sizing: content-box` it will add extra pace given by padding.

  <!-- For more clarification please check html file too. -->