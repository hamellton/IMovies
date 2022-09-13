import React from 'react'
import { GetStaticProps } from 'next'
import { getPathFromContext } from '../../src/utils/common/getStaticContextProps'
import Category from '../../src/components/Category'

interface ICategoryPage {
    title: string
}

export default function CategoryPage({ title }: ICategoryPage) {
  return (
    <Category title={title}/>
  )
}

export const getServerSideProps: GetStaticProps = async (context) => {
    const fullPath = `/${getPathFromContext(context)}`;
    return {
      props: {
        title: fullPath.replace('/','')
      },
    }
  }

