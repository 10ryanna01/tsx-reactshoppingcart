import { useState } from "react";
import { useQuery } from "react-query";


// Types
export type AuthorType = {
    id: number;
    name: string;
    username: string;
 
   
}

 
export const Authors = () => {


const getAuthors = async (): Promise<AuthorType[]> =>
  await (await fetch("https://jsonplaceholder.typicode.com/users")).json();


  const { data, isLoading, error } = useQuery<AuthorType[]>(
    "authors",
    getAuthors
  );
  console.log(data, "authors");

return(

    <div>
hi im authors

    </div>
)

 
};
