'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { useGetStore } from '@/store/store';
import Link from 'next/link';

export default function SwiperCard() {
    const [swiperRef, setSwiperRef] = useState(null)

    let { getData, fullUsers } = useGetStore()

    useEffect(() => { getData() }, [])


    return (
        <>
            <Swiper
                modules={[Virtual, Navigation, Pagination]}
                onSwiper={setSwiperRef}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                virtual
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {fullUsers.map((user, index) => (
                    <SwiperSlide key={user.id} virtualIndex={index}>
                        <Link href={`/${user.id}`}>
                            <div
                                className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-gray-400">
                                        {user.profilePic ? (
                                            <img
                                                src={user.profilePic}
                                                alt={user.personal.firstName}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-xl">👤</span>
                                        )}
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-800">{user.personal.firstName}</h2>
                                        <p className="text-sm text-gray-500">{user.personal.email}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
