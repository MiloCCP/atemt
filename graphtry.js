import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);


const resolversRoot = {
    hello: () => {
      return 'Hello world!';
    },
  };


  graphql(schema, '{ hello }', resolversRoot).then((response) => {
    console.log(JSON.stringify(response.data));
  });