import { twMerge } from 'tailwind-merge';

interface props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: props) => {
  return (
    <div
      className={twMerge(
        'mx-auto max-w-[1200px] flex items-center justify-center',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
