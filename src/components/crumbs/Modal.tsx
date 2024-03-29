import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MuiModal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import CloseIcon from '@material-ui/icons/Close';

import { ProductProps } from '../../constants/pipesProductsData';
import { transform } from '../../index';
import { delay } from '../../utils/timers';

interface ModalProps {
  open: boolean;
  contentComponent: React.FC<ModalContentComponentProps>;
  contentData?: any;
  modalOpenHandler: Function;
}

interface ModalContentComponentProps {
  data: any;
  willClose: boolean;
}

const Modal = (props: ModalProps) => {
  const {
    open,
    modalOpenHandler,
    contentComponent: Content,
    contentData: data
  } = props;
  const [willClose, setWillClose] = useState(false);

  const handleClose = () => {
    setWillClose(true);
    delay(900).then(() => {
      modalOpenHandler(false, data)();
    });
  };

  React.useEffect(() => {
    if (open) {
      setWillClose(false);
      document.querySelector('html')!.style.overflow = 'hidden';
    } else document.querySelector('html')!.style.overflow = 'auto';
  }, [open]);

  return (
    <MuiModal
      aria-labelledby='spring-modal-title'
      aria-describedby='spring-modal-description'
      className={`Modal ${
        willClose ? 'animate-close' : ''
      } d-flex justify-content-center align-content-center`}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      disableScrollLock
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}>
      <div className='d-flex justify-content-center align-content-center'>
        <IconButton
          edge='start'
          className='close-modal-button'
          color='inherit'
          onClick={handleClose}
          aria-label='close modal'>
          <CloseIcon fontSize='large' />
        </IconButton>
        <Content data={data} willClose={willClose} />
      </div>
    </MuiModal>
  );
};

export const ProductsModal = (props: {
  data: ProductProps['siblings'];
  willClose: boolean;
}) => {
  const { data: children, willClose } = props;
  const prodsLen = children.length;
  const [activeProd, setActiveProd] = React.useState<number>(0);
  const refs = Array(prodsLen)
    .fill(null)
    .map(() => React.createRef<any>());

  const handleProdSwitch = React.useCallback(
    (state: 'next' | 'prev') => () => {
      if (state === 'next') {
        setActiveProd((prev) => (prev < prodsLen - 1 ? prev + 1 : prev));
      } else {
        setActiveProd((prev) => (prev > 0 ? prev - 1 : prev));
      }
    },
    [prodsLen]
  );

  useEffect(() => {
    const activeProdEl = refs[activeProd]?.current;

    if (activeProdEl) {
      for (const ref of refs) {
        if (ref.current.classList.contains(activeProd)) {
          transform(ref.current, `translateX(-${activeProd * 100}%) scale(1)`);
        } else {
          transform(
            ref.current,
            `translateX(-${activeProd * 100}%) scale(0.7)`
          );
        }
      }

      if (willClose) {
        transform(activeProdEl, `translateX(-${activeProd * 100}%) scale(0.8)`);
      }
    }
  }, [activeProd, refs, willClose]);

  return (
    <Container className='ProductsModal m-0 p-0 d-inline-block'>
      <Row className='content-wrapper d-block flex-column align-items-center m-0'>
        <Box component='h5' className='product-name d-block mx-2'>
          {children[0].name}
        </Box>
        <Col className='product-view'>
          {children.map(({ name, imageUrl, desc }, i) => {
            return (
              <div
                className={`product-container ${
                  activeProd === i && !willClose ? 'active-prod' : ''
                } ${i} d-inline-block`}
                ref={refs[i]}
                key={i}>
                <Box className='product-image my-3 mx-2'>
                  <picture style={{ opacity: '0' }}>
                    <source
                      srcSet={imageUrl.replace(/jpe?g|png/, 'webp')}
                      type='image/webp'
                    />
                    <img
                      src={imageUrl}
                      alt={imageUrl.split('/').slice(-1)[0]}
                      onLoad={(e: any) => {
                        e.target.parentNode.style.opacity = '1';
                      }}
                    />
                  </picture>
                </Box>
                <Box component='p' className='product-desc mx-2'>
                  {desc}
                </Box>
              </div>
            );
          })}
        </Col>
        <Col className='modal-controls-container text-center'>
          <IconButton
            edge='start'
            className='prev-button mx-2'
            color='inherit'
            disabled={activeProd === 0}
            onClick={handleProdSwitch('prev')}
            aria-label='view previous product'>
            <NavigateBeforeIcon fontSize='large' />
          </IconButton>
          <IconButton
            edge='start'
            className='next-button mx-2'
            color='inherit'
            disabled={activeProd === prodsLen - 1}
            onClick={handleProdSwitch('next')}
            aria-label='view next product'>
            <NavigateNextIcon fontSize='large' />
          </IconButton>
          <Box className='num-indicator d-inline-block'>{`${
            activeProd + 1
          } / ${prodsLen}`}</Box>
        </Col>
      </Row>
    </Container>
  );
};

export default Modal;
