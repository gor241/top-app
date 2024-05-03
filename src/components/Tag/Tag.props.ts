import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TagProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    variant?: 'transparent' | 'red' | 'blue' | 'green';
    size?: 'small' | 'large';
    href?: string;
    children: ReactNode;
}
