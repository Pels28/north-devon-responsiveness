import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Spacer } from '@nextui-org/react';
import Heading from './Heading';
import Input from "./forms/Input";

const DocumentUploadForm = () => {
    const [cv, setCv] = useState<File | null>(null);
    const [passport, setPassport] = useState<File | null>(null);
    const [certificates, setCertificates] = useState<File[]>([]);

    const handleCVChange = (e?: ChangeEvent<HTMLInputElement>) => {
        const file = e?.target.files && e.target.files[0];
        if (file) setCv(file);
    };

    const handlePassportChange = (e?: ChangeEvent<HTMLInputElement>) => {
        const file = e?.target.files && e.target.files[0];
        if (file) setPassport(file);
    };

    const handleCertificatesChange = (e?: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e?.target.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            setCertificates(filesArray);
        }
    };

    const handleOthersChange = (e?: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e?.target.files;
        if (selectedFiles) {
            const filesArray = Array.from(selectedFiles);
            setCertificates(filesArray);
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Heading variant="h6"> * Documents should be in pdf </Heading>
                <br/>
                <label>Upload CV </label>
                <Input 
                    className="border-none focus:outline-none" // Add Tailwind CSS classes here
                    required
                    type="file" 
                    accept=".pdf" 
                    onChange={handleCVChange} />
            </div>
            <Spacer y={2} />
            <div>
                <label>Upload Passport:</label>
                <Input 
                    className="border-none focus:outline-none" // Add Tailwind CSS classes here
                    required
                    name ="passport"
                    type="file" 
                    accept=".pdf"
                    onChange={handlePassportChange} />
            </div>
            <Spacer y={2} />
            <div>
                <label>Upload Certificates </label>
                <Input 
                    className="border-none focus:outline-none" // Add Tailwind CSS classes here
                    required
                    type="file" 
                    name="certificates"
                    multiple 
                    accept=".pdf" 
                    onChange={handleCertificatesChange} 
                />
            </div>

            <div>
                <label>Upload other important Documents </label>
                <Input 
                    className="border-none focus:outline-none" // Add Tailwind CSS classes here
                    required
                    type="file" 
                    name="others"
                    multiple 
                    accept=".pdf" 
                    onChange={handleOthersChange} 
                />
            </div>
        </form>
    );
};

export default DocumentUploadForm;
