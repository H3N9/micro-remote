import React, { useState } from "react";

interface ButtonProps {
  caption: string;
}

export const Button: React.FC<ButtonProps> = ({ caption }) => {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {caption} {count}
    </button>
  );
};

export default Button;
