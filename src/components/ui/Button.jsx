function Button({ children, variant = "primary", size = "md", onClick, className = "" }) {
    const baseStyles = "rounded-[6px] transition-all";

    const variants = {
        primary: "bg-sport-gray-800 text-sport-gray-200 hover:opacity-80",
        // secondary: "bg-sport-gray-200 text-sport-gray-800",
    };

    const sizes = {
        // sm: "text-sm px-3 py-1",
        // md: "text-base px-4 py-2",
        lg: "xl:text-[20px] text-[18px] xl:px-8 px-5 xl:py-3 py-2 leading-[1.9] uppercase font-bold",
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </button>
    );
}

export default Button;
