import styles from "./BigCards.module.css";
const bigCardsArray = [
  {
    id: 1,
    socialIcon: "/icon-facebook.svg",
    username: "@nathanf",
    followersNum: 1987,
    text: "Followers",
    icon: "/icon-up.svg",
    iconText: "12 Today",
  },
  {
    id: 2,
    socialIcon: "/icon-twitter.svg",
    username: "@nathanf",
    followersNum: 1044,
    text: "Followers",
    icon: "/icon-up.svg",
    iconText: "99 Today",
  },
  {
    id: 3,
    socialIcon: "/icon-instagram.svg",
    username: "@realnathanf",
    followersNum: "11k",
    text: "Followers",
    icon: "/icon-up.svg",
    iconText: "1099 Today",
  },
  {
    id: 4,
    socialIcon: "/icon-youtube.svg",
    username: "Nathan F",
    followersNum: 8239,
    text: "Subscribers",
    icon: "/icon-down.svg",
    iconText: "144 Today",
  },
];

export const BigCards = () => {
  return (
    <div className={styles.big_cards_container}>
      {bigCardsArray.map((bigCard) => (
        <div key={bigCard.id} className={styles.big_card}>
          <div className={styles.social_media}>
            <img src={bigCard.socialIcon} alt="" />
            <p style={{ marginLeft: "5px" }}>{bigCard.username}</p>
          </div>
          <div className={styles.followers}>
            <p style={{ fontSize: "35px" }}>{bigCard.followersNum}</p>
          </div>
          <p>{bigCard.text}</p>
          <div className={styles.up_down}>
            <img src={bigCard.icon} alt="" />
            <p style={{ marginLeft: "5px" }}>{bigCard.iconText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
