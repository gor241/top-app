'use client';
import { RatingProps } from './Rating.props';
import style from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent } from 'react';
import StarIcon from './Vector.svg';

export const Rating = ({
    isEditable = false,
    rating,
    setRating,
    className,
    ...props
}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
        new Array(5).fill(<></>)
    );

    useEffect(() => {
        constractRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constractRating(i);
    };

    const onClickRating = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handlwSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    };

    const constractRating = (currentProps: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={cn(style.star, className, {
                        [style.filled]: i < currentProps,
                        [style.editable]: isEditable,
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClickRating(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
                            isEditable && handlwSpace(i + 1, e)
                        }
                        {...props}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (
                <span key={i}>{r}</span>
            ))}
        </div>
    );
};
