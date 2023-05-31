import Layout from './Component/HOC/Layout'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Pages/Home'
import Category from './Component/Pages/Category'
import Products from './Component/Pages/Products'

function App() {


  return (
    <Layout>
      <div className='container-fluid'>
        <Routes>
          <Route path='/' >
            <Route index element={<Home />} />
            <Route path='Home' element={<Home />} />
            <Route path='Category' element={<Category />} />
            <Route path='Product' element={<Products />} />
          </Route>

        </Routes>
      </div>
    </Layout>
  )
}

export default App
