import { Card } from "@/components/ui/card";
import Text from "@/app/components/text";
import { Button } from "@/components/ui/button";

interface TeraphistCardProps {
  className?: string;
  imageUrl: string;
  name: string;
  title: string;
  bio: string;
  rating: number;
}

const TeraphistCard = ({
  className,
  imageUrl,
  name,
  title,
  bio,
  rating,
}: TeraphistCardProps) => {
  return (
    <Card className={`max-w-96 flex flex-col justify-between p-2 ${className}`}>
      <section>
        <section className="flex items-center justify-center max-auto">
          <img
            src={imageUrl}
            width={100}
            height={100}
            alt={`${name}'s profile picture`}
          />
        </section>

        <h1 className="text-[20px] font-extrabold text-capitalize mt-2">
          {name}
        </h1>
        <p className="text-capitalize text-gray-600 text-sm">{title}</p>

        <div className="text-yellow-400 mr-1 flex my-1">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.54L0 6.91l6.564-.953L10 0l3.436 5.957L20 6.91l-5.245 4.64L15.878 18z" />
              </svg>
            ))}
        </div>

        <Text>{bio}</Text>
      </section>

      <Button className="w-full mt-2 mb-1">Schedule appointment</Button>
    </Card>
  );
};

export default TeraphistCard;
