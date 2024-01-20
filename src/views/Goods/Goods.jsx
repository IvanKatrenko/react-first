import { Container } from '../../views/Goods/Goods'
import { CardItem } from '../../components/CardItem/CardItem'
import s from './Goods.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products/products.slice.js'


export const Goods = () => {

    const dispatch = useDispatch();
    const {
        data,
        loading,
        error,
    } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (loading) return <div>Loading ... </div>;
    if (error) return <div> Error: {error}</div>;

    <section className={s.goods}>
        <Container >
            <h2 className={`${s.title} visually-hidden`}>Product list</h2>

            <ul className={s.list}>
                {data.map((item) => (
                    <li key={item.id}>
                        <CardItem {...item} />
                    </li>
                ))}
            </ul>
        </Container>
    </section>
}