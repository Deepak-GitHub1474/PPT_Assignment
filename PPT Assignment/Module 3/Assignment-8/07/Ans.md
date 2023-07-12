#   Explain Prop Drilling in React & Ways to avoid it

Prop drilling in React occurs when props need to be passed through multiple layers of components, 
even though some intermediary components do not require those props themselves. This can lead to 
verbose and hard-to-maintain code. 

- Example to demonstrate prop drilling:

function Grandparent({ message }) {
  return (
    <Parent message={message} />
  );
}

function Parent({ message }) {
  return (
    <Child message={message} />
  );
}

function Child({ message }) {
  return (
    <Grandchild message={message} />
  );
}

function Grandchild({ message }) {
  return (
    <p>{message}</p>
  );
}

In above example, the message prop needs to be passed down through multiple levels of components, 
even though the intermediary components (Parent and Child) do not need the prop themselves.

# To avoid prop drilling in React, there are several techniques you can employ:
- Context API: React's Context API allows you to define a shared context that can be accessed by 
  nested components without passing props explicitly. It provides a more elegant way to share data 
  without going through intermediate components.

- Component composition: Instead of passing props through many levels, you can compose components in 
  a hierarchical manner, with each component responsible for its own data dependencies. This promotes 
  a more modular and self-contained design.

- State management libraries: Libraries like Redux and MobX can centralize the application state, 
  eliminating the need for prop drilling. They provide a global store that can be accessed by any 
  component in the application.