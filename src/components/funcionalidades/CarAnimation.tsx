// src/components/CarAnimation.tsx

import Lottie from "lottie-react";
import carAnimation from "../../utils/carroAnimacao.json"; // ajuste o caminho se necessário

const CarAnimation = () => {
  return (
    <div className="w-200 h-64 mx-auto">
      <Lottie animationData={carAnimation} loop={true} />
    </div>
  );
};

export default CarAnimation;
