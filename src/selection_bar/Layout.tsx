import { Outlet } from 'react-router'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Selectionbar from './Selectionbar'

const Layout = () => {
    return (
        <>
            <Header />
            <Selectionbar />
            <Outlet></Outlet>
            <div> <Footer /></div>
        </>
    )
}

export default Layout
