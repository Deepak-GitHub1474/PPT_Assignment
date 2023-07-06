# What is the purpose of using Media Queries for Print Media?

The purpose of using media queries for print media is to apply specific styles and layout
rules when a webpage is printed or viewed in print preview mode. Media queries allow us to 
optimize the appearance and formatting of a webpage for printing, ensuring that the content 
is well-structured and legible on paper.

# Advantages of using media queries for print media:

`Adjusting layout:` Media queries can be used to modify the layout of a webpage when rendered. 
For example, we might want to remove certain elements like navigation menus, sidebars, or 
advertisements that are not relevant or necessary for the printed version. By using media 
queries, we can hide or rearrange elements to create a more compact and focused layout for 
the printed document.

`Styling for readability:` Media queries allow us to customize the styling of the printed content 
to enhance readability. We can adjust font sizes, line heights, margins, and other typographic 
properties to ensure that the text is clear and legible when printed. Additionally, we can set background 
colors, borders, and other visual cues to differentiate various sections of the printed document.

`Controlling page breaks:` Media queries enable us to control where page breaks occur in the printed output. 
We can use CSS properties like page-break-before, page-break-after, and page-break-inside to specify how 
content should be divided across pages. This helps in avoiding awkward or incomplete content breaks and 
ensuring that important sections remain together on the same page.

`Removing unnecessary elements:` Media queries provide a way to exclude certain elements from the printed version 
that might not be relevant or useful in print. For example, we might choose to remove social sharing buttons, 
interactive elements, or images that are only meant for screen display. This helps in simplifying the printed 
document and conserving ink or paper.

To target the print media context in CSS, we can use the @media print rule. Here's an example:

@media print {
  /* CSS rules specific to printing */
}

By applying appropriate styles and layout adjustments through media queries, you can ensure that your webpage 
prints with the desired format and appearance, improving the usability and readability of the printed document.