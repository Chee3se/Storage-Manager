import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';

export default function Index({ auth, products }) {
    console.log(products)
    return (
        <Layout
            user={auth.user}
        >
            <Head title="Create product" />
            
        </Layout>
    );
}
