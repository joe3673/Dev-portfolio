import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'User-Item Management System',
        description: "the User-Item Management System, a Java and SQL based application designed to help users keep track of their personal items. This project provides a comprehensive solution for managing and organizing items within user accounts. ",
        tools: ['Java', 'MySQL',  'Node.JS', 'Docker', 'API', 'Junit', 'HTML', 'CSS'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Alien Invader Exterminator',
        description: 'Alien Invader Exterminator is a turn-based battleship-style game developed using Java, JavaScript, HTML, CSS, Spring and AWS. It offers an engaging gaming experience where players defend Earth from invading aliens by strategically placing and firing weapons.',
        tools: ['Java, Node.Js, Spring Boot, Junit, Mock MVC, Mockito, HTML, CSS, Google Guava'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Unity Builders',
        description: 'Unity Builder is a powerful application designed to assist non-profit organizations in creating and organizing local events. With intuitive features and robust functionality, Unity Builder empowers non-profits to plan, manage, and promote events effectively.',
        tools: ['Java, Node.Js, Spring Boot, Junit, Mock MVC, Mockito, HTML, CSS, Google Guava'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'FANYS Website',
        description: "This website offers a comprehensive and interactive guide to New York State, featuring key facts about the state and its major cities. Built with raw HTML and CSS, the site incorporates elements of Bootstrap for responsive design and JavaScript for form validation.",
        tools: ['NextJS', 'Material UI', 'Html', 'CSS', "Email Authentication"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },