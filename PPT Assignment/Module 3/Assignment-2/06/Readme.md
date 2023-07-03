# What’s z-index and How does it Function ?
   z-index property is used to control the stacking order or we can say ensuring that appear in the desired order of elements that overlap each other on the z-axis on a web page. It determines which elements appear on front and which element will appear on back.The z-index only affects elements that have a position value other than static (e.g., relative, absolute, fixed).

   z-index property functions:

      - Stacking Context: The z-index property only works within the same stacking context. Elements in different stacking contexts are not affected by each other's z-index values.

      - Numeric Values: The z-index property accepts numeric values that determine the stacking order of elements within the same stacking context.Higher z-index values bring elements to the front, while lower values move them to the back.Negative values are allowed, and z-index: auto is the default, which means the element follows the natural stacking order within its stacking context.
      
      - Stacking Order: If two elements have the same z-index value, the one that appears later in the HTML document will be placed on top.
        
      - Stacking Context Hierarchy: A higher z-index value in a child stacking context does not guarantee that it will be above elements in the parent stacking context.
