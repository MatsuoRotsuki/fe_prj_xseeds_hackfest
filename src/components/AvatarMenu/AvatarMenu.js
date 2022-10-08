import styles from "./AvatarMenu.module.scss";
function AvatarMenu() {
  return (
    <div className={styles.avatarMenu}>
      <ul>
        <li>Profile</li>
        <li>Sign out</li>
      </ul>
    </div>
  );
}

export default AvatarMenu;
