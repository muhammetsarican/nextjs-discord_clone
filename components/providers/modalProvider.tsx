"use client";
import { CreateServerModal } from "@/components/modals/createServerModal";
import { useEffect, useState } from "react";
import { InviteModal } from "@/components/modals/inviteModal";
import { EditServerModal } from "@/components/modals/editServerModal";
import { MembersModal } from "../modals/membersModal";
import { CreateChannelModal } from "../modals/createChannelModal";
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
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
    </>
  );
};
