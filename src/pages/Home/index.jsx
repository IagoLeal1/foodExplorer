import { Banner, Container, CardPlates, CarrouselContainer } from './styles';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import { useEffect, useState } from 'react';
import CardUser from '../../components/CardUser';

import { api } from '../../services/api';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export function Home() {

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
          <Swiper
            breakpoints={{
              1025: {
                width: 1025,
                slidesPerView: 3,
              },
            }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1.75}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {searchResultsPlate.map((plates) => (
              <SwiperSlide key={plates.id}>
                <CardUser
                  data={plates.id}
                  plateImage={`../../src/assets/${plates.title}.png`}
                  plateName={plates.title}
                  platePrice={plates.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardPlates>
      </CarrouselContainer>

      <CarrouselContainer>
        <h2>Sobremesas</h2>

        <CardPlates>
          <Swiper
            breakpoints={{
              1025: {
                width: 1025,
                slidesPerView: 3,
              },
            }}
            spaceBetween={0}
            slidesPerView={1.75}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {searchResultsDessert.map((dessert) => (
              <SwiperSlide key={dessert.id}>
                <CardUser
                  plateImage={`../../src/assets/${dessert.title}.png`}
                  plateName={dessert.title}
                  platePrice={dessert.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardPlates>
      </CarrouselContainer>

      <CarrouselContainer>
        <h2>Bebidas</h2>

        <CardPlates>
          <Swiper
            breakpoints={{
              1025: {
                width: 1025,
                slidesPerView: 3,
              },
            }}
            spaceBetween={0}
            slidesPerView={1.75}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {searchResultsDrink.map((drinks) => (
              <SwiperSlide key={drinks.id}>
                <CardUser
                  plateImage={`../../src/assets/${drinks.title}.png`}
                  plateName={drinks.title}
                  platePrice={drinks.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </CardPlates>
      </CarrouselContainer>
      
      <Footer />
    </Container>
  );
}
