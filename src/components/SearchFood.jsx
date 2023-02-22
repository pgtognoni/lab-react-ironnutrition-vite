import React from 'react'
import { Input } from 'antd'

function SearchFood({ searchFood }) {
  return (
    <div>
        <label for='search'>Search
          <Input type='text' name='search' id='search' placeholder='Search' onChange={(e) => searchFood(e.target.value)} />
        </label>
    </div>
  )
}

export default SearchFood