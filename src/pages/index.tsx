import type { NextPage } from 'next';
import { gql, useQuery } from '@apollo/client';
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from 'react';

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      image
      category
    }
  }
`;

// Temp move to better dir
interface ILink {
  id: string;
  title: string;
  url: string;
  description: string;
  image: string;
  category: string;
}

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(AllLinksQuery);
  console.log(error);

  // Loading Data
  if (loading) return <p>Loading...</p>;
  // Error
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.links.map((link: ILink) => (
          <li key={link.id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
