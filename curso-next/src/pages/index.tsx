// import { useEffect, useState} from 'react';
// import { Interface } from 'readline';
import SEO from '@/components/SEO';
import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string,
  title: string,
}
interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({ recommendedProducts } : HomeProps) {
  /* const [recommendedProducts, setRecommendedProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => {
      response.json().then(data => {
        setRecommendedProducts(data);
      });
    });
   }, []);*/

   async function handleMatch () {
    const match = (await import('../lib/match')).default;
    
    alert(match.sum(3, 5));
   }


  return (
    <div>
      <SEO
        title="DevCommerce, your best e-commerce"
        shouldExcludeTitleSuffix
      />
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map(recommendedProduct => {
            return(
              <li key={recommendedProduct.id}>
                {recommendedProduct.title}
              </li>
            )
          })}
        </ul>

        <button onClick={handleMatch}>Somar</button>
      </section>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.API_URL}/recommended`);
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}
