import Layout from '@/Layouts/Layout';
import { Head } from '@inertiajs/react';
import UserSearch from '@/Components/User/UserSearch.jsx';
import CategorySearch from "@/Components/Category/CategorySearch.jsx";
import SupplierSearch from "@/Components/Supplier/SupplierSearch.jsx";

export default function Admin({ auth }) {
    return (
        <Layout
            user={auth.user}
        >
            <Head title="Admin" />

            <div className="py-12">
                <div className="py-12 max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex flex-col justify-center gap-5 w-fit mx-16">

                            <UserSearch user={auth.user}/>
                            <div className="grid grid-cols-2 gap-6">
                                <CategorySearch/>
                                <SupplierSearch/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
