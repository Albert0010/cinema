import { ChangeEvent, Dispatch, SetStateAction, useEffect } from 'react';
import CustomInput from '../reusable/CustomTextArea';

interface IBookSeatsFormProps {
    setValid:Dispatch<SetStateAction<boolean>>;
    setName:Dispatch<SetStateAction<string>>;
    setEmail:Dispatch<SetStateAction<string>>;
    name:string;
    email:string;
}

export default function BookSeatsForm({setValid,name,email,setEmail,setName}:IBookSeatsFormProps) {


  const handleChange = (set:Dispatch<SetStateAction<string>>) => (event:ChangeEvent<HTMLTextAreaElement>) => {
    set(event.target.value)
  }

  useEffect(() => {
    setValid(!!(name && email))
  }, [name, email, setValid])



  return (
    <div className='flex flex-col gap-2'>
      <CustomInput
        value={name}
        onChange={handleChange(setName)}
        placeholder="Name"
      />
      <CustomInput
        value={email}
        onChange={handleChange(setEmail)}
        placeholder="Email"
      />
    </div>
  );
}
