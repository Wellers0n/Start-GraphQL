import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt } from 'graphql'

const companhiaType = new GraphQLObjectType({
    name: 'Companhia',
    fields:{
        id:{
            type: GraphQLInt
        },
        nome:{
            type: GraphQLString
        }
    }
})

const schema =  new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'The root of all... queries',
        fields: () => ({
            companhia: {
                type: companhiaType,
                resolve: () => {
                    return {
                        id: 1,
                        nome: 'Apple'
                    }
                }
            }
        })
    })
})

export default schema