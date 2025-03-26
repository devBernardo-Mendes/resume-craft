import { Label } from "@radix-ui/react-dropdown-menu";

type FieldWrapperProps = {
  label: string;
  children: React.ReactNode;
};

export const FieldWrapper = ({ children, label }: FieldWrapperProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
};
