import { Logo } from "../../components/Logo/Logo";
import { Navigation } from "../../components/Navigation/Navigation";
import { SearchForm } from "../../components/SearchFrom/SearchFrom";
import { Container } from "../Container/container";
import s from './Header.module.scss'

export const Header = () => (
    <header>
        <Container className={s.container} >
            <div className={s.logo}>
                <Logo />
            </div>
            <div className={s.search}>
                <SearchForm />
            </div>
            <div className={s.navigation}>
                <Navigation />
            </div>
        </Container>
    </header>
)