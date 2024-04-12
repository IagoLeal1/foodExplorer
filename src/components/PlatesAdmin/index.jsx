/* eslint-disable react/prop-types */
import CardUser from '../CardUserAdmin';
import { CardPlates, Container } from './styles';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function PlatesAdmin({
  title,
  plateName1st,
  plateName2nd,
  plateName3rd,
  plateName4th,
}) {
  return (
    <Container>
      <h2>{title}</h2>
      <CardPlates>
        <Swiper
          breakpoints={{ 1025: {
            width: 1025,
            slidesPerView: 3,
          }}}
          spaceBetween={0}
          slidesPerView={1.75}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          <SwiperSlide>
            <CardUser
              plateImage={`../../src/assets/${plateName1st}.png`}
              plateName={plateName1st}
              platePrice={'R$ 49,90'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardUser
              plateImage={`../../src/assets/${plateName2nd}.png`}
              plateName={plateName2nd}
              platePrice={'R$ 49,90'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardUser
              plateImage={`../../src/assets/${plateName3rd}.png`}
              plateName={plateName3rd}
              platePrice={'R$ 49,90'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardUser
              plateImage={`../../src/assets/${plateName4th}.png`}
              plateName={plateName4th}
              platePrice={'R$ 49,90'}
            />
          </SwiperSlide>
        </Swiper>
      </CardPlates>
    </Container>
  );
}
