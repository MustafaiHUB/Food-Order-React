import React, { useContext } from 'react'
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealContext from '../../store/meal-context';
import MealItem from './MealItem/MealItem';
const AvailableMeals = () => {
    const mealsContext = useContext(MealContext);
    return (
        <section className={`${classes.meals}`}>
            <Card>
                <ul>
                    {mealsContext.meals.map(meal => {
                        return (
                            <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />
                        )
                    })}
                </ul>
            </Card>
        </section >
    )
}

export default AvailableMeals;