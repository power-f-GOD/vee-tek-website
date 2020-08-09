import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';

const SustainabilityStrategy = () => {
  return (
    <Box className='SustainabilityStrategy include-page-header fade-in'>
      <Row as='h1' className='page-title px-1'>
        <Box className='before'>
          <picture>
            <source srcSet='/images/sustainablity.webp' type='image/webp' />
            <img
              src='/images/sustainablity.jpg'
              alt={'/images/sustainablity.jpg'.split('/').slice(-1)[0]}
            />
          </picture>
        </Box>
        Sustainability Strategy
        <Box className='after' />
      </Row>
      <Container className='mb-5'>
        <Row className='flex-column mx-0'>
          <Col className='d-flex p-0'>
            <Col as='p' className='text-justify p-0'>
              For us at Vee-Tek Group, sustainability is one of our key values.
              Our understanding of sustainability encompasses responsible
              manufacturing practices, welfare of our community members, and
              innovation to boost Nigeria’s development capacity. One of the
              sustainability frameworks undergirding our efforts is the UN SDGs,
              through which we commit to tackling climate change, promoting
              responsible consumption and production, enabling clean water and
              sanitation for all and sustaining rural development and resilient
              infrastructure in Nigeria and beyond.
            </Col>
          </Col>
          {/* <Col className='d-flex'></Col> */}
        </Row>
        <Row className='flex-column mx-0'>
          <Col md={7} className='d-flex p-0'></Col>
          <Col md={5} className='d-flex'></Col>
        </Row>
        <Row className='flex-column mx-0'>
          <Col md={7} className='d-flex p-0'></Col>
          <Col md={5} className='d-flex'></Col>
        </Row>
        <Row className='flex-column mx-0'>
          <Col md={7} className='d-flex p-0'></Col>
          <Col md={5} className='d-flex'></Col>
        </Row>
        <Row className='flex-column mx-0'>
          <Col md={7} className='d-flex p-0'></Col>
          <Col md={5} className='d-flex'></Col>
        </Row>

        <p className='text-justify'>
          We utilise other industry-specific frameworks such as The Nigerian
          Code of Corporate Governance and{' '}
          <a
            href='http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.458.6308&rep=rep1&type=pdf)'
            target='_blank'
            rel='noopener noreferrer'>
            The Natural Step (TNS) framework
          </a>
          which make practical recommendations for companies to navigate towards
          sustainable development through incremental decisions. Under the TNS
          recommendations, we work to increase our energy efficiency and use of
          renewable energy sources, to adopt a{' '}
          <a
            href='https://www.nap.edu/read/4982/chapter/4#39'
            target='_blank'
            rel='noopener noreferrer'>
            closed-loop system
          </a>{' '}
          of industry waste management, and to raise awareness about sustainable
          development across both manufacturing and engineering service
          industries.{' '}
        </p>
        <p className='text-justify'>
          {' '}
          While we have a duty to be profitable for our employees and the
          Nigerian economy, we also take pride in our responsibility to building
          a sustainable and resilient future. We fulfil this responsibility
          through our considered impact on our customers, our employees, our
          community and the environment.
        </p>
        <h3>Impact on our customers: Water and Power distribution</h3>
        <p className='text-justify'>
          Electricity, water and sanitation are at the core of sustainable
          development needs and the range of services and products we offer
          across our two companies contribute to improving livelihoods, poverty
          reduction, economic growth and environmental sustainability.
        </p>
        <p className='text-justify'>
          We have been committed to delivering quality and innovation to our
          clients and customers for 29 years and counting.
        </p>
        <h3>Impact on our employees: Welfare</h3>

        <p className='text-justify'>
          We consider human resources to be the most valuable resource in our
          business and so we are committed to developing our talents across both
          our companies. Through the work we do and our supply chains, we create
          decent jobs to enable workers make sustainable livelihoods for
          themselves.
        </p>
        <p className='text-justify'>
          We listen to our employees on their personal, occupational and
          developmental needs and work with them to source, design and implement
          programs and utilities to see to their development and safety.
        </p>

        <h3>Impact on the community: Service</h3>

        <p className='text-justify'>
          Industrialization is a driver of development as industry generates
          jobs and income, thereby contributing to poverty eradication,
          empowering communities and addressing other development goals. In line
          with the 9th SDG, we work to build resilient electrical
          infrastructure, foster innovation and promote sustainable
          industrialization.
        </p>
        <p className='text-justify'>
          In a world where about{' '}
          <a
            href='https://sdgs.gov.ng/goals/infrastructure-industrialization/'
            target='_blank'
            rel='noopener noreferrer'>
            2.6 billion people{' '}
          </a>{' '}
          in the developing world are facing difficulties in accessing
          electricity full time and{' '}
          <a
            href='https://sdgs.gov.ng/goals/infrastructure-industrialization/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            800 million people{' '}
          </a>
          lack access to water, both of our companies are building capacity for
          communities around Nigeria and beyond to live easier, safer and
          healthier lives.
        </p>

        <p className='text-justify'>
          We take special pride in our various rural electrification projects
          that have served over 80 communities across Nigeria. Sustainable
          energy transforms lives and economies and we are doing our part to
          drive this transformation.
        </p>

        <h3>Impact on the environment: Less Waste, More Innovation</h3>

        <p className='text-justify'>
          Here at Vee-Tek we believe in the climate crisis and recognise the{' '}
          <a
            href='https://www.files.ethz.ch/isn/136704/PAPER220.pdf'
            target='_blank'
            rel='noopener noreferrer'>
            disproportionate negative consequences climate change has on poorer
            countries{' '}
          </a>
          of the world. We commit to doing our part to tackling the climate
          crisis by reducing waste and environmental pollution in our production
          cycle.
        </p>

        <p className='text-justify'>
          The issue of environmental pollution is particularly pertinent to our
          plastics company due to the vicious connection polymers have with
          global warming and environment pollution. However, we live in an
          imperfect world where plastics also offer numerous durable and
          affordable tools and solutions for sustainable and improved
          livelihoods. Examples of plastic use for sustainable living can be
          found in the waste, pressure and conduit pipes (and fittings) which we
          manufacture to enable the every-day functioning of buildings we need
          to live and work in.
        </p>

        <p className='text-justify'>
          PVC pipes’ quality of low-carbon content, exceptional durability and
          corrosion resistance lead to better water conservation and energy
          conservation and its environmental footprint is far smaller than
          competing materials. PVC pipes are also easily recyclable and, in our
          factory, we reuse and recycle all our materials that do not make it to
          sales. We also use 100% recyclable cardboard for our fittings
          packaging and no packaging for our pipes.
        </p>

        <p className='text-justify'>
          Beyond our plastics, our Research and Development department,
          currently run by Dr Obiageli Abba as an extension of her doctoral
          research, focuses on developing biogas as a renewable energy source
          for power generation that could be used for our factory operations.
        </p>
        <br />

        <p className='text-justify'>
          We believe that companies can make a positive impact in their
          communities and society at large and commit to acting on that belief.
        </p>
      </Container>
    </Box>
  );
};

export default SustainabilityStrategy;
