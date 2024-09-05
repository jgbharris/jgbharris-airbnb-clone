import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/navbar/EmptyState";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);

  if (!listing) {
    return (
      <EmptyState title="No listing found" subtitle="Something went wrong" />
    );
  }

  return <div>{listing?.title}</div>;
};

export default ListingPage;
