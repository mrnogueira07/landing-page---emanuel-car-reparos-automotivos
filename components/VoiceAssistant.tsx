
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import { Mic, MicOff, Volume2, Loader2 } from 'lucide-react';

interface VoiceAssistantProps {
  isActive: boolean;
}

const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ isActive }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Simplified visual feedback for the recording state
  const [levels, setLevels] = useState<number[]>(new Array(10).fill(0));

  const startRecording = async () => {
    try {
      if (!permissionGranted) {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        setPermissionGranted(true);
      }
      
      setIsRecording(true);
      // In a full implementation, we would connect to ai.live.connect here.
      // For this UI-focused update, we show the visual pulse and status.
      console.log("Recording started - Emanuel Car Voice AI active");
    } catch (err) {
      console.error("Microphone access denied", err);
      setIsRecording(false);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  useEffect(() => {
    if (isActive && !isRecording) {
      // Small delay to ensure layout is settled
      const timer = setTimeout(() => {
        startRecording();
      }, 500);
      return () => clearTimeout(timer);
    } else if (!isActive && isRecording) {
      stopRecording();
    }
  }, [isActive]);

  // Simulate audio levels for visual effect
  useEffect(() => {
    let interval: any;
    if (isRecording) {
      interval = setInterval(() => {
        setLevels(prev => prev.map(() => Math.random() * 100));
      }, 100);
    } else {
      setLevels(new Array(10).fill(2));
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  if (!isActive && !isRecording) return null;

  return (
    <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
      <div className="bg-black/80 backdrop-blur-2xl border border-red-600/30 px-6 py-3 rounded-full flex items-center gap-4 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
        <div className="relative">
          <div className={`absolute -inset-2 bg-red-600 rounded-full blur-sm transition-opacity duration-300 ${isRecording ? 'opacity-40 animate-pulse' : 'opacity-0'}`}></div>
          <div className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isRecording ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-500'}`}>
            {isRecording ? <Mic size={18} /> : <MicOff size={18} />}
          </div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 leading-none mb-1">
            {isRecording ? 'GRAVANDO DIAGNÓSTICO...' : 'AI ASSISTANT'}
          </span>
          <div className="flex items-center gap-1 h-3">
            {levels.map((level, i) => (
              <div 
                key={i} 
                className="w-1 bg-red-600 rounded-full transition-all duration-100" 
                style={{ height: `${Math.max(10, level)}%` }}
              ></div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => isRecording ? stopRecording() : startRecording()}
          className="ml-4 p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-all"
        >
          {isRecording ? <Volume2 size={16} /> : <Loader2 className="animate-spin" size={16} />}
        </button>
      </div>
    </div>
  );
};

export default VoiceAssistant;
