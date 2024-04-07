import { fetchData } from '../other/data';

const data = fetchData();

export const DataComp = () => {
  return (
    <>
      {data.read().map(item => <p key={item.id} >{item.title}</p>)}
    </>
  )
}