import UserDisplayName from "../back-end-things/UserDisplayName.jsx"
import TimeOfDay from "../back-end-things/TimeOfDay.jsx"

const DashboardGreeting = () => {
  return (
    <p><TimeOfDay className="inline"/><UserDisplayName className="inline" name="John Doe"/>!</p>
  )
};

export default DashboardGreeting;
