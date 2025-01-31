

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from "swiper/modules";
import movieService from "../../service/moviesServie";
import Spiner from "../spiner/Spiner";



const CategorySection = () => {
    const [category, setCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        movieService.fetchMovieGeneralist()
            .then(({ genres }) => {
                setCategory(genres)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    if (isLoading) {
        return <Spiner />
    }

    return (
        <div className="pb-[150px] text-white bg-[#131416] " >
            <div className="app-container">
                <h3 className='text-[24px] mb-[15px]' >Смотрите фильмы, которые вам нравятся</h3>
                <p className=' w-[385px] mb-[60px] ' >На нашем сайте собрано огромное количество фильмов и сериалов на любой вкус</p>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={90}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2000
                        }}
                        modules={[Autoplay]}
                        className="mySwiper"
                    >
                        {category.map(item => {
                            return <SwiperSlide key={item.id}>
                                <div className="w-[310px] text-white flex pl-[90px] items-start justify-center flex-col h-[170px] rounded-[10px] bg-[#1A1A1A]">
                                    <h3 className="text-[20px]">{item.name}</h3>
                                    <p className="text-[#EF4234]">{item.id} k+ фильмов</p>
                                </div>
                            </SwiperSlide>
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CategorySection