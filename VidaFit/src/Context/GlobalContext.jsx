import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


    //Lista de profissianais
  const [funci, setfunci] = useState([
    {
      id: Date.now(),
      nome: "Sauvino da Silva",
      genero: "Masculino",
      descricao: "Coach de saúde focado em performance e bem-estar, integrando estratégias de treino funcional e nutrição personalizada.",
      img: "./fisica-2.jpg",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 1,
      nome: "Maria Machado",
      genero: "Feminino",
      descricao: "Nutricionista especializada em reeducação alimentar e dietas balanceadas para otimizar a saúde e o rendimento físico.",
      img: "./nutri-0.jpg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 2,
      nome: "Manuela Gomes",
      genero: "Feminino",
      descricao: "Personal Trainer com foco em condicionamento físico, emagrecimento e fortalecimento muscular.",
      img: "./fisica-11.jpg",
      profi: "Personal Trainer"
    },
    {
      id: Date.now() + 3,
      nome: "Victor das Neves",
      genero: "Masculino",
      descricao: "Nutricionista esportivo, trabalha com dietas específicas para atletas e praticantes de atividade física.",
      img: "./nutri-6.jpg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 4,
      nome: "Gustavo Garcia",
      genero: "Masculino",
      descricao: "Coach de saúde com abordagem holística, combinando exercícios, hábitos saudáveis e motivação diária.",
      img: "./fisica-0.jpg",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 5,
      nome: "Julia Machado",
      genero: "Feminino",
      descricao: "Especialista em bem-estar físico, unindo conhecimento em treinamento funcional e alimentação consciente.",
      img: "./fisica-4.jpg",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 6,
      nome: "Miguel Duarte",
      genero: "Masculino",
      descricao: "Personal Trainer dedicado à transformação corporal por meio de treinos personalizados e acompanhamento constante.",
      img: "fisica-5.jpeg",
      profi: "Personal Trainer"
    },
    {
      id: Date.now() + 7,
      nome: "Enzo Carvalho",
      genero: "Masculino",
      descricao: "Nutricionista com foco em dietas adaptadas a diferentes estilos de vida e objetivos físicos.",
      img: "nutri-1.jpg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 8,
      nome: "Lucas Almeida",
      genero: "Masculino",
      descricao: "Coach motivacional de saúde, especialista em promover equilíbrio entre mente, corpo e alimentação.",
      img: "fisica-1.jpg",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 9,
      nome: "Lara Monteir",
      genero: "Feminino",
      descricao: "Nutricionista clínica com foco em alimentação funcional e prevenção de doenças crônicas.",
      img: "nutri-2.png",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 10,
      nome: "Valentina Costa",
      genero: "Feminino",
      descricao: "Nutricionista apaixonada por transformar hábitos alimentares em estilo de vida saudável e sustentável.",
      img: "nutri-3.jpg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 11,
      nome: "Bianca Souza",
      genero: "Feminino",
      descricao: "Personal Trainer com experiência em musculação, HIIT e treinos para fortalecimento feminino.",
      img: "fisica-3.jpg",
      profi: "Personal Trainer"
    },
    {
      id: Date.now() + 12,
      nome: "Isadora Lima",
      genero: "Feminino",
      descricao: "Nutricionista focada em performance esportiva, com planos alimentares para cada fase do treino.",
      img: "nutri-4.jpg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 13,
      nome: "Rafael Barros",
      genero: "Masculino",
      descricao: "Coach de saúde voltado para desenvolvimento físico e mental, incentivando a disciplina e foco.",
      img: "fisica-6.jpg",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 14,
      nome: "Arthur Nogueira",
      genero: "Masculino",
      descricao: "Consultor de saúde e bem-estar, especialista em orientar rotinas alimentares e físicas eficazes.",
      img: "nutri-5.jpg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 15,
      nome: "Pedro Gonçalves",
      genero: "Masculino",
      descricao: "Coach integrativo que alia nutrição esportiva e treino de alta performance para resultados reais.",
      img: "nutri-7.webp",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 16,
      nome: "Caio Antunes",
      genero: "Masculino",
      descricao: "Personal Trainer com foco em treinos personalizados para emagrecimento, hipertrofia e resistência.",
      img: "fisica-7.jpg",
      profi: "Personal Trainer"
    },
    {
      id: Date.now() + 17,
      nome: "Felipe Moreira",
      genero: "Masculino",
      descricao: "Nutricionista especializado em alimentação natural, detox e dietas anti-inflamatórias.",
      img: "nutri-8.jpeg",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 18,
      nome: "Isadora Lima",
      genero: "Feminino",
      descricao: "Coach de saúde com foco em nutrição comportamental e evolução contínua do bem-estar físico.",
      img: "fisica-8.jpg",
      profi: "Coach de saúde"
    },
    {
      id: Date.now() + 19,
      nome: "Marina Silveira",
      genero: "Feminino",
      descricao: "Consultora de saúde integrativa, une práticas alimentares equilibradas com treinos adaptativos.",
      img: "nutri-9.avif",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 20,
      nome: "Elisa Freitas",
      genero: "Feminino",
      descricao: "Nutricionista funcional voltada para qualidade de vida, controle de peso e energia diária.",
      img: "nutri-10.avif",
      profi: "Nutricionista"
    },
    {
      id: Date.now() + 21,
      nome: "Manuela Rocha",
      genero: "Feminino",
      descricao: "Personal Trainer focada em treinos para iniciantes, recuperação física e longevidade ativa.",
      img: "fisica-9.webp",
      profi: "Personal Trainer"
    },
    {
      id: Date.now() + 22,
      nome: "Tainá Vasconcelos",
      genero: "Feminino",
      descricao: "Instrutora de treinamento funcional com ênfase em saúde da mulher e condicionamento físico.",
      img: "fisica-10.jpg",
      profi: "Personal Trainer"
    }
  ])





  // Inicia usuarios vindo do localstorage
  useEffect(() => {
    const initializeAuth = async () => {
      const storedUser = localStorage.getItem('user');
      
      //Verificar token
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
          
          axios.defaults.headers.common['Authorization'] = `Bearer ${parsedUser.token}`;
        } catch (err) {
          console.error('Failed to parse stored user', err);
          logout();
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
    delete axios.defaults.headers.common['Authorization'];
    // Optional: Make API call to invalidate token on server
  };

  // Update do usuario
  const updateUser = (updatedData) => {
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  console.log (login)

  return (
    <GlobalContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        logout,
        updateUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
