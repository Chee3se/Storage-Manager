import { useState } from 'react';
import axios from 'axios';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useForm } from '@inertiajs/react';

export default function EditCategoryForm({ category, onSuccess }) {
    const { data, setData, put, processing, errors } = useForm({
        _method: 'put',
        name: category.name,
    });

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', data.name);

        put(route('admin.categories.update', category.id), formData)
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
                    Update Category
                </PrimaryButton>
            </div>
        </form>
    );
}
