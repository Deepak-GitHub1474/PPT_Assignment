# Difference between absolute and relative and sticky and fixed position explain with example.

   - Absolute: The element is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However, if there is no positioned ancestor, it defaults to the document body, and moves along with page scrolling.

   - Relative: The element is positioned relative to its normal position and can be shifted horizontally or vertically with the top, bottom, left, and right properties. The other elements in the document flow are not affected by this positioning.

   - Sticky: The element is positioned based on the normal flow of the document, like static, but when the user scrolls and the element become obscured, it is treated as fixed until it reaches the boundaries of its parent container.

   - Fixed: The element is positioned relative to the viewport and it will not move even if the page is scrolled. 

   Difference:
      - Relative - The element is positioned relative to its normal position.
      - Absolute - The element is positioned absolutely to its first positioned parent.
      - Sticky - The element is positioned based on the user’s scroll position.
      - Fixed - The element is positioned related to the browser window.