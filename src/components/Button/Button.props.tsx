import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

// Расширение позволяет получать в кастомном компоненте Button атрибуты дэфолтного button
export interface ButtonProps
    extends DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down' | 'none';
}
