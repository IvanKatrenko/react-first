
import 'swiper/css';
import { Container } from '../../views/Container/Container'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../../store/product/product.slice';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { Swiper, SwiperSlide } from 'swiper/react'

export const Card = () => {

    const { productId } = useParams();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

    if (loading) return <div>Loading ... </div>
    if (error) return <div> Error: {error}</div>
    if (!data) return <div> Product not found please try later</div>

    return (
        <section className={s.card}>
            <Container className={s.container}>
                <h2 className={s.title}>{data.name}</h2>

                <Slider data={data} />
                <div className={s.info}>
                    <p className={s.price}>{data.price.toLocaleString()}&nbsp;  ₽ </p>
                    <p className={s.article}>арт. {data.article}</p>

                    <div >
                        <h3 className={s.characteristicsTitle}>
                            General characteristics</h3>
                        <table className={s.table}>
                            <tbody>
                                {data.characteristics.map((item, i) => (
                                    <tr className={s.row} key={i}>
                                        <td className={s.field}>{item[0]}</td>
                                        <td className={s.value}>{item[1]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={s.btns}>
                        <button className={s.btn}>Add to cart</button>
                        <FavoriteButton className={s.like} id={data.id} />
                    </div>

                </div>
            </Container>
        </section>
    )
}