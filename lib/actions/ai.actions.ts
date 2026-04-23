"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export const generateContentAction = async (
  topic: string,
  role: string,
  sectionType: "Summary" | "Experience" | "Skills" | "Education"
) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = "";
    if (sectionType === "Summary") {
      prompt = `Write a professional resume summary for a ${role} focusing on ${topic}. Keep it between 3 to 4 impactful sentences. Do not use bullet points. Only output the summary text.`;
    } else if (sectionType === "Experience") {
      prompt = `Write 3 to 4 professional resume bullet points for a ${role} with experience involving ${topic}. Focus on achievements and metrics. Output ONLY the bullet points, formatted as text with each line starting with a bullet character (•).`;
    } else if (sectionType === "Skills") {
      prompt = `Suggest a comma-separated list of 10-15 highly relevant skills for a ${role} specializing in ${topic}. Output ONLY the comma-separated list.`;
    } else if (sectionType === "Education") {
      prompt = `Write a brief 1-2 sentence description for a degree or educational achievement related to ${topic} for a ${role}. Only output the text.`;
    }

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return { success: true, data: response.text() };
  } catch (error: any) {
    console.error("AI Generation Error:", error);
    let errMsg = error.message || "Failed to generate content.";
    if (errMsg.toLowerCase().includes("429") || errMsg.toLowerCase().includes("quota")) {
      errMsg = "API LIMIT reached. You have exceeded your free tier limits. Please try again later.";
    }
    return { success: false, error: errMsg };
  }
};

export const checkATSScoreAction = async (resumeData: any) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are an expert ATS (Applicant Tracking System) evaluating a resume.
      Analyze the following resume data:
      ${JSON.stringify(resumeData)}

      Score the resume out of 100 based on standard ATS metrics. Provide a JSON response EXACTLY in this format, with no markdown code blocks outside of the JSON itself:
      {
        "score": 85,
        "keywordsMatch": 80,
        "formatting": 90,
        "readability": 85,
        "skillsRelevance": 88,
        "experienceQuality": 82,
        "suggestions": [
          "Include more action verbs.",
          "Add quantitative metrics to experience."
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();
    
    // Clean up potential markdown formatting from Gemini response
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    return { success: true, data: JSON.parse(text) };
  } catch (error: any) {
    console.error("ATS Checking Error:", error);
    let errMsg = error.message || "Failed to analyze resume.";
    if (errMsg.toLowerCase().includes("429") || errMsg.toLowerCase().includes("quota")) {
      errMsg = "API LIMIT reached. You have exceeded your free tier limits. Please try again later.";
    }
    return { success: false, error: errMsg };
  }
};

export const optimizeForJobAction = async (resumeData: any, jobDescription: string) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are an expert career coach and ATS optimization tool.
      Analyze the following resume data against this Job Description:
      
      Resume: ${JSON.stringify(resumeData)}
      
      Job Description: ${jobDescription}

      Provide your analysis as a JSON object EXACTLY in this format, with no markdown code blocks outside of the JSON itself:
      {
        "matchScore": 75,
        "missingKeywords": ["Docker", "Kubernetes", "AWS"],
        "summarySuggestion": "A rewritten summary tailored to the job description...",
        "experienceSuggestions": [
          "Suggested rewrite for experience bullet 1...",
          "Suggested additional point highlighting relevant skill..."
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    return { success: true, data: JSON.parse(text) };
  } catch (error: any) {
    console.error("Job Optimization Error:", error);
    let errMsg = error.message || "Failed to optimize resume.";
    if (errMsg.toLowerCase().includes("429") || errMsg.toLowerCase().includes("quota")) {
      errMsg = "API LIMIT reached. You have exceeded your free tier limits. Please try again later.";
    }
    return { success: false, error: errMsg };
  }
};
