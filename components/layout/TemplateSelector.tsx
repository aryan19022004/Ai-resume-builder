"use client";

import { useFormContext } from "@/lib/context/FormProvider";
import { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LayoutTemplate, Check } from "lucide-react";
import { updateResume } from "@/lib/actions/resume.actions";
import { useToast } from "../ui/use-toast";

const templatesList = [
  { id: "modern", name: "Modern Outline" },
  { id: "minimal", name: "Minimal Clean" },
  { id: "corporate", name: "Corporate Strong" },
  { id: "creative", name: "Creative Left-Panel" }
];

const TemplateSelector = ({ params }: { params: { id: string } }) => {
  const { toast } = useToast();
  const { formData, handleInputChange } = useFormContext();
  const [selectedLayout, setSelectedLayout] = useState("modern");

  useEffect(() => {
    if (formData?.template) {
      setSelectedLayout(formData.template);
    }
  }, [formData?.template]);

  const onTemplateSelect = async (templateId: string) => {
    setSelectedLayout(templateId);

    handleInputChange({
      target: {
        name: "template",
        value: templateId,
      },
    });

    const result = await updateResume({
      resumeId: params.id,
      updates: {
        template: templateId,
      },
    });

    if (result.success) {
      toast({
        title: "Template applied.",
        description: `Switched layout successfully.`,
        className: "bg-white",
      });
    } else {
      toast({
        title: "Uh Oh! Something went wrong.",
        description: result?.error,
        variant: "destructive",
        className: "bg-white",
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" className="flex gap-2 shadow-sm bg-white font-medium hover:bg-slate-50">
          <LayoutTemplate className="h-4 w-4 text-primary" /> Template
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56">
        <h2 className="mb-3 text-sm font-bold text-slate-800">Select Resume Style</h2>
        <div className="flex flex-col gap-2">
          {templatesList.map((item) => (
            <button
              key={item.id}
              onClick={() => onTemplateSelect(item.id)}
              className={`flex items-center justify-between p-2.5 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium border ${selectedLayout === item.id ? 'bg-primary/5 text-primary border-primary/30' : 'border-slate-100'}`}
            >
              {item.name}
              {selectedLayout === item.id && <Check className="h-4 w-4" />}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TemplateSelector;
