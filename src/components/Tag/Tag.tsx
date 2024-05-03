import { TagProps } from './Tag.props';
import style from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({
    variant = 'transparent',
    size = 'small',
    href,
    children,
    className,
    ...props
}: TagProps): JSX.Element => {
    return (
        <div
            className={cn(
                style.tag,
                className,
                {
                    [style.transparent]: variant == 'transparent',
                    [style.red]: variant == 'red',
                    [style.blue]: variant == 'blue',
                    [style.green]: variant == 'green',
                },
                size === 'small' ? [style.small] : [style.large]
            )}
            {...props}
        >
            {href ? (
                <a className={style.a} target="_blank" href={href}>
                    {children}
                </a>
            ) : (
                <>{children}</>
            )}
        </div>
    );
};
