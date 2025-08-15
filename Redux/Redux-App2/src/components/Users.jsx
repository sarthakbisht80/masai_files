import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; //for subscription in store
import { FetchUser } from "../users/usersSlice";

export default function Users() {
  //acces data fro redux store
  const { data, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error :{error}</p>;
  return (
    <>
      <ul>
        {data.map((user)=>{
            <li key={user.id}>{user.title} </li>
            })}
      
      </ul>
    </>
  );
}
