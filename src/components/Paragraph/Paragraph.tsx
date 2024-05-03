import { ParagraphProps } from './Paragraph.props';
import style from './Paragraph.module.css';
import cn from 'classnames';

export const Paragraph = ({
    size = 'p3',
    children,
    className,
    ...props
}: ParagraphProps): JSX.Element => {
    return (
        <p
            className={cn(style.p, className, {
                [style.p1]: size == 'p1',
                [style.p2]: size == 'p2',
                [style.p3]: size == 'p3',
            })}
            {...props}
        >
            {children}
        </p>
    );
};
