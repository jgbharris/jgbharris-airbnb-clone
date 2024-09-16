import EmptyState from "../components/navbar/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import { getReservations } from "../actions/getReservations";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't made any reservations on your properties"
      />
    );
  }

  return <div>Reservations Client</div>;
};

export default ReservationsPage;
