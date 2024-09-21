import React from 'react';

export const UserHire = ({ width, color }: { width: string, color: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            role="img"
            width={width}
            height={width}
            className={`${color} stroke-current`} // Tailwind dynamic color and stroke-current to use the color
        >
            <path
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"
            />
            <path
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"
            />
            <line
                x1="10.65"
                x2="21"
                y1="17.29"
                y2="17.29"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            <circle
                cx="10.04"
                cy="5.73"
                r="2.73"
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            />
            <path
                fill="none"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"
            />
        </svg>
    );
};


export const UserSeeker = ({ width, color }: { width: string, color: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            role="img"
            width={width}
            height={width}
            className={`${color} stroke-current`} // Ensures Tailwind's color class works with stroke-current
        >
            <polygon
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke="currentColor" // This will apply the color dynamically
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                points="19.38 21 8.38 21 10 14 21 14 19.38 21"
            ></polygon>
            <circle
                cx="14.69"
                cy="17.5"
                r="0.5"
                fill="currentColor" // This will apply the color dynamically
                vectorEffect="non-scaling-stroke"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></circle>
            <line
                x1="9.43"
                x2="5.99"
                y1="21"
                y2="21"
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke="currentColor" // This will apply the color dynamically
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            ></line>
            <circle
                cx="10.04"
                cy="5.73"
                r="2.73"
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke="currentColor" // This will apply the color dynamically
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
            ></circle>
            <path
                fill="none"
                vectorEffect="non-scaling-stroke"
                stroke="currentColor" // This will apply the color dynamically
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"
            ></path>
        </svg>
    );
};

