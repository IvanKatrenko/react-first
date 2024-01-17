import { useEffect } from "react";
import { Goods } from "../../components/Goods/Goods";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { useDispatch, useSelector } from "react-redux";



export const Main = () => {

    const dispatch = useDispatch();
    const {
        data: dataCategories,
        loading: loadingCategories,
        error: errorCategories
    } = useSelector((state) => state.categories);

    useEffect(() => {

        dispatch(fetchCategories())
    }, [dispatch])

    if (loadingCategories) return <div>Loading ... </div>
    if (errorCategories) return <div> Error:{errorCategories}</div>

    return (
        <main>
            <Catalog data={dataCategories} />
            <Goods />


        </main>
    )
}