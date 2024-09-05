"use client";

import { categories } from "@/app/components/navbar/Categories";
import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import Container from "@/app/components/Container";
import { useMemo } from "react";
import ListingHead from "@/app/components/listings/ListingHead";

interface ListingClientProps {
  reservations?: Reservation[];
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  currentUser,
}) => {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category);
  }, [listing.category]);
  return (
    <Container>
      <div className="mx-auto mt-6 max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-7 md:gap-10">
          {/* <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            roomCount = {listing.roomCount}
            bathroomCount = {listing.bathroomCount} 
            guestCount = {listing.guestCount}   
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
