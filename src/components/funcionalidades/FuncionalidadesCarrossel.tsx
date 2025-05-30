// components/FuncionalidadesCarrossel.tsx

import { Funcionalidade } from "../../utils/Funcionalidades";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

interface FuncionalidadesCarrosselProps {
  funcionalidades: Funcionalidade[];
}

export default function FuncionalidadesCarrossel({ funcionalidades }: FuncionalidadesCarrosselProps) {
  return (
    <div className="w-full px-6 py-5">
      <h2 className="text-3xl font-bold text-center mb-8">
        Funcionalidades Disponíveis
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {funcionalidades.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to= {item.link} className="flex flex-col items-center bg-white rounded-2x1 shadow-md p-10 mt-10 mb-20 hover:shadow-xl/20 transition duration-300">
              <img src={item.imagem} alt={item.titulo} className="w-49 h-24 mb-4 object-contain" />
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-500 text-center">{item.descricao}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
