import React from "react";
import { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name:"ненужная вещь"}, 
        {id:1, value: 4, name:"ложка"}, 
        {id:2, value: 0, name:"вилка"},
        {id:3, value: 0, name:"тарелка"},
        {id:4, value: 0, name:"набор минималиста"},
    ]
    const [counters, setCounters] = useState(initialState)
    const handleDelete = (id) => {
        const newCounter = counters.filter(counter => counter.id !== id)
        setCounters(newCounter)
    }
    const handleReset = () => {
        setCounters(initialState) 
    }
    
    const handleIncrement = (id) => {
        const add = counters.map(counter => {
            if (counter.id === id) {
                counter.value++
            }
            return counter
        })
        setCounters(add)

    }

    const handleDecrement = (id) => {
        const take = counters.map(counter => {
            if (counter.id === id) {
                if (counter.value !== 0) {
                    counter.value--
                }
            }
            return counter
        })
        setCounters(take)

    }
    
        
        

    return (
        <div>
            {counters.map((counter) => (
            <Counter 
            key={counter.id} 
            {...counter} 
            OnIncrement={handleIncrement}
            OnDecrement={handleDecrement}
            onDelete={handleDelete} />
            ))}
        <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </div>
    )
}

export default CountersList;