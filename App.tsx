import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import OrderPage from './pages/OrderPage'
import MyOrders from './pages/MyOrders'
import InfoPage from './pages/InfoPage'
import AdminRoot from './admin/AdminRoot'
import Login from './admin/Login'
import Security from './admin/Security'
import Categories from './admin/Categories'
import Products from './admin/Products'
import ProductForm from './admin/ProductForm'
import Dashboard from './admin/Dashboard'
import Orders from './admin/Orders'
import OrderDetail from './admin/OrderDetail'
import StoreSettings from './admin/Settings'
import PagesAdmin from './admin/PagesAdmin'
import Notifications from './admin/Notifications'
import { Navigate } from 'react-router-dom'
export default function App() {
  return (
    <Routes>
      <Route path="admin" element={<AdminRoot />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="products/new" element={<ProductForm />} />
        <Route path="products/:id" element={<ProductForm />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetail />} />
        <Route path="settings" element={<StoreSettings />} />
        <Route path="pages" element={<PagesAdmin />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="security" element={<Security />} />
      </Route>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="order/:number" element={<OrderPage />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="p/:slug" element={<InfoPage />} />
        <Route path="*" element={<div className="py-24 text-center text-mute">الصفحة غير موجودة</div>} />
      </Route>
    </Routes>
  )
}
