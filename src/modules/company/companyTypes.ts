import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'


export const companyType = new GraphQLObjectType({
    name: 'Company',
    fields:{
        id:{
            type: GraphQLInt
        },
        name:{
            type: GraphQLString
        }
    }
})
