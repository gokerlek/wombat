const useBoardColor = (color) => {
  const type_of = {
    red: {
      bg_color: "bg-red-50",
      badge_color: "bg-red-100",
      text_color: "text-red-500",
      border_color: "border-red-500",
    },
    blue: {
      bg_color: "bg-blue-50",
      badge_color: "bg-blue-100",
      text_color: "text-blue-500",
      border_color: "border-blue-500",
    },
    green: {
      bg_color: "bg-green-50",
      badge_color: "bg-green-100",
      text_color: "text-green-500",
      border_color: "border-green-500",
    },
    yellow: {
      bg_color: "bg-yellow-50",
      badge_color: "bg-yellow-100",
      text_color: "text-yellow-500",
      border_color: "border-yellow-500",
    },
    purple: {
      bg_color: "bg-purple-50",
      badge_color: "bg-purple-100",
      text_color: "text-purple-500",
      border_color: "border-purple-500",
    },
    pink: {
      bg_color: "bg-pink-50",
      badge_color: "bg-pink-100",
      text_color: "text-pink-500",
      border_color: "border-pink-500",
    },
    orange: {
      bg_color: "bg-orange-50",
      badge_color: "bg-orange-100",
      text_color: "text-orange-500",
      border_color: "border-orange-500",
    },
    gray: {
      bg_color: "bg-gray-50",
      badge_color: "bg-gray-100",
      text_color: "text-gray-500",
      border_color: "border-gray-500",
    },
  };

  const { bg_color, badge_color, text_color, border_color } = type_of[color];

  return { bg_color, badge_color, text_color, border_color };
};

export default useBoardColor;
