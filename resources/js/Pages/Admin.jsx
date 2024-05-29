import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import UserSearch from '@/Components/UserSearch.jsx';

export default function Admin({ auth }) {
    return (
        <Layout
            user={auth.user}
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-center gap-5">

                            <UserSearch user={auth.user}/>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
