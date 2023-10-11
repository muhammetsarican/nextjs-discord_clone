"use client";
import { CreateServerModal } from "@/components/modals/createServerModal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/inviteModal";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  );
};
