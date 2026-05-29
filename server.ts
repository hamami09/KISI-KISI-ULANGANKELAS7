import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import { curriculumDatabase } from "./src/curriculumData";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded Gemini client helper
let aiClient: GoogleGenAI | null = null;
function getGemini(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// 1. Static Reference Curriculum API
app.get("/api/curriculum", (req, res) => {
  try {
    res.json(curriculumDatabase);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// 2. AI Generator: Kisi-Kisi / Blueprints (Kurikulum Merdeka Grade 7 Semester 2)
app.post("/api/generate/blueprint", async (req, res) => {
  const { subjectId, subjectName, topicName } = req.body;
  if (!subjectName || !topicName) {
    return res.status(400).json({ error: "Missing required parameters: subjectName and topicName" });
  }

  try {
    const ai = getGemini();
    const systemPrompt = `Anda adalah seorang ahli Penyusun Kurikulum (Curriculum Developer) Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Indonesia yang sangat akrab dengan kaidah Kurikulum Merdeka untuk SMP Kelas 7 Semester 2. 
Format keluaran HARUS berupa objek JSON tunggal yang memuat Kisi-Kisi Ulangan (Curriculum Blueprint). 
Bahasa yang digunakan wajib Bahasa Indonesia yang baku, akademis, namun mudah dipahami guru dan siswa.

Subjek: ${subjectName}
Topik Kustom: ${topicName}

Pastikan Capaian Pembelajaran (CP) relevan dengan materi Semester 2 kelas 7.
Gunakan format HOTS (Higher Order Thinking Skills) untuk pembuatan indikator soal (C4 Analisis, C5 Evaluasi, atau C6 Kreasi).
Buat 3 soal pilihan ganda yang sangat kontekstual, menarik, dan menantang (HOTS) dengan pilihan jawaban A, B, C, D lengkap dengan kunci jawaban dan analisis pembahasan pedagogis yang mendalam.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["subjectId", "subjectName", "capaianPembelajaran", "topics", "sampleQuestions"],
          properties: {
            subjectId: { type: Type.STRING, description: "ID subjek dalam huruf kecil tanpa spasi" },
            subjectName: { type: Type.STRING, description: "Nama subjek lengkap" },
            capaianPembelajaran: { type: Type.STRING, description: "Deskripsi Capaian Pembelajaran (CP) semester 2 kurikulum merdeka untuk topik ini" },
            topics: {
              type: Type.ARRAY,
              description: "Daftar subtopik/materi pokok yang diuraikan",
              items: {
                type: Type.OBJECT,
                required: ["name", "description", "indicators"],
                properties: {
                  name: { type: Type.STRING, description: "Nama subtopik/materi pokok kustom" },
                  description: { type: Type.STRING, description: "Penjelasan ringkas materi" },
                  indicators: {
                    type: Type.ARRAY,
                    description: "Daftar indikator soal berbasis HOTS",
                    items: { type: Type.STRING }
                  }
                }
              }
            },
            sampleQuestions: {
              type: Type.ARRAY,
              description: "Tepat 3 latihan soal pilihan ganda (MCQ)",
              items: {
                type: Type.OBJECT,
                required: ["id", "questionText", "options", "correctAnswer", "explanation"],
                properties: {
                  id: { type: Type.STRING, description: "ID unik soal seperti q1, q2, q3" },
                  questionText: { type: Type.STRING, description: "Pertanyaan yang kontekstual, berbasis cerita (case-based) atau studi kasus" },
                  options: {
                    type: Type.ARRAY,
                    description: "4 pilihan jawaban berturut-turut dimulai dari 'A. ', 'B. ', 'C. ', 'D. '",
                    items: { type: Type.STRING }
                  },
                  correctAnswer: { type: Type.STRING, description: "Kunci jawaban yang benar, harus salah satu dari: A, B, C, D" },
                  explanation: { type: Type.STRING, description: "Penjelasan pembahasan langkah demi langkah secara mendetail mengapa jawaban tersebut benar" }
                }
              }
            }
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from AI engine");
    }

    const parsedJson = JSON.parse(resultText.trim());
    res.json(parsedJson);
  } catch (error: any) {
    console.error("AI Blueprint Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// 3. AI Generator: Revision Summary (Kurikulum Merdeka Grade 7 Semester 2)
app.post("/api/generate/summary", async (req, res) => {
  const { subjectId, subjectName, topicName } = req.body;
  if (!subjectName || !topicName) {
    return res.status(400).json({ error: "Missing required parameters: subjectName and topicName" });
  }

  try {
    const ai = getGemini();
    const systemPrompt = `Anda adalah seorang ahli penyusun modul pembelajaran siswa SMP Kelas 7. 
Buatlah ringkasan materi pelajaran yang lengkap, mendalam, dan mudah dihafal (Peta Pikiran / Jembatan Keledai jika memungkinkan) untuk materi sesuai Kurikulum Merdeka Grade 7 Semester 2.

Subjek: ${subjectName}
Topik: ${topicName}

Format keluaran HARUS berupa objek JSON tunggal yang rapi. Gunakan bahasa yang suportif dan ceria untuk menyemangati siswa belajar.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          required: ["subjectId", "subjectName", "title", "overview", "sections"],
          properties: {
            subjectId: { type: Type.STRING },
            subjectName: { type: Type.STRING },
            title: { type: Type.STRING, description: "Judul besar rangkuman materi" },
            overview: { type: Type.STRING, description: "Pengantar singkat semenarik mungkin dari materi ini" },
            sections: {
              type: Type.ARRAY,
              description: "Uraian materi bersegmen",
              items: {
                type: Type.OBJECT,
                required: ["title", "content", "keyPoints"],
                properties: {
                  title: { type: Type.STRING, description: "Judul sub-materi" },
                  content: { type: Type.STRING, description: "Penjelasan mendalam sub-materi tersebut (bisa berisi konsep penting, rumus, atau fakta)" },
                  keyPoints: {
                    type: Type.ARRAY,
                    description: "Poin-poin kilat atau rumus penting/kata kunci untuk mempermudah ingatan (Cheat Sheet)",
                    items: { type: Type.STRING }
                  }
                }
              }
            }
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from AI engine");
    }

    const parsedJson = JSON.parse(resultText.trim());
    res.json(parsedJson);
  } catch (error: any) {
    console.error("AI Summary Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// 4. AI Generator: Practice Quiz Questions
app.post("/api/generate/quiz", async (req, res) => {
  const { subjectName, topicName, count = 5 } = req.body;
  if (!subjectName || !topicName) {
    return res.status(400).json({ error: "Missing required parameters: subjectName and topicName" });
  }

  try {
    const ai = getGemini();
    const systemPrompt = `Anda adalah penyusun bank soal evaluasi pendidikan Kurikulum Merdeka SMP.
Buatlah latihan soal Pilihan Ganda berkualitas tinggi, kontekstual (HOTS) sebanyak ${count} soal.
Materi: ${topicName} (Kurikulum Merdeka Kelas 7 Semester 2)
Subjek: ${subjectName}

Pastikan soal dibuat bervariasi dari segi tingkat kesulitan (Mudah, Sedang, HOTS tingkat tinggi). 
Setiap soal harus menyertakan 4 pilihan jawaban (A, B, C, D) yang mengecoh secara logis, kunci jawaban yang benar, serta analisis pembahasannya.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          description: `Kumpulan latihan soal berjumlah ${count} butir`,
          items: {
            type: Type.OBJECT,
            required: ["id", "questionText", "options", "correctAnswer", "explanation"],
            properties: {
              id: { type: Type.STRING },
              questionText: { type: Type.STRING, description: "Pertanyaan kontekstual bersituasi realistis" },
              options: {
                type: Type.ARRAY,
                description: "4 Opsi jawaban yang diawali dengan huruf pilar, misalnya 'A. ...', 'B. ...'",
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.STRING, description: "Harus satu karakter: A, B, C, atau D" },
              explanation: { type: Type.STRING, description: "Pedagogi pembahasan rinci cara menjawab soal" }
            }
          }
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response from AI engine");
    }

    const parsedJson = JSON.parse(resultText.trim());
    res.json(parsedJson);
  } catch (error: any) {
    console.error("AI Quiz Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend assets in production / dev fallback
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[OK] Server Kurikulum Merdeka listening on port ${PORT}`);
  });
}

startServer();
