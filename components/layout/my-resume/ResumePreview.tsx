"use client";

import React from "react";
import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";
import { usePathname } from "next/navigation";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import CorporateTemplate from "./templates/CorporateTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";

const ResumePreview = ({ download = false }) => {
  const { formData } = useFormContext();
  const pathname = usePathname();

  const isEditMode = pathname.endsWith("/edit");

  if (Object.keys(formData || {}).length === 0) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-[210mm] min-h-[297mm] rounded-sm shadow-lg skeleton" />
      </div>
    );
  }

  const renderTemplate = () => {
    switch (formData?.template) {
      case "minimal":
        return <MinimalTemplate isEditMode={isEditMode} />;
      case "corporate":
        return <CorporateTemplate isEditMode={isEditMode} />;
      case "creative":
        return <CreativeTemplate isEditMode={isEditMode} />;
      case "modern":
      default:
        return <ModernTemplate isEditMode={isEditMode} />;
    }
  };

  const isModern = formData?.template === "modern" || !formData?.template;

  return (
    <div className="flex items-center justify-center relative">
      <div
        id="resume-preview-export"
        className={`${
          download ? "p-12 mb-0 shadow-none border-none" : "p-12 mb-20 shadow-xl"
        } ${isModern ? "border-t-[20px]" : ""} bg-white w-[210mm] min-h-[297mm] print:shadow-none print:w-auto overflow-hidden relative break-words`}
        style={{
          borderColor: isModern ? (formData?.themeColor || themeColors[0]) : "transparent",
        }}
      >
        {renderTemplate()}
      </div>
    </div>
  );
};

export default ResumePreview;
