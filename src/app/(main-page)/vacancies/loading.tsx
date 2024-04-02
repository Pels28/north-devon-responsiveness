import { Skeleton } from "@nextui-org/react";


function Loading() {
  return (
    <>
      <Skeleton>
        <div className="w-full mx-10 h-[550px] rounded-full"></div>
      </Skeleton>
      {/* <LoadingSkeleton /> */}
    </>
  );
}

export default Loading;
