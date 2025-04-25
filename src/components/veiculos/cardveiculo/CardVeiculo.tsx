import carro from './../../../assets/carro-com-fundo-teste.png'

export default function CardVeiculo() {
    return (
    <div className="w-[301px] max-w-full h-[264px] rounded-[30px] overflow-hidden">
      <div className="h-[215px]">
        <img
          src={carro}
          alt="foto de um carro"
          className="w-full h-full object-cointain"
        />
      </div>

      <div className="bg-[#4EBCB9] h-[49px] flex items-center justify-between px-4 text-[#EFEFEF] font-bold text-sm">
        <span>Carro: modelo xyz</span>
        <span>Placa: abcd</span>
      </div>
    </div>
  );
}
