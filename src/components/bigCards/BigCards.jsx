import { useDarkmode } from "../../hooks/UseDarkmode";
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
  const [theme] = useDarkmode();
  return (
    <div className={styles.big_cards_container}>
      {bigCardsArray.map((bigCard) => (
        <div
          key={bigCard.id}
          className={styles.big_card}
          style={{
            backgroundColor: theme ? "hsl(228, 28%, 20%)" : "lightgray",
            transition: "0.3s",
          }}
        >
          <div
            className={styles.social_media}
            style={{
              color: theme ? "white" : "black",
              transition: "0.3s",
            }}
          >
            <img src={bigCard.socialIcon} alt="" />
            <p>{bigCard.username}</p>
          </div>
          <div
            className={styles.followers}
            style={{
              color: theme ? "white" : "black",
              transition: "0.3s",
            }}
          >
            <p style={{ fontSize: "40px" }}>{bigCard.followersNum}</p>
            <p>{bigCard.text}</p>
          </div>

          <div className={styles.up_down}>
            <img src={bigCard.icon} alt="" />
            <p
              style={{
                color:
                  bigCard.icon === "/icon-up.svg"
                    ? "hsl(163, 72%, 41%)"
                    : "hsl(356, 69%, 56%)",
              }}
            >
              {bigCard.iconText}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
