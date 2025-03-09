import { useMemo } from "react";

const TimeOfDay = () => {
  const timeOfDay = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  }, []);

  return <p className="inline">{`Good ${timeOfDay} `}</p>;
};

export default TimeOfDay;
