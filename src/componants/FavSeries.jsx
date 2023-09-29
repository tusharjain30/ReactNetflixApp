import React from 'react';
import Card_details from '../series_array/Card_details';
import Amazon_series from '../series_array/Amazon_series';
import Netflix_series from '../series_array/Netflix_series';
import Card from './Card';

let FavSeries = (props) => {
let favSeries = props.text;
  if (favSeries === "NETFLIX"){
    return  Netflix_series.map((items) => {
        return <Card img = {items.img} text = {items.text} title = {items.title} link = {items.link} key = {items.id} />
      });
  }

  else if(favSeries === 'AMAZON'){
    return  Amazon_series.map((items) => {
        return <Card img = {items.img} text = {items.text} title = {items.title} link = {items.link} key = {items.id} />
      })
  }

  else{
     return Card_details.map((items) => {
        return <Card img = {items.img} text = {items.text} title = {items.title} link = {items.link} key = {items.id} />
      })    
  }
}

export default FavSeries;