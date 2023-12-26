import styles from "./registration.module.scss";

export default function RegistrationWrapper({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen w-screen flex p-5">
      <div className="flex-1">some picture here...</div>
      <div className={styles.registration}>{children}</div>
    </main>
  );
}
