# What’s Box Model in CSS?
   The box model is a fundamental concept in CSS (Cascading Style Sheets) that describes the layout and sizing of elements on a web page. It consists of four components that define the space occupied by an element: content, padding, border, and margin. Each component contributes to the total size of the element.

   The total width of an element is calculated by adding the content width, padding width, border width, and margin width together. The total height is calculated similarly.
   Understanding the box model is essential for controlling the layout and spacing of elements on a web page. By adjusting the dimensions and properties of the different components, you can control how elements are displayed and positioned in relation to each other.

   - Content: It is the innermost part of the box and has dimensions defined by the width and height properties.The content area refers to the actual content of an element, such as text, images, or other media.

   - Padding: Padding is the second innermost part of the box. It is use to create the space between the content and the element's border. Suppose we have box and want to give space from inside of the box from all the side(top,bottom,left,right) around the element we use padding property in this case.

   - Border:The border defines the boundary of the element. It surrounds the padding and content areas. Borders can have different styles, colors, and widths, and they are set using the border property. The default border is 1px.

   - Margin: The margin is the outermost part of the box model and provides space between the element and other elements on the page. It creates the gap or spacing between elements. The margin can be set using the margin property. Basically when we need the space between elements from outside then we use margin property.

                                                Visual Representation:
                                        +--------------------------------------+
                                        |                Margin                 |
                                        |  +---------------------------------+  |
                                        |  |            Border               |  |
                                        |  |  +----------------------------+ |  |
                                        |  |  |         Padding            | |  |
                                        |  |  |  +----------------------+  | |  |
                                        |  |  |  |      Content         |  | |  |
                                        |  |  |  +----------------------+  | |  |
                                        |  |  +----------------------------+ |  |
                                        |  +--------------------------------+   |
                                        |                                       |
                                        +---------------------------------------+

   