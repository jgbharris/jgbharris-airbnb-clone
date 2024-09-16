"use client";
import { useCallback, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeUser } from "../types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import ListingCard from "../components/listings/ListingCard";

interface FavoriteClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const FavoritesClient: React.FC<FavoriteClientProps> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <div className="mt-6">
        <Heading title="Favorites" subtitle="Listings you have favorited" />
        <div className="mg:grid-cols-3 mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
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
};

export default FavoritesClient;
