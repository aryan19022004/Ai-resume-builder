import React from "react";
import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";

export default function MinimalTemplate({ isEditMode }: { isEditMode: boolean }) {
  const { formData, setActiveFormIndex } = useFormContext();
  const theme = formData?.themeColor || themeColors[0];

  const interactiveClass = isEditMode
    ? "cursor-pointer hover:bg-gray-50 px-2 py-1 rounded transition-colors"
    : "";

  return (
    <div className="font-sans text-slate-800">
      {/* 1. Personal Details */}
      <div 
        className={`mb-6 pb-4 border-b-2 ${interactiveClass}`}
        style={{ borderColor: theme }}
        onClick={isEditMode ? () => setActiveFormIndex(1) : undefined}
      >
        <h1 className="text-3xl font-light tracking-wide uppercase">
          {formData?.firstName} <span className="font-semibold" style={{ color: theme }}>{formData?.lastName}</span>
        </h1>
        <p className="text-lg text-slate-500 mt-1">{formData?.jobTitle}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-slate-500">
          {formData?.address && <span>{formData?.address}</span>}
          {formData?.phone && <span>• {formData?.phone}</span>}
          {formData?.email && <span>• {formData?.email}</span>}
        </div>
      </div>

      {/* 2. Summary */}
      {formData?.summary && (
        <div 
          className={`mb-6 ${interactiveClass}`}
          onClick={isEditMode ? () => setActiveFormIndex(2) : undefined}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Profile</h2>
          <p className="text-sm leading-relaxed">{formData?.summary}</p>
        </div>
      )}

      {/* 3. Experience */}
      {formData?.experience?.length > 0 && (
        <div 
          className={`mb-6 ${interactiveClass}`}
          onClick={isEditMode ? () => setActiveFormIndex(3) : undefined}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Experience</h2>
          <div className="space-y-4">
            {formData?.experience?.map((exp: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold text-md">{exp?.title}</h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {exp?.startDate} - {exp?.endDate || "Present"}
                  </span>
                </div>
                <div className="text-sm font-medium mb-2" style={{ color: theme }}>
                  {exp?.companyName} {exp?.city && `, ${exp?.city}`} {exp?.state && `, ${exp?.state}`}
                </div>
                {exp?.workSummary && (
                  <div
                    className="text-xs text-slate-600 leading-relaxed list-disc list-inside form-preview"
                    dangerouslySetInnerHTML={{ __html: exp?.workSummary }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Education */}
      {formData?.education?.length > 0 && (
        <div 
          className={`mb-6 ${interactiveClass}`}
          onClick={isEditMode ? () => setActiveFormIndex(4) : undefined}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Education</h2>
          <div className="space-y-3">
            {formData?.education?.map((edu: any, index: number) => (
              <div key={index}>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-semibold">{edu?.universityName}</h3>
                  <span className="text-xs text-slate-500 font-medium">
                    {edu?.startDate} - {edu?.endDate || "Present"}
                  </span>
                </div>
                <p className="text-sm" style={{ color: theme }}>
                  {edu?.degree} in {edu?.major}
                </p>
                <p className="text-xs text-slate-500 mt-1">{edu?.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Skills */}
      {formData?.skills?.length > 0 && (
        <div 
          className={interactiveClass}
          onClick={isEditMode ? () => setActiveFormIndex(5) : undefined}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {formData?.skills?.map((skill: any, index: number) => (
              <span 
                key={index} 
                className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-700 border"
              >
                {skill?.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
