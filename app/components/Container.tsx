import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="md-px-10 mx-auto max-w-[2520px] px-4 sm:px-2 xl:px-20">
      {children}
    </div>
  );
};

export default Container;
