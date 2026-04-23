"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Briefcase, Loader2, Target, Wand2 } from "lucide-react";
import { optimizeForJobAction } from "@/lib/actions/ai.actions";
import { useFormContext } from "@/lib/context/FormProvider";
import { Badge } from "@/components/ui/badge";

export default function JobOptimizer() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jd, setJd] = useState("");
  const [result, setResult] = useState<any>(null);
  const { formData } = useFormContext();

  const handleOptimize = async () => {
    if (!jd) return;
    setLoading(true);
    setResult(null);
    const res = await optimizeForJobAction(formData, jd);
    if (res.success) {
      setResult(res.data);
    } else {
      setResult({ error: res.error });
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="shadow-md bg-white hover:bg-slate-50 font-semibold gap-2 border-primary/20"
        >
          <Target className="text-primary h-5 w-5" />
          Job Target Match
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] h-[80vh] overflow-y-auto bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="text-primary h-6 w-6" /> Tailor for Job
          </DialogTitle>
        </DialogHeader>

        {!result && !loading && (
          <div className="flex flex-col gap-4 py-4 h-full">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Paste the Job Description</label>
              <Textarea 
                placeholder="Paste the job description here (responsibilities, requirements)..." 
                className="h-64 resize-none"
                value={jd}
                onChange={(e) => setJd(e.target.value)}
              />
            </div>
            <Button onClick={handleOptimize} className="gap-2 shadow-lg" size="lg" disabled={!jd}>
              <Wand2 className="h-5 w-5" /> Analyze & Optimize
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse text-lg">AI is analyzing missing gaps...</p>
          </div>
        )}

        {result && !result.error && (
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border">
              <div className="flex flex-col items-center">
                <span className="text-sm text-slate-500 font-semibold mb-1">Match Rate</span>
                <div className="w-24 h-24 rounded-full border-8 border-primary/20 flex items-center justify-center">
                  <span className="text-3xl font-black text-primary">{result.matchScore}%</span>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h4 className="font-semibold text-slate-800">Missing Keywords to Add</h4>
                <div className="flex flex-wrap gap-2">
                  {result.missingKeywords?.map((kw: string, i: number) => (
                    <Badge key={i} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200">
                      {kw}
                    </Badge>
                  ))}
                  {result.missingKeywords?.length === 0 && (
                    <span className="text-sm text-green-600">You hit all the keywords!</span>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white p-5 border rounded-2xl shadow-sm space-y-4">
              <h3 className="font-bold border-b pb-2 text-slate-800">Summary Suggestion</h3>
              <p className="text-sm text-slate-600 italic bg-primary/5 p-4 rounded-lg border border-primary/10">
                "{result.summarySuggestion}"
              </p>
            </div>

            <div className="bg-white p-5 border rounded-2xl shadow-sm space-y-4">
              <h3 className="font-bold border-b pb-2 text-slate-800">Experience Re-writes</h3>
              <ul className="space-y-3">
                {result.experienceSuggestions?.map((sugg: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-3 p-2 hover:bg-slate-50 rounded-md">
                    <Wand2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span>{sugg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button onClick={() => setResult(null)} variant="outline">
                Edit Job Description
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
