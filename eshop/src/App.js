// import logo from './logo.svg';
import { render } from 'react-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
import Layout from './components/Layout'

function App() {
  return (
    // <Router>
    //   {/* <Header /> */}
    //   {/* <main> */}
    //   <Container>
    //     <Route path="/" exact>
    //       <HomeScreen />
    //     </Route>
    //   </Container>
    //   {/* </main> */}
    //   {/* <Footer /> */}
    // </Router>

    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
