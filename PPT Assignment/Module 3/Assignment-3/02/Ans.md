# How do you define a media query in CSS?

To define a media query in CSS, we use the @media rule followedby the specific
conditions that we want to target. Here's the general syntax for defining a media query:

@media condition {
  /* CSS rules to be applied for the specified condition */
}

The condition part of the media query is where we specify the device characteristics
we want to target. This can include properties such as screen size, resolution, 
orientation, and more. we can also combine multiple conditions using logical operators
like and and or.

Here's an example that demonstrates how to define a media query targeting screens with
a maximum width of 600 pixels:

@media (max-width: 600px) {
  /* CSS rules to be applied for screens with width <= 600px */
}

In the example above, any CSS rules placed inside the media query block will only be 
applied when the screen width is 600 pixels or less. we can include any CSS properties 
and selectors within the media query block to customize the styling for the targeted device 
conditions.

we can also include multiple conditions within a media query using logical operators. 

Here's an example that combines maximum width and maximum height conditions:

@media (max-width: 600px) and (max-height: 800px) {
  /* CSS rules to be applied for screens with width <= 600px and height <= 800px */
}

In this case, the CSS rules within the media query block will only apply if both the
width is 600 pixels or less and the height is 800 pixels or less.


