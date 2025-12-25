import { PropsWithChildren } from 'react';

type ContainerProps = {
  className?: string;
};

const Container = ({ children, className = '' }: PropsWithChildren<ContainerProps>) => {
  return (
    <div className={`max-w-350 mx-auto px-6 md:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
