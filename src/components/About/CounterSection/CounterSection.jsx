import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Briefcase, Users, Smile, User } from "lucide-react";
import styles from "./CounterSection.module.css";

function Counter({ end, label, Icon, startCount }) {
  return (
    <div className={styles.counterItem}>
      <Icon className={styles.icon} />
      <div className={styles.count}>
        {startCount ? <CountUp end={end} duration={2} /> : 0}+
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

function CounterSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,   // chỉ chạy 1 lần
    threshold: 0.3,       // 30% phần tử hiển thị là bắt đầu chạy
  });

  return (
    <div className={styles.container} ref={ref}>
      <Counter end={150} label="Complete Project" Icon={Briefcase} startCount={inView} />
      <Counter end={3} label="Team Member" Icon={Users} startCount={inView} />
      <Counter end={500} label="User" Icon={User} startCount={inView} />
      <Counter end={25} label="Happy Client" Icon={Smile} startCount={inView} />
    </div>
  );
}

export default CounterSection;
