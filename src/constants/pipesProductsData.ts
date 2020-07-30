export interface ProductProps {
  name: string;
  bannerUrl: string;
  desc: string;
  children: { name: string; imageUrl: string; desc: string }[];
}

const baseWastesUrl = '/images/products/pipes/waste/wastes';
const baseConduitsUrl = '/images/products/pipes/conduit/conduits';
const basePressuresUrl = '/images/products/pipes/pressure/pressures';

const wastesImageUrls: string[] = [
  `${baseWastesUrl}-160mm-blue.jpg`,
  `${baseWastesUrl}-50mm.jpg`,
  `${baseWastesUrl}-50mm-2.jpg`,
  `${baseWastesUrl}-160mm-black.jpg`,
  `${baseWastesUrl}-specification.png`
];

const conduitsImageUrls: string[] = [
  `${baseConduitsUrl}.jpg`,
  `${baseConduitsUrl}-specification.png`
];

const pressuresImageUrls: string[] = [
  `${basePressuresUrl}-200mm.jpg`,
  `${basePressuresUrl}-160mm.jpg`,
  `${basePressuresUrl}-160mm-2.jpg`,
  `${basePressuresUrl}-specification.png`
];

export const pipeProducts: ProductProps[] = [
  {
    name: 'Waste Pipes',
    bannerUrl: `${baseWastesUrl}-160mm-blue.jpg`,
    desc: 'Waste pipes - 160mm blue ...',
    children: wastesImageUrls.map((url) => {
      return {
        name: 'Waste Pipes',
        imageUrl: url,
        get desc() {
          return (
            'Waste pipes - ' + this.imageUrl.split(/-|\./).slice(1, -1).join(' ')
          );
        }
      };
    })
  },
  {
    name: 'Conduit Pipes',
    bannerUrl: `${baseConduitsUrl}.jpg`,
    desc: 'Conduit pipes',
    children: conduitsImageUrls.map((url) => {
      return {
        name: 'Conduit Pipes',
        imageUrl: url,
        get desc() {
          return (
            'Conduit pipes - ' +
            this.imageUrl.split(/-|\./).slice(1, -1).join(' ')
          );
        }
      };
    })
  },
  {
    name: 'Pressure Pipes',
    bannerUrl: `${basePressuresUrl}-200mm.jpg`,
    desc: 'Pressure pipes - 200mm ...',
    children: pressuresImageUrls.map((url) => {
      return {
        name: 'Pressure Pipes',
        imageUrl: url,
        get desc() {
          return (
            'Pressure pipes - ' +
            this.imageUrl.split(/-|\./).slice(1, -1).join(' ')
          );
        }
      };
    })
  }
];
