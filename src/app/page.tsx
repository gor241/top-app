'use client';
import { Button, Htag, Paragraph, Rating, Tag } from '@/components';
import './globals.css';
import { useState } from 'react';

export default function Home() {
    const [rating, setRating] = useState(3);

    return (
        <>
            <Htag tag="h1">Text</Htag>
            <Button appearance="primary">Кнопка залитая</Button>
            <Button arrow="down" appearance="ghost">
                Кнопка не залитая
            </Button>
            <Paragraph>Маленький параграф</Paragraph>
            <Paragraph size="p2">Средний параграф</Paragraph>
            <Paragraph size="p1">Большой параграф</Paragraph>
            <Tag>Прозрачный тег</Tag>
            <Tag variant="red">Красный тег</Tag>
            <Tag variant="blue">Синий тег</Tag>
            <Tag variant="green">Зелённый тег</Tag>
            <Tag size="large">Большой тег</Tag>
            <Tag size="large" href="http://google.com">
                Тег с ссылкой
            </Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating} />
        </>
    );
}
