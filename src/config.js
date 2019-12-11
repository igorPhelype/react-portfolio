export default {
    graphqlUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:5000/graphql' : 'https://martinafantini-api.herokuapp.com/graphql'
}