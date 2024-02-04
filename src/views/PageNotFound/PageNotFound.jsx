import { useRouteError } from "react-router-dom";
import { Container } from "../Container/Container";
import s from './PageNotFound.module.scss';

export const PageNotFound = () => {
    const routeError = useRouteError();
    return (
        <Container className={s.error}>
            <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
            <p className={s.message}>{routeError?.message ?? 'Неизвестная ошибка'}</p>
        </Container>
    );
};