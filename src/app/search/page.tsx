import React from 'react';
import ShowEmployee from '@/comp/showEmployee';
import '../../comp/css/querypage.css';

interface PageProps {
    searchParams: {
        service: string;
        pincode: string;
    };
}

const Page = ({ searchParams }: PageProps) => {
    const { service, pincode } = searchParams;

    const loading = !service || !pincode; // Consider loading until both parameters are available

    return (
        <div className="page-container">
            <h1>Service Details</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p className="service-details">Service: {service}</p>
                    <p className="service-details">Pincode: {pincode}</p>
                    <div className="employee-details">
                        <ShowEmployee service={service} pincode={pincode} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
