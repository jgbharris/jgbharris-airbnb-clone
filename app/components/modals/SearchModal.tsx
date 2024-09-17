"use client";

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";

const SearchModal = () => {
  const searchModal = useSearchModal();
  return (
    <div>
      <Modal
        isOpen={searchModal.isOpen}
        title="Filters"
        actionLabel="Search"
        onClose={searchModal.onClose}
        onSubmit={searchModal.onOpen}
      />
    </div>
  );
};

export default SearchModal;
