import React from 'react';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-red-50 text-red-700">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
            <p className="text-lg mb-6">We're sorry, an unexpected error has occurred.</p>
            <button
                onClick={() => window.location.reload()}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
                Try Again
            </button>
        </div>
    );
};

export default Error;
