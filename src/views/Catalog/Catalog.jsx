
import { Container } from '../../views/Container/Container'
import s from './Catalog.module.scss';
import { useDispatch } from 'react-redux';

export const Catalog = () => {
    const dispatch = useDispatch();

    const {
        data,
        loading,
        error
    } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    if (loading) return <div>Loading ... </div>
    if (error) return <div> Error:</div>

    return (
        <nav className={s.catalog}>
            <Container className={s.container}>
                <ul className={s.list}>
                    {data.map((item, i) => (
                        <li key={i}>
                            <a className={s.link} href={`/category?slug=${item}`} > {item}</a>
                        </li>
                    ))}
                </ul>
            </Container>
        </nav >
    )
}
