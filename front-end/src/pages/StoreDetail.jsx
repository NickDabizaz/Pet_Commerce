import { useParams } from 'react-router-dom';

function StoreDetail() {
  let { store_id } = useParams();

  return (
    <div>
      <h2>Store ID: {store_id}</h2>
    </div>
  );
}

export default StoreDetail;
