 // import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Link } from 'react-router-dom';
// import { Slot } from '@radix-ui/react-slot';

export interface PrimaryButtonProps {
    children?: ReactNode;
    height?: '50' | '40';
    className?: string;
}

export function PrimaryButton({ children, height = '50', className }: PrimaryButtonProps){


    return(
        <Link to='pageNotFound'
            className={clsx(
              'bg-primary-blue rounded-3xl text-white font-700 text-16 max-w-[230px] w-full flex justify-center items-center hover:bg-opacity-75',
              {
                'h-[50px]': height === '50',
                'h-[40px]': height === '40'
              },
              className
            )}
        >
            {children}
        </Link>
    )
}