// import movieService from "../../service/moviesServie"
// import { useQuery } from "@tanstack/react-query"
// import Spiner from "../spiner/Spiner"
// import VideoCard from "../video-card/VideoCard"


// const VideosSection = ({ id }) => {
//     const { data, isLoading } = useQuery({
//         queryKey: ['videos'],
//         queryFn: () => movieService.fetchMovieTrailers(id),
//         select: (data) => data.results
//     })

//     if (isLoading) {
//         return <Spiner />
//     }
//     console.log(data);


//     return (
//         <div className="app-container">

//             <h2 className="">
//                 Трейлеры
//             </h2>
//             <div className='flex gap-[20px]'>
//                 {data.length === 0 ? <h2> Трейлер не найден </h2> : (
//                     <>
//                         <VideoCard videoKey={data[0].key} />
//                         <VideoCard videoKey={data[0].key} />
//                         <VideoCard videoKey={data[0].key} />
//                     </>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default VideosSection


import movieService from "../../service/moviesServie"
import { useQuery } from "@tanstack/react-query"
import Spiner from "../spiner/Spiner"
import VideoCard from "../video-card/VideoCard"

// Импортируем Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const VideosSection = ({ id }) => {
    const { data, isLoading } = useQuery({
        queryKey: ['videos'],
        queryFn: () => movieService.fetchMovieTrailers(id),
        select: (data) => data.results
    })

    if (isLoading) {
        return <Spiner />
    }

    const titles = ["Русский трейлер", "Тизер", "HD трейлер"]

    return (
        <div className="app-container">
            <h2 className="section-title">Трейлеры</h2>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="trailer-swiper"
            >
                {data.length === 0 ? (
                    <h2>Трейлер не найден</h2>
                ) : (
                    data.slice(0, 3).map((video, index) => (
                        <SwiperSlide key={video.id} className="video-slide">
                            <VideoCard videoKey={video.key} />
                            <p className="video-title">{titles[index]}</p>
                        </SwiperSlide>
                    ))
                )}
            </Swiper>
        </div>
    )
}

export default VideosSection
