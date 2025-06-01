import Steps from '@/pages/Cart/components/Steps/Steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import ContentStep from '@/pages/Cart/ContentStep';
import { StepperProvider } from '@/contexts/StepperProvider';

const Cart = () => {
  const { container } = styles;

  return (
    <StepperProvider>
      <div className={container}>
        <Steps />
        <MainLayout>
          <ContentStep />
          {/* <Contents /> */}
          {/* {handleRenderContent()} */}
        </MainLayout>
      </div>
    </StepperProvider>
  );
};
export default Cart;
