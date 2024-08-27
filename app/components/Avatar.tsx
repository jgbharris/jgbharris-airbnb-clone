// "use-client";

import Image from "next/image";

interface AvatarProps {
  src?: string | undefined | null;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      width={30}
      height={30}
      alt="Avatar"
      src={src || "/images/placeholder.png"}
    />
  );
};

export default Avatar;
