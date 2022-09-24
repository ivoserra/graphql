
const post = () => { 
  return { id: 1, title: 'My first post'} 
};


const posts = () => { 
  return [
  {id: 1, title: 'My first post'},
   {id: 2, title: 'My second post'}
  ] 
  };


export const postResolvers = {
  Query: {
    post,
    posts,
  },
  };

