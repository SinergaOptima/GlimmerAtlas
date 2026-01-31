import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'light';
  children: React.ReactNode;
}

export function GlassCard({
  variant = 'default',
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        variant === 'default' ? 'glass-card' : 'glass-card-light',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
