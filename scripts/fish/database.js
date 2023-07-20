const database = {
  fish: [
    {
      image:
        "https://www.wetspottropicalfish.com/wp-content/uploads/2021/05/p3327922031-3.jpg",
      species: "Jaguar Catfish",
      length: 10,
      name: "Jojo the Cat",
      location: "Brazil",
      food: "Catfish pellets",
    },
    {
      image:
        "https://www.fishlaboratory.com/wp-content/uploads/2022/05/clown-loach.jpeg",
      species: "Clown Loach",
      length: 12,
      name: "Crusty",
      location: "Indonesia",
      food: "Worms",
    },
    {
      image:
        "https://www.fishlaboratory.com/wp-content/uploads/2022/05/clown-loach.jpeg",
      species: "Clown Loach",
      length: 12,
      name: "Crusty",
      location: "Indonesia",
      food: "Worms",
    },
    {
      image:
        "https://naturalenvironmentaquatix.com/cdn/shop/products/E3F531B3-DEB7-4714-812A-03D05B11FE8D.jpg?v=1617823222",
      species: "African Lungfish",
      length: 40,
      name: "Riri",
      location: "West Africa",
      food: "Small fish and mollusks",
    },
    {
      image:
        "//i0.wp.com/exoticfishshop.net/wp-content/uploads/2019/05/exoticfishshop.com-synodontis-flavitaeniata-01.jpg?fit=810%2C810&ssl=1",
      species: "Synodontis flavitaeniata catfish",
      length: 32,
      name: "Cici",
      location: "Kentucky",
      food: "Small fish and mollusks",
    },
    {
      image:
        "https://i0.wp.com/exoticfishshop.net/wp-content/uploads/2020/03/IMG_4998.jpg?fit=810%2C810&ssl=1",
      species: "Silver arowana",
      length: 22,
      name: "Titi",
      location: "Tennessee",
      food: "Small fish and mollusks",
    },
    {
      image:
        "https://i0.wp.com/exoticfishshop.net/wp-content/uploads/2019/06/exoticfishshop.com-high-shine-jardini-02.jpg?fit=810%2C810&ssl=1",
      species: "Golden Jardini arowana",
      length: 8,
      name: "Kiki",
      location: "Florida",
      food: "Small fish and mollusks",
    },
  ],
};

export const getFish = () => {
  return database.fish.map((fish) => ({ ...fish }));
};
