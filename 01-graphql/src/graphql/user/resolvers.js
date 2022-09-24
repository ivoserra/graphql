
// this function receives the argumenst(parent, argumnent, context, info)
const users = async (_, __,{ getUsers }, info) => {
  const users = await getUsers();
  return users.json();
}


const user = async(_, {id}, {getUsers}) => {
  const response = await getUsers('/'+id);
  const user = await response.json();
  return user;
}


export const userResolvers = {
  Query: {
    user,
    users,
  },
};
