export interface ProductProps {
  name: string;
  bannerUrl: string;
  desc: string;
  siblings: { name: string; imageUrl: string; desc: string }[];
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
    siblings: wastesImageUrls.map((url) => {
      return {
        name: 'Waste Pipes',
        imageUrl: url,
        get desc() {
          return (
            'Waste pipes - ' +
            this.imageUrl.split(/-|\./).slice(1, -1).join(' ')
          );
        }
      };
    })
  },
  {
    name: 'Conduit Pipes',
    bannerUrl: `${baseConduitsUrl}.jpg`,
    desc: 'Conduit pipes',
    siblings: conduitsImageUrls.map((url) => {
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
    siblings: pressuresImageUrls.map((url) => {
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

const base4WayUrl = '/images/products/fittings/4_way/4_way';
const base4x4Url = '/images/products/fittings/4x4-box-fitting/4x4-box-fitting';
const base6x6Url = '/images/products/fittings/6x6-box-fitting/6x6-box-fitting';
const base6x9Url = '/images/products/fittings/6x9-box-fitting/6x9-box-fitting';
const baseLoopingUrl = '/images/products/fittings/looping/looping';
const baseMalebushUrl = '/images/products/fittings/malebush/malebush';
const baseStopendUrl = '/images/products/fittings/stopend/stopend';
const baseTeeWayUrl = '/images/products/fittings/tee_way/tee_way';
const baseThroughWayUrl = '/images/products/fittings/through_way/through_way';
const baseUWayUrl = '/images/products/fittings/u_way/u_way';
const baseYWayUrl = '/images/products/fittings/y_way/y_way';

const _4WayImageUrls: string[] = [`${base4WayUrl}.jpg`];

const _4x4ImageUrls: string[] = [
  `${base4x4Url}.jpg`,
  `${base4x4Url}-2.jpg`,
  `${base4x4Url}-3.jpg`
];

const _6x6ImageUrls: string[] = [
  `${base6x6Url}.jpg`,
  `${base6x6Url}-2.jpg`,
  `${base6x6Url}-3.jpg`
];

const _6x9ImageUrls: string[] = [`${base6x9Url}.jpg`, `${base6x9Url}-2.jpg`];

const loopingImageUrls: string[] = [
  `${baseLoopingUrl}.jpg`,
  `${baseLoopingUrl}-2.jpg`
];

const malebushImageUrls: string[] = [
  `${baseMalebushUrl}.jpg`,
  `${baseMalebushUrl}-2.jpg`
];

const stopendImageUrls: string[] = [
  `${baseStopendUrl}.jpg`,
  `${baseStopendUrl}-2.jpg`
];

const teeWayImageUrls: string[] = [`${baseTeeWayUrl}.jpg`];

const throughWayImageUrls: string[] = [`${baseThroughWayUrl}.jpg`];

const uWayImageUrls: string[] = [`${baseUWayUrl}.jpg`];

const yWayImageUrls: string[] = [`${baseYWayUrl}.jpg`];

const fittingsDataMaps: { [key: string]: string[] }[] = [
  {
    [base4WayUrl]: _4WayImageUrls
  },
  {
    [base4x4Url]: _4x4ImageUrls
  },
  {
    [base6x6Url]: _6x6ImageUrls
  },
  {
    [base6x9Url]: _6x9ImageUrls
  },
  {
    [baseLoopingUrl]: loopingImageUrls
  },
  {
    [baseMalebushUrl]: malebushImageUrls
  },
  {
    [baseStopendUrl]: stopendImageUrls
  },
  {
    [baseTeeWayUrl]: teeWayImageUrls
  },
  {
    [baseThroughWayUrl]: throughWayImageUrls
  },
  { [baseUWayUrl]: uWayImageUrls },
  { [baseYWayUrl]: yWayImageUrls }
];

export const fittingProducts: ProductProps[] = fittingsDataMaps.map((data) => {
  const [key, value] = Object.entries(data)[0];

  return {
    name: key.split('/').slice(-2, -1)[0].replace(/-/g, ' ').replace(/_/g, '-'),
    bannerUrl: value[0],
    get desc() {
      return this.name + (/fitting/.test(this.name) ? '' : ' fitting');
    },
    get siblings() {
      return value.map((imageUrl) => {
        return {
          name: this.name,
          imageUrl,
          get desc() {
            return imageUrl
              .split(/\.|\//)
              .slice(-2, -1)[0]
              .replace(/-/g, ' ')
              .replace(/_/g, '-');
          }
        };
      });
    }
  };
});
