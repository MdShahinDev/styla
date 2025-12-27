import { Star, StarHalf } from "lucide-react";

export const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, index) => {
        if (index < fullStars) {
          return (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        }

        if (index === fullStars && hasHalfStar) {
          return (
            <Star
              key={index}
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
          );
        }

        return (
          <Star
            key={index}
            size={16}
            className="text-gray-300"
          />
        );
      })}
    </div>
  );
};
