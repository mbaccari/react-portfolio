import pokemon from '../assets/pokemon.png';
import join from '../assets/joinIn.png';
import grill from '../assets/grill.png';
import discord from '../assets/discord.png'

const meta = {
    title: "Marshall Baccari"
};



const dataportfolio = [{
        // Name
        name: 'Renosance Bot',
        // Picture
        img: discord,
        // Subtitle
        sub: 'Discord rpg bot',
        // One sentence description
        description: "Discord bot for an in-chat role playing game",
        // Array of Technologies used (4)
        technologies: ['MongoDB', 'Mongoose', 'JavaScript', 'Discord.js'],
        // Link to deploy (if applicable)
        link: "https://discord.gg/SUtd8KkKdv"
        // Link to github (if applicable)
    },
    {
        name: 'I Choose You',
        img: pokemon,
        sub: 'Pokemon team builder',
        description: "Build your dream team for the generation 1 pokemon",
        technologies: ['JavaScript', 'React.js', 'MongoDB', 'Mongoose'],
        link: "https://i-choose-you-inator.herokuapp.com/",
        github:"https://github.com/cavazosdotcom/i-choose-you"
    },
    {
        name: 'Join In',
        img: join,
        sub: 'Peer challenging app',
        description: "Social Media app to propose challenges to friends and peers",
        technologies: ['Javascript', 'Node.js', 'Express.js', 'MySQL'],
        link: "https://join-in-app.herokuapp.com/signup",
        github:"https://github.com/kelseybrianne/full-stack-app"
    },
    {
        name: 'Grill',
        img: grill,
        sub: 'Find your perfect meal',
        description: "Grill: Food and friends",
        technologies: ['Javascript', 'HTML', 'CSS', 'Foundation'],
        link: "https://mbaccari.github.io/Grill/",
        github:"https://github.com/mbaccari/Grill"
    },
];

export {
    meta,
    dataportfolio
};
