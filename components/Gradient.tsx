const directionMap: Record<string, string> = {
    t: "bg-gradient-to-t",
    b: "bg-gradient-to-b",
    r: "bg-gradient-to-r",
    l: "bg-gradient-to-l",
};

const Gradient = ({ dr, children }: { dr: string; children?: React.ReactNode }) => {
    const directionClass = directionMap[dr] || "bg-gradient-to-r"; // default fallback

    return (
        <div className={`${directionClass} from-background-secondary-DEFAULT from-0% to-background-primary-DEFAULT`}>
            {children}
        </div>
    );
};

export default Gradient;
