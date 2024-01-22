import styles from "./SmallCards.module.css";
const smallCardsArray = [
  {
    id: 1,
    view: "Page Views",
    icon: "/icon-facebook.svg",
    number: 87,
    status: "/icon-up.svg",
    percentage: "3%",
  },
  {
    id: 2,
    view: "Likes",
    icon: "/icon-facebook.svg",
    number: 52,
    status: "/icon-down.svg",
    percentage: "2%",
  },
  {
    id: 3,
    view: "Likes",
    icon: "/icon-instagram.svg",
    number: 5462,
    status: "/icon-up.svg",
    percentage: "2257%",
  },
  {
    id: 4,
    view: "Profile Views",
    icon: "/icon-instagram.svg",
    number: "52K",
    status: "/icon-up.svg",
    percentage: "1357%",
  },
  {
    id: 5,
    view: "Retweets",
    icon: "/icon-twitter.svg",
    number: 117,
    status: "/icon-up.svg",
    percentage: "303%",
  },
  {
    id: 6,
    view: "Likes",
    icon: "/icon-twitter.svg",
    number: 507,
    status: "/icon-up.svg",
    percentage: "553%",
  },
  {
    id: 7,
    view: "Likes",
    icon: "/icon-youtube.svg",
    number: 107,
    status: "/icon-down.svg",
    percentage: "19%",
  },
  {
    id: 8,
    view: "Total Views",
    icon: "/icon-youtube.svg",
    number: 1407,
    status: "/icon-down.svg",
    percentage: "12%",
  },
];

export const SmallCards = () => {
  return <div className={styles.small_cards_container}>
    {smallCardsArray.map((smallCard) => (
        <div key={smallCard.id} className={styles.small_card}>
            <p>{smallCard.view}</p>
            <img src={smallCard.icon} alt="" />
        </div>
    ))}
  </div>;
};
