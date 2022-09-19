import React from "react";
import Card from "../src/components/Card";
import { CARDS, TITLE } from "../src/components/Card/HomePage.constans";

interface ICard {
  title: string
  cards: any
}

function IndexPage(props: ICard): JSX.Element {
  const { title, cards } = props
  
  return (
      <div variant="container">
          <h1
            variant="heading.h3 underline.center underline.noMargin underline.thick"
            my={0}
            color="black"
            textTransform="uppercase"
            textAlign="center"
          >
            {title}
          </h1>
        
        <div variant="card.sizeCardBlock">
          {Card.length > 0 && cards.map((el: any) => <Card card={el} />)}
        </div>
      </div>
  );
}

export const getStaticProps = (context) => {
  return {
    props: {
      title: TITLE,
      cards: CARDS,
    },
  };
};

export default IndexPage;
