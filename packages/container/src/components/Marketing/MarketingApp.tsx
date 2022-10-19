import React, { useEffect, useRef } from "react";
import { marketingMount } from "marketing/marketingIndex";

export default function MarketingApp() {
  const marketingApp = useRef(null);


  useEffect(() => {
    marketingMount(marketingApp.current);
  }, []);

  return (
    <>
      <div ref={marketingApp} id="MarketingApp"></div>
    </>
  );
}
