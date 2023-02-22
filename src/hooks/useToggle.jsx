import { useCallback, useMemo, useState } from "react";

const UseToggle = (initial) => {
  const [status, setStatus] = useState(initial ?? false);

  const toggleStatus = useCallback(() => {
    setStatus((prev) => !prev);
  }, []);

  return useMemo(() => [status, toggleStatus], [status, toggleStatus]);
};

export default UseToggle;
