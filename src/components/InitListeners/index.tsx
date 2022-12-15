import { ReactNode } from 'react';

interface InitListenersProps {
  children: ReactNode;
}

const InitListeners = ({ children }: InitListenersProps) => {
  return <>{children}</>;
};

export default InitListeners;
