import { Button, Htag } from '@/components';
import './globals.css';

export default function Home() {
    return (
        <div>
            <Htag tag="h1">Text</Htag>
            <Button appearance="primary">Кнопка залитая</Button>
            <Button arrow="down" appearance="ghost">
                Кнопка не залитая
            </Button>
        </div>
    );
}
