import React, { useState } from "react";
import { CurriculumBlueprint, Topic, Question } from "../types";
import { BookOpen, FileCheck, Layers, HelpCircle, GraduationCap, ChevronDown, ChevronUp, AlertCircle, Play } from "lucide-react";

interface SubjectDashboardProps {
  blueprint: CurriculumBlueprint;
  onLaunchQuiz: (questions: Question[], title: string) => void;
}

export default function SubjectDashboard({ blueprint, onLaunchQuiz }: SubjectDashboardProps) {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(0);
  const [masteredIndicators, setMasteredIndicators] = useState<Record<string, boolean>>({});

  const toggleTopic = (index: number) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  const toggleIndicatorMastery = (indicatorKey: string) => {
    setMasteredIndicators((prev) => ({
      ...prev,
      [indicatorKey]: !prev[indicatorKey],
    }));
  };

  // Calculate readiness percentage based on indicators checked
  const allIndicators = blueprint.topics.flatMap((t) => t.indicators);
  const masteredCount = allIndicators.filter((ind) => masteredIndicators[ind]).length;
  const readinessPercent = allIndicators.length > 0 ? Math.round((masteredCount / allIndicators.length) * 100) : 0;

  return (
    <div className="space-y-6" id="subject-dashboard-container">
      {/* Subject Header with Frosted Glass */}
      <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
              Kurikulum Merdeka • Kelas 7 Semester 2
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-850 tracking-tight">{blueprint.subjectName}</h2>
        </div>

        <button
          onClick={() => onLaunchQuiz(blueprint.sampleQuestions, blueprint.subjectName)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition duration-200 shadow-md text-sm cursor-pointer"
          id="btn-start-curated-quiz"
        >
          <Play className="h-4 w-4 fill-white" />
          Mulai Kuis Interaktif
        </button>
      </div>

      {/* Capaian Pembelajaran with elegant soft glass container */}
      <div className="backdrop-blur-xl bg-white/50 border border-white/40 rounded-3xl p-6 shadow-lg" id="capaian-pembelajaran-card">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider">Capaian Pembelajaran (CP)</h3>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed font-semibold italic bg-white/40 p-4 rounded-2xl border border-white/50">
          "{blueprint.capaianPembelajaran}"
        </p>
      </div>

      {/* Topics & Indikator Soal Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Topics Breakdown */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 pl-1 mt-1">
              Materi Pokok & Indikator Soal (HOTS)
            </h4>
            <span className="text-[10px] text-slate-400 font-bold">Klik salah satu materi untuk melihat indikator kuis</span>
          </div>

          <div className="space-y-3">
            {blueprint.topics.map((topic, index) => {
              const isExpanded = expandedTopic === index;
              return (
                <div
                  key={index}
                  className={`backdrop-blur-md rounded-2xl border transition-all duration-300 ${
                    isExpanded 
                      ? "bg-white/70 border-blue-400/60 shadow-xl ring-4 ring-blue-500/10" 
                      : "bg-white/35 hover:bg-white/50 border-white/30"
                  }`}
                  id={`topic-card-${index}`}
                >
                  {/* Topic Trigger */}
                  <button
                    onClick={() => toggleTopic(index)}
                    className="w-full text-left p-5 flex justify-between items-start gap-4 cursor-pointer"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-800 font-mono text-[10px] font-bold px-2.5 py-1 rounded-md">
                          Materi {index + 1}
                        </span>
                        <h4 className="font-extrabold text-slate-800 text-sm tracking-tight">{topic.name}</h4>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-1">{topic.description}</p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-slate-550 shrink-0 mt-1" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-550 shrink-0 mt-1" />
                    )}
                  </button>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-white/40 space-y-4">
                      <div>
                        <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                          Deskripsi Pembelajaran:
                        </h5>
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">{topic.description}</p>
                      </div>

                      <div className="space-y-2">
                        <h5 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <FileCheck className="h-3.5 w-3.5 text-blue-600" />
                          Indikator Soal Berbasis Kompetensi (HOTS):
                        </h5>
                        <p className="text-[11px] text-slate-400 font-normal">
                          Gunakan kriteria ini untuk melatih kedalaman belajar mandiri. Centang untuk mencatat penguasaan materi:
                        </p>
                        <div className="space-y-2 bg-white/45 p-3 rounded-xl border border-white/60">
                          {topic.indicators.map((indicator, indIdx) => {
                            const uniqueKey = `${blueprint.subjectId}-${index}-${indIdx}`;
                            const isMastered = !!masteredIndicators[uniqueKey];
                            return (
                              <label
                                key={indIdx}
                                className={`flex items-start gap-3 p-3 rounded-xl transition duration-150 cursor-pointer text-xs ${
                                  isMastered
                                    ? "bg-emerald-500/10 text-emerald-900 border border-emerald-500/20 font-bold"
                                    : "hover:bg-white/50 text-slate-700 border border-transparent"
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={isMastered}
                                  onChange={() => toggleIndicatorMastery(uniqueKey)}
                                  className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300 cursor-pointer"
                                />
                                <span className="leading-relaxed font-medium">{indicator}</span>
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Mini Tracker & Sample Question Preview */}
        <div className="space-y-6">
          {/* Progress Card with Frosted Glass */}
          <div className="backdrop-blur-md bg-white/40 border border-white/40 rounded-3xl p-5 shadow-lg space-y-4" id="readiness-tracker">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-2">
              <Layers className="h-4 w-4 text-blue-600" />
              Tingkat Kesiapan Ulangan
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-slate-600 font-medium">
                <span>Indikator Dikuasai:</span>
                <span className="font-bold text-slate-800">
                  {masteredCount} dari {allIndicators.length}
                </span>
              </div>
              <div className="w-full bg-white/50 h-3 rounded-full overflow-hidden border border-white/50 shadow-inner">
                <div
                  className="bg-emerald-500 h-full rounded-full transition-all duration-500 ease-out shadow-xs"
                  style={{ width: `${readinessPercent}%` }}
                ></div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-slate-500 bg-white/50 p-2.5 rounded-xl border border-white/40 mt-2">
                <AlertCircle className="h-3.5 w-3.5 text-slate-450 shrink-0" />
                <span>
                  Centang indikator soal di samping setelah Anda memahami cara menyelesaikannya!
                </span>
              </div>
            </div>
          </div>

          {/* Sample Questions Preview Card with Frosted Glass */}
          <div className="backdrop-blur-md bg-white/40 border border-white/40 rounded-3xl p-5 shadow-lg space-y-3" id="sample-questions-preview">
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5">
                <HelpCircle className="h-4 w-4 text-orange-500" />
                Draf Latihan Soal
              </h4>
              <span className="bg-orange-100 text-orange-850 font-bold text-[10px] px-2.5 py-0.5 rounded-md border border-orange-200/50">
                {blueprint.sampleQuestions.length} Soal
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-1 font-medium">
              Latihan soal mewakili sampel asli kisi-kisi Kurikulum Merdeka yang siap diujikan.
            </p>

            <div className="space-y-2">
              {blueprint.sampleQuestions.map((q, idx) => (
                <div key={idx} className="p-3 bg-white/60 border border-white/50 rounded-xl text-xs space-y-1.5">
                  <div className="flex items-start justify-between gap-1">
                    <span className="font-bold text-slate-700 font-mono text-[10px]">Soal {idx + 1} (HOTS)</span>
                    <span className="text-[9px] bg-slate-200/75 text-slate-600 font-bold px-1.5 py-0.5 rounded">
                      Kunci: {q.correctAnswer}
                    </span>
                  </div>
                  <p className="text-slate-650 leading-relaxed italic">"{q.questionText}"</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => onLaunchQuiz(blueprint.sampleQuestions, blueprint.subjectName)}
              className="mt-2 w-full text-center bg-white/70 hover:bg-white border border-white/50 text-slate-700 text-xs font-bold py-2.5 rounded-xl transition duration-150 shadow-sm cursor-pointer"
            >
              Uji Kemampuan di Quiz Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
