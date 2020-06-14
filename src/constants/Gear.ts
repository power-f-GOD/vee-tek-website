const products = [
  {
    key: "one",
    product: "Pronutec",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididuntut `,
    images: ["/images/one.jpg", "/images/two.jpg", "/images/three.jpg"],
  },
  {
    key: "two",

    product: "Telergon",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididuntut.`,
    images: ["/images/two.jpg", "/images/three.jpg", "/images/one.jpg"],
  },
  {
    key: "three",
    product: "TBC",
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididuntut.`,
    images: ["/images/three.jpg", "/images/one.jpg", "/images/two.jpg"],
  },
];

const services = [
  {
    image: "/images/electric.png",
    title: "Eletrification Projects",
    desc: `At Vee-tek we undertake in Electrification Projects for our
    clients, serving both rural and Urban area, to increase access
    to electricity services for households, public educational
    institutions.`,
  },
  {
    image: "/images/injection.png",
    title: "Injection substation Building",
    desc: `We build and commission injection substation of various
    capacities, to suite varying needs.`,
  },
  {
    image: "/images/home.png",
    title: "House Installation Services",
    desc: `We undertake in house installation projects for Residential
    homes, Factories and Industries, Churches and different
    institutions with varying power needs.`,
  },
  {
    image: "/images/generator.png",
    title: "Generator Installation and Commisioning",
    desc: `We Install and commission generators
    of varying sizes and capacities, to suite different
    Power needs of our clients, ranging from Hotels,
    Churches, Factories, industries and Residential Homes.`,
  },
  {
    image: "/images/power.png",
    title: "Factory Installation",
    desc: `We conceive, design and construct major control systems,
    for a lot of Factories and manufacturing concerns across the country.`,
  },
];

export default { products, services };
