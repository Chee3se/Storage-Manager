import { useState } from 'react';
import axios from 'axios';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal.jsx';

export default function AddSupplierForm({ supplier, onSuccess }) {
    const { data, setData, put, processing, errors } = useForm({
        _method: 'put',
        name: supplier.name,
    });

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);

        put(route('admin.suppliers.update', supplier.id), formData)
            .then(() => {
                if (onSuccess) {
                    onSuccess();
                }
            });
    };

    return (
        <form onSubmit={submit} method="POST" className="px-10 pb-4 flex flex-col gap-4">
            <div>
                <InputLabel htmlFor="name" value="Name"/>
                <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData('name', e.target.value)}
                />
                <InputError message={errors.name} className="mt-2"/>
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ms-4" disabled={processing}>
                    Update Supplier
                </PrimaryButton>
            </div>
        </form>
    );
}
