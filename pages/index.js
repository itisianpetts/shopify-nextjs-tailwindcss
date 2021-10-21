import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import Head from 'next/head';

export default function Home({ products }) {
  return (
    <div className=''>
      <Head>
        <title>Shopify + Next.js</title>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          httpEquiv='Content-Type'
          content='text/html; charset=ISO-8859-1'
        />
        <meta name='description' content='Shopify + Next.js + Tailwind' />
        <meta property='og:title' content='Shopify + Next.js' />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://shopify-nextjs-tailwindcss-nugf3myyz-itisianpetts.vercel.app/'
        />
        <meta
          property='og:image'
          content='https://shopify-nextjs-tailwindcss-nugf3myyz-itisianpetts.vercel.app/share.png'
        />
        <meta property='og:description' content='Modern eCommerce Website' />
        <meta property='og:locale' content='en_GB' />
        <meta property='og:site_name' content='Shopify & Next.js' />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products },
  };
}
