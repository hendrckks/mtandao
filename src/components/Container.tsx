import { twMerge } from 'tailwind-merge';

interface props {
  children: React.ReactNode;
  className?: string;
  role?: string;
  'aria-label'?: string;
}

const Container = ({ children, className, role, 'aria-label': ariaLabel }: props) => {
  return (
    <div
      className={twMerge(
        'mx-auto max-w-[1200px] flex items-center justify-center',
        className
      )}
      role={role}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default Container;
