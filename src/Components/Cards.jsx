import React, { useEffect, useState } from 'react';
import { 
    Card,
    SimpleGrid,
    Text, 
    CardHeader, 
    CardBody, 
    Heading,
    Flex,
    Checkbox,
    Spinner
} from '@chakra-ui/react';
import {  DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { shortText } from '../Utils/shortText';
import { useSelector, useDispatch } from 'react-redux';
import { fillToDo, rmvTodo } from '../store/todoSlice';

function Cards() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todo);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(res => {
                dispatch(fillToDo(res.data.slice(0,200).reverse())); 
            })
            .catch(error => {
                console.error("Error fetching todos:", error);
            });
    }, [dispatch]);
    
    function handleRmv(id){
        dispatch(rmvTodo(id))
    }
  

    if (!Object.values(todos)?.length) {
        return <Spinner />;
    }

    return (
        <SimpleGrid pl='50px' display="flex" flexWrap="wrap" gap={10}>
            {todos.map((todo, index) => (
                <Card width={60} key={index}>
                    <CardHeader>
                        <Heading size='md'>Title: {shortText(todo.title, 10)}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>ID: {todo.id}</Text>
                        <Flex justifyContent="flex-end" gap={3}>
                            <DeleteIcon onClick={() => handleRmv(todo.id)} cursor="pointer" color="red.500" />
                           {todo.completed  ?  <Checkbox isDisabled={true} isChecked={true} /> : <Checkbox isDisabled={true} isChecked={false} />}
                        </Flex>
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    );
}

export default Cards;
