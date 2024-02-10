const seasonsConfig = (month: number) => {
  const c: {
    [x: number]: { img: string; superText: string; emphasisText: string };
  } = {
    1: {
      img: "/val.png",
      superText: "My Secret",
      emphasisText: "Valentine",
    },
    3: {
      img: "/val.png",
      superText: "",
      emphasisText: "Valentine",
    },
    11: {
      img: "/santa.png",
      superText: "Secret",
      emphasisText: "Santa Claus",
    },
  };
  return c[month];
};

export default seasonsConfig;
