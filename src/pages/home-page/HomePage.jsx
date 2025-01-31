

import React from 'react'
import HeroSection from '../../components/hero/HeroSection'
import Search from '../../components/search/Search'
import CategorySection from '../../components/category/CategorySection'
import MovieFilter from '../../components/movie-filtre/MovieFilter'
import UpComing from '../../components/upcoming/UpComing'

export const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Search/>
      <CategorySection/>
      <MovieFilter/>
      <UpComing/>
    </div>
  )
}
