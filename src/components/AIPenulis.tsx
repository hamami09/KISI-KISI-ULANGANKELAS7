import React, { useState } from "react";
import { Sparkles, ArrowRight, Printer, Copy, CheckCircle, FileText, Download, Code, GraduationCap, AlertTriangle, RefreshCw } from "lucide-react";
import { CurriculumBlueprint, RevisionSummary, Question } from "../types";

interface AIPenulisProps {
  onLoadCustomQuiz: (questions: Question[], title: string) => void;
}

type ModeType = "blueprint" | "summary" | "quiz";

export default function AIPenulis({ onLoadCustomQuiz }: AIPenulisProps) {
  const [selectedSubject, setSelectedSubject] = useState("Matematika");
  const [customTopic, setCustomTopic] = useState("");
  const [generationMode, setGenerationMode] = useState<ModeType>("blueprint");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // States to preserve generated outputs
  const [generatedBlueprint, setGeneratedBlueprint] = useState<CurriculumBlueprint | null>(null);
  const [generatedSummary, setGeneratedSummary] = useState<RevisionSummary | null>(null);
  const [generatedQuiz, setGeneratedQuiz] = useState<Question[] | null>(null);
  const [copied, setCopied] = useState(false);
  const [showJson, setShowJson] = useState(false);

  const subjects = [
    "Matematika",
    "Ilmu Pengetahuan Alam (IPA)",
    "Bahasa Indonesia",
    "Ilmu Pengetahuan Sosial (IPS)",
    "Pendidikan Pancasila dan Kewarganegaraan (PPKn)",
    "Bahasa Inggris"
  ];

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentTopicQuery = customTopic.trim() || "Materi Pelajaran Semester 2";

  const triggerGeneration = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);
    setGeneratedBlueprint(null);
    setGeneratedSummary(null);
    setGeneratedQuiz(null);
    setShowJson(false);

    let endpoint = "";
    if (generationMode === "blueprint") endpoint = "/api/generate/blueprint";
    else if (generationMode === "summary") endpoint = "/api/generate/summary";
    else if (generationMode === "quiz") endpoint = "/api/generate/quiz";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subjectId: selectedSubject.toLowerCase().replace(/[^a-z]/g, "_"),
          subjectName: selectedSubject,
          topicName: currentTopicQuery,
          count: 5 // Default for quiz questions count
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error HTTP: status ${response.status}`);
      }

      const data = await response.json();

      if (generationMode === "blueprint") {
        setGeneratedBlueprint(data);
      } else if (generationMode === "summary") {
        setGeneratedSummary(data);
      } else if (generationMode === "quiz") {
        setGeneratedQuiz(data);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || "Gagal menghubungi modul AI. Silakan coba sebentar lagi.");
    } finally {
      setLoading(false);
    }
  };

  // Printing dynamic view helper
  const handlePrint = (title: string, htmlContent: string) => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Popup blocker menghalangi pembukaan halaman cetak. Izinkan popup untuk mencetak.");
      return;
    }
    printWindow.document.write(`
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #1e293b; line-height: 1.6; }
            h1 { font-size: 24px; color: #1e3a8a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 20px; }
            h2 { font-size: 18px; color: #0f172a; margin-top: 30px; margin-bottom: 10px; }
            h3 { font-size: 14px; text-transform: uppercase; color: #475569; margin-top: 20px; letter-spacing: 0.5px; }
            p { font-size: 14px; margin-bottom: 15px; text-align: justify; }
            ul { margin-bottom: 20px; padding-left: 20px; font-size: 14px; }
            li { margin-bottom: 8px; }
            .box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-bottom: 20px; }
            .badge { display: inline-block; background-color: #dbeafe; color: #1e40af; font-size: 12px; font-weight: bold; padding: 3px 8px; border-radius: 4px; margin-bottom: 10px; }
            .qa-box { border-left: 4px solid #3b82f6; padding-left: 15px; margin-bottom: 25px; }
            .qa-title { font-weight: bold; font-size: 14px; }
            .qa-options { list-style-type: none; padding-left: 0; }
            .explanation { font-style: italic; color: #475569; font-size: 13px; background: #f1f5f9; padding: 10px; border-radius: 4px; margin-top: 5px; }
            @media print {
              body { padding: 0; }
              button { display: none; }
            }
          </style>
        </head>
        <body>
          <button onclick="window.print()" style="padding: 10px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold; margin-bottom: 20px;">Cetak Dokumen Sekarang</button>
          ${htmlContent}
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const formatBlueprintForPrint = () => {
    if (!generatedBlueprint) return "";
    return `
      <h1>KISI-KISI & CETAKAN ULANGAN HARIAN</h1>
      <div class="box">
        <strong>Subjek:</strong> ${generatedBlueprint.subjectName}<br/>
        <strong>Kurikulum:</strong> Kurikulum Merdeka (Kelas 7 Semester 2)
      </div>
      <h2>Capaian Pembelajaran (CP)</h2>
      <p>${generatedBlueprint.capaianPembelajaran}</p>
      
      <h2>Materi Pokok & Indikator Soal</h2>
      ${generatedBlueprint.topics.map((t, i) => `
        <div class="box">
          <div class="badge">Materi ${i + 1}: ${t.name}</div>
          <p>${t.description}</p>
          <h3>Indikator Butir Soal (HOTS)</h3>
          <ul>
            ${t.indicators.map((ind) => `<li>${ind}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
      
      <h2>Sampel Butir Soal</h2>
      ${generatedBlueprint.sampleQuestions.map((q, i) => `
        <div class="qa-box">
          <div class="qa-title">Soal ${i + 1}: ${q.questionText}</div>
          <ul class="qa-options">
            ${q.options.map((opt) => `<li>${opt}</li>`).join("")}
          </ul>
          <p><strong>Kunci Jawaban:</strong> ${q.correctAnswer}</p>
          <div class="explanation"><strong>Penjelasan:</strong> ${q.explanation}</div>
        </div>
      `).join("")}
    `;
  };

  const formatSummaryForPrint = () => {
    if (!generatedSummary) return "";
    return `
      <h1>RINGKASAN REVISI KILAT (STUDY SHEET)</h1>
      <div class="box">
        <strong>Materi:</strong> ${generatedSummary.title}<br/>
        <strong>Subjek:</strong> ${generatedSummary.subjectName} | Kurikulum Merdeka SMP 7 Semester 2
      </div>
      <p><em>${generatedSummary.overview}</em></p>
      
      ${generatedSummary.sections.map((sec) => `
        <h2>${sec.title}</h2>
        <p>${sec.content}</p>
        <h3>Poin Kilat & Rumus Penting:</h3>
        <ul>
          ${sec.keyPoints.map((kp) => `<li>${kp}</li>`).join("")}
        </ul>
      `).join("")}
    `;
  };

  return (
    <div className="space-y-6" id="ai-generator-panel">
      {/* Input Generator Form with elegant Frosted Glass styling */}
      <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-blue-600 animate-pulse" />
          <h3 className="text-lg font-black text-slate-800 tracking-tight">Platform AI Penyusun Kurikulum & Soal</h3>
        </div>

        <form onSubmit={triggerGeneration} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Subject Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 pl-1">
                Pilih Subjek Dasar
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full bg-white/50 backdrop-blur-md border border-white/60 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-550/20 focus:border-blue-400 cursor-pointer font-medium"
              >
                {subjects.map((sub, i) => (
                  <option key={i} value={sub}>
                    {sub}
                  </option>
                ))}
              </select>
            </div>

            {/* Custom Input */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1.5 pl-1">
                Topik Kustom / Sub-Materi Spesifik (Kurikulum Merdeka)
              </label>
              <input
                type="text"
                placeholder="Misal: Perbandingan Berbalik Nilai, Ekologi Rimba, atau Adjective Order"
                value={customTopic}
                onChange={(e) => setCustomTopic(e.target.value)}
                className="w-full bg-white/50 backdrop-blur-md border border-white/60 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-555/20 focus:border-blue-400 placeholder:text-slate-400 font-medium"
              />
            </div>
          </div>

          {/* Selector Mode */}
          <div>
            <span className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-1">
              Jenis Dokumen yang Ingin Digenerasikan Oleh AI:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setGenerationMode("blueprint")}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  generationMode === "blueprint"
                    ? "bg-white text-blue-900 border-white/60 font-bold shadow-md"
                    : "bg-white/20 border-white/10 text-slate-650 hover:bg-white/40"
                }`}
              >
                <div className="text-xs font-extrabold uppercase tracking-wide text-blue-800 mb-1">📋 Kisi-Kisi Ulangan</div>
                <div className="text-[11px] text-slate-500 font-medium">Analisis CP, Indikator & 3 Soal HOTS</div>
              </button>

              <button
                type="button"
                onClick={() => setGenerationMode("summary")}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  generationMode === "summary"
                    ? "bg-white text-indigo-950 border-white/60 font-bold shadow-md"
                    : "bg-white/20 border-white/10 text-slate-650 hover:bg-white/40"
                }`}
              >
                <div className="text-xs font-extrabold uppercase tracking-wide text-indigo-800 mb-1">📖 Ringkasan Materi</div>
                <div className="text-[11px] text-slate-500 font-medium">Materi padat, Rumus, & Cheat Sheet materi kilat</div>
              </button>

              <button
                type="button"
                onClick={() => setGenerationMode("quiz")}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  generationMode === "quiz"
                    ? "bg-white text-orange-950 border-white/60 font-bold shadow-md"
                    : "bg-white/20 border-white/10 text-slate-650 hover:bg-white/40"
                }`}
              >
                <div className="text-xs font-extrabold uppercase tracking-wide text-orange-850 mb-1">🎯 Bank Kuis Kustom</div>
                <div className="text-[11px] text-slate-500 font-medium">5 Soal Interaktif untuk dicoba langsung</div>
              </button>
            </div>
          </div>

          {/* Action Trigger Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl transition duration-200 disabled:opacity-50 text-xs tracking-wide uppercase cursor-pointer shadow-md"
          >
            {loading ? (
              <>
                <RefreshCw className="h-4 w-4 animate-spin" />
                Mengolah Kompetensi Menggunakan Gemini AI...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Susun & Terbitkan Kurikulum Merdeka Sekarang
              </>
            )}
          </button>
        </form>
      </div>

      {/* Secret Warn Alert */}
      {errorMsg && (
        <div className="backdrop-blur-md bg-rose-500/10 border border-rose-500/20 text-rose-950 rounded-3xl p-5 flex items-start gap-4 mt-4">
          <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-extrabold text-sm tracking-tight text-rose-900">Gagal Menyusun Materi Otomatis</h4>
            <p className="text-xs text-rose-800 leading-relaxed font-semibold">
              Ada kekeliruan saat mendiskusikan kurikulum dengan kecerdasan Gemini. Apabila isu ini mengenai kunci rahasia (API Key), 
              harap diingat bahwa <strong>API key Anda dapat ditemukan di panel Settings &gt; Secrets</strong> pada sudut kiri atas editor Google AI Studio. 
              Sistem akan membaca pengaturan tersebut secara otomatis untuk menjalankan panggilan server-side.
            </p>
            <p className="text-[10px] text-rose-600/80 font-mono">
              Pesan Kesalahan Teknis: {errorMsg}
            </p>
          </div>
        </div>
      )}

      {/* Generated Blueprint Renderer */}
      {generatedBlueprint && (
        <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 shadow-xl space-y-6" id="generated-blueprint-sheet">
          {/* Header Action Control */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/40 pb-4">
            <div>
              <span className="text-[10px] bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 font-bold px-2.5 py-0.5 rounded-md">
                AI Berhasil Terbit
              </span>
              <h3 className="text-lg font-black text-slate-800 mt-1">
                Kisi-Kisi: {generatedBlueprint.subjectName} ({currentTopicQuery})
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyText(JSON.stringify(generatedBlueprint, null, 2))}
                className="px-3 py-2 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
                title="Salin JSON Struktural"
              >
                {copied ? <CheckCircle className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-slate-600" />}
                Salin JSON
              </button>

              <button
                onClick={() => handlePrint(`Kisi-Kisi - ${generatedBlueprint.subjectName}`, formatBlueprintForPrint())}
                className="px-3 py-2 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
                title="Print Lembar Ulangan"
              >
                <Printer className="h-4 w-4 text-slate-600" />
                Cetak Cetakan
              </button>

              <button
                onClick={() => setShowJson(!showJson)}
                className="px-3 py-2 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
              >
                <Code className="h-4 w-4 text-slate-600" />
                {showJson ? "Tutup Data" : "Lihat JSON"}
              </button>
            </div>
          </div>

          {/* Raw JSON viewer */}
          {showJson && (
            <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto max-h-80 border border-slate-950 shadow-inner">
              <pre>{JSON.stringify(generatedBlueprint, null, 2)}</pre>
            </div>
          )}

          {/* Rendered Display Sheet */}
          <div className="space-y-4">
            <div className="bg-white/40 border border-white/50 p-4 rounded-xl shadow-xs">
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Konteks Capaian Pembelajaran (CP) Baru
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed font-semibold italic">"{generatedBlueprint.capaianPembelajaran}"</p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Uraian Kisi-Kisi Kompetensi:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedBlueprint.topics.map((t, idx) => (
                  <div key={idx} className="bg-white/60 border border-white/50 p-4 rounded-2xl space-y-3 shadow-xs">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100/70 text-blue-900 border border-blue-200/50 font-bold px-2 py-0.5 rounded text-[10px]">
                        Subtopik {idx + 1}
                      </span>
                      <h5 className="font-bold text-slate-800 text-sm tracking-tight">{t.name}</h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{t.description}</p>
                    <div className="space-y-1.5 pt-1.5 border-t border-slate-100/50">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Indikator Butir Soal HOTS:</span>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 leading-relaxed font-medium">
                        {t.indicators.map((ind, i) => (
                          <li key={i}>{ind}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Sample Questions */}
            <div className="space-y-3 border-t border-white/40 pt-4">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">3 Butir Sampel Soal yang Disusun:</h4>
              <div className="space-y-4">
                {generatedBlueprint.sampleQuestions.map((q, idx) => (
                  <div key={idx} className="border border-white/50 p-4 rounded-2xl space-y-2.5 text-sm bg-white/70 shadow-sm">
                    <div className="flex items-start justify-between">
                      <span className="font-extrabold text-slate-800 text-xs font-mono">Soal {idx + 1} (HOTS)</span>
                      <span className="bg-blue-100/70 text-blue-900 border border-blue-200/50 font-bold text-[10px] px-2.5 py-0.5 rounded-md">
                        Kunci: {q.correctAnswer}
                      </span>
                    </div>
                    <p className="text-xs text-slate-800 font-bold leading-relaxed">{q.questionText}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
                      {q.options.map((opt, oIdx) => (
                        <div key={oIdx} className="text-xs text-slate-600 bg-white/50 border border-slate-100 p-2.5 rounded-xl font-medium">
                          {opt}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 italic bg-white/50 p-2.5 rounded-xl border border-slate-100 mt-2">
                      <strong>Penjelasan Analisis:</strong> {q.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Generated Summary Renderer */}
      {generatedSummary && (
        <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 shadow-xl space-y-6" id="generated-summary-sheet">
          {/* Header Action Control */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/40 pb-4">
            <div>
              <span className="text-[10px] bg-indigo-500/10 text-indigo-900 border border-indigo-500/20 font-bold px-2.5 py-0.5 rounded-md">
                AI Ringkasan Terbit
              </span>
              <h3 className="text-lg font-black text-slate-800 mt-1">
                {generatedSummary.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleCopyText(JSON.stringify(generatedSummary, null, 2))}
                className="px-3 py-2 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
                title="Salin JSON"
              >
                {copied ? <CheckCircle className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                Salin JSON
              </button>

              <button
                onClick={() => handlePrint(generatedSummary.title, formatSummaryForPrint())}
                className="px-3 py-2 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
              >
                <Printer className="h-4 w-4 text-slate-600" />
                Cetak Ringkasan
              </button>

              <button
                onClick={() => setShowJson(!showJson)}
                className="px-3 py-2 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
              >
                <Code className="h-4 w-4" />
                {showJson ? "Tutup Data" : "Lihat JSON"}
              </button>
            </div>
          </div>

          {/* Raw JSON viewer */}
          {showJson && (
            <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto max-h-80 border border-slate-950">
              <pre>{JSON.stringify(generatedSummary, null, 2)}</pre>
            </div>
          )}

          <div className="space-y-6">
            <p className="text-slate-750 font-medium leading-relaxed italic bg-white/30 p-4 rounded-2xl border border-white/40 text-xs">
              "{generatedSummary.overview}"
            </p>

            <div className="space-y-6">
              {generatedSummary.sections.map((sec, i) => (
                <div key={i} className="border-l-4 border-indigo-500 pl-4 space-y-2">
                  <h4 className="font-extrabold text-slate-800 text-base tracking-tight">{sec.title}</h4>
                  <p className="text-xs text-slate-650 leading-relaxed whitespace-pre-wrap font-medium">{sec.content}</p>
                  
                  {sec.keyPoints && sec.keyPoints.length > 0 && (
                    <div className="bg-white/45 p-3 rounded-xl border border-white/50 mt-2 space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-indigo-800 block mb-1">
                        Poin Kilat & Istilah Kunci (Cheat Sheet):
                      </span>
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1 font-medium">
                        {sec.keyPoints.map((kp, kIdx) => (
                          <li key={kIdx} className="leading-relaxed">{kp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Generated Quiz MCQ Renderer */}
      {generatedQuiz && (
        <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 shadow-xl space-y-5" id="generated-quiz-sheet">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/40 pb-4">
            <div>
              <span className="text-[10px] bg-orange-100/70 text-orange-900 border border-orange-200/50 font-bold px-2.5 py-0.5 rounded-md">
                AI Bank Soal Terbit
              </span>
              <h3 className="text-lg font-black text-slate-800 mt-1">
                Latihan Soal Kustom: {selectedSubject}
              </h3>
              <p className="text-xs text-slate-500 font-bold mt-0.5">
                Total Soal: {generatedQuiz.length} butir • Sesuai kisi-kisi "{currentTopicQuery}"
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onLoadCustomQuiz(generatedQuiz, `${selectedSubject} - ${currentTopicQuery}`)}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition duration-150 flex items-center gap-1.5 shadow-md cursor-pointer"
              >
                <GraduationCap className="h-4 w-4" />
                Mulai Kerjakan di Quiz Hub
              </button>

              <button
                onClick={() => setShowJson(!showJson)}
                className="px-3 py-2.5 bg-white/70 hover:bg-white border border-white/60 rounded-xl text-slate-705 transition flex items-center gap-1.5 text-xs font-bold shadow-xs cursor-pointer"
              >
                <Code className="h-4 w-4" />
                {showJson ? "Sembunyikan" : "JSON"}
              </button>
            </div>
          </div>

          {/* Raw JSON viewer */}
          {showJson && (
            <div className="bg-slate-900 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto max-h-80 border border-slate-950">
              <pre>{JSON.stringify(generatedQuiz, null, 2)}</pre>
            </div>
          )}

          {/* List of generated questions */}
          <div className="space-y-4">
            {generatedQuiz.map((q, idx) => (
              <div key={idx} className="p-4 bg-white/60 border border-white/50 rounded-2xl space-y-2.5 text-sm shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-800 text-xs font-mono">Pertanyaan Ke-{idx + 1}</span>
                  <span className="bg-orange-100/70 text-orange-900 border border-orange-200/50 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    Kunci: {q.correctAnswer}
                  </span>
                </div>
                <p className="text-xs text-slate-800 font-bold leading-relaxed">{q.questionText}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-1">
                  {q.options.map((opt, oIdx) => (
                    <div key={oIdx} className="text-xs bg-white/55 p-2.5 rounded-xl border border-slate-100 text-slate-650 font-medium">
                      {opt}
                    </div>
                  ))}
                </div>
                <div className="bg-white/50 p-3 rounded-xl border border-slate-100 mt-2 text-xs text-slate-500 leading-relaxed font-semibold">
                  <strong>Pembahasan Solusi:</strong> {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
