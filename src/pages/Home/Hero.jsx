import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import 'swiper/css';

const Hero = () => {
    return (
        <div>
  <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
         <SwiperSlide>
        <div className='bg-yellow-50 flex flex-col md:flex-row justify-around items-center '>
            <img  src="https://i.ibb.co.com/jZ1K5TJj/Download-Calathea-Ornata-Plant-in-White-Pot-Home-Decor-Green-Leaves-for-free-removebg-preview.png" alt="" />
            <p className='text-4xl font-bold text-center'>Decorate your home with our <br /> beautiful plants</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>

        <div className='bg-green-50 flex flex-col md:flex-row justify-around items-center '>
            <img   src="https://i.ibb.co.com/xSJ9zX8P/4-FT-Fiddle-Leaf-Fig-Tree-Artificial-with-141-Leaves-Realistic-Faux-Ficus-Lyrata-Trees-in-9-White.png" alt="" />
            <p className='text-4xl font-bold text-center'>Bring life to your space with our <br /> stunning plant collection</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-blue-50 flex flex-col md:flex-row justify-around items-center '>
            <img  src="https://i.ibb.co.com/GQcb99Qw/download-3-removebg-preview.png" alt="" />
            <p className='text-4xl font-bold text-center'>Discover the beauty of nature with our <br /> exquisite plant selection</p>
        </div>
      </SwiperSlide>
     

    
    </Swiper>
        </div>
    );
};

export default Hero;