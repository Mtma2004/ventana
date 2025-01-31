import Logo from "./components/Logo";
import Landing from "./components/landing";

import { Suspense } from "react";
import Flaviors from "./components/Flaviors";

function Page() {
  return (
    <>
      <div className="mainPage">
        <Suspense fallback={<div className="loader"></div>}>
          <Logo num={1} />
          <Landing />
          <Flaviors />
        </Suspense>
      </div>
    </>
  );
}

export default Page;
