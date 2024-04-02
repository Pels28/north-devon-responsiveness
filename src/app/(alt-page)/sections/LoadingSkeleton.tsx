import Card from "@/components/Card";
import { Skeleton } from "@nextui-org/react";

export function LoadingSkeleton() {
  return (
    <Card className="w-full  pb-10 " padded={false}>
      {/* Image */}

      <div className="px-10">
        <div className="flex gap-3 items-center space-y-5">
          <Skeleton className="rounded-s-2xl rounded-e-2xl">
            <div className="h-[500px] w-ful"></div>
          </Skeleton>

          <Skeleton className="rounded-s-2xl rounded-e-2xl">
            <div className="h-4 w-20"></div>
          </Skeleton>
        </div>

        {/* Tabs */}
        <div className="flex gap-5 items-center mt-10 w-full">
          <Skeleton className="rounded-s-2xl rounded-e-2xl w-1/2">
            <div className="h-12 w-1/2"></div>
          </Skeleton>

          <Skeleton className="rounded-s-2xl rounded-e-2xl  w-1/2">
            <div className="h-12 w-1/2"></div>
          </Skeleton>
        </div>

        <div className="mt-10 w-full">
          <Skeleton className="rounded-s-2xl rounded-e-2xl w-60">
            <div className="h-8 w-60"></div>
          </Skeleton>

          <div className="mt-5 space-y-2 flex flex-wrap gap-x-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-full">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-full">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-1/2">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-1/2">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-1/6">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-1/6">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-10">
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
          <div className="space-y-2">
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-20">
              <div className="h-4 w-20"></div>
            </Skeleton>
            <Skeleton className="rounded-s-2xl rounded-e-2xl w-3/4">
              <div className="h-4 w-20"></div>
            </Skeleton>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <Skeleton className="rounded-s-2xl rounded-e-2xl">
            <div className="h-12 w-1/2"></div>
          </Skeleton>

          <Skeleton className="rounded-s-2xl rounded-e-2xl">
            <div className="h-12 w-1/2"></div>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
