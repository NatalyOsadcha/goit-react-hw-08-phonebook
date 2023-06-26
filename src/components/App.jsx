import { lazy, useEffect } from 'react';
import Layout from './Layout';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperation';
import { useAuth } from 'redux/hooks/useAuth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Phonebook = lazy(() => import('../pages/Phonebook'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/phonebook"
              element={
                <PrivateRoute redirectTo="/login" component={<Phonebook />} />
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute redirectTo="/phonebook" component={<Register />} />
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/phonebook" component={<Login />} />
              }
            />
            <Route path="*" element={<Home />} />
            <Route />
          </Route>
        </Routes>
      </div>
    )
  );
}
