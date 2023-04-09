import React, { useState } from "react";

interface ButtonProps {}

export const Button: React.FC<ButtonProps> = () => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default Button;
