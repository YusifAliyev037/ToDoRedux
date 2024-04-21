import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fillUser, incrementByAmount } from './store/userSlice';
import Header from './Components/Header';
import Search from './Components/Search';
import Cards from './Components/Cards';
import { Box } from '@chakra-ui/react';

function App() {
  // const [count, setCount] = useState(0);

//   const count = useSelector((state)=>state.user_state.value)
//   const user = useSelector((state)=>state.user_state.user)
// console.log(user);
  const dispatch = useDispatch()

  const handleFillUser = () => {
    const res = {
      name:"John",
      age: 33
    };

    dispatch(fillUser(res))


  }

  const handleStoreCount = ()=>{
    const forDispatchObj = incrementByAmount(20)
    console.log(forDispatchObj);
    dispatch(forDispatchObj)
  }

  return (
    <>
    <Box>
      <Header />
      <Search />
      <Cards/>
    </Box>

    </>
  )
}

export default App
