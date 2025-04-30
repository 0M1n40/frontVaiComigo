// src/components/CarAnimation.tsx

import Lottie from "lottie-react";
import carAnimation from "../../utils/carroAnimacao.json"; // ajuste o caminho se necessário

const CarAnimation = () => {
  return (
    
    <div className="max-w-300 h-64 mx-auto mb-58 ">
      <Lottie animationData={carAnimation} loop={true} />
    </div>
  );
};

export default CarAnimation;
