"use client";

import Avatar from "@/app/components/Avatar";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import ListingCategory from "@/app/components/listings/ListingCategory";
import dynamic from "next/dynamic";

// Workaround for map component not being SSR compatible
const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: SafeUser;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  description: string;
  roomCount: number;
  bathroomCount: number;
  guestCount: number;
  locationValue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
  user,
  category,
  description,
  roomCount,
  bathroomCount,
  guestCount,
  locationValue,
}) => {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <div>Hosted by {user?.name}</div>
          <Avatar src={user?.image} />
        </div>
        <div className="mb-4 flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
        <hr />
        <div className="mb-4 mt-4">
          {category && (
            <ListingCategory
              icon={category.icon}
              label={category.label}
              description={category.description}
            />
          )}
        </div>
        <hr />
        <div className="mb-4 mt-4 text-lg font-light text-neutral-500">
          {description}
        </div>
        <hr />
        <div className="mt-4">
          <Map center={coordinates} />
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
