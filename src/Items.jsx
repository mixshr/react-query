import SingleItem from './SingleItem';
import {useQuery} from "@tanstack/react-query";
import customFetch from "./utils.js";
const Items = ({ items }) => {
  const {isLoading, data, error, isError} = useQuery({
    queryKey: ['tasks'], queryFn: async () => {
      const {data} = await customFetch.get('/')
      return data;
    }
  });

  if (isLoading) {
    return <p style={{margin:'1rem'}}>Loading...</p>
  }

  if (isError) {
    return <p style={{margin:'1rem'}}>Error...</p>
  }
  return (
    <div className='items'>
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
