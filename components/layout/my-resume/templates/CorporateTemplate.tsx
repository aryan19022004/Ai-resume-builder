import React from "react";
import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";

export default function CorporateTemplate({ isEditMode }: { isEditMode: boolean }) {
  const { formData, setActiveFormIndex } = useFormContext();
  const theme = formData?.themeColor || themeColors[0];

  const interactiveClass = isEditMode
    ? "cursor-pointer hover:bg-black/5 hover:-m-1 hover:p-1 rounded transition-colors"
    : "";

  return (
    <div className="font-serif">
      {/* 1. Header Area with Background */}
      <div 
        className={`text-white p-8 -mx-12 -mt-12 mb-6 ${interactiveClass}`}
        style={{ backgroundColor: theme }}
        onClick={isEditMode ? () => setActiveFormIndex(1) : undefined}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-1">
          {formData?.firstName} {formData?.lastName}
        </h1>
        <p className="text-lg opacity-90">{formData?.jobTitle}</p>
        
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-xs font-sans opacity-80">
          {formData?.address && <span>{formData?.address}</span>}
          {formData?.phone && <span>{formData?.phone}</span>}
          {formData?.email && <span>{formData?.email}</span>}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_200px] gap-8">
        <div className="space-y-6">
          {/* 2. Summary */}
          {formData?.summary && (
            <div 
              className={interactiveClass}
              onClick={isEditMode ? () => setActiveFormIndex(2) : undefined}
            >
              <h2 className="text-lg font-bold border-b-2 border-slate-200 mb-3 pb-1 uppercase tracking-wider" style={{ color: theme }}>
                Professional Summary
              </h2>
              <p className="text-sm font-sans text-slate-700 leading-relaxed">{formData?.summary}</p>
            </div>
          )}

          {/* 3. Experience */}
          {formData?.experience?.length > 0 && (
            <div 
              className={interactiveClass}
              onClick={isEditMode ? () => setActiveFormIndex(3) : undefined}
            >
              <h2 className="text-lg font-bold border-b-2 border-slate-200 mb-4 pb-1 uppercase tracking-wider" style={{ color: theme }}>
                Experience
              </h2>
              <div className="space-y-5">
                {formData?.experience?.map((exp: any, index: number) => (
                  <div key={index}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-md text-slate-800">{exp?.title}</h3>
                      <span className="text-xs font-sans text-slate-500 font-bold whitespace-nowrap">
                        {exp?.startDate} – {exp?.endDate || "Present"}
                      </span>
                    </div>
                    <div className="text-sm italic text-slate-600 mb-2">
                      {exp?.companyName}
                      {(exp?.city || exp?.state) && " | "}
                      {exp?.city}{exp?.city && exp?.state && ", "}{exp?.state}
                    </div>
                    {exp?.workSummary && (
                      <div
                        className="text-xs font-sans text-slate-700 leading-relaxed form-preview"
                        dangerouslySetInnerHTML={{ __html: exp?.workSummary }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {/* 4. Education */}
          {formData?.education?.length > 0 && (
            <div 
              className={interactiveClass}
              onClick={isEditMode ? () => setActiveFormIndex(4) : undefined}
            >
              <h2 className="text-lg font-bold border-b-2 border-slate-200 mb-3 pb-1 uppercase tracking-wider" style={{ color: theme }}>
                Education
              </h2>
              <div className="space-y-4">
                {formData?.education?.map((edu: any, index: number) => (
                  <div key={index}>
                    <h3 className="font-bold text-sm text-slate-800">{edu?.universityName}</h3>
                    <p className="text-xs italic text-slate-600 my-1">
                      {edu?.degree} in {edu?.major}
                    </p>
                    <span className="text-xs font-sans text-slate-500">
                      {edu?.startDate} – {edu?.endDate || "Present"}
                    </span>
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
              <h2 className="text-lg font-bold border-b-2 border-slate-200 mb-3 pb-1 uppercase tracking-wider" style={{ color: theme }}>
                Core Skills
              </h2>
              <ul className="list-square list-inside space-y-1 font-sans">
                {formData?.skills?.map((skill: any, index: number) => (
                  <li key={index} className="text-sm text-slate-700">
                    <span className="font-semibold">{skill?.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
