import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth';
import './App.css';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(() =>
  import('./views/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('./views/LoginPage' /* webpackChunkName: "login-page" */),
);

const ContactsPage = lazy(() =>
  import('./views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <Container title=''>
          <AppBar />

          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                path='/'
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path='/register'
                element={
                  <PublicRoute redirectTo='/contacts' restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path='/login'
                element={
                  <PublicRoute redirectTo='/contacts' restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path='/contacts'
                element={
                  <PrivateRoute redirectTo='/login'>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </Suspense>
          <Toaster position='top-right' />
        </Container>
      )}
    </>
  );
}

export default App;
