import Lottie from "lottie-react";
import bannerAnimacao from "../../utils/bannerAnimacao.json";

const BannerAnimacao = () => {
  return (
    <div className=" w-full max-w-9xl mx-auto h-70 md:h-59 lg:h-92 ml-3">
      <Lottie animationData={bannerAnimacao} loop={true} />
    </div>
  );
};

export default BannerAnimacao;
