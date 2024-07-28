import React from 'react';
import { auth } from '@/auth';
import Form from '@/comp/register-service-form';

const Page = async () => {
    const session = await auth();
    const name = session?.user?.name;
    const contactNo = session?.user?.contact_no; // Use contact_no
    console.log('Session Expires:', session?.expires); // For debugging
    console.log('User Info:', session?.user); // For debugging
    
    return (
        <>
            <Form username={name} contact={contactNo} /> {/* Pass only necessary fields */}
        </>
    );
}

export default Page;
