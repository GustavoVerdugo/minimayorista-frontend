import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css/bundle';

const BrandSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView='auto'
                breakpoints={{
                    // when window width is >= 640px
                    120: {
                        slidesPerView: 2
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    820: {
                        slidesPerView: 3
                    }
                }}
                freeMode={true}
                loop={true}
                autoplay={{ delay: 0, disableOnInteraction: false }}
                speed={3000}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                className='swiper-wrapper flex items-center'
            >
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center w-full h-full rounded-md'>
                        <img className='w-32' src='https://minimayorista.cl/assets/coca-cola.png.webp' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center w-full h-full rounded-md'>
                        <img className='w-32' src='https://minimayorista.cl/assets/minuto-verde.png.webp' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center w-full h-full rounded-md'>
                        <img className='w-32' src='https://minimayorista.cl/assets/soprole.png.webp' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col items-center justify-center w-full h-full rounded-md'>
                        <img className='w-32' src='https://minimayorista.cl/assets/super-cerdo.png.webp' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BrandSlider;