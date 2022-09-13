import { GetStaticPropsContext } from "next";

export const getPathFromContext = (context: GetStaticPropsContext) => {
    let path = '';
    if (context.params) {
      path = Object.values(context.params).join('/');
    }
    return path;
  }