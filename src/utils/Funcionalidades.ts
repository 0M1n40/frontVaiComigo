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
      link: "/cadastrar-veiculo",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/veiculos.png?updatedAt=1745821508793",
    },
    {
      titulo: "Cadastrar Viagem",
      descricao: "Registre viagens realizadas.",
      link: "/cadastrar-viagem",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/cadastrarviagem.png?updatedAt=1745821724481",
    },
    {
      titulo: "Consultar Veículo",
      descricao: "Veja informações dos veículos cadastrados.",
      link: "/consultar-veiculo",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/consultarveiculo.png?updatedAt=1745821774010",
    },
    {
      titulo: "Consultar Viagem",
      descricao: "Acompanhe viagens registradas.",
      link: "/consultar-viagem",
      imagem: "https://ik.imagekit.io/minayura/VaiComigo!/consultarviagem.png?updatedAt=1745822084869",
    },
  ];
  