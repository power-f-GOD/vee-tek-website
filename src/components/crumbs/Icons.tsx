import React from 'react';

export const PipesIcon = ({ url }: { url: string }) => {
  return (
    <div className='pipes-icon-container'>
      <picture>
        <source srcSet={`/images/icons/${url}.webp`} type='image/webp' />
        <img
          src={`/images/icons/${url}.png`}
          className='pipes-icon'
          alt={url}
        />
      </picture>
    </div>
  );
};

export const pipesIconsData: {
  url: string;
  desc: string;
}[] = [
  {
    url: 'water',
    desc: 'Waste water, drainage and boreholes'
  },
  {
    url: 'industry',
    desc: 'Industrial usage, disposal and sewage'
  },
  {
    url: 'irrigation',
    desc: 'Agriculture and irrigation'
  },
  {
    url: 'mining',
    desc: 'Mining and industrial oil pipelines'
  },
  {
    url: 'communication',
    desc: 'Electrical and communications'
  },
  {
    url: 'ducting',
    desc: 'Ducting'
  },
  {
    url: 'air-conditioning',
    desc: 'Air conditioning'
  },
  {
    url: 'heating',
    desc: 'Heating'
  },
  {
    url: 'compressed-air',
    desc: 'Compressed air'
  }
];
