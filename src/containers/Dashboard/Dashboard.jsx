import React from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'

import axios from 'axios'


const Dashboard = () => {

  const handleSearch = (data) => {
    console.log('data: ', data)

    axios.get('https://instagram.com/web/search/topsearch/?context=blended&query=%23' + data.search)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <div>
        <h1>Hashtag Generator For Instagram</h1>
      </div>
      <div>
        <p>
          Feel exhausted from guessing hashtags each time you post on Facebook, Twitter, Youtube, or Instagram? Embrace the power of our Hashtag Generator - generate hashtags for social media automatically. This hashtag generator for instagram provides you with relevant hashtags by analyzing keyword.
        </p>
      </div>

      <div style={{ width: '100%' }}>
        <Searchbar onSubmitted={handleSearch} />
      </div>
    </div>
  )
}

export default Dashboard
