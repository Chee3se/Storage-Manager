import React from 'react';
import { useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput.jsx';
import InputLabel from '@/Components/InputLabel.jsx';
import InputError from '@/Components/InputError.jsx';
import PrimaryButton from '@/Components/PrimaryButton.jsx';
import Modal from '@/Components/Modal.jsx';

export default function AddProductForm({ onClose, show }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
        price: '',
        image: null,
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('image', data.image);

        post(route('product.store'), formData)
            .then(() => {
                if (onClose) {
                    onClose();
                }
            });
    };
    return (
        <Modal onClose={onClose} show={show} >
            <p className="font-medium text-6xl p-4 text-center dark:text-amber-50">Create a product</p>
            <form onSubmit={handleSubmit} method="POST" className="px-10 pb-4 flex flex-col gap-4">
                <div>
                    <InputLabel htmlFor="name" value="Product Name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                        <InputLabel htmlFor="image" value="Product Image" />
                        <input
                            id="image"
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="mt-1 block w-full text-black dark:text-white"
                        />
                        
                        {data.image && (
                            <img src={URL.createObjectURL(data.image)} alt="Product Preview" className="mt-2" />
                        )}
                        <InputError message={errors.image} className="mt-2" />
                    </div>


                <div>
                    <InputLabel htmlFor="description" value="Product Description" />
                    <TextInput
                        id="description"
                        type="text"
                        name="description"
                        value={data.description}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="price" value="Product Price" />
                    <TextInput
                        id="price"
                        type="number"
                        name="price"
                        value={data.price}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('price', e.target.value)}
                    />
                    <InputError message={errors.price} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Add Product
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
}
