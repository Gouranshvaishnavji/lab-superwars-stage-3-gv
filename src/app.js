// const PLAYERS = [
//     "Spiderman",
//     "Captain America",
//     "Wonderwoman",
//     "Popcorn",
//     "Gemwoman",
//     "Bolt",
//     "Antwoman",
//     "Mask",
//     "Tiger",
//     "Captain",
//     "Catwoman",
//     "Fish",
//     "Hulk",
//     "Ninja",
//     "Black Cat",
//     "Volverine",
//     "Thor",
//     "Slayer",
//     "Vader",
//     "Slingo"
// ];

// // initialize players with image and strength
// const initPlayers = (players) => {
//     let detailedPlayers = '';

//     // Instead of forloop use Map method
//     // Code here

//     return detailedPlayers;
// }

// // getting random strength
// const getRandomStrength = () => {
//     return Math.ceil(Math.random() * 100);
// }

// // Build player template
// const buildPlayers = (players, type) => {
//     let fragment = '';

//     // Instead of using for loop
//     // Use chaining of Array methods - filter, map and join
//     // Type your code here

//     return fragment;
// }

// // Display players in HTML
// const viewPlayers = (players) => {
//     document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
//     document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
// }


// window.onload = () => {
//     viewPlayers(initPlayers(PLAYERS));
// }
const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = players.map(function (players, i) {
      if (i % 2 == 0) {
        var type = "hero";
      } else {
        var type = "villain";
      }
      const data = {
        name: players,
        strength: getRandomStrength(),
        //I needed to learn it from some tools
        image: `images/super-${i + 1}.png`,
        type: type,
      };
      return data;
    });
    return detailedPlayers;
  };

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 101);
}

// Building player template
const buildPlayers = (players, type) => {
    let fragment = "";
//  chaining array methods: filter, map and join :- 
    const hero = players.filter(function (obj) {
      return obj.type === "hero";
    });
    const villain = players.filter(function (obj) {
      return obj.type === "villain";
    });
  
    if (type === "hero") {

      var char = hero.map(function (players) {
        let htmlFragment = `<div class="player">
        <img src="${players.image}" alt="">
        <div class="name">${players.name}</div>
        <div class="strength">${players.strength}</div>
      </div>`;
        // returning each innerHTML to frag
        return htmlFragment;
      });
      // Joining all the elements in frag into string
      fragment = char.join(" ");
    } else {
      // creating a innerHTML array of each player
//       <div class="player">
//    <img src="${players[i].image}">
//    <div class="name">${players[i].name}</div>
//    <div class="strength">${players[i].strength}</div>
// </div>
      var char = villain.map(function (players) {
        let htmlFragment = `<div class="player">
        <img src="${players.image}" alt="">
        <div class="name">${players.name}</div>
        <div class="strength">${players.strength}</div>
      </div>`;
        // returning each innerHTML to frag
        return htmlFragment;
      });
      // Joining all the elements in frag into string
      fragment = char.join(" ");
    }
    return fragment;
  };

// Display players in HTML
const viewPlayers = (players) => {
  const heroesHTML = buildPlayers(players, 'hero');
  const villainsHTML = buildPlayers(players, 'villain');

  document.getElementById('heroes').innerHTML = heroesHTML;
  document.getElementById('villains').innerHTML = villainsHTML;
};


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}