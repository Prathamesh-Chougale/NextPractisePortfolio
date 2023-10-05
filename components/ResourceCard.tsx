import { Resource } from "@/sanity/sanity-util";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const ResourceCard = ({ _id, title, image, downloadLink, slug }: Resource) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparents">
      <Link href={`/resource/${_id}`}>
        <CardHeader>
          <div>
            <Image
              src={image}
              className="h-full rounded-md object-cover"
              width={384}
              height={440}
              alt="resource image"
            />
          </div>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div>
          <Image src="/downloads.svg" width={20} height={10} alt="arrow" />
        </div>
        <Link
          href={`/resource/${_id}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" width={20} height={10} alt="arrow" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;
