import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';


export const Button = ({
    appearance,
    arrow = 'none',
    className,
    children,
    ...props
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            <span
                className={cn(styles.arrow, {
                    [styles.right]: arrow == 'right',
                    [styles.down]: arrow == 'down',
                })}
            ><img src="/Vector.svg" alt="arrow" /></span>
        </button>
    );
};
