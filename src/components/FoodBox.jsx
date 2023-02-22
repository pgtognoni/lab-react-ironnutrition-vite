import React from 'react'
import { Card, Col, Button } from 'antd';

function FoodBox(props) {

    const { food , deleteFood } = props
    const { name, calories, image, servings, id } = food;
    const imageSrc = image;

  return (
    <Col>
        <Card title={name} style={{ width: 230, margin: 10 }} className='food-card'>
            <div className='food-body'>
                <div className='food-image'>
                    <img src={imageSrc} alt={name} />
                </div>
                <p>Calories: {calories}</p>
                <p>Servings: <strong>{servings}</strong></p>
                <p><strong>Total Calories: {calories*servings}</strong> kcal</p>
                <Button type="primary" onClick={() => deleteFood(id)}>Delete</Button>
            </div>
        </Card>
    </Col>
  )
}

export default FoodBox