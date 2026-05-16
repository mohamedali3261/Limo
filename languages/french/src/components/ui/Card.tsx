import { FC, ReactNode } from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: FC<CardProps> = ({ children, className = '', onClick, hoverable = false }) => {
  const Component = hoverable ? motion.div : 'div';
  const hoverProps = hoverable ? { whileHover: { y: -5 }, transition: { type: "spring", stiffness: 300 } } : {};

  return (
    <Component
      className={`bg-white rounded-2xl p-6 shadow-sm border border-slate-100 ${hoverable ? 'cursor-pointer hover:shadow-md transition-shadow' : ''} ${className}`}
      onClick={onClick}
      {...hoverProps}
    >
      {children}
    </Component>
  );
};
