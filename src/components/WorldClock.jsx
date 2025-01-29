import { useState, useEffect } from "react";
import moment from "moment-timezone";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const WorldClock = () => {
  const [currentTime, setCurrentTime] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [isDaytime, setIsDaytime] = useState(true);

  const allTimezones = moment.tz.names();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = moment().tz(selectedTimezone);
      setCurrentTime(now);
      const hour = now.hour();
      setIsDaytime(hour >= 6 && hour < 18); // Daytime: 6 AM to 6 PM
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTimezone]);

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 style={styles.title}>🌍 World Clock</h2>

      <div style={styles.clock}>
        <motion.div
          style={styles.icon}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {isDaytime ? <FaSun size={40} color="#FFD700" /> : <FaMoon size={40} color="#4B0082" />}
        </motion.div>

        <motion.p
          style={styles.time}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {currentTime.format("MMMM Do YYYY, h:mm:ss A")}
        </motion.p>

        <select
          style={styles.selector}
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
        >
          {allTimezones.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "2rem",
    color: "#e0e0e0",
    backgroundColor: "#1f1f1f",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
    maxWidth: "400px",
    margin: "1rem auto",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#ffcc00",
  },
  clock: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  time: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  selector: {
    padding: "0.5rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #333",
    backgroundColor: "#2c2c2c",
    color: "#e0e0e0",
  },
  icon: {
    margin: "0.5rem 0",
  },
};

export default WorldClock;
