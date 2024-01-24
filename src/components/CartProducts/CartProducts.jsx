import s from './CartProducts.module.scss'

export const CartProducts = () => {

    <ul className={s.products}>
        <li className={s.product} key={1}>
            <img
                className={s.img}
                src=""
                alt="Диван"
            />
            <h3 className={s.titleProduct}>Диван-кровать Бристоль</h3>
            <p className={s.price}>{'133765'.toLocaleString()}&nbsp;  ₽ </p>
            <p className={s.article}>арт.</p>

            <div className={s.productControl}>
                <button className={s.productBtn}> - </button>
                <p className={s.productCount}> 3 </p>
                <button className={s.productBtn}> + </button>
            </div>
        </li>

        <li className={s.product}>
            <img
                className={s.img}
                src=""
                alt="Диван"
            />
            <h3 className={s.titleProduct}>Диван-кровать Бристоль</h3>
            <p className={s.price}>{'135687'.toLocaleString()}&nbsp;  ₽ </p>
            <p className={s.article}>арт.</p>

            <div className={s.productControl}>
                <button className={s.productBtn}> - </button>
                <p className={s.productCount}> 3 </p>
                <button className={s.productBtn}> + </button>
            </div>
        </li>

        <li className={s.product}>
            <img
                className={s.img}
                src=""
                alt="Диван"
            />
            <h3 className={s.titleProduct}>Диван-кровать Бристоль</h3>
            <p className={s.price}>{'139481'.toLocaleString()}&nbsp;  ₽ </p>
            <p className={s.article}>арт.</p>

            <div className={s.productControl}>
                <button className={s.productBtn}> - </button>
                <p className={s.productCount}> 3 </p>
                <button className={s.productBtn}> + </button>
            </div>
        </li>
    </ul>
}