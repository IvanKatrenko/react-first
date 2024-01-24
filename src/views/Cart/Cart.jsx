import s from './Cart.module.scss';
import { Container } from '../Container/Container';
import { Container } from "../Container/Container"
import { CartProducts } from '../../components/CartProducts/CartProducts';
import { CartPlace } from '../../components/CartPlace/CartPlace';
import { CartForm } from '../../components/CartForm/CartForm';



//cart cостоит из трех блоков
//cartproducts
//cartform
//cartplace
export const Cart = () => {



    return (
        <section className={s.cart}>
            <Container className={s.container}>
                <h2 className={s.title}>basket</h2>
                <CartProducts />
                <CartPlace />
                <CartForm />
            </Container>

        </section>
    )
}