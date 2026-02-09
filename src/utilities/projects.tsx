import { Bmovies, GameRoom, Clinic, Airline, AirlineVideo, GeneralaVideo, Generala, Restaurapp, Portafolio, VeloShop } from '../assets/index'
import { Project } from '../types/project'
import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiExpress, SiMui, SiSupabase, SiIonic, SiSass, SiDotnet } from 'react-icons/si'
import { TbBrandCSharp, TbBrandFirebase } from 'react-icons/tb'

export const projects: Project[] = [
    {
        title: 'VeloShop',
        text: 'Desarrollo de un e-commerce, permitiendole al admin cargar productos y ser comprados por clientes, atraves de Mercado Pago.',
        textEn: 'Development of an e-commerce platform, allowing the admin to upload products and customers to purchase them through Mercado Pago.',
        image: VeloShop,
        status: "",
        statusEn: "In development",
        icons: [
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
            { name: 'Express', icon: <SiExpress color="#ffffff" /> },
            { name: 'Firebase', icon: <TbBrandFirebase color="#FFCA28" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        ],
        github: "",
        page: ""
    },
    {
        title: 'Bmovies',
        text: 'Desarrollado para registrar y organizar las películas vistas, permitiendo guardar reseñas personales y mantener un seguimiento de mi pasión por el cine.',
        textEn: 'Developed to register and organize watched movies, allowing to save personal reviews and keep track of my passion for cinema.',
        image: Bmovies,
        status: "Último desarrollo",
        statusEn: "Latest development",
        icons: [
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
            { name: 'Mui', icon: <SiMui color="#007FFF" /> },
            { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
        ],
        github: "https://github.com/Lautigarcia17/Bmovies",
        page: "https://bmoviesworld.vercel.app"
    },
    {
        title: 'Portafolio',
        text: 'Mi historia en el desarrollo',
        textEn: 'My story in development',
        image: Portafolio,
        status: "",
        statusEn: "",
        icons: [
            { name: 'React', icon: <FaReact color="#61DAFB" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
            { name: 'Mui', icon: <SiMui color="#007FFF" /> },
        ],
        github: "https://github.com/Lautigarcia17/Portfolio",
        page: "https://lautaroportafolio.vercel.app/"
    },
    {
        title: 'RestaurApp',
        text: 'Desarrollado para optimizar la experiencia en un restaurante, permitiendo gestionar pedidos, asignar mesas, interactuar con mozos y generar cuentas. Diseñado en equipo con enfoque en dispositivos móviles.',
        textEn: 'Developed to optimize the restaurant experience, allowing to manage orders, assign tables, interact with waiters and generate bills. Team designed with a focus on mobile devices.',
        image: Restaurapp,
        status: "",
        statusEn: "",
        icons: [
            { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'SCSS', icon: <SiSass color="#CC6699" /> },
            { name: 'Firebase', icon: <TbBrandFirebase color="#FFCA28" /> },
            { name: 'Ionic', icon: <SiIonic color="#3880FF" /> },
        ],
        github: "https://github.com/Lautigarcia17/Restaurapp",
        page: "https://pps-sp-2024.web.app/splash"
    },
    {
        title: 'Clínica online',
        text: 'Desarrollado para facilitar la gestión de citas médicas y el seguimiento de pacientes de forma virtual, pudiendo acceder a historiales y solicitar turnos.',
        textEn: 'Developed to facilitate the management of medical appointments and patient tracking virtually, being able to access medical records and request appointments.',
        image: Clinic,
        status: "",
        statusEn: "",
        icons: [
            { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
            { name: 'Firebase', icon: <TbBrandFirebase color="#FFCA28" /> },
        ],
        github: "https://github.com/Lautigarcia17/clinicaOnline",
        page: ""
    },
    {
        title: 'Sala de juegos',
        text: 'Desarrollado para ofrecer una experiencia de usuario interactiva y entretenida, donde se pueden jugar diversos juegos.',
        textEn: 'Developed to offer an interactive and entertaining user experience, where you can play various games.',
        image: GameRoom,
        status: "",
        statusEn: "",
        icons: [
            { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
            { name: 'Firebase', icon: <TbBrandFirebase color="#FFCA28" /> },
        ],
        github: "https://github.com/Lautigarcia17/Sala-de-juegos",
        page: ""
    },
    {
        title: 'La Generalá',
        text: 'Juego de dados desarrollado para ofrecer una experiencia de juego interactiva con mecánica de generala, donde los jugadores pueden competir por puntajes altos.',
        textEn: 'Dice game developed to offer an interactive gaming experience with generala mechanics, where players can compete for high scores.',
        image: Generala,
        status: "",
        statusEn: "",
        icons: [
            { name: 'C#', icon: <TbBrandCSharp color="#512BD4" /> },
            { name: '.NET', icon: <SiDotnet color="#512BD4" /> },
            { name: 'SQL', icon: <FaDatabase color="#F29111" /> },
        ],
        github: "https://github.com/Lautigarcia17/PrimerParcial",
        page: "",
        video: GeneralaVideo
    },
    {
        title: 'Aerolínea',
        text: 'Sistema desarrollado para gestionar vuelos y reservas, permitiendo a los usuarios buscar, reservar y administrar sus viajes de forma eficiente.',
        textEn: 'System developed to manage flights and reservations, allowing users to search, book and manage their trips efficiently.',
        image: Airline,
        status: "",
        statusEn: "",
        icons: [
            { name: 'C#', icon: <TbBrandCSharp color="#512BD4" /> },
            { name: '.NET', icon: <SiDotnet color="#512BD4" /> },
            { name: 'SQL', icon: <FaDatabase color="#F29111" /> },
        ],
        github: "https://github.com/Lautigarcia17/SegundoParcial",
        page: "",
        video: AirlineVideo
    }
]
