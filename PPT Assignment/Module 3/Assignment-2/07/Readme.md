#  What’s Grid & Flex and difference between them?
   Both Flexbox and Grid are powerful tools, and their usage depends on the specific layout requirements of your web page. Often, a combination of both is used to create sophisticated and responsive layouts.

   - Flexbox: Flexbox is a `one-dimensional` layout system designed to create flexible and dynamic layouts along a single axis (either horizontally or vertically).With Flexbox, we can create a flex container (the parent element) and set its display property to display: flex. The child elements inside the flex container come in same line. It allows us to easily distribute space among flex items and control their behavior as they grow or shrink.Flexbox is best suited for arranging items in a linear direction.

   - Grid: Grid is a `two-dimensional` layout system designed to create flexible and dynamic layouts. Using grid we can create complex web page layout. Define a grid container by setting its display property to display: grid. Inside the grid container, Grid allows us to place items (grid items) anywhere within the grid container, controlling their placement using properties like grid-row, grid-column, and grid-area. We have precise control over the size and position of grid items.Grid provides powerful features such as auto-placement, spanning and overlapping cells, and alignment controls.

   Differences between Grid and Flexbox:

   1. Dimensionality:
       - Flexbox is a one-dimensional layout system, working along either the horizontal or vertical axis.
       - Grid is a two-dimensional layout system, allowing control over both rows and columns simultaneously.

   2. Layout Control:
       - Flexbox provides control over the alignment and distribution of items along a single axis, focusing on content ordering and spacing.
       - Grid provides control over both the placement and sizing of items in a grid structure, allowing for more complex layouts.

    3. Complexity:
       - Flexbox is simpler to understand and use for basic linear layouts, such as organizing elements in a row or column.
       - Grid offers more advanced features, such as auto-placement, spanning, and overlapping cells, making it more suitable for complex grid-based layouts.

    4. Use Cases:
       - Flexbox is commonly used for creating navigation menus, aligning elements within a container, or vertically centering items.
       - Grid is suitable for creating overall page layouts, grid-based designs, and aligning multiple elements in a grid structure.