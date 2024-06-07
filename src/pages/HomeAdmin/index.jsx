import { Banner, CardPlates, CarrouselContainer, Container, Arrow } from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/HeaderAdmin';

import { useEffect, useState } from 'react';
import CardUser from '../../components/CardUserAdmin';

import { api } from '../../services/api';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export function HomeAdmin() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mainPlates, setMainPlates] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchResultsPlate, setSearchResultsPlate] = useState([]);
  const [searchResultsDrink, setSearchResultsDrink] = useState([]);
  const [searchResultsDessert, setSearchResultsDessert] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const mainResponse = await api.get(`/getters/main`);
        const drinkResponse = await api.get(`/getters/drink`);
        const dessertResponse = await api.get(`/getters/dessert`);

        setMainPlates(mainResponse.data);
        setDrinks(drinkResponse.data);
        setDesserts(dessertResponse.data);

        setSearchResultsPlate(mainResponse.data);
        setSearchResultsDrink(drinkResponse.data);
        setSearchResultsDessert(dessertResponse.data);

        setLoading(false);
      } catch (error) {
        console.error('Error ao buscar dados:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(
    () => {
      if (!loading) {
        console.log(mainPlates);
        let resultsMainPlates = mainPlates.filter((plate) =>
          plate.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        let resultsDrinks = drinks.filter((drink) =>
          drink.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        let resultsDesserts = desserts.filter((dessert) =>
          dessert.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setSearchResultsPlate(resultsMainPlates);
        setSearchResultsDrink(resultsDrinks);
        setSearchResultsDessert(resultsDesserts);
      }
    },
    [searchTerm],
    mainPlates,
    drinks,
    desserts,
    loading
  );

  return (
    <Container>
      <Header />

      <Banner>
        <img
          className="BannerImg"
          src="../../src/assets/Banner.png"
          alt="imagem do banner"
        />
        <div className="BannerText">
          <strong>Sabores inigualáveis</strong>
          <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
        </div>
      </Banner>
      <CarrouselContainer>
        <h2>Refeição</h2>

        <CardPlates>
        <Arrow className="refPrev"><img src="../../src/assets/left.png" alt="" /></Arrow>
          <Swiper
          modules={[Navigation]}
            breakpoints={{
              1025: {
                width: 1025,
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.refPrev',
              nextEl: '.refNext' 
            }}
            spaceBetween={0}
            slidesPerView={1.75}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {searchResultsPlate.map((plates) => (
              <SwiperSlide key={plates.id}>
                <CardUser
                  key={plates.id}
                  plateImage={`../../src/assets/${plates.title}.png`}
                  plateName={plates.title}
                  platePrice={plates.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Arrow className="refNext"><img src="../../src/assets/right.png" alt="" /></Arrow>
        </CardPlates>
      </CarrouselContainer>

      <CarrouselContainer>
        <h2>Sobremesas</h2>

        <CardPlates>
        <Arrow className="desPrev"><img src="../../src/assets/left.png" alt="" /></Arrow>
          <Swiper
          modules={[Navigation]}
            breakpoints={{
              1025: {
                width: 1025,
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.desPrev',
              nextEl: '.desNext' 
            }}
            spaceBetween={0}
            slidesPerView={1.75}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {searchResultsDessert.map((dessert) => (
              <SwiperSlide key={dessert.id}>
                <CardUser
                  key={dessert.id}
                  plateImage={`../../src/assets/${dessert.title}.png`}
                  plateName={dessert.title}
                  platePrice={dessert.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        <Arrow className="desNext"><img src="../../src/assets/right.png" alt="" /></Arrow>
        </CardPlates>
      </CarrouselContainer>

      <CarrouselContainer>
        <h2>Bebidas</h2>
        <CardPlates>
        <Arrow className="drinkPrev"><img src="../../src/assets/left.png" alt="" /></Arrow>
          <Swiper
          modules={[Navigation]}
            breakpoints={{
              1025: {
                width: 1025,
                slidesPerView: 3,
              },
            }}
            navigation={{
              prevEl: '.drinkPrev',
              nextEl: '.drinkNext' 
            }}
            spaceBetween={0}
            slidesPerView={1.75}
            loop={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {searchResultsDrink.map((drinks) => (
              <SwiperSlide key={drinks.id}>
                <CardUser
                  key={drinks.id}
                  plateImage={`../../src/assets/${drinks.title}.png`}
                  plateName={drinks.title}
                  platePrice={drinks.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        <Arrow className="drinkNext"><img src="../../src/assets/right.png" alt="" /></Arrow>
        </CardPlates>
      </CarrouselContainer>

      <Footer />
    </Container>
  );
}
