import type React from "react";

interface TickerProps {
    images: string[];
    className?: string;
}

const Ticker: React.FC<TickerProps> = ({ images, className }) => {
    return (
        <div
            aria-label="ticker-container"
            className="w-fit h-full overflow-hidden"
        >
            <div
                aria-label="ticker"
                className={`animate-scroll flex flex-col gap-6 ${className}`}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="w-full max-w-[450px] h-[300px] object-cover rounded-lg"
                    />
                ))}
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className="w-full max-w-[500px] h-[300px] object-cover rounded-lg"
                    />
                ))}
            </div>
        </div>
    );
};
export default Ticker;
