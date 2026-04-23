import React from "react";
import { useFormContext } from "@/lib/context/FormProvider";
import PersonalDetailsPreview from "../previews/PersonalDetailsPreview";
import SummaryPreview from "../previews/SummaryPreview";
import ExperiencePreview from "../previews/ExperiencePreview";
import EducationalPreview from "../previews/EducationalPreview";
import SkillsPreview from "../previews/SkillsPreview";

export default function ModernTemplate({ isEditMode }: { isEditMode: boolean }) {
  const { formData, setActiveFormIndex } = useFormContext();

  const interactiveClass = isEditMode
    ? "cursor-pointer hover:bg-gray-100 px-2 py-[1px] rounded"
    : "";

  const sections = [
    {
      index: 1,
      component: <PersonalDetailsPreview />,
      condition: true,
    },
    {
      index: 2,
      component: <SummaryPreview />,
      condition: true,
    },
    {
      index: 3,
      component: <ExperiencePreview />,
      condition: formData?.experience?.length > 0,
    },
    {
      index: 4,
      component: <EducationalPreview />,
      condition: formData?.education?.length > 0,
    },
    {
      index: 5,
      component: <SkillsPreview />,
      condition: formData?.skills?.length > 0,
    },
  ];

  return (
    <>
      {sections.map(
        ({ index, component, condition }) =>
          condition && (
            <div
              key={index}
              onClick={isEditMode ? () => setActiveFormIndex(index) : undefined}
              className={interactiveClass}
            >
              {component}
            </div>
          )
      )}
    </>
  );
}
