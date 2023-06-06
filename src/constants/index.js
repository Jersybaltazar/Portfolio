import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  laravel,
  csharp,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A cerca",
  },
  {
    id: "work",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Web",
    icon: web,
  },
  {
    title: "Desarrollador React",
    icon: mobile,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
  {
    title: "Desarrollador IA",
    icon: creator,
  },
];

const technologies = [
  {
    name:"mysql",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   {
     name: "Laravel",
     icon: laravel,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  
  
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
  //     "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
  //     "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
  //     "Participar en revisiones de código y proporcionar comentarios constructivos a otros desarrolladores",
  //   ],
  // },
  {
    title: "Desarrolllador Weeb",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Ene 2021 - Feb 2022",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando Laravely React.",
      "Desarrollo de sistemas implemtentando algoritmos de Inteligencia Artifical",
      "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
    
    ],
  },
  {
    title: "Desarrollador React js ",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "Ene 2022 - Feb 2023",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js y otras tecnologías relacionadas.",
    
      "Implementar un diseño receptivo y garantizar la compatibilidad entre navegadores.",
      "Participar en revisiones de código y proporcionar comentarios constructivos con otros desarrolladores",
    ],
  },
  {
    title: "Desarrollador Back-End",
    company_name: "K-SOFT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ene 2023 - Present",
    points: [
      "Desarrollo y mantenimiento de aplicaciones de escritorio utilizando C# y otras tecnologías relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      ,
      "Desarrollo de una applicación movil utilizando Mockittapp ,Xamrin , Api rest en php, Mysql y tecnologias relacionadas ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Pensé que era imposible hacer un sitio web tan hermoso como nuestro producto, pero Jersy me demostró que estaba equivocado.",
    name: "Normi17",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/lego/9.jpg",
  },
  {
    testimonial:
      "Nunca he conocido a un desarrollador web que realmente se preocupe por el éxito de sus clientes como lo hace Jersy.",
    name: "Hamilton Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/lego/5.jpg",
  },
  {
    testimonial:
      "Después de que Jersy optimizó nuestro sitio web, nuestro tráfico aumentó en un 50%. ¡No podemos agradecerles lo suficiente!",
    name: "BetoD",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/lego/4.jpg",
  },
];

const projects = [
  {
    name: "Restaurante App",
    description:
      "Plataforma basada en la web que permite a los usuarios buscar, reservar y administrar un restaurante , brindando una solución conveniente y eficiente para las necesidades de administración.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "php",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Jersybaltazar/Restaurant",
  },
  {
    name: "Job IT",
    description:
      "Aplicación movil que permite a los usuarios buscar ofertas de trabajo, buscar productos y emprendimientos en linea, localizar trabajos disponibles según su ubicación actual.",
    tags: [
      {
        name: "Xamarin",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Jersybaltazar/Bolsa_trabajo",
  },
  {
    name: "Turisteando",
    description:
      "Plataforma basada en la web que permite a los usuarios buscar y observar lugares o sitios turisticos; asi como una descripición , ubicación y datos especificos del sitio con su modulo para administrar.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Jersybaltazar/Ciscov",
  },
];

export { services, technologies, experiences, testimonials, projects };
