import { Card, Typography } from "@material-tailwind/react";

interface ResumeItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

export function ResumeItem({ icon: Icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4" data-aos="fade-left">
      <div
        color="gray"
        className="h-12 w-12 shrink-0 items-center justify-center !rounded-lg bg-gray-900 p-2.5 text-white shadow"
      >
        <Icon className="h-6 w-6" strokeWidth={2} />
      </div>
      <p className="w-full font-normal !text-gray-500 text-lg">
        {children}
      </p>
    </div>
  );
}

export default ResumeItem;
