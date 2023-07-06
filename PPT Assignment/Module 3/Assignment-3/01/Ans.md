# What is a Media Query in CSS, and what is its purpose?

Media queries in CSS are a way to apply different CSS styles to different 
devices, based on their characteristics such as screen size, device type, and 
orientation. 

# Purpose of media query:
The purpose of media queries is to provide a way to target specific devices or
device characteristics and apply different styles or layouts accordingly.
By using media queries, we can create a single CSS file that handles different device
configurations, rather than creating separate stylesheets for each device type.
Media queries allow us to create responsive designs that automatically adjust to different
screen sizes and devices, providing an optimal viewing experience for the user. Improving the 
user experience and ensuring that your content is accessible and readable across various
screen sizes and orientations.

For example: Below media query targets screen devices with a minimum width of 700 pixels.

@media screen and (min-width: 700px) { 
    /* CSS styles for devices with screen widths greater than 700px */
}

@media (max-width: 600px) {
  /* CSS rules to be applied for screens with width <= 600px */
}

@media (max-width: 600px) and (max-height: 800px) {
  /* CSS rules to be applied for screens with width <= 600px and height <= 800px */
}




