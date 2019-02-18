# Answers

1.  What is React JS and what problems does it try and solve?

ANSWER 1: React is a JavaScript framework that was made to develop large web applications that can change data without having to reload pages. 
Per what I have learned in class, this is accomplished by breaking every section of a page down into a component, if it can be.
The Primary purpose of react according to my web research is to be "fast, scalable and simple." 


2.  What does it mean to _think_ in react?

ANSWER 2: Thinking in React, is a thought-approach to building web applications. The concept in short, is to view everything as a separate re-usable component, if it can be.
Per reactjs.org this thought process can be broken down into the following steps:
The Pre-Step: Start with a Mock.
Step 1: Break The UI Into A Component Hierarchy.
Step 2: Build A Static Version in React.
Step 3: Identify The Minimal (but complete) Representation Of UI State.
Step 4: Identify Where Your State Should Live.
Step 5: Add Inverse Data Flow

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

ANSWER 3: 
Syntax! When creating a class component you need to you need to extend from React.Component and add a render function, which
is what returns the react elements. Whereas A functional component is basically just a JS function that accepts props as an argument and returns a react element,
nothing needs to be extended and no render function needs to be added.

The class component gives us access to setState() and lifecycle hooks. Functional components do not have their own state or have lifecycle hooks.

4.  Describe state.

ANSWER 4: State is an object that stores dynamic data that allows components to change and be interactive.
It is similar to a variable that can be updated.

5.  Describe props.

ANSWER 5: Props, which is short for properties, is a react components argument/parameter.
Props, unlike state, are fixed throughout the lifetime of the component.
