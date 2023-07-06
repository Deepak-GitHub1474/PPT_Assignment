# What is the purpose of the orientation media feature?

The purpose of the orientation media feature in CSS is to target and apply 
specific styles based on the orientation of a device's screen. It allows us 
to adjust the layout and presentation of your webpage based on whether the 
device is in portrait or landscape mode.

The orientation media feature is particularly useful for creating responsive 
designs that adapt to different screen orientations and provide an optimal user 
experience. By using the orientation media feature, we can make design choices 
that are appropriate for how the content will be displayed and interacted with 
based on the current screen orientation.

The orientation media feature has two possible values:

portrait: Targets devices where the height of the viewport is greater than or 
equal to the width. This typically corresponds to devices held in a vertical or 
portrait orientation.

landscape: Targets devices where the width of the viewport is greater than the height. 
This corresponds to devices held in a horizontal or landscape orientation.

Here's an example of how to use the orientation media feature in a media query:

@media (orientation: portrait) {
  /* CSS rules for devices in portrait orientation */
}

@media (orientation: landscape) {
  /* CSS rules for devices in landscape orientation */
}

In the example above, you can define different styles or layout rules for devices in portrait 
and landscape orientations. For instance, you might choose to rearrange elements, adjust the 
width of certain components, or modify the placement of navigation elements based on the available 
screen space in each orientation.
