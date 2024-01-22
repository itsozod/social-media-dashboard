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
  return (
    <>
      <div className={styles.full_container}>
        <h1 className={styles.overview}>Overview - Today</h1>
        <div className={styles.small_cards_container}>
          {smallCardsArray.map((smallCard) => (
            <div key={smallCard.id} className={styles.small_card}>
              <div className={styles.view_number}>
                <p>{smallCard.view}</p>
                <h1>{smallCard.number}</h1>
              </div>
              <div className={styles.icon_percentage}>
                <img src={smallCard.icon} alt="" />
                <div className={styles.status}>
                  <img src={smallCard.status} alt="" />
                  <p
                    style={{
                      marginLeft: "5px",
                      color: smallCard.status === "/icon-up.svg" ? "green" : "red",
                    }}
                  >
                    {smallCard.percentage}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
