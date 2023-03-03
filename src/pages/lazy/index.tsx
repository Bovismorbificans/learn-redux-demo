import { RootState } from '@/store';
import { useSelector } from 'react-redux';

export default function Lazy(props: any) {
  const counter = useSelector((state: RootState) => state.counter);
  console.log('counter', counter);
  console.log('lazy props', props);

  return <p>这里是lazy</p>;
}
