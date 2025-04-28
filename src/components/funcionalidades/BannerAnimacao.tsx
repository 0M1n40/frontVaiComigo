import Lottie from "lottie-react";
import bannerAnimacao from "../../utils/bannerAnimacao.json";

const BannerAnimacao = () => {
    return (
      <div className="w-200 h-64 mx-auto">
        <Lottie animationData={bannerAnimacao} loop={true} />
      </div>
    );
  };
  
  export default BannerAnimacao;
  