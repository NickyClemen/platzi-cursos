import React from 'react';

import { useRouter } from 'next/router'; // Hook para manipular la paginación de Next.

const ProductItem = () => {
    const router = useRouter();
    return (
        <div>
            <p>Página de prueba ({ router.query.id }).</p>
        </div>
    );
}

export default ProductItem;
