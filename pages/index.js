import { useRouter } from "next/router";
import { useEffect } from "react";

export default function HomePage() {
  const history = useRouter();

  useEffect(() => {
    history.push("/manipulationPharmacy");
  }, []);
  return <></>;
}
