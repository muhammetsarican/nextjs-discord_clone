import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initialProfile";
import React from "react";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initialModal";

const SetupPage = async () => {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where:{
        members:{
            some:{
                profileId: profile.id
            }
        }
    }
  })

  if (server) redirect(`/servers/${server.id}`);
  return <InitialModal />;
};

export default SetupPage;
