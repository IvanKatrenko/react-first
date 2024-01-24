import { useNavigate } from 'react-router-dom'
import s from './SearchForm.module.scss'

export const SearchForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        const searchQuery = event.target.search.value;

        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
            event.target.reset();
        }
    }

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <input
                className={s.input}
                type="search"
                name="search"
                placeholder="Wpisz czego szukasz ?" />
            <button className={s.button}
                type='submit'>
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66665 13.9999C11.1644 13.9999 14 11.1644 14 7.66659C14 4.16878 11.1644 1.33325 7.66665 1.33325C4.16884 1.33325 1.33331 4.16878 1.33331 7.66659C1.33331 11.1644 4.16884 13.9999 7.66665 13.9999Z" stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.6666 14.6666L13.3333 13.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form >
    )
}