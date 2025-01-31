



import { useState, useEffect, useContext } from "react";
import movieService from "../../service/moviesServie";
import Button from "../UI/Button/Button";
import Spiner from "../spiner/Spiner";
import { GENRES_CONTEXT } from "../../context/GenerContext";

const UpComing = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const { genres } = useContext(GENRES_CONTEXT);

    useEffect(() => {
        movieService.fetchMovieUpComing()
            .then(res => setMovie(res.results))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spiner />;
    }

    let imgUrl = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-[880px] h-[560px] bg-[#1A1A1A] text-white rounded-[10px] flex overflow-hidden shadow-lg relative p-5">

                <div className="w-[40%] h-full">
                    <img
                        src={imgUrl + movie[0].poster_path}
                        alt={movie[0].title}    
                        className="w-full h-full object-cover rounded-md"
                    />
                </div>

              
                <div className="w-[60%] flex flex-col justify-center px-6">
                    <h2 className="text-2xl font-bold flex items-center">
                        {movie[0].title}
                        <span className="ml-[20px] text-gray-400 text-lg">{movie[0].release_date.slice(0, 4)}</span>
                    </h2>

                   
                    <p className="flex gap-[10px] mt-2 text-red-500 font-medium">
                        {genres
                            .filter((item) => movie[0].genre_ids.includes(item.id))
                            .map((g) => (
                                <span key={g.id}>{g.name}</span>
                            ))}
                    </p>

                    <p className="mt-4 text-gray-300 line-clamp-3">{movie[0].overview}</p>

                    <div className="mt-4">
                        <Button className="py-[5px] px-[20px] bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition">
                            Смотреть
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComing;