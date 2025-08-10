
type CardProps = {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
};

export default function Card({active, children, onClick}: CardProps){
    return (
        <button
            type="button"
            onClick={onClick}
            className={`group rounded-2xl border box-border p-4 md:p-5 text-left transition shadow-sm hover:shadow-md focus:outline-none
        ${active ? "border-[3px] border-accent bg-blue-100" : "border-accent bg-white hover:bg-gray-50"}
       w-full h-[70px] sm:w-[200px] sm:h-[240px]
        `}
        >
            {children}
        </button>
    )
}