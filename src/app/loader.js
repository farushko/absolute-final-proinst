"use client";

import { useEffect, useState, Fragment } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // making loader off intentionally after 2 seconds
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <Fragment>
      {!loading ? (
        <Fragment>{children}</Fragment>
      ) : (
        <div className="page__preloader">// you can loader code here</div>
      )}
    </Fragment>
  );
}
