# React useEffect Cleanup Function Missing

This repository demonstrates a common error in React applications: forgetting to include a cleanup function in the `useEffect` hook.  Failure to properly clean up event listeners or other side effects can lead to memory leaks and unexpected behavior.

## Bug Description:

The `MyComponent` component adds an event listener for the `keydown` event. However, it's missing the return statement in the `useEffect` hook which is responsible for removing this event listener when the component unmounts or the dependencies change. This leads to a memory leak as the listener remains active even after the component is no longer needed.

## Solution:

The solution involves adding a cleanup function to the `useEffect` hook that removes the event listener.

## How to reproduce:

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the behavior as you interact with the component.