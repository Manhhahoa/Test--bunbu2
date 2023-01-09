import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RootState } from "../redux/Store"

function PrivateRoute({ children }: any) {
    const user = useSelector((state: RootState) => state.user)
    if (user.length === 0) {
        return <Navigate to='/sign-in'></Navigate>
    }
    return children
}

export default PrivateRoute
