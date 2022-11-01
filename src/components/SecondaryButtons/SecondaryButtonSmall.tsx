 // import { clsx } from 'clsx';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface SecondaryButtonSmallProps {
    children?: ReactNode;
}

export function SecondaryButtonSmall({ children }: SecondaryButtonSmallProps){
    return(
        <Link to='pageNotFound'
            className=
              'rounded-3xl bg-transparent text-primary-blue border-2 border-primary-blue font-700 text-16 max-w-[230px] w-full flex justify-center items-center h-[30px]'
         
              
        >
            {children}
        </Link>
    )
}