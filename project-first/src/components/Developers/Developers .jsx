import s from './Developers.module.scss'

export const Developers = () => (
    <ul className={s.developers}>
        <li className={s.item}>
            Designer :
            <a className={s.link}
                href="https://t.me/Mrshmallow"
                target='_blank'
                rel="noreferer noreferrer"> Anastasia Ilina
            </a>
        </li>
        <li className={s.item}>
            Developer :
            <a className={s.link}
                href="https://web.telegram.org/k/"
                target='_blank'
                rel="noreferer noreferrer"> Ivan Katrenko
            </a>
        </li>
    </ul>
)