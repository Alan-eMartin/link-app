import apolloClient from '../lib/apollo';
import { gql } from '@apollo/client';

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

export async function getServerSideProps() {
  const { data, error } = await apolloClient.query({ query: AllLinksQuery });

  if (error) {
    console.log('HELLO FROM SERVER SIDE PROPS');

    console.error(error);

    return {
      props: {
        links: [],
        error: error.message,
      },
    };
  }

  return {
    props: {
      links: data.links,
      error: null,
    },
  };
}

// Temp move to better dir
interface ILink {
  id: string;
  title: string;
  url: string;
  description: string;
  image: string;
  category: string;
}

type HomeProps = {
  links: ILink[];
  error: string | null;
};

const Home = ({ links, error }: HomeProps) => {
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <ul>
        {links.map((link: ILink) => (
          <li key={link.id}>
            <h1 className='text-3xl font-bold underline'>
              <a href={link.url}>{link.title}</a>
            </h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
