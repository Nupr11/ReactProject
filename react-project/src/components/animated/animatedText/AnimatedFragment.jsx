import { useTrail, animated } from "react-spring";
import React from "react";

export function AnimatedFragment({ children, customConfig }) {
  const setItems = () => {
    return Array.isArray(children)
      ? children
      : React.Children.toArray(children);
  };
  const trails = useTrail(setItems().length, customConfig);

  return trails.map((props, index) => (
    <animated.div key={index} style={props}>
      {children[index]}
    </animated.div>
  ));
}
