
const user = () => {
  return {
    id: '0',
    userName:'Manu Doe',
  }
}

const users = () => {
  return [
    {
    id: '1',
    userName:'John Doe',
  },
  {
    id:'2',
    userName:'Ivo Doe',
  },
  {
    id:'3',
    userName:'Manuel Doe',
  },
]
}


export const userResolvers = {
  Query: {
    user,
    users,
  },
};
