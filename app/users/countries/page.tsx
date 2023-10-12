import createApolloClient from "@/app/apollo-client";
import { gql } from "@apollo/client";
import React from "react";

const NewUserPage = async () => {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return (
    <>
      <ul className="grid grid-cols-4">
        {data.countries.map((country, index) => (
          <li
            className={`p-2 m-1 ${getBackgroundColor(
              index
            )} text-white align-center text-center`}
            key={country.code}
          >
            {country.name}
          </li>
        ))}
      </ul>
    </>
  );
};

const getBackgroundColor = (index) => {
  if (index === 0) {
    return "bg-red-500";
  } else if (index === 1) {
    return "bg-green-500";
  } else if (index === 2) {
    return "bg-blue-500";
  } else if (index === 3) {
    return "bg-yellow-500";
  } else {
    return "bg-gray-500";
  }
};

export default NewUserPage;
