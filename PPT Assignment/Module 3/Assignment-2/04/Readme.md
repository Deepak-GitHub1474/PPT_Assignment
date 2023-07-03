# What's the difference between Inline, Inline-Block and Block ?
   These 3 are display properties. Used to display the elements in different ways.

   - Inline:  `display: inline;` property is used to allows elements to be displayed in same line and it will contain the space as much as elements require to display all it's content and will not block the complete width. Means it will not create a new line when another inline or inline-block element come. Here is one more important thing which diffre the inline from inline-block that width and height property won't work.

   <!-- Please Check inline.html file for more clarification where i demonstrate the display: inline; property -->

   - Inline-block: `display: inline-block;` property is used to allows elements to be displayed in same line and it will contain the space as much as elements require to display all it's content and will not block the complete width untill or unless we set the width property. Means it will not create a new line when another inline or inline-block element come. But when we set the property width it will occupy the space as much as width set.

   <!-- Please Check inline-block.html file for more clarification where i demonstrate the display: inline; property -->

   - Block: `display: block;` Block elements start on a new line and occupy the full width available within their parent container by default. Block-level elements create line breaks before and after themselves, means it will not allow to render other elements in same line.

   <!-- Please Check block.html file for more clarification where i demonstrate the display: block; property -->