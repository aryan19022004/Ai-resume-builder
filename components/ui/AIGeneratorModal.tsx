"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { generateContentAction } from "@/lib/actions/ai.actions";
import { Loader2, Wand2 } from "lucide-react";
import { useToast } from "./use-toast";

interface AIGeneratorModalProps {
  sectionType: "Summary" | "Experience" | "Skills" | "Education";
  onApply: (content: string) => void;
  defaultRole?: string;
  trigger?: React.ReactNode;
}

const AIGeneratorModal: React.FC<AIGeneratorModalProps> = ({
  sectionType,
  onApply,
  defaultRole = "",
  trigger,
}) => {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [role, setRole] = useState(defaultRole);
  const [generatedContent, setGeneratedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!topic || !role) {
      toast({
        title: "Missing Fields",
        description: "Please provide both your role and topic.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    const res = await generateContentAction(topic, role, sectionType);
    if (res.success && res.data) {
      setGeneratedContent(res.data);
    } else {
      toast({
        title: "Error",
        description: res.error || "Failed to generate content.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleApply = () => {
    onApply(generatedContent);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm" type="button" className="gap-2">
            <Wand2 className="h-4 w-4" />
            Generate with AI
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Generate {sectionType} Content</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Your Role / Job Title</label>
            <Input
              placeholder="e.g. Software Engineer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Topic / Keywords</label>
            <Input
              placeholder={
                sectionType === "Experience"
                  ? "e.g. Built a REST API with Node.js"
                  : "e.g. Full-stack development, React"
              }
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <Button type="button" onClick={handleGenerate} disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate
          </Button>

          {generatedContent && (
            <div className="flex flex-col gap-2 mt-4 space-y-2">
              <label className="text-sm font-medium">Generated Content</label>
              <Textarea
                rows={6}
                value={generatedContent}
                onChange={(e) => setGeneratedContent(e.target.value)}
                className="w-full"
              />
              <Button type="button" onClick={handleApply}>
                Use this Content
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AIGeneratorModal;
