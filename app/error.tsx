"use client";

import { useEffect } from "react";
import EmptyState from "./components/navbar/EmptyState";

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <EmptyState title="An error occurred" subtitle="Please try again later" />
  );
};

export default ErrorState;
