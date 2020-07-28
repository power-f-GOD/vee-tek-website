export interface ProductProps {
  imageUrl: string;
  name: string;
  desc: string;
  modalOpenHandler?: Function;
}

const products: ProductProps[] = [
  {
    name: 'Pronutec',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididuntut `,
    imageUrl: '/images/one.jpg'
  },
  {
    name: 'Telergon',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididuntut.`,
    imageUrl: '/images/two.jpg'
  },
  {
    name: 'TBC',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididuntut.`,
    imageUrl: '/images/three.jpg'
  }
];

export default products;
