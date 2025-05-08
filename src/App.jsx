import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';

function App() {
  return (
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
  );
}

export default App;
