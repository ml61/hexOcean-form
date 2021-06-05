//function below formates values  which we received from the form
//deleting some fields, that are not neccessary for selected type of dish
// formatting preparationTime,
//formatting type of the dish to localCase

export const formatDishObject = ({
  name,
  preparation_time,
  type,
  no_of_slices,
  diameter,
  spiciness_scale,
  slices_of_bread,
}) => {
  let dishObj = {};

  if (type === "Pizza") {
    dishObj = {
      name,
      preparation_time: formatPreparationTime(preparation_time),
      type: type.toLowerCase(),
      no_of_slices,
      diameter,
    };
  }

  if (type === "Soup") {
    dishObj = {
      name,
      preparation_time: formatPreparationTime(preparation_time),
      type: type.toLowerCase(),
      spiciness_scale,
    };
  }

  if (type === "Sandwich") {
    dishObj = {
      name,
      preparation_time: formatPreparationTime(preparation_time),
      type: type.toLowerCase(),
      slices_of_bread,
    };
  }

  return dishObj;
};

const formatPreparationTime = (preparationTime) => {
  if (preparationTime.length !== 8) {
    return preparationTime + ":00";
  }
  return preparationTime;
};

export const handleServerError = (err) => {
  if (err.name) return `Error in name. ${err.name}`;
  if (err.preparation_time)
    return `Error in preparation time. ${err.preparation_time}`;
  if (err.type) return `Error in dish type. ${err.type}`;
  if (err.no_of_slices) return `Error in number of slices. ${err.no_of_slices}`;
  if (err.diameter) return `Error in diameter. ${err.diameter}`;
  if (err.spiciness_scale)
    return `Error in spiciness scale. ${err.spiciness_scale}`;
  if (err.slices_of_bread)
    return `Error in slices of bread. ${err.slices_of_bread}`;
};
