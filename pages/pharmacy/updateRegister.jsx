import dynamic from "next/dynamic";
const UpdateRegisterMicro = dynamic(
  () => import("userGeneralFunctions/updateRegister"),
  { ssr: false }
);

export default function UpdateRegisterPage() {
  return <UpdateRegisterMicro nameRoute="pharmacy" />;
}
