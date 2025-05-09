import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import SideBar from '@components/SideBar/SideBar';
import { SideBarProvider } from '@/contexts/SideBarProvider';

function App() {
  return (
    <SideBarProvider>
      <SideBar />
      <div>
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    </SideBarProvider>
  );
}

export default App;
