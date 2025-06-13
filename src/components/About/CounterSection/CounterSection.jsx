import React from "react";
import CountUp from "react-countup";
import { Briefcase, Users, Smile, User } from "lucide-react"; // icon từ lucide-react
import styles from "./CounterSection.module.css";

function Counter({ end, label, Icon }) {
  return (
    <div className={styles.counterItem}>
      <Icon className={styles.icon} />
      <div className={styles.count}>
        <CountUp end={end} duration={2} />+
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

function CounterSection() {
  return (
    <div className={styles.container}>
      <Counter end={150} label="Complete Project" Icon={Briefcase} />
      <Counter end={3} label="Team Member" Icon={Users} />
      <Counter end={500} label="User" Icon={User} />
      <Counter end={25} label="Happy Client" Icon={Smile} />
    </div>
  );
}

export default CounterSection;
