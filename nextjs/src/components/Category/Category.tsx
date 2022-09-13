import React from 'react'

interface ICategory {
    title: string
}

const Category = ({ title }: ICategory): JSX.Element => {
  return (
    <div variant='container' textAlign="center">
        <h1 variant="heading.h3 underline.center underline.noMargin underline.thick"               
            my={0}
            color="black"
            textTransform="uppercase">{title}</h1>
    </div>
  )
}

export default Category