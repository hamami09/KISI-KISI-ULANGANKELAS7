import React, { useState } from "react";
import { Question } from "../types";
import { HelpCircle, CheckCircle2, XCircle, Award, RotateCcw, AlertCircle, ArrowRight, ChevronRight, BookOpen } from "lucide-react";

interface InteractiveQuizProps {
  questions: Question[];
  title: string;
  onClose: () => void;
}

export default function InteractiveQuiz({ questions, title, onClose }: InteractiveQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasSelectedActive, setHasSelectedActive] = useState(false);

  // If there are no questions configured yet
  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center space-y-4 border border-slate-150">
        <AlertCircle className="h-12 w-12 text-slate-400 mx-auto" />
        <h3 className="text-lg font-bold text-slate-800">Tidak ada latihan soal tersedia</h3>
        <p className="text-sm text-slate-500">Pilih subjek atau gunakan Penulis AI untuk menghasilkan bank kuis baru!</p>
        <button onClick={onClose} className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-xl text-sm">
          Kembali ke Dasbor
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (optionLetter: string) => {
    if (selectedAnswers[currentIndex] !== undefined) return; // Prevent changing after choosing
    
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionLetter,
    }));
    setHasSelectedActive(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setHasSelectedActive(false);
    } else {
      setIsSubmitted(true);
    }
  };

  // Score metrics
  const totalCorrect = questions.reduce((acc, q, idx) => {
    const chosen = selectedAnswers[idx];
    return chosen === q.correctAnswer ? acc + 1 : acc;
  }, 0);

  const score = Math.round((totalCorrect / questions.length) * 100);

  // Encouragements
  const getBadgeDetails = (scoreVal: number) => {
    if (scoreVal === 100) return { title: "Pendidik Ulung (Sempurna)", color: "text-emerald-600 bg-emerald-50 border-emerald-100", desc: "Luar biasa! Anda menguasai seluruh indikator soal HOTS dengan sangat gemilang." };
    if (scoreVal >= 80) return { title: "Siswa Berprestasi", color: "text-blue-600 bg-blue-50 border-blue-100", desc: "Sangat baik! Pemahaman materi Anda sangat kokoh dan siap menghadapi ujian nyata." };
    if (scoreVal >= 60) return { title: "Cendekia Muda", color: "text-orange-600 bg-orange-50 border-orange-100", desc: "Bagus! Teruskan membaca ringkasan materi untuk menyempurnakan jawaban Anda." };
    return { title: "Pejuang Tangguh", color: "text-rose-600 bg-rose-50 border-rose-100", desc: "Jangan patah semangat! Pelajari kisi-kisi dan coba kuis ini sekali lagi." };
  };

  const badge = getBadgeDetails(score);

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setHasSelectedActive(false);
  };

  return (
    <div className="space-y-6" id="interactive-quiz-canvas">
      {/* Quiz Progress & Navigation Header with Frosted Glass */}
      <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-5 shadow-lg flex items-center justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            Kuis Ujian Interaktif
          </span>
          <h3 className="text-sm font-extrabold text-slate-800 line-clamp-1">{title}</h3>
        </div>
        {!isSubmitted && (
          <div className="text-right">
            <span className="font-mono text-xs font-bold text-slate-600 bg-white/60 border border-white/40 px-3 py-1.5 rounded-lg shadow-2xs">
              Soal {currentIndex + 1} dari {questions.length}
            </span>
          </div>
        )}
      </div>

      {!isSubmitted ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Question and options card with Frosted Glass */}
          <div className="lg:col-span-2 backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 shadow-xl space-y-6">
            {/* Progress bar */}
            <div className="w-full bg-white/40 h-1.5 rounded-full overflow-hidden border border-white/30 shadow-inner">
              <div
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Text */}
            <div className="space-y-3">
              <span className="bg-blue-100/70 text-blue-900 border border-blue-200/50 font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-md uppercase">
                Kompetensi HOTS
              </span>
              <p className="text-sm font-bold leading-relaxed text-slate-800">
                {currentQuestion.questionText}
              </p>
            </div>

            {/* Options list */}
            <div className="space-y-3">
              {currentQuestion.options.map((option, idx) => {
                const letter = option.charAt(0); // usually A, B, C, D
                const isSelected = selectedAnswers[currentIndex] === letter;
                const otherSelected = selectedAnswers[currentIndex] !== undefined && !isSelected;
                const isCorrect = letter === currentQuestion.correctAnswer;
                
                let btnStyle = "border-white/30 hover:bg-white/50 text-slate-705 bg-white/35 shadow-xs";
                let iconEl = null;

                if (selectedAnswers[currentIndex] !== undefined) {
                  if (isSelected) {
                    if (isCorrect) {
                      btnStyle = "border-emerald-400 bg-emerald-55/40 text-emerald-900 font-bold shadow-sm";
                      iconEl = <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />;
                    } else {
                      btnStyle = "border-rose-400 bg-rose-55/40 text-rose-900 font-bold shadow-sm";
                      iconEl = <XCircle className="h-5 w-5 text-rose-600 shrink-0" />;
                    }
                  } else {
                    if (isCorrect) {
                      // Highlight correct answer if user got it wrong
                      btnStyle = "border-emerald-400/40 bg-emerald-500/10 text-emerald-900/90 font-bold animate-pulse";
                    } else {
                      btnStyle = "border-white/10 bg-white/10 text-slate-450 opacity-50";
                    }
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedAnswers[currentIndex] !== undefined}
                    onClick={() => handleSelectOption(letter)}
                    className={`w-full text-left p-4 rounded-2xl border flex items-center justify-between gap-3 text-xs font-semibold transition-all duration-200 cursor-pointer ${btnStyle}`}
                    id={`option-btn-${letter}`}
                  >
                    <span className="leading-relaxed">{option}</span>
                    {iconEl}
                  </button>
                );
              })}
            </div>

            {/* Next trigger actions */}
            {selectedAnswers[currentIndex] !== undefined && (
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase transition shadow-md cursor-pointer animate-fade-in"
                  id="btn-next-question"
                >
                  {currentIndex < questions.length - 1 ? (
                    <>
                      Pertanyaan Berikutnya
                      <ChevronRight className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Kirim & Lihat Hasil Ujian
                      <Award className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Column Checklist / Instant Discussion Card with Frosted Glass */}
          <div className="backdrop-blur-md bg-white/40 border border-white/40 rounded-3xl p-6 shadow-lg space-y-4">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest flex items-center gap-1.5 border-b border-white/30 pb-2">
              <BookOpen className="h-4 w-4 text-orange-500" />
              Pojok Pembahasan
            </h4>

            {selectedAnswers[currentIndex] === undefined ? (
              <div className="text-center py-10 text-xs text-slate-400 space-y-2">
                <HelpCircle className="h-8 w-8 text-slate-300 mx-auto animate-pulse" />
                <p className="font-normal font-sans">Pilihlah salah satu jawaban untuk memperlihatkan kunci & penjelasan di sini secara langsung!</p>
              </div>
            ) : (
              <div className="space-y-3 text-xs leading-relaxed">
                <div className="flex items-center gap-2">
                  <span className={`font-bold px-2.5 py-0.5 rounded-md text-[10px] border ${
                    selectedAnswers[currentIndex] === currentQuestion.correctAnswer
                      ? "bg-emerald-500/10 text-emerald-900 border-emerald-500/20"
                      : "bg-rose-500/10 text-rose-900 border-rose-500/20"
                  }`}>
                    {selectedAnswers[currentIndex] === currentQuestion.correctAnswer ? "Jawaban Benar! 🎉" : "Kurang Tepat 💡"}
                  </span>
                  <span className="text-slate-400 font-bold font-mono">Kunci: {currentQuestion.correctAnswer}</span>
                </div>
                <div className="p-3.5 bg-white/60 rounded-2xl leading-relaxed text-slate-650 space-y-2 border border-white/50 shadow-sm">
                  <strong className="text-slate-800 block text-[10px] uppercase tracking-wider font-extrabold pb-1 border-b border-white/50">Pembahasan Rinci:</strong>
                  <p className="italic">"{currentQuestion.explanation}"</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Results sheet with beautiful frosted score counters */
        <div className="backdrop-blur-md bg-white/45 border border-white/45 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl" id="quiz-result-sheet">
          {/* Big Score Medal */}
          <div className="text-center max-w-md mx-auto space-y-4">
            <div className={`inline-block p-4 rounded-full border-2 ${badge.color} shadow-lg shadow-blue-500/5`}>
              <Award className="h-12 w-12 text-current" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-850">Hasil Evaluasi Belajar</h3>
              <p className="text-xs text-slate-500 font-medium">Nilai Anda dihitung berdasarkan kaidah ketuntasan minimal.</p>
            </div>

            {/* Big Score text with frosted segment */}
            <div className="bg-white/50 backdrop-blur-md py-6 rounded-3xl border border-white/50 shadow-inner">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                Akumulasi Nilai Akhir
              </span>
              <span className={`text-5xl font-black ${score >= 70 ? "text-emerald-600" : "text-orange-500"}`}>
                {score}
              </span>
              <span className="text-slate-400 text-sm font-bold"> / 100</span>

              <div className="flex justify-center gap-6 mt-4 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                  Benar: {totalCorrect}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-450"></span>
                  Salah: {questions.length - totalCorrect}
                </div>
              </div>
            </div>

            {/* Badge Title */}
            <div className={`p-4 rounded-2xl border text-center ${badge.color} shadow-xs`}>
              <strong className="block text-xs uppercase tracking-wide font-extrabold">{badge.title}</strong>
              <p className="text-xs mt-1 font-semibold opacity-95 leading-relaxed">{badge.desc}</p>
            </div>
          </div>

          {/* Review Sheet segment */}
          <div className="space-y-4 border-t border-white/45 pt-6">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Review Kisi-Kisi & Pembenahan Jawaban:</h4>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userChoice = selectedAnswers[idx];
                const isCorrect = userChoice === q.correctAnswer;
                return (
                  <div key={idx} className={`p-4 rounded-2xl border text-sm space-y-2 shadow-xs ${
                    isCorrect ? "bg-emerald-500/5 border-emerald-500/20" : "bg-rose-500/5 border-rose-500/20"
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-slate-800 text-xs font-mono">Soal {idx + 1}</span>
                      <span className={`font-bold text-[10px] px-2.5 py-0.5 rounded-md border ${
                        isCorrect ? "bg-emerald-100 text-emerald-850 border-emerald-200/50" : "bg-rose-100 text-rose-850 border-rose-200/50"
                      }`}>
                        {isCorrect ? "Benar" : `Salah (Pilihan Anda: ${userChoice || "-"})`}
                      </span>
                    </div>
                    <p className="text-xs text-slate-800 font-bold leading-relaxed">{q.questionText}</p>
                    <div className="text-xs text-slate-500 space-y-1">
                      <span className="font-extrabold text-slate-700 block text-[10px] font-mono">Kunci Jawaban: {q.correctAnswer}</span>
                      <p className="bg-white/55 p-3 rounded-xl border border-slate-100/80 mt-2 italic leading-relaxed text-slate-650 font-medium">
                        <strong>Analisis Jawaban:</strong> {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Control Button Footer */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
            <button
              onClick={handleReset}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/75 hover:bg-white border border-white/60 text-slate-700 font-bold px-6 py-3 rounded-xl transition text-xs uppercase tracking-wide cursor-pointer shadow-sm"
              id="btn-retry-quiz"
            >
              <RotateCcw className="h-4 w-4" />
              Ulangi Kuis
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition text-xs uppercase tracking-wide cursor-pointer shadow-md"
              id="btn-return-dashboard"
            >
              Kembali ke Menu Utama
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
