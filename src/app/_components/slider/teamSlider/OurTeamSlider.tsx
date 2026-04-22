"use client"
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

function OurTeamSlider() {
    const t = useTranslations('AboutPage');
    const ourTeam = [
        {
            name: t("head16"),
            title: t("head17"),
            img: "/images/avatar.jpeg"
        },
        {
            name: t("head18"),
            title: t("head17"),
            img: "/images/avatar.jpeg"
        },
        {
            name: t("head19"),
            title: t("head20"),
            img: "/images/avatar.jpeg"
        },
        {
            name: t("head21"),
            title: t("head22"),
            img: "/images/avatar.jpeg"
        },
        {
            name: t("head16"),
            title: t("head17"),
            img: "/images/avatar.jpeg"
        },
        {
            name: t("head16"),
            title: t("head17"),
            img: "/images/avatar.jpeg"
        },
    ]
    return (
        <div>
            <Swiper
                spaceBetween={15}

                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    waitForTransition: false,
                }}
                loop={true}
                grabCursor={true}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper custom-swiper"
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
            >
                {ourTeam.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='grid gap-4 mt-10'>
                            <div className='bg-white rounded-lg flex flex-col justify-center items-center py-4'>
                                <Image src={item?.img} alt="Hero" width={200} height={100} objectFit=" object-cover rounded-lg" />
                                <h3 className='text-[#31487A] font-medium text-xl'>{item?.name} </h3>
                                <p>{item?.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default OurTeamSlider
