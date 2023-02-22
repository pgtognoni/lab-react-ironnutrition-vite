import React from 'react'
import { Input } from 'antd'

function AddFoodForm(props) {

    const { name, calories, image, servings, setName, setCalories, setImage, setServings, addFood } = props;

  return (
    <div className='form-container'>
        <form onSubmit={(e) => addFood(e)}>
            <label for='name'>Name
                <Input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name' />
            </label>
            <label for='image'>Image
                <Input type='text' value={image} onChange={(e)=> setImage(e.target.value)} placeholder='Image url' />
            </label>
            <label for='calories'>Calories
                <Input type='number' min={0} value={calories} onChange={(e)=> setCalories(e.target.value)} placeholder='Calories' />
            </label>
            <label for='name'>Servings
                <Input type='number' min={0} value={servings} onChange={(e)=> setServings(e.target.value)} placeholder='Servings' />
            </label>
            <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default AddFoodForm