'use client';

import { FC, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import { TransferSwiperItem } from './TransferSwiperItem';
import { transferList } from '@/data/transferList';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import '@/styles/components/Swiper.scss';

export const TransferSwiper: FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <Swiper
      onSlideChange={() => swiperRef.current?.update()}
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      onSwiper={(swiperInstance) => (swiperRef.current = swiperInstance)}
    >
      {transferList.map((item) => (
        <SwiperSlide key={item.id}>
          <TransferSwiperItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
