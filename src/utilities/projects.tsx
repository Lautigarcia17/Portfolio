import { Bmovies, GameRoom, Clinic, Airline, AirlineVideo, GeneralaVideo, Generala, Restaurapp, Portafolio, VeloShop } from '../assets/index'
import { Project } from '../types/project'
import { FaReact, FaAngular, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTypescript, SiExpress, SiMui, SiSupabase, SiIonic, SiSass } from 'react-icons/si'
import { TbBrandCSharp, TbBrandFirebase } from 'react-icons/tb'

export const projects: Project[] = [
    {
        title: 'VeloShop',
        text: 'Desarrollo de un e-commerce, permitiendole al admin cargar productos y ser comprados por clientes, atraves de Mercado Pago.',
        image: VeloShop,
        status: "En desarrollo",
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
        image: Bmovies,
        status: "Último desarrollo",
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
        image: Portafolio,
        status: "",
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
        image: Restaurapp,
        status: "",
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
        image: Clinic,
        status: "",
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
        image: GameRoom,
        status: "",
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
        image: Generala,
        status: "",
        icons: [
            { name: 'Angular', icon: <FaAngular color="#DD0031" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
            { name: 'Firebase', icon: <TbBrandFirebase color="#FFCA28" /> },
        ],
        github: "https://github.com/Lautigarcia17/PrimerParcial",
        page: "https://pp-labo4-3b6ac.web.app/home",
        video: GeneralaVideo
    },
    {
        title: 'Aerolínea',
        text: 'Sistema desarrollado para gestionar vuelos y reservas, permitiendo a los usuarios buscar, reservar y administrar sus viajes de forma eficiente.',
        image: Airline,
        status: "",
        icons: [
            { name: 'C#', icon: <TbBrandCSharp color="#512BD4" /> },
            { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <FaCss3Alt color="#1572B6" /> },
        ],
        github: "https://github.com/Lautigarcia17/SegundoParcial",
        page: "",
        video: AirlineVideo
    }
]
