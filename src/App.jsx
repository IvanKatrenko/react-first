
import { useDispatch, useSelector } from "react-redux"
import { Footer } from "./views/Footer/footer"
import { Header } from "./views/Header/header"
import { Main } from "./views/Main/main"
import { useEffect } from "react"
import { fetchAccessToken } from "./store/auth/auth.slice"
import { Container } from "./views/Container/Container"


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
  return (
    <>
      <Header />
      {!loading && accessToken ? <Main /> : <div> Loading... </div>}
      <Footer />
    </>
  )
}


export default App
