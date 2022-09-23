import React from "react";
import Card from "../src/components/Card";
import { ICard } from "../src/components/Card/Card.type";
import { CARDS, TITLE } from "../src/components/Card/HomePage.constans";

interface IHomePage {
  title: string
  cards: ICard[]
}

function IndexPage(props: IHomePage): JSX.Element {
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
        
        <div variant="card.cardsBlock">
          {Card.length > 0 && cards.map((el: ICard) => <Card card={el} />)}
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
