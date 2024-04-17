import {useState,ChangeEvent,SetStateAction,Dispatch} from 'react';

type ReturnType = [string,(e:ChangeEvent<HTMLInputElement>)=>void,Dispatch<SetStateAction<string>>]

const useInput =():ReturnType => {
  const [value,setValue] = useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value,handleChange,setValue];
};

export default useInput;