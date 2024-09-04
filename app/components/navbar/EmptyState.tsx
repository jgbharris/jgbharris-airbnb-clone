"use client";

import Container from "@/app/components/Container";
import { useRouter } from "next/navigation";
import Heading from "../Heading";
import Button from "../Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle,
  showReset,
}) => {
  const router = useRouter();
  return (
    <Container>
      <div className="flex h-[60vh] flex-col items-center justify-center gap-2">
        <Heading center title={title} subtitle={subtitle} />
        <div className="mt-4 w-48">
          {showReset && (
            <Button
              label="Remove all filters"
              outline
              onClick={() => {
                router.push("/");
              }}
            />
          )}
        </div>
      </div>
    </Container>
  );
};

export default EmptyState;
