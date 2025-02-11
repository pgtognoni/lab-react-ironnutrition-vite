import { useState, useEffect } from 'react'
import './App.css'
import { Card, Row, Col, Divider, Input, Button } from 'antd'
import foodsJson from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'
import { v4 as uuidv4 }  from 'uuid'
import SearchFood from './components/SearchFood'

function App() {
  const data = foodsJson
  const [ foods, setFoods ] = useState([])
  const [ name, setName ] = useState('')
  const [ calories, setCalories ] = useState(0)
  const [ image, setImage ] = useState('')
  const [ servings, setServings ] = useState(0)
  const [ formActive, setFormActive ] = useState(false)

  useEffect(() => {
    const newArr = data.map(food => { return {...food, id: uuidv4()} })
    setFoods(newArr)
    
  }, [])

  const deleteFood = (id) => {
    const newArr = foods.filter(food => food.id!== id);
    setFoods(newArr);
  }

  const addFood = (e) => {
    e.preventDefault()
    setFoods([...foods, { name, calories, image, servings, id: uuidv4() }])
    setName('')
    setImage('')
    setCalories(0)
    setServings(0)
  }

  const searchFood = (name) => {
    const newArr = [...foodsJson]
    const arrFiltered = newArr.filter(food => food.name.toLowerCase().includes(name.toLowerCase()))
    setFoods(arrFiltered)
  }

  return (
    <div className="App">
      <div className="form-box">
      {formActive &&
        <AddFoodForm name={name} calories={calories} image={image} servings={servings}
            setName={setName} setCalories={setCalories} setImage={setImage} setServings={setServings} 
            addFood={addFood}
          />}
        <button className='show-form' onClick={() => setFormActive(!formActive)}>{formActive ? 'Hide form' : 'Add Food'}</button>
        <SearchFood searchFood={searchFood} />
      </div>
      <div className='food-list'>
        {foods.length > 0 
        ? foods.map((food) => 
          <FoodBox food={food} deleteFood={deleteFood} key={food.id}/>
          )
        : <h1>There's no food here!</h1>}
      </div>
    </div>
  )
}

export default App
