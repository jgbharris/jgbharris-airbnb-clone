import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/Container";
import EmptyState from "./components/navbar/EmptyState";
import { getListings } from "./actions/getListings";
import ListingCard from "./components/listings/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import { Listing } from "@prisma/client";

export default async function Home() {
  const listings = await getListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <EmptyState
        subtitle="Try changing or removing some of your filters"
        showReset
      />
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <div>
          {listings.map((listing) => {
            return (
              <ListingCard
                key={listing.id}
                data={listing}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
