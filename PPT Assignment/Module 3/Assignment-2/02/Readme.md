# What are the Different Types of Selectors in CSS & what are the advantages of them?
   CSS has many types of selectors that allow us to target and apply styles to specific elements in an HTML document.

   - Types of selectors:

    1. Type Selector: Type selectors are `p`, `h1`, `div` etc. 
        - Advantage:  Type selectors target elements based on their tag names. They are simple and easy to use, allowing you to apply styles to all elements of a specific type. However, they lack specificity and may affect all elements of that type throughout the document.
    
    2. Class Selector: <p class="my-class"></p>
       - Advantage: Class selector used by class attriubte given to elements and target as .my-class. In above example `.my-class` of p tag. We can give same class name to multiple elements. It providing a reusable and modular approach to styling.

    3. ID Selector: <p id="my-id"></p>
       - Advantage: Id selector used by id attriubte given to elements and target as #my-id. In above example `#my-id` of p tag. It must be unique there should not be another elements with same id. It provides high specificity and allow you to apply styles to a single element. ID selectors are useful when we want to target a specific element and override other styles easily.

    4. Attribute Selector: img[alt"logo-img"]
       - Advantage: Attribute selectors target elements based on the presence or value of their attributes. They provide flexibility to select elements with specific attributes or attribute values. Attribute selectors are useful when we want to target elements with specific attributes or attribute patterns.
    
    5. Pseudo-Class Selector: `:hover, :nth-child(odd)`
       - Advantage: Pseudo-class selectors target elements based on special states or conditions. They allow us to apply styles based on user interactions (like hovering over an element) or specific positions within a parent container. Pseudo-classes provide dynamic styling capabilities, enhancing interactivity and visual feedback.

    6. Pseudo-Element Selector: `::before, ::after`
       - Advantage: Pseudo-element selectors target specific parts of an element's content, such as adding content before or after an element. They allow you to insert and style additional content dynamically without modifying the HTML structure. Pseudo-elements are useful for adding decorative or structural elements to elements.