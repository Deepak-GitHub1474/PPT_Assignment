# What do you understand by Virtual DOM?

The Virtual DOM is a concept used in React to optimize the updating and rendering of UI 
components. It is a lightweight copy of the actual DOM (Document Object Model) maintained
by React. 

# Working:
When a React component's state or props change, the entire component tree is re-rendered 
in the virtual DOM. React then performs a "diffing" process, comparing the previous virtual 
DOM with the new virtual DOM to determine the minimal number of changes needed to update 
the actual DOM.Once the minimal changes are determined, React efficiently updates only those 
parts of the actual DOM that require modification.
This approach minimizes the number of direct manipulations to the real DOM, resulting in 
better performance and a more efficient rendering process.
The virtual DOM acts as a reconciliation layer between the developer's declarative code 
and the actual browser DOM, making it easier for React to manage and update the UI efficiently.