 // import { clsx } from 'clsx';
import { FormEvent, FormEventHandler, ReactNode } from 'react';
import { clsx } from 'clsx'
import { Link } from 'react-router-dom';
// import { Slot } from '@radix-ui/react-slot';

export interface PrimaryButtonProps {
    children?: ReactNode;
    height?: '50' | '40' | '60';
    className?: string;
    onClick?: () => void
    onSubmit?: (e: FormEvent<HTMLButtonElement>) => void
    type?: "button" | "submit" | "reset" | undefined
}

export function PrimaryButton({ children, height = '50', className, onClick, onSubmit, type}: PrimaryButtonProps){


    return(
        <button
            className={clsx(
              'bg-primary-blue-active rounded-3xl text-white font-700 text-16 w-full flex justify-center items-center hover:bg-opacity-75',
              {
                
                'h-[50px]': height === '50',
                'h-[40px]': height === '40',
                'h-[60px]': height === '60'
              },
              className
            )}
            onClick={onClick}
            onSubmit={onSubmit}
            type={type}
        >
            {children}
        </button>
    )
}