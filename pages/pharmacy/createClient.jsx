import dynamic from "next/dynamic";
const CreateClientMicro = dynamic(
  () => import("userGeneralFunctions/createClient"),
  { ssr: false }
);

const CreateClientPage = () => {
  return <CreateClientMicro nameRoute="pharmacy" />;
};
export default CreateClientPage;
