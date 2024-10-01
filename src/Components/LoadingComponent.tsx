    import React, { useEffect, useState } from 'react';
    import '../Styles/LoadingCom.css'; // Import CSS for styling
    import MainPage from './MainPage'; // Import MainPage component
    import flames from "../assets/images/flames.png";

    const LoadingComponent: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 10000);

        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

    if (!isLoading) {
        return <MainPage />; // Render main page content after loading
    }

    return (
        <div className="loading-container">
        <h1 className="loading-title">
            <img id='image1' src={flames} alt="Flames" />
        </h1>
        <h2 className='h2r'>Wanna Know who your Partner is?</h2>
        </div>
    );
    };

    export default LoadingComponent;
