import React from "react";
import { useFormContext } from "@/lib/context/FormProvider";
import { themeColors } from "@/lib/utils";

export default function CreativeTemplate({ isEditMode }: { isEditMode: boolean }) {
  const { formData, setActiveFormIndex } = useFormContext();
  const theme = formData?.themeColor || themeColors[0];

  const interactiveClass = isEditMode
    ? "cursor-pointer hover:ring-2 hover:ring-slate-300 rounded transition-all"
    : "";

  return (
    <div className="font-sans flex h-full -mx-12 -my-12">
      {/* LEFT PANEL */}
      <div 
        className="w-[35%] p-6 text-white"
        style={{ backgroundColor: theme }}
      >
        <div 
          className={`mb-8 ${interactiveClass}`}
          onClick={isEditMode ? () => setActiveFormIndex(1) : undefined}
        >
          <div className="w-24 h-24 mb-4 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mx-auto">
             <span className="text-3xl font-black">{formData?.firstName?.[0]}{formData?.lastName?.[0]}</span>
          </div>
          <h1 className="text-2xl font-bold text-center tracking-tight leading-tight">
            {formData?.firstName} <br/> {formData?.lastName}
          </h1>
          <p className="text-center text-white/80 text-sm mt-2 font-medium tracking-wide uppercase">
            {formData?.jobTitle}
          </p>
        </div>

        <div 
          className={`mb-8 space-y-3 text-xs opacity-90 ${interactiveClass}`}
          onClick={isEditMode ? () => setActiveFormIndex(1) : undefined}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-2">Contact</h2>
          {formData?.phone && <p>📞 {formData?.phone}</p>}
          {formData?.email && <p>✉️ {formData?.email}</p>}
          {formData?.address && <p>📍 {formData?.address}</p>}
        </div>

        {formData?.skills?.length > 0 && (
          <div 
            className={`mb-8 ${interactiveClass}`}
            onClick={isEditMode ? () => setActiveFormIndex(5) : undefined}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData?.skills?.map((skill: any, index: number) => (
                <span key={index} className="bg-white/20 px-2 py-1 rounded text-xs font-medium">
                  {skill?.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {formData?.education?.length > 0 && (
          <div 
            className={`mb-8 ${interactiveClass}`}
            onClick={isEditMode ? () => setActiveFormIndex(4) : undefined}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 mb-3">Education</h2>
            <div className="space-y-4">
              {formData?.education?.map((edu: any, index: number) => (
                <div key={index}>
                  <p className="font-bold text-sm leading-tight">{edu?.degree}</p>
                  <p className="text-xs opacity-80 mt-1">{edu?.universityName}</p>
                  <p className="text-xs opacity-70 italic">{edu?.startDate} - {edu?.endDate || "Present"}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 p-8 bg-white overflow-hidden">
        {formData?.summary && (
          <div 
            className={`mb-8 ${interactiveClass}`}
            onClick={isEditMode ? () => setActiveFormIndex(2) : undefined}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-1" style={{ backgroundColor: theme }}></div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest">Profile</h2>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed pl-4">{formData?.summary}</p>
          </div>
        )}

        {formData?.experience?.length > 0 && (
          <div 
            className={interactiveClass}
            onClick={isEditMode ? () => setActiveFormIndex(3) : undefined}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-8 w-1" style={{ backgroundColor: theme }}></div>
              <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest">Experience</h2>
            </div>
            
            <div className="space-y-6 pl-4 border-l-2 ml-1" style={{ borderColor: theme + '40' }}>
              {formData?.experience?.map((exp: any, index: number) => (
                <div key={index} className="relative">
                  <div className="absolute w-3 h-3 rounded-full -left-[23px] top-1" style={{ backgroundColor: theme }}></div>
                  <h3 className="font-bold text-lg text-slate-800 leading-tight">{exp?.title}</h3>
                  <div className="text-sm font-medium mb-2 mt-1" style={{ color: theme }}>
                    {exp?.companyName} <span className="text-slate-400 font-normal ml-2">| {exp?.startDate} - {exp?.endDate || "Present"}</span>
                  </div>
                  {exp?.workSummary && (
                    <div
                      className="text-xs text-slate-600 leading-relaxed font-sans form-preview pr-4"
                      dangerouslySetInnerHTML={{ __html: exp?.workSummary }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
