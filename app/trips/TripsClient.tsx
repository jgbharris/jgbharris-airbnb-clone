"use client";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import { useRouter } from "next/navigation";

interface TripsClientProps {
  reservations?: SafeReservation[];
  currentUser?: SafeUser | null;
}

const TripsClient: React.FC<TripsClientProps> = ({
  reservations,
  currentUser,
}) => {
  const router = useRouter();
  return (
    <Container>
      <div className="mt-6">
        <Heading
          title="Trips"
          subtitle="Where you've been and where you're going"
        />
        <div className="mg:grid-cols-3 mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8"></div>
      </div>
    </Container>
  );
};

export default TripsClient;
