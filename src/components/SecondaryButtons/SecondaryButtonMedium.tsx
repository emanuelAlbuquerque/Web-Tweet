import { ReactNode } from 'react';
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot';
import { Link } from 'react-router-dom';

export interface SecondaryButtonMediumProps {
  children?: ReactNode;
}

export function SecondaryButtonMedium({ children }: SecondaryButtonMediumProps) {
  return (
    <Link to='pageNotFound'
      className=
      'rounded-3xl bg-transparent text-primary-blue border-2 border-primary-blue font-700 text-16 max-w-[230px] w-full flex justify-center items-center h-[40px]'
    >
      {children}
    </Link>
  )
}