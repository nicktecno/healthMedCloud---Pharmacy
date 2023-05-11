import dynamic from "next/dynamic";
const CreatePrescriberMicro = dynamic(
  () => import("userGeneralFunctions/createPrescriber"),
  { ssr: false }
);

export default function CreatePrescriberPage() {
  return <CreatePrescriberMicro nameRoute="pharmacy" />;
}
