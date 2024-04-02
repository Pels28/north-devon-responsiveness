import { CircularProgress, Skeleton } from "@nextui-org/react";
import { Chip, Link, Image } from "@nextui-org/react";


function Loading() {
  return (
    <>
      <Skeleton>
        <div className="w-full mx-10 h-[550px] rounded-full"></div>
      </Skeleton>
     
    </>
  );
}

export default Loading;
