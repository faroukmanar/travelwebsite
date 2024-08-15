import React from 'react';

const Features = () => {
    const highlightColor = 'rgb(171,238,223)';

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
                    Discover Our Travel Expertise
                </h2>
                <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
                    Join thousands of satisfied travelers who trust us for their dream vacations. From exotic destinations to exclusive deals, we've got you covered.
                </p>
            </div>

            <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Destinations Covered</dt>
                    <dd className="text-4xl font-extrabold" style={{ color: highlightColor }}>120+</dd>
                </div>

                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Happy Travelers</dt>
                    <dd className="text-4xl font-extrabold" style={{ color: highlightColor }}>50k+</dd>
                </div>

                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Tours Organized</dt>
                    <dd className="text-4xl font-extrabold" style={{ color: highlightColor }}>300+</dd>
                </div>

                <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center dark:border-gray-800">
                    <dt className="order-last text-lg font-medium text-gray-500 dark:text-gray-400">Awards Won</dt>
                    <dd className="text-4xl font-extrabold" style={{ color: highlightColor }}>15</dd>
                </div>
            </dl>
        </div>
    );
};

export default Features;
