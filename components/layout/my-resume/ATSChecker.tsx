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
import { CheckCircle, Loader2, GaugeCircle, XCircle } from "lucide-react";
import { checkATSScoreAction } from "@/lib/actions/ai.actions";
import { useFormContext } from "@/lib/context/FormProvider";

export default function ATSChecker() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const { formData } = useFormContext();

  const handleCheck = async () => {
    setLoading(true);
    setResult(null);
    const res = await checkATSScoreAction(formData);
    if (res.success) {
      setResult(res.data);
    } else {
      setResult({ error: res.error });
    }
    setLoading(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="shadow-md bg-white hover:bg-slate-50 font-semibold gap-2"
        >
          <GaugeCircle className="text-primary h-5 w-5" />
          ATS Score
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-slate-50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <GaugeCircle className="text-primary h-6 w-6" /> ATS Resume Analysis
          </DialogTitle>
        </DialogHeader>

        {!result && !loading && (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-muted-foreground mb-6 text-center">
              Our AI evaluates your resume against standard ATS algorithms.
            </p>
            <Button onClick={handleCheck} className="gap-2" size="lg">
              Check My Score
            </Button>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
            <p className="text-muted-foreground animate-pulse">Running ATS simulation...</p>
          </div>
        )}

        {result && !result.error && (
          <div className="space-y-6 pt-4">
            <div className="flex justify-center flex-col items-center gap-2 bg-white p-6 rounded-2xl shadow-sm border">
              <span className="text-lg font-medium text-slate-500">Overall Match Score</span>
              <div className={`text-6xl font-black ${getScoreColor(result.score)} tracking-tighter`}>
                {result.score}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Keywords Match", val: result.keywordsMatch },
                { label: "Formatting", val: result.formatting },
                { label: "Readability", val: result.readability },
                { label: "Skills Relevance", val: result.skillsRelevance },
                { label: "Experience Quality", val: result.experienceQuality },
              ].map((item, i) => (
                <div key={i} className="flex flex-col p-3 bg-white border rounded-xl shadow-sm">
                  <span className="text-xs text-muted-foreground font-semibold uppercase">{item.label}</span>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getScoreColor(item.val).replace('text-', 'bg-')}`}
                        style={{ width: `${item.val}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold w-8 text-right">{item.val}%</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white p-5 border rounded-2xl shadow-sm">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" /> How to Improve
              </h3>
              <ul className="space-y-2">
                {result.suggestions?.map((sugg: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{sugg}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <Button onClick={handleCheck} variant="outline" className="gap-2">
                <GaugeCircle className="h-4 w-4" /> Recalculate
              </Button>
            </div>
          </div>
        )}

        {result?.error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
            <XCircle className="h-5 w-5" />
            API LIMIT reached. You have exceeded your free tier limits. Please try AGAIN After 48 hours.
          </div>
        )}

      </DialogContent>
    </Dialog>
  );
}
