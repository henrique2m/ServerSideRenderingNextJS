import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const AddToCartModal = dynamic(
  () => import ('@/components/addToCartModal'),
  { loading: () => <p> Loading...</p>, ssr: false }
);

export default function product() {
  const router = useRouter();
  const [isAddCartModalVisible, setIsAddToCartModalVisible] = useState(false);

  function handleAddToCart() {
    setIsAddToCartModalVisible(true);
  }

  return ( 
    <div>
      <h1>{router.query.slug}</h1>
      
      <button onClick={handleAddToCart}>Add to cart</button>

      {isAddCartModalVisible && <AddToCartModal />}
    </div>
  );
}