import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, Send, Bot, User, HelpCircle, CheckCircle, ShieldCheck } from 'lucide-react';

export const AiAssistantView: React.FC = () => {
  const { askAssistant, aiQueryHistory } = useApp();
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sampleQuestions = [
    "Who is the Principal of SC(S)CO and what are his contact details?",
    "What is the NAAC Accreditation Grade and CGPA of the college?",
    "What are the Junior College Science and Commerce fees for 2026-27?",
    "Explain the NEP 2020 44-credit system and ABC Bank registration.",
    "Tell me about the ICICI Foundation RAC Lab course and placements.",
    "What is the Mati Parikshan Kendra (Soil Testing Lab) in Room 13?",
    "What competitive exam coaching is provided by Career Katta?"
  ];

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      askAssistant(query);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 font-poppins">
      {/* Header */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800 text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mx-auto mb-2">
          <Sparkles className="w-6 h-6" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
          Official Prospectus Intelligence
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          AI College Assistant Desk
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Grounded directly in the verified 64-page prospectus of Shri Chhatrapati Shivaji Mahavidyalaya, Omerga (2026-27-1.pdf).
        </p>
      </div>

      {/* Recommended Prompt Chips */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
          <span>Suggested Questions from Prospectus:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-900 text-left transition-all"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Log */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-5 min-h-[350px]">
        {aiQueryHistory.map((item, idx) => (
          <div key={idx} className="space-y-3">
            {/* User Bubble */}
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-slate-900 text-white rounded-2xl rounded-tr-xs p-3.5 text-xs max-w-lg shadow-2xs leading-relaxed">
                {item.query}
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 mt-1">
                <User className="w-4 h-4" />
              </div>
            </div>

            {/* AI Assistant Bubble */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-1 shadow-xs">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-slate-50 border border-slate-200 text-slate-800 rounded-2xl rounded-tl-xs p-4 text-xs max-w-xl shadow-2xs space-y-2 leading-relaxed">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1.5 text-[10px] text-slate-400">
                  <span className="font-semibold text-amber-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified Prospectus Data
                  </span>
                  <span>{item.timestamp}</span>
                </div>
                <p>{item.response}</p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic">
            <Bot className="w-4 h-4 animate-spin text-amber-600" />
            <span>Consulting official college prospectus...</span>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about admissions, courses, fees, faculty, research, or hostel facilities..."
            className="flex-1 px-4 py-2.5 bg-slate-50 text-xs rounded-xl border border-slate-200 text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Ask</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
