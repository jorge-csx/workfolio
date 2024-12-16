import { Loader } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const AvatarCL = ({ src, className }: any) => {
    return (
        <Avatar className={`w-24 h-24 ${className}`}>
            <AvatarImage src="/images/avatar.webp"/>
            <AvatarFallback>
                <Loader
                    size={32}
                    className="animate-spin text-muted-foreground"
                />
            </AvatarFallback>
        </Avatar>
    );
};
export default AvatarCL;
