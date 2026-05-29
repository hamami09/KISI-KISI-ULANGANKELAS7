/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { curriculumDatabase } from "./curriculumData";
import { CurriculumBlueprint, Question } from "./types";
import SubjectDashboard from "./components/SubjectDashboard";
import AIPenulis from "./components/AIPenulis";
import InteractiveQuiz from "./components/InteractiveQuiz";
import { 
  GraduationCap, 
  Sparkles, 
  FileText, 
  Award, 
  Calculator, 
  Milestone, 
  Languages, 
  MapPin, 
  Compass, 
  BookOpen, 
  BrainCircuit, 
  Smile, 
  ListTodo,
  Download
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"standard" | "ai" | "quiz">("standard");
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("matematika");
  
  // Quiz variables
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizTitle, setQuizTitle] = useState<string>("");

  // Populate initial quiz questions based on default subject so the Quiz tab has content by default
  const defaultSubject = curriculumDatabase.find((c) => c.subjectId === "matematika");
  
  useEffect(() => {
    if (defaultSubject) {
      setQuizQuestions(defaultSubject.sampleQuestions);
      setQuizTitle(`Kuis Evaluasi - ${defaultSubject.subjectName}`);
    }
  }, []);

  const handleSelectSubject = (id: string) => {
    setSelectedSubjectId(id);
    setActiveTab("standard"); // Redirect back to standard tab when changing standard subjects
  };

  const handleLaunchQuiz = (questions: Question[], title: string) => {
    setQuizQuestions(questions);
    setQuizTitle(title);
    setActiveTab("quiz");
  };

  // Get active blueprint item
  const activeBlueprint = curriculumDatabase.find((c) => c.subjectId === selectedSubjectId) || curriculumDatabase[0];

  // Helper mapping for Subject Icons
  const getSubjectIcon = (id: string) => {
    switch (id) {
      case "matematika":
        return <Calculator className="h-5 w-5 text-blue-600" />;
      case "ipa":
        return <BrainCircuit className="h-5 w-5 text-emerald-600" />;
      case "bahasa_indonesia":
        return <BookOpen className="h-5 w-5 text-orange-600" />;
      case "ips":
        return <Compass className="h-5 w-5 text-teal-600" />;
      case "ppkn":
        return <Milestone className="h-5 w-5 text-rose-600" />;
      case "bahasa_inggris":
        return <Languages className="h-5 w-5 text-pink-600" />;
      default:
        return <FileText className="h-5 w-5 text-slate-600" />;
    }
  };

  // Export current blueprint to JSON file directly
  const handleExportJSON = (blueprint: CurriculumBlueprint) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(blueprint, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `kisi-kisi-${blueprint.subjectId}-smp7-semester2.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col font-sans relative overflow-x-hidden" id="applet-viewport">
      {/* Mesh Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-150 rounded-full mix-blend-multiply filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-150 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      {/* Premium Header with Frosted Glass */}
      <header className="sticky top-0 z-40 w-full border-b border-white/40 bg-white/30 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-600 text-white p-2 rounded-xl shadow-lg">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-sm font-black text-slate-800 tracking-tight flex items-center gap-1.5">
                Merdeka Assistant
              </h1>
              <p className="text-[10px] font-semibold text-slate-500">
                Aplikasi Logika Panduan & Evaluasi SMP Kelas 7 Semester 2
              </p>
            </div>
          </div>
          
          {/* Subtle decoration */}
          <div className="hidden sm:flex items-center gap-1.5 bg-white/55 border border-white/40 rounded-full px-3 py-1 text-[11px] text-slate-600 font-medium shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Kurikulum Merdeka 2026/2527</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 space-y-6 z-10">
        
        {/* Welcome Hero Panel with Frosted Glass */}
        <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl">
          <div className="space-y-1.5 max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-1.5">
              Halo Rekan Pendidik & Siswa! <Smile className="h-5 w-5 text-amber-500 shrink-0" />
            </h2>
            <p className="text-xs text-slate-650 leading-relaxed font-normal">
              Selamat datang di asisten cerdas penyusunan kisi-kisi ulangan harian secara interaktif untuk mendukung implementasi 
              <strong> Kurikulum Merdeka SMP Kelas 7 Semester 2</strong>. Jelajahi standar kompetensi atau berkolaborasi dengan AI untuk memicu kreativitas belajar.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto shrink-0">
            <button
              onClick={() => handleExportJSON(activeBlueprint)}
              className="flex items-center justify-center gap-1.5 flex-1 md:flex-none bg-white hover:bg-slate-50 text-slate-705 font-semibold px-4 py-2.5 rounded-xl border border-white/50 transition text-xs shadow-md"
              title="Unduh Kisi-Kisi Aktif dalam format JSON"
            >
              <Download className="h-3.5 w-3.5" />
              Ekspor JSON Aktif
            </button>
          </div>
        </div>

        {/* Master Navigation & Tabs Selector with stateful translucent glass buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/40 pb-1">
          <div className="flex flex-wrap gap-1 bg-white/30 backdrop-blur-sm border border-white/35 p-1 rounded-2xl">
            <button
              onClick={() => {
                setActiveTab("standard");
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "standard"
                  ? "bg-white/90 text-blue-800 hover:bg-white shadow-sm border border-white/50"
                  : "text-slate-600 hover:text-slate-850 hover:bg-white/20"
              }`}
            >
              <FileText className="h-3.5 w-3.5 text-blue-600" />
              Nama Kisi-Kisi & Panduan Sekolah
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "ai"
                  ? "bg-white/95 text-indigo-950 hover:bg-white shadow-sm border border-white/50"
                  : "text-slate-650 hover:text-slate-850 hover:bg-white/20"
              }`}
              id="tab-ai-writer"
            >
              <Sparkles className="h-3.5 w-3.5 text-indigo-500 animate-pulse" />
              Penyusun Kustom AI
            </button>

            <button
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === "quiz"
                  ? "bg-white/95 text-orange-950 hover:bg-white shadow-sm border border-white/50"
                  : "text-slate-655 hover:text-slate-850 hover:bg-white/20"
              }`}
              id="tab-quiz-hub"
            >
              <Award className="h-3.5 w-3.5 text-orange-500" />
              Kuis Interaktif Hub
            </button>
          </div>

          <div className="text-slate-500 text-xs font-bold font-mono bg-white/40 backdrop-blur-xs px-3 py-1 rounded-md border border-white/30 select-none">
            Status: Terverifikasi Kemdikbudristek
          </div>
        </div>

        {/* Dynamic Display Area with Glass panels */}
        {activeTab === "standard" && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Sidebar Subject Switcher */}
            <div className="space-y-3 md:col-span-1">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1 mb-2">
                Pilihan Subjek (Semester 2)
              </h3>
              <div className="space-y-2">
                {curriculumDatabase.map((blueprint) => {
                  const isActive = blueprint.subjectId === selectedSubjectId;
                  return (
                    <button
                      key={blueprint.subjectId}
                      onClick={() => handleSelectSubject(blueprint.subjectId)}
                      className={`w-full text-left p-3.5 rounded-2xl border flex items-center gap-3 transition-all cursor-pointer ${
                        isActive
                          ? "bg-white/95 text-blue-800 font-bold shadow-lg border-white/50"
                          : "bg-white/40 hover:bg-white/60 border-white/20 text-slate-650"
                      }`}
                      id={`subject-select-${blueprint.subjectId}`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${isActive ? "bg-blue-100 text-blue-700" : "bg-white/60"}`}>
                        {getSubjectIcon(blueprint.subjectId)}
                      </div>
                      <div className="space-y-0.5 overflow-hidden">
                        <span className="text-sm block font-semibold truncate text-slate-800">{blueprint.subjectName}</span>
                        <span className="text-[10px] text-slate-450 font-normal block">
                          {blueprint.topics.length} Materi Pokok
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Sidebar Quick Tip Card with Blue gradient */}
              <div className="mt-8 p-4 bg-gradient-to-br from-blue-500/90 to-indigo-600/95 rounded-2xl text-white shadow-md">
                <p className="text-xs opacity-90 mb-2 font-normal">Butuh kisi-kisi topik kustom siswa?</p>
                <p className="font-bold text-sm mb-3">Tanya AI Kurikulum</p>
                <button
                  onClick={() => setActiveTab("ai")}
                  className="w-full py-2 bg-white/25 hover:bg-white/35 backdrop-blur-md rounded-xl text-xs font-bold border border-white/20 text-white transition-all"
                >
                  Mulai Susun AI
                </button>
              </div>
            </div>

            {/* Main Area: Subject Viewer Dashboard */}
            <div className="md:col-span-3">
              <SubjectDashboard 
                blueprint={activeBlueprint} 
                onLaunchQuiz={handleLaunchQuiz} 
              />
            </div>
          </div>
        )}

        {activeTab === "ai" && (
          <AIPenulis onLoadCustomQuiz={handleLaunchQuiz} />
        )}

        {activeTab === "quiz" && (
          <InteractiveQuiz 
            questions={quizQuestions} 
            title={quizTitle} 
            onClose={() => setActiveTab("standard")} 
          />
        )}

      </main>

      <footer className="border-t border-white/20 bg-white/20 backdrop-blur-md py-6 mt-12 text-center text-[10px] text-slate-500 font-medium">
        <p>© 2026 Asisten Kurikulum Merdeka SMP. Dikembangkan secara profesional untuk pendidikan yang berkemajuan di Indonesia.</p>
      </footer>
    </div>
  );
}
