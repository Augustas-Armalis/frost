import UserDisplayName from "../back-end-things/UserDisplayName.jsx"
import TimeOfDay from "../back-end-things/TimeOfDay.jsx"

const DashboardGreeting = () => {
  return (
    <p><TimeOfDay className="inline"/><UserDisplayName className="inline"/>!</p>
  )
};

export default DashboardGreeting;
