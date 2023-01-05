import { Outlet } from 'react-router'
import Header from '../header/Header'
import Selectionbar from './Selectionbar'

const Layout = () => {
    return (
        <div>
            <Header />
            <Selectionbar />
            <Outlet></Outlet>
        </div>
    )
}

export default Layout
