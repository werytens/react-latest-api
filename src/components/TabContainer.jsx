import { useDeferredValue, useEffect, useState, useTransition } from 'react';
import axios from 'axios'

function TabContainer() {
  const [isPending, startTransition] = useTransition();
  const [dataTwo, setData] = useState([]);
  const [value, setValue] = useState();


  useEffect(() => {
    const getData = async () => {
      let res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=1000');

      setData(res.data)
    }
    getData();
  }, []);

  useEffect(() => {
    // startTransition(() => {setData(dataTwo.reverse())})
    setData(dataTwo.reverse());
  }, [value])

  const textInput = (e) => {
    setValue(e.target.value);
  }

  const values = useDeferredValue(dataTwo);

  return (
    <div>
      <div>{String(isPending)}</div>
      <input type="text" onChange={textInput} />
      <br />
      <br />
      <br />

      <p style={{color: 'black'}}>{values?.map((item) => <>{item.title}</>)}</p>
    </div>
  )
}

export default TabContainer;