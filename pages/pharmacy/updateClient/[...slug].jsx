import dynamic from "next/dynamic";
const CreateClientMicro = dynamic(
  () => import("userGeneralFunctions/createClient"),
  { ssr: false }
);

export default function CreateClientPage() {
  return <CreateClientMicro nameRoute="pharmacy" />;
}
