import { Plus } from "lucide-react";
import { ResumeCardButton } from "./resumes-card";

export const AddResumeButton = () => {
  return (
    <ResumeCardButton
      title="Criar novo Curriculo"
      description="Começe do zero"
      icon={<Plus size={50} />}
    />
  );
};
