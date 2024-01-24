import { Container } from '../../views/Container/Container'
import { CardItem } from '../../components/CardItem/CardItem'
import s from './Goods.module.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/products/products.slice.js'
import { useSearchParams } from 'react-router-dom';


export const Goods = () => {

    const dispatch = useDispatch();
    const [searchParam] = useSearchParams();
    const category = searchParam.get('category');
    const q = searchParam.get('q');



    const {
        data,
        loading,
        error,
    } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchProducts({ category, q }));
    }, [dispatch, category, q])

    if (loading) return <div>Loading ... </div>;
    if (error) return <div> Error: {error}</div>;

    return (
        <section className={s.goods}>
            <Container >
                <h2 className={`${s.title} visually-hidden`}>Product list</h2>
                {data.length ? (
                    <ul className={s.list}>
                        {data.map((item) => (
                            <li key={item.id}>
                                <CardItem {...item} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No products found according to your request</p>
                )}
            </Container>
        </section >
    )
}