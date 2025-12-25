import { PropsWithChildren } from 'react';

type ContainerProps = {
  className?: string;
};

const Container = ({ children, className = '' }: PropsWithChildren<ContainerProps>) => {
  return (
    <div className={`max-w-350 mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
