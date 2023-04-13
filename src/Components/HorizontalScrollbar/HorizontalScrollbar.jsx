import React from 'react';
import './HorizontalScrollbar.css';
import BodypartCard from '../BodypartCard/BodypartCard';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

const HorizontalScrollbar = ({data}) => {
  return (
    <ScrollMenu>
      {data.map(item=>{
        return (
          <BodypartCard key={item} bodyPart={item}/>
        )
      })}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar;
