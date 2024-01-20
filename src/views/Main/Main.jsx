import { useEffect } from "react";
import { Goods } from "../../components/Goods/Goods";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { useDispatch, useSelector } from "react-redux";
import s from './Main.module.scss'


export const Main = () => {

    return (
        <main className={s.main}>
            <Catalog data={dataCategories} />
            <Goods data={dataProducts} />


        </main>
    )
}