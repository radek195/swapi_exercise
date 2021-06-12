//function returns correct set of classes for every pagination item
export const isActive = (active, index) => {
  if (active === index) {
    return "pagination__item pagination__item--active";
  }
  return "pagination__item";
};
