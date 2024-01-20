import { Swiper, swiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import s from './Card.module.scss';
import { Container } from '../../views/Container/Container'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const Card = () => {

    const [mainSwiper, setMainSwiper] = useState(null)
    const [thumbswiper, setThumbsSwiper] = useState(null)

    const { productId } = useParams();

    return (
        <section className={s.card}>
            <Container className={s.container}>
                <h2 className={s.title}>Armchair with armrests</h2>
                <div className={s.picture}>
                    <div className={s.sliderMain}>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            modules={[Thumbs]}
                            thumbs={{ swipper: thumbsSwiper }}
                            spaceBettween={10}
                        >
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                        </Swiper>
                        <button onClick={() => mainSwiper.slideNext()}>next</button>
                        <button onClick={() => mainSwiper.slidePrev()}>prev</button>
                    </div>
                    <div className={s.sliderThumbnails}>
                        <Swiper onSwiper={setThumbsSwiper}
                            watchSlidesProgress
                            modules={[Thumb]}
                            spaceBetween={14}
                            slidesPerView={4}
                            freeMode={true}
                        >
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/public/img/photo-3.jpg" alt="Armchair with armrests" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className={s.info}>
                    <p className={s.price}>{'5000'.toLocaleString()}&nbsp;  ₽ </p>
                    <p className={s.article}>арт. 84348945757</p>
                    <div className={s.characteristics}>
                        <h3>General characteristics</h3>
                    </div>
                </div>

            </Container>
        </section>
    )
}