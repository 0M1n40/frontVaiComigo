// utils/funcionalidades.ts
export interface Funcionalidade {
    titulo: string;
    descricao: string;
    link: string;
    imagem: string;
  }
  
  export const funcionalidades: Funcionalidade[] = [
    {
      titulo: "Cadastrar Veículo",
      descricao: "Adicione novos veículos ao sistema.",
      link: "/veiculos/cadastrar",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/veiculos.png?updatedAt=1745821508793",
    },
    {
      titulo: "Cadastrar Viagem",
      descricao: "Registre viagens que serão realizadas.",
      link: "/viagens/cadastrar",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/cadastrarviagem.png?updatedAt=1745821724481",
    },
    {
      titulo: "Consultar Veículo",
      descricao: "Veja informações dos veículos cadastrados.",
      link: "/veiculos/all",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/consultarveiculo.png?updatedAt=1745821774010",
    },
    {
      titulo: "Consultar Viagem",
      descricao: "Acompanhe viagens registradas.",
      link: "/viagens/all",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/consultarviagem.png?updatedAt=1745822084869",
    },
  ];
  