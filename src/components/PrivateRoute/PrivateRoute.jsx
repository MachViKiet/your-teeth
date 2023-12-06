
import { Navigate } from 'react-router-dom'

export function PrivateRoute({ children }) {
  const auth = localStorage.getItem('accessToken')
  return auth ? <>{children}</> : <Navigate to="/your-teeth" />
}
