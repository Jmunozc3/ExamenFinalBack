
export const typeDefs=`#graphql
  type Character{
    id:ID!,
    name:String!,
    episode:[Episode!]!
  }
  type Episode{
    id:ID!,
    name:String!,
    characters:[Character!]!
  }
  
  type Query {
  character(id:ID!):Character #Aqui devuelve un personaje dependiendo de su id
  charactersByIds(ids:[ID!]!):[Character] #Aqui devuelve un array donde hay personajes dependiendo de sus ids
  } 
`;
