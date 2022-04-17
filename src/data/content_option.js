import construction from '../assets/construction.png';
import join from '../assets/joinIn.png';
import grill from '../assets/grill.png';
import notes from '../assets/notes.png'

const meta = {
    title: "Marshall Baccari"
};



const dataportfolio = [{
        img: construction,
        description: "I choose you (in development)",
        link: "#",
        github:""
    },
    {
        img: join,
        description: "Join in",
        link: "https://join-in-app.herokuapp.com/signup",
        github:"https://github.com/kelseybrianne/full-stack-app"
    },
    {
        img: grill,
        description: "Grill: Food and friends",
        link: "https://mbaccari.github.io/Grill/",
        github:"https://github.com/mbaccari/Grill"
    },
    {
        img: notes,
        description: "Note taker",
        link: "https://take-your-notes-dude.herokuapp.com/",
        github:"https://github.com/mbaccari/Note-Taker"
    }
];

export {
    meta,
    dataportfolio
};