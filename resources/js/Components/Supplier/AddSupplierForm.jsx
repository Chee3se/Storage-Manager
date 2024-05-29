import { useState } from 'react';
import axios from 'axios';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import { useForm } from '@inertiajs/react';
import Modal from '@/Components/Modal.jsx';

export default function AddSupplierForm({ onClose, show }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('admin.suppliers.store'))
            .then(() => {
                if (onClose) {
                    onClose();
                }
            });
    };

    return (
        <Modal onClose={onClose} show={show}>
            <p className="font-medium text-6xl p-4 text-center dark:text-amber-50">Create a supplier</p>
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
                        Create Supplier
                    </PrimaryButton>
                </div>
            </form>
        </Modal>
    );
}
