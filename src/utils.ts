export const numbers = Array(29_999_999)
  .fill(0)
  .map((_, index) => {
    return {
      value: index,
      isSelected: index === 29_999_998,
    };
  });
