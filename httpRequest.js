const controller = new AbortController();
const signal = controller.signal;
// cant refetch after abort

const fetchData = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        signal,
      }
    );
    console.log(await response.json());
  } catch (error) {
    console.log(error.message);
  }
};

const abortRequest = () => controller.abort();
