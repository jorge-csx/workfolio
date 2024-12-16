import AvatarCL from "./avatar-cl";

const ProfileBadge = () => {
    return (
        <div className="flex items-center gap-4">
            <AvatarCL className="w-14 h-14" />
            <div>
                <p className="font-semibold">Jorge Castillo Soria</p>
                <div className="flex items-center gap-2">
                    <span className="relative flex items-center justify-center w-2 h-2 ">
                        <span className="absolute inline-flex w-full h-full aspect-square bg-green-500 rounded-full animate-ping"></span>
                        <span className="relative inline-flex w-1.5 h-1.5 aspect-square bg-green-500 rounded-full"></span>
                    </span>
                    <p>Open to work</p>
                </div>
            </div>
        </div>
    );
};
export default ProfileBadge;
