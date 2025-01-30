import logo from './Logo_name.png'
import contact_icon from './right-up.png'
import moon from './moon.png'
import web from './web.png'
import close from './close.png'
import profile from './work.png'
import aboutme from './Aboutme.jpeg'
import topright from './top-right.png'
import download from './download.png'
import user from './user_1.png'
import user_2 from './user_2.png'
import coding from './coding.png'
import education from './graduation-cap.png'
import project from './project-management.png'
import Html from './HTML.png'
import css from './CSS.png'
import git from './git.png'
import js from './JS.png'
import node from './nodejs.png'
import python from './python.png'
import react from './react.png'
import mongodb from './mongodb.png'
import website_design from './website-design.png'
import QA from './QA.png'
import BA from './BA.png'
import fullstack from './full_stack.png'
import work_1 from './work_1.png'
import work_2 from './work_2.png'
import work_3 from './wor_3.png'
import work_4 from './work_4.png'
import send from './send.png'
import work1 from './work_1.1.jpg'
import work2 from './work_1.2.jpg'
import work3 from './work_1.3.jpg'
import work4 from './work_1.4.jpg'
import arrow_right from './right-arrow.png'
import arrow_submit from './right-arrow_white.png'
import mail from './mail.png'
import sun from './sun.png'
import logo_dark from './Logo_dark.png'
import dark_arrow from './dark_mode_right.png'
import dark_download from './download_dark.png'
import more from './more.png'
import dark_close from './close_dark.png'
import coding_dark from './coding_dark.png'
import cap_dark from './graduation-cap_dark.png'
import project_dark from './project-dark.png'
import dark_mail from './dark_mail.png'
import full_stack_dark from './full_stack_dark.png'
import QA_dark from './QA_dark.png'
import BA_dark from './BA_dark.png'
import website_dark from './website_dark.png'
export const assets={
logo,
contact_icon,
moon,
web,
close,
profile,
aboutme,
topright,
download,
user,
user_2,
coding,
education,
project,
Html,
css,
mongodb,
python,
js,
node,
git,
react,
QA,
BA,
website_design,
fullstack,
work_1,
work_2,
work_3,
work_4,
send,
work1,
work2,
work3,
work4,
arrow_right,
arrow_submit,
mail,
sun,
logo_dark,
dark_arrow,
dark_download,
more,
dark_close,
coding_dark,
cap_dark,
project_dark,
dark_mail,
full_stack_dark,
QA_dark,
BA_dark,
website_dark

}

export const infolist=[
    {
        icon:assets.coding,
        dark_icon:assets.coding_dark,
        title:'Languages',
        description:'HTML,CSS,Python,Node',
        descrition_2:'ReactJs,Javascript,Express,',
        description_3:'Nextjs'
    },
    {
        icon:assets.education,
        dark_icon:assets.cap_dark,
        title:'Education',
        description:'Full-Stack Python Deveplopment'
    },
    {
        icon:assets.project,
        dark_icon:assets.project_dark,
        title:'Projects',
        description:'Built and delivered more than 5 projects'
    }


];
export const tools=[
    assets.Html,assets.css,assets.git,assets.js,assets.mongodb,assets.node,assets.python,assets.react
]
export const servicesData=[
    {
        icon:assets.website_design,
        dark_icon:assets.website_dark,
        title:'Web Design',
        description:'Web design is the process of planning and arranging content on a website to make it accessible online. ',
        Link:'',
    },
    {
        icon:assets.QA,
        dark_icon:assets.QA_dark,
        title:'Quality assurance',
        description:'Quality assurance is a wide method that aims to prevent quality defects.',
        Link:'',
        
    },
    {
        icon:assets.BA,
        dark_icon:assets.BA_dark,
        title:' Business Analyst',
        description:'A business analyst is a professional who analyzes a business or organization to identify needs, improve efficiency, and recommend solutions.',
        Link:'',

    },
    {
        icon:assets.fullstack,
        dark_icon:assets.full_stack_dark,
        title:'Full Stack Python deveplor',
        description:'A full-stack web developer is someone who possesses the skills to create both front-end and back-end software.',
        Link:'',

    },
]

export const workData=[
    {
    id: 'vedic-spice',
    title:'Frontend project',
    description:'Website Design',
    bg_image:'/work_1.1.jpg' ,
   link: '/Frontend.html',
    },
    {
    title:'MERN project',
    description:' Website Design',
    bg_image:'/work_1.2.jpg' ,
    link:'/MERN.html'
    },
    {
    title:'Tkinter project',
    description:'Python app',
    bg_image:'/work_1.3.jpg',
    link:'./Weatherapp.html' 
    },
    {
    title:'Tkinter project',
    description:'Python app ',
    bg_image:'/work_1.4.jpg' ,
    link:'./Invoice.html'
    },

]

export const Project=[
    {
        id: 'vedic-spice',
        title: 'Vedic-Spice',
        description: 'A project focused on promoting traditional Vedic spices.',
        image: '/images/vedic-spice.jpg',
        techStack: ['React', 'Node.js', 'MongoDB'],
        link: '/projects/vedic-spice',
    }
]