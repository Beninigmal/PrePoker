import { useEffect, useState } from "react";
import { getSprints } from "../firebaseService";

export const useSprints = () => {
  const [sprints, setSprints] = useState([]);
  const [loading, setLoading] = useState(false);
  const [outdated, setOutdated] = useState(true);

  useEffect(() => {
    if (outdated) {
      setLoading(true);
      getSprints()
        .then((data) => setSprints(data))
        .finally(() => setLoading(false), setOutdated(false));
    }
  }, [outdated]);

  return [sprints, loading, setOutdated];
};
