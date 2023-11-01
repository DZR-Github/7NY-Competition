import React from "react";

interface ExampleProps {
  msg: string;
}

const Example: React.FC<ExampleProps> = ({ msg }) => {
  return (
    <div>
      <p>msg</p>
    </div>
  );
};

export default Example;
