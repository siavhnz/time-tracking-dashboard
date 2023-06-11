export const design = (category) => {
  let attr = {
    bg: "",
    icon: "",
  };

  switch (category) {
    case "Work":
      attr.bg = "bg-light-orange";
      attr.icon = "bg-work";
      break;
    case "Play":
      attr.bg = "bg-soft-blue";
      attr.icon = "bg-play";
      break;
    case "Study":
      attr.bg = "bg-light-red";
      attr.icon = "bg-study";
      break;
    case "Exercise":
      attr.bg = "bg-lime-green";
      attr.icon = "bg-exercise";
      break;
    case "Social":
      attr.bg = "bg-violet";
      attr.icon = "bg-social";
      break;
    case "Self Care":
      attr.bg = "bg-soft-yellow";
      attr.icon = "bg-self-care";
      break;
  }

  return attr;
};
