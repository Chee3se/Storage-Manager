import Layout from "@/Layouts/Layout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export default function Show({ auth, product }) {
    const [productVar, setProduct] = useState(product);

    useEffect(() => {
        setProduct(product);
    }, [product]);

    function handleShelf() {
        if (auth.role != "admin" && auth.role != "worker") return;
        axios
            .post(`/products/update/${product.id}`, {
                shelf: !productVar.shelf,
            })
            .then((response) => {
                setProduct((prevProduct) => ({
                    ...prevProduct,
                    shelf: response.data?.shelf ? 1 : 0,
                }));
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <Layout user={auth.user}>
            <Head title={productVar.name} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex justify-center ">
                            <div className="grid grid-cols-2">
                                <div>
                                    <h1 className="text-xl font-bold">
                                        {productVar.name}
                                    </h1>
                                    <img
                                        src={productVar.thumbnail?.url}
                                        alt={productVar.name}
                                        className="h-80"
                                    />
                                </div>

                                <div>
                                    <p>Price: {productVar.price}</p>
                                    <p>{productVar.description}</p>
                                    <button
                                        onClick={
                                            auth.role == "admin" || "worker"
                                                ? handleShelf
                                                : () => {}
                                        }
                                        className={`bg-${
                                            auth.role != "admin" && auth.role != "worker"
                                            ? "slate"
                                            : (productVar.shelf
                                            ? "green"
                                            : "red")
                                        }-400 cursor-pointer rounded-md p-2 w-fit h-fit hover:scale-105 hover:shadow-md transition `}
                                    >
                                        {productVar.shelf
                                            ? "Is on shelf"
                                            : "Not on shelves yet"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
