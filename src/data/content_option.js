import pokemon from '../assets/pokemon.png';
import join from '../assets/joinIn.png';
import grill from '../assets/grill.png';
import notes from '../assets/notes.png'

const meta = {
    title: "Marshall Baccari"
};



const dataportfolio = [{
        img: pokemon,
        description: "I choose you (in development)",
        link: "https://i-choose-you-inator.herokuapp.com/",
        github:"https://github.com/cavazosdotcom/i-choose-you"
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
