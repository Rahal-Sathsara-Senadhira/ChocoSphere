import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import HomeAbout from '../../components/About/HomeAbout'
import TextLoop from '../../components/TextLoop/TextLoop'
import ExplorProducts from '../../components/ExplorProducts/ExplorProducts'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {

const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <HomeAbout/>
      <TextLoop/>
      <ExplorProducts category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home