#  Explain React component lifecycle

React component lifecycle refers to the different stages a component goes through, 
from its creation to removal from the UI.  Although the traditional lifecycle methods 
(e.g., componentDidMount, componentDidUpdate, componentWillUnmount) are still available 
in class components, React Hooks provide a more flexible and preferred way of handling 
component lifecycle in functional components. 

# Mounting phase:
- useState and useEffect hooks are typically used in this phase.
- useState sets up the initial state of the component.
- useEffect with an empty dependency array ([]) is equivalent to componentDidMount. 
  It runs after the initial render and can -perform side effects, such as data fetching, 
  event listener setup, or subscription handling.

# Updating phase:
- useState and useEffect hooks are also commonly used in this phase.
- When props or state change, the component re-renders.
- useState allows updating the component's state.
- useEffect with dependencies allows running code based on specific prop or state changes, 
  similar to componentDidUpdate.
- Returning a cleanup function from useEffect can handle clean-up tasks when the component 
  is about to re-render or unmount.

# Unmounting phase:
- useEffect with a cleanup function is equivalent to componentWillUnmount. It runs when the 
  component is about to be removed from the UI.
- The cleanup function can handle tasks like clearing timers, canceling subscriptions, or 
  removing event listeners.

"React's component lifecycle with Hooks provides a more intuitive and declarative way of 
managing component behavior and side effects compared to the class-based lifecycle methods."
