import Container from "./components/Container";
import EmptyState from "./components/navbar/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import { getListings, IListingParams } from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";

interface HomeProps {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings(searchParams);

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
      <div className="lg:grid-cols4 mt-10 grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6">
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
    </Container>
  );
};

export default Home;
