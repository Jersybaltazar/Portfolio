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
  scuti,
  sersi,
  raiz
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
    title: "Desarrollador Frontend",
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
    title: "Desarrollador ML/IA",
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
    name: "redux",
    icon: redux,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   {
     name: "docker",
     icon: docker,
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
    name: "typescript",
    icon: typescript,
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
    name: "mongodb",
    icon: mongodb,
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
    title: "Desarrolllador Odoo",
    company_name: "Kdosh",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Feb 2023",
    points: [
      "Desarrollo y mantenimiento de nuevos modulos y personalizar los ya existentes segpun los requerimientos del cliente.",
      "Migraciones de bases de datos segun versiones",
      "Diseñar e implementar integraciones entre Odoo y otras plataformas (por ejemplo, sistemas de contabilidad, e-commerce o CRM).",
    ],
  },
  {
    title: "Ingeniero Full-Stack",
    company_name: "Inmobiliaria Raiz ",
    icon: shopify,
    iconBg: "#383E56",
    date: "Agt 2023 - Dic 2023",
    points: [
      "Diseño, desarrollo y mantenimiento de una aplicación o plataforma web tipo Marketplace orientado a la inmobiliaria",
      "Implementar un diseño responsivo y garantizar la compatibilidad entre navegadores.",
      "implementar una solución híbrida de almacenamiento y optimización. Para mejorar la eficiencia, la escalabilidad y el rendimiento de la aplicación"
    ],
  },
  {
    title: "Ingeniero Full-Stack",
    company_name: "SCUTI",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Ene 2024 - Ene 2025",
    points: [
      "Desarrollo y mantenimiento de aplicaciones web utilizando tecnologias modernas como Nextjs , MongoDB y otras tecnologias relacionadas.",
      "Colaborar con equipos multifuncionales que incluyen diseñadores, gerentes de productos y otros desarrolladores para crear productos de alta calidad.",
      ,
      "Lider de proyecto en el desarrollo de una plataforma web de investigación orientado a la agricultura de precision.",
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
    name: "SERSI-AI",
    description:
      "Plataforma SAS basada en la web que permite a los usuarios crear asistentes inteligentes, brindando una solución para la atencion al cliente, personalisada, conveniente y eficiente.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Rest Api",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: sersi,
    source_code_link: "https://cersi-ia.vercel.app/",
  },
  {
    name: "Scuti - Web",
    description:
      "Sitio web tipo one-page que presenta a una empresa tecnológica, detallando sus servicios, soluciones personalizadas y enfoque innovador.",
    tags: [
      {
        name: "Tailwindcss",
        color: "blue-text-gradient",
      },
      {
        name: "Framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: scuti,
    source_code_link: "https://scut1.com/",
  },
  {
    name: "Real State",
    description:
      "Plataforma basada en la web que permite a los usuarios buscar , observar y reservar lugares o sitios inmobiliarios; asi como una descripición , ubicación y datos especificos del sitio con su modulo para administrar.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
    ],
    image: raiz,
    source_code_link: "https://raiz-front.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
