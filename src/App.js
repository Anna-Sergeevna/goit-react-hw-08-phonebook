import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import AppBar from 'components/AppBar/AppBar';
import Loader from 'components/Loader';
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
  return (
    <Container title=''>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/contacts' element={<ContactsPage />} />
        </Routes>
      </Suspense>
      <Toaster position='top-right' />
    </Container>
  );
}

export default App;
