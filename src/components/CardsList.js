import React from "react";
import Card from './Card';
import data from '../data/data';

export default function CardsList() {
  return (
    <section className='card--holder'>
      {data.map(location => <Card {...location} key={location.id} />)}
    </section>
  );
}
