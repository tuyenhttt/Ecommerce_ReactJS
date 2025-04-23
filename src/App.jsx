import './App.css';
import MyFooter from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';
import MyHeader from '@components/Header/Header';

function App() {
  return (
    <div>
      <>
        <MainLayout>
          <MyHeader />
          Content
          <MyFooter />
        </MainLayout>
      </>
    </div>
  );
}

export default App;
