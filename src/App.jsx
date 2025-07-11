import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { SideBarProvider } from '@/contexts/SideBarProvider';
import { StoreProvider } from '@/contexts/storeProvider';
import { ToastContainer } from 'react-toastify';
import MyHeader from '@components/Header/Header';
import MyFooter from '@components/Footer/Footer';

function App() {
  return (
    <StoreProvider>
      <SideBarProvider>
        <div>
          <BrowserRouter>
            <MyHeader />
            <SideBar />
            <Suspense
              fallback={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    fontSize: '20px',
                  }}
                >
                  Loading...
                </div>
              }
            >
              <Routes>
                {routers.map((item, index) => {
                  return (
                    <Route
                      path={item.path}
                      element={<item.component />}
                      key={index}
                    />
                  );
                })}
              </Routes>
            </Suspense>
            <MyFooter />
          </BrowserRouter>
        </div>
        <ToastContainer position='top-right' autoClose={2000} />
      </SideBarProvider>
    </StoreProvider>
  );
}

export default App;
