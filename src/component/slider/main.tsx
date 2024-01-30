import React, { useEffect, useState } from "react";
import { Title, Text, Slider, Item, Tool } from "./parts"



const SliderComponent: React.FC = () => {
    
    const [ activeItem, setActiveItem ] = useState(0);
    useEffect(() => {
      console.log('activeItem', activeItem)
    }, [activeItem]);
    
    return (
        <Slider>
            <Tool onClick={() =>{if (activeItem > 0 ) setActiveItem(activeItem - 1)} }>prev</Tool>
            {Data.map((currentValue, index) => <Item key={currentValue.name} multiplier={computeMultiplier(activeItem, index)}>
                <Title>{currentValue.name}</Title>
                <Text>{currentValue.description}</Text>
            </Item>)}
            <Tool onClick={() => {if (activeItem < Data.length - 1) setActiveItem(activeItem + 1)}}>next</Tool>
        </Slider>
    );
};

function computeMultiplier(activeItem:number, index:number) {
    if (activeItem === index) return 0 
    return activeItem > index ? -(activeItem - index) :  index - activeItem
}

interface Data {
    name: string;
    description: string;
}



//TEMP
const Data = [
    { name: 'UkKSg', description: 'ePUkKSgGVW hQwODmLWKora RSbqoAsZHrFv DzZLVXHbCzHc fHQvTsWAMdfF' },
    { name: 'LWKo', description: 'ePUkKGVDmLWKora RSbqoAsZHrFv DzZLVXHbCzHc fHQvTsWAMdfF' },
    { name: 'QwODm', description: 'ePUkKSbW hQwODmLWKooAsZHrFv DzZLVXHbCzHc fHQvTsWAMdfF' },
    { name: 'LWKor', description: 'ePUkKSgGVGbW hQwODmLWKora RSbqoAsZHrFv DzZLVXHbCzHc fHQvTsWAMdfF' },
    { name: 'sZH', description: 'ePUkKSgGVGbW hQDmLWKora RSbqrFv DzZLbCQvTsWAMdfF' },
    { name: 'sZHrFv', description: 'ePUkKSbW hQwODmLWKora RSbqoAsZHrFv DzZLVCzHc fHQvTsWAMdfF' },
    { name: 'RSbqoA', description: 'ePUkKSgGVGbW hQwOKora RSbqoAsZHrFv DzZLCzHc fHQvTsWAMdfF' },
]

export default SliderComponent;
