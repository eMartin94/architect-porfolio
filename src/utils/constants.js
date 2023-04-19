import { img1, img10, img2, img3, img4, img5, photo } from '../assets';

const navLinks = {
  en: {
    links: [
      { to: '/', name: 'Home' },
      { to: '/about', name: 'About' },
      { to: '/project', name: 'Projects' },
      { to: '/drawing', name: 'Drawings' },
      { to: '/contact', name: 'Contact' },
    ],
  },
  es: {
    links: [
      { to: '/', name: 'Inicio', },
      { to: '/about', name: 'Sobre mí', },
      { to: '/project', name: 'Proyectos', },
      { to: '/drawing', name: 'Dibujos' },
      { to: '/contact', name: 'Contacto' },
    ],
  },
};

const homeText = {
  en: {
    description: 'Designing quality spaces',
    quote: '"The architecture should be a response to the needs of society and not a selfish expression of personal tastes."',
    author: 'César Pelli',
    img: photo,
  },
  es: {
    description: 'Diseñando espacios de calidad',
    quote: '"La arquitectura debe ser una respuesta a las necesidades de la sociedad y no una expresión egoísta de los gustos personales."',
    author: 'César Pelli',
    img: photo,
  },
}

const lastProjects = {
  en: {
    title: "Last Projects",
    projects: [
      {
        titleProject: "Project 1",
        description: "Description of project 1.",
        img: img1,
      },
      {
        titleProject: "Project 2",
        description: "Description of project 2.",
        img: img2,
      },
      {
        titleProject: "Project 3",
        description: "Description of project 2.",
        img: img3,
      },
    ],
    textButton: 'see more',
  },
  es: {
    title: "Últimos Proyectos",
    projects: [
      {
        titleProject: "Proyecto 1",
        description: "Descripción del proyecto 1.",
        img: img1,
      },
      {
        titleProject: "Proyecto 2",
        description: "Descripción del proyecto 2.",
        img: img2
      },
      {
        titleProject: "Proyecto 3",
        description: "Descripción del proyecto 2.",
        img: img3,
      },
    ],
    textButton: 'ver más',
  },
};

const aboutText = {
  en: {
    title: 'about me',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?',
    textButton: 'download',
    subTitle1: 'skills',
    skills: [
      {
        name: 'autocad',
        icon: '',
      },
      {
        name: 'sketchup',
        icon: '',
      },
      {
        name: 'revit',
        icon: '',
      },
      {
        name: 'rhino',
        icon: '',
      },
      {
        name: '3DS max',
        icon: '',
      },
    ],
    subTitle2: 'course',
    courses: [
      {
        name: 'course 1',
        date: 'may 2023 - july 2023',
        icon: '',
      },
      {
        name: 'course 2',
        date: 'may 2023 - july 2023',
        icon: '',
      },
      {
        name: 'course 3',
        date: 'may 2023 - july 2023',
        icon: '',
      },
      {
        name: 'course 4',
        date: 'may 2023 - july 2023',
        icon: '',
      },
      {
        name: 'course 5',
        date: 'may 2023 - july 2023',
        icon: '',
      },
    ],
  },
  es: {
    title: 'sobre mi',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?',
    textButton: 'descargar',
    subTitle1: 'skills',
    skills: [
      {
        name: 'autocad',
        icon: '',
      },
      {
        name: 'sketchup',
        icon: '',
      },
      {
        name: 'revit',
        icon: '',
      },
      {
        name: 'rhino',
        icon: '',
      },
      {
        name: '3DS max',
        icon: '',
      },
    ],
    subTitle2: 'cursos',
    courses: [
      {
        name: 'curso 1',
        date: 'mayo 2023 - julio 2023',
        icon: '',
      },
      {
        name: 'curso 2',
        date: 'mayo 2023 - julio 2023',
        icon: '',
      },
      {
        name: 'curso 3',
        date: 'mayo 2023 - julio 2023',
        icon: '',
      },
      {
        name: 'curso 4',
        date: 'mayo 2023 - julio 2023',
        icon: '',
      },
      {
        name: 'curso 5',
        date: 'mayo 2023 - julio 2023',
        icon: '',
      },
    ],
  }
}

const projectText = {
  en: {
    title: 'projects',
    description: 'This is the small description',
    projects: [
      {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1.",
        img: img1,
        type: 'type',
        location: 'location',
        details: [
          {
            year: '2023',
            customer: 'customer name',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2.",
        img: img2,
        type: 'type',
        location: 'location',
        details: [
          {
            year: '2023',
            customer: 'customer name',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 3",
        description: "Descripción del proyecto 3.",
        img: img3,
        type: 'type',
        location: 'location',
        details: [
          {
            year: '2023',
            customer: 'customer name',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 4",
        description: "Descripción del proyecto 4.",
        img: img4,
        type: 'type',
        location: 'location',
        details: [
          {
            year: '2023',
            customer: 'customer name',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 5",
        description: "Descripción del proyecto 5.",
        img: img5,
        type: 'type',
        location: 'location',
        details: [
          {
            year: '2023',
            customer: 'customer name',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
    ],
  },
  es: {
    title: 'proyectos',
    description: 'esta es una perqueña descripción',
    projects: [
      {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1.",
        img: img1,
        type: 'tipo',
        location: 'ubicación',
        details: [
          {
            year: '2023',
            customer: 'nombre de cliente',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 2",
        description: "Descripción del proyecto 2.",
        img: img2,
        type: 'tipo',
        location: 'ubicación',
        details: [
          {
            year: '2023',
            customer: 'nombre de cliente',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 3",
        description: "Descripción del proyecto 3.",
        img: img3,
        type: 'tipo',
        location: 'ubicación',
        details: [
          {
            year: '2023',
            customer: 'nombre de cliente',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 4",
        description: "Descripción del proyecto 4.",
        img: img4,
        type: 'tipo',
        location: 'ubicación',
        details: [
          {
            year: '2023',
            customer: 'nombre de cliente',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
      {
        title: "Proyecto 5",
        description: "Descripción del proyecto 5.",
        img: img5,
        type: 'tipo',
        location: 'ubicación',
        details: [
          {
            year: '2023',
            customer: 'nombre de cliente',
            'built-up-area': 2700,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos doloremque modi laborum, voluptatibus fugit molestias necessitatibus molestiae maiores quisquam omnis error a cupiditate alias optio nihil nemo expedita vero repellendus?'
          },
        ],
      },
    ],
  },
}

export { navLinks, lastProjects, homeText, aboutText, projectText }