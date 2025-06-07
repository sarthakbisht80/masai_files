import React,{useState} from "react";
//custom hook creation AF
const useForm=(initialvalues)=>{
const [form,setform ]= useState(initialvalues);
const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => setValues(initialvalues);

return{ form ,handleChange,resetForm} ;

}
