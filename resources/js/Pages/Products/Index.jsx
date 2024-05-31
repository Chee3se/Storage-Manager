import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, products }) {
    console.log(products)
    return (
        <Layout
            user={auth.user}
        >   
        
            <Head title="Avalable products" />
            <div className="py-12">
                
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid lg:grid-cols-3 sm:grid-cols-2 items-center ">
                    {products.map(product => (
                        <div key={product.id} className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg w-80 border-0 hover:border-2 hover:border-black dark:hover:border-2 dark:hover:border-white mb-10 ">
                            <div className="flex-col flex text-gray-900 dark:text-gray-100 justify-center">
                            <a href={`/products/${product.id}`}>
                                <div className="flex justify-center">
                                    <img src={product.thumbnail?.url} alt={product.name} className="h-80" />
                                </div>
                                <div>
                                    <h1 className="text-center text-xl font-bold py-4">{product.name}</h1>
                                </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
