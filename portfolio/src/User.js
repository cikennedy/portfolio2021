import image from './assets/ckphoto.jpeg'

export default {
    pic: image,
    name: 'Chris Kennedy',
    titles: ['Software Engineer', 'Web Developer'],
    socialProfiles: {
        github: 'https://github.com/cikennedy',
        linkedin: 'https://www.linkedin.com/in/cikennedy/'
    },
    resumeLink: 'https://github.com/cikennedy/updated-portfolio/raw/main/assets/Resume.pdf',
    projects: [
        {
            image: 'https://github.com/cikennedy/workerbee/raw/main/assets/SignIn.png',
            title: 'Workerbee',
            description: 'A MERN stack application in development that exists to help pair chore-level laborers with those in need of help.',
            projectgithub: 'https://github.com/cikennedy/workerbee',
            projectdeployed: 'https://workerbeeapp.herokuapp.com/'
        },
        {
            image: 'https://tul.imgix.net/content/general/puzzle.jpg?auto=format,compress&w=1200&h=630&fit=crop',
            title: 'Camera Puzzle',
            description: 'A game that creates a jigsaw puzzle using the camera on a device. Uses HTML, JavaScript, MySQL, and PHP.',
            projectgithub: 'https://github.com/cikennedy/jigsaw-cam-game',
            projectdeployed: 'https://cikennedy.github.io/jigsaw-cam-game/'
        },
        {
            image: 'https://github.com/cikennedy/findmypet/raw/main/assets/Screenshot.png',
            title: 'Find My Pet',
            description: 'Application designed to help find lost pets. Utilizes a SQL database, JavaScript, Express, and Node.',
            projectgithub: 'https://github.com/cikennedy/findmypet',
            projectdeployed: 'https://findmymissingpet.herokuapp.com/dashboard'
        },
        {
            image: '',
            title: '',
            description: '',
            projectgithub: '',
            projectdeployed: ''
        },
        {
            image: '',
            title: '',
            description: '',
            projectgithub: '',
            projectdeployed: ''
        },
        {
            image: '',
            title: '',
            description: '',
            projectgithub: '',
            projectdeployed: ''
        }
    ],
    skills: {
        languages: [
            'JavaScript', 'HTML', 'CSS'
        ],
        fandls: [
            'React.js', 'Node.js', 'Git', 'MongoDB', 'MySQL', 'jQuery'
        ],
        deployment: [
            'Heroku', 'AWS'
        ]
    }
}