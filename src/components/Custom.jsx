import { useFetch } from "./hooks/useFetch";

function Custom() {
  let url = "https://api.api-onepiece.com/v2/characters/en";
  //let url = "https://fakestore.com/products";
  // let url = "https://jsonplaceholder.typicode.com/users";
  //let url = "https://pokeapi.co/api/v2/pokemon/";
  let { data, isPending, error } = useFetch(url);

  return (
    <div>
      <h2>Custom</h2>
      <h3>IsPending: {JSON.stringify(isPending)}</h3>
      <h3>Error: {JSON.stringify(error)}</h3>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default Custom;
