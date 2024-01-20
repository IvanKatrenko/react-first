
import { useDispatch, useSelector } from "react-redux"
import { Footer } from "./views/Footer/footer"
import { Header } from "./views/Header/header"
import { useEffect } from "react"
import { fetchAccessToken } from "./store/auth/auth.slice"
import { Container } from "./views/Container/Container"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Catalog } from "./views/Catalog/Catalog"
import { Goods } from "./views/Goods/Goods"
import { Cart } from "./components/Cart/Cart"
import { Card } from "./components/Card/Card"


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main >
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/favorite',
    element: (
      <>
        <Header />
        <main >
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/category',
    element: (
      <>
        <Header />
        <main >
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/search',
    element: (
      <>
        <Header />
        <main >
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <main >
          <Cart />
        </main>
        <Footer />
      </>
    )
  },
  {
    path: '/product/:productId',
    element: (
      <>
        <Header />
        <main >
          <Catalog />
          <Card />
        </main>
        <Footer />
      </>
    )
  },
])

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken())
    }
  }, [dispatch, accessToken])

  if (error) {
    return <Container> Receiving error token: {error}</Container>
  }

  if (loading) {
    return <div>Loading ...</div>
  }
  return (
    <RouterProvider router={router} />

  )
}


export default App;
