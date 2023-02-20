import { useGetAllPostQuery } from "./redux/services/apiCore";
function App() {
  let {data, isLoading, isFetching, error} = useGetAllPostQuery();
  console.log('data', data);
  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
