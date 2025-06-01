import { useContext } from 'react';
import { StepperContext } from '@/contexts/StepperProvider';
import Contents from '@/pages/Cart/components/Contents/Contents';
import Checkout from '@/pages/Cart/components/Checkout/Checkout';

const ContentStep = () => {
  const { currentStep } = useContext(StepperContext);

  console.log(currentStep);

  const handleRenderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <Contents />
          </>
        );
      case 2:
        return (
          <>
            <Checkout />
          </>
        );
      case 3:
        return <h1>Step 3</h1>;
    }
  };

  return <>{handleRenderContent()}</>;
};

export default ContentStep;
