'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, StopCircle, Volume2, VolumeX, Settings } from 'lucide-react';

interface AudioPlayerProps {
     content: string;
}

interface VoiceOption {
     voice: SpeechSynthesisVoice;
     name: string;
     lang: string;
}

export function AudioPlayer({ content }: AudioPlayerProps) {
     const [isPlaying, setIsPlaying] = useState(false);
     const [isMuted, setIsMuted] = useState(false);
     const [isPaused, setIsPaused] = useState(false);
     const [progress, setProgress] = useState(0);
     const [currentPosition, setCurrentPosition] = useState(0);
     const [isSupported, setIsSupported] = useState(true);
     const [showSettings, setShowSettings] = useState(false);
     const [availableVoices, setAvailableVoices] = useState<VoiceOption[]>([]);
     const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
     const [rate, setRate] = useState(1);

     const speechSynthRef = useRef<SpeechSynthesis | null>(null);
     const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

     // Clean the content for better TTS experience
     const cleanedContent = content
          .replace(/```[\s\S]*?```/g, '') // Remove code blocks
          .replace(/\[.*?\]\(.*?\)/g, '') // Remove markdown links
          .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
          .replace(/[#*_~`]/g, ''); // Remove formatting characters

     // Initialize voices when available
     const initVoices = () => {
          if (speechSynthRef.current) {
               const voices = speechSynthRef.current.getVoices();

               if (voices.length) {
                    const voiceOptions = voices.map(voice => ({
                         voice,
                         name: voice.name,
                         lang: voice.lang
                    }));

                    setAvailableVoices(voiceOptions);

                    // Try to find an English voice
                    const englishVoice = voices.find(v => v.lang.includes('en-US') || v.lang.includes('en-GB'));
                    if (englishVoice) {
                         setSelectedVoice(englishVoice);
                         if (utteranceRef.current) {
                              utteranceRef.current.voice = englishVoice;
                         }
                    } else if (voices.length > 0) {
                         // If no English voice, use the first available
                         setSelectedVoice(voices[0]);
                         if (utteranceRef.current) {
                              utteranceRef.current.voice = voices[0];
                         }
                    }
               }
          }
     };

     useEffect(() => {
          // Check if browser supports speech synthesis
          if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
               speechSynthRef.current = window.speechSynthesis;
               utteranceRef.current = new SpeechSynthesisUtterance(cleanedContent);

               // Set up event listeners for tracking progress
               if (utteranceRef.current) {
                    utteranceRef.current.onboundary = (event) => {
                         if (event.charIndex && utteranceRef.current) {
                              setCurrentPosition(event.charIndex);
                              setProgress((event.charIndex / cleanedContent.length) * 100);
                         }
                    };

                    utteranceRef.current.onend = () => {
                         setIsPlaying(false);
                         setIsPaused(false);
                         setProgress(0);
                         setCurrentPosition(0);
                    };
               }

               // Initialize voices
               initVoices();

               // Chrome needs this event to get all voices
               if (speechSynthRef.current.onvoiceschanged !== undefined) {
                    speechSynthRef.current.onvoiceschanged = initVoices;
               }
          } else {
               setIsSupported(false);
          }

          // Cleanup on unmount
          return () => {
               if (speechSynthRef.current) {
                    speechSynthRef.current.cancel();
               }
          };
     }, [cleanedContent]);

     const togglePlayPause = () => {
          if (!speechSynthRef.current || !utteranceRef.current) return;

          if (isPlaying && !isPaused) {
               // Pause
               speechSynthRef.current.pause();
               setIsPaused(true);
          } else if (isPaused) {
               // Resume
               speechSynthRef.current.resume();
               setIsPaused(false);
          } else {
               // Start playing
               utteranceRef.current.text = cleanedContent.substring(currentPosition);

               // Apply current settings
               if (selectedVoice) {
                    utteranceRef.current.voice = selectedVoice;
               }
               utteranceRef.current.rate = rate;
               utteranceRef.current.volume = isMuted ? 0 : 1.0;

               speechSynthRef.current.speak(utteranceRef.current);
               setIsPlaying(true);
          }
     };

     const stopAudio = () => {
          if (!speechSynthRef.current) return;

          speechSynthRef.current.cancel();
          setIsPlaying(false);
          setIsPaused(false);
          setProgress(0);
          setCurrentPosition(0);
     };

     const toggleMute = () => {
          if (!utteranceRef.current) return;

          const newMuteState = !isMuted;
          setIsMuted(newMuteState);

          if (utteranceRef.current) {
               utteranceRef.current.volume = newMuteState ? 0 : 1.0;
          }
     };

     const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
          const selectedIndex = e.target.selectedIndex;
          if (selectedIndex >= 0 && availableVoices.length > selectedIndex) {
               const voice = availableVoices[selectedIndex].voice;
               setSelectedVoice(voice);

               if (utteranceRef.current) {
                    utteranceRef.current.voice = voice;
               }

               // If currently playing, stop and restart with new voice
               if (isPlaying) {
                    stopAudio();
                    setTimeout(togglePlayPause, 100);
               }
          }
     };

     const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newRate = parseFloat(e.target.value);
          setRate(newRate);

          if (utteranceRef.current) {
               utteranceRef.current.rate = newRate;
          }
     };

     if (!isSupported) {
          return (
               <div className="text-yellow-400 border border-yellow-500/30 rounded-md p-3 mt-4 text-sm">
                    Your browser doesn&apos;t support text-to-speech functionality.
               </div>
          );
     }

     return (
          <div className="border border-green-500/30 rounded-md p-3 mt-4 bg-black/30">
               <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex items-center space-x-2">
                         <button
                              onClick={togglePlayPause}
                              className="bg-green-900/50 hover:bg-green-800/70 text-green-400 p-2 rounded-md transition-colors"
                              aria-label={isPlaying && !isPaused ? "Pause" : "Play"}
                         >
                              {isPlaying && !isPaused ? <Pause size={18} /> : <Play size={18} />}
                         </button>

                         <button
                              onClick={stopAudio}
                              className="bg-green-900/50 hover:bg-green-800/70 text-green-400 p-2 rounded-md transition-colors"
                              aria-label="Stop"
                              disabled={!isPlaying && !isPaused}
                         >
                              <StopCircle size={18} />
                         </button>

                         <button
                              onClick={toggleMute}
                              className="bg-green-900/50 hover:bg-green-800/70 text-green-400 p-2 rounded-md transition-colors"
                              aria-label={isMuted ? "Unmute" : "Mute"}
                         >
                              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                         </button>

                         <button
                              onClick={() => setShowSettings(!showSettings)}
                              className="bg-green-900/50 hover:bg-green-800/70 text-green-400 p-2 rounded-md transition-colors"
                              aria-label="Settings"
                         >
                              <Settings size={18} />
                         </button>
                    </div>

                    <div className="text-sm text-green-400">
                         {isPlaying ? (isPaused ? "Paused" : "Playing") : "Listen to this article"}
                    </div>
               </div>

               {showSettings && (
                    <div className="mt-3 p-3 border border-green-500/20 rounded-md bg-black/20">
                         <div className="mb-2">
                              <label htmlFor="voice-select" className="block text-sm text-green-400 mb-1">Voice:</label>
                              <select
                                   id="voice-select"
                                   onChange={handleVoiceChange}
                                   value={selectedVoice?.name || ""}
                                   className="w-full bg-black/30 border border-green-500/20 text-green-400 px-2 py-1 rounded-md text-sm"
                              >
                                   {availableVoices.map((option, index) => (
                                        <option key={index} value={option.name}>
                                             {option.name} ({option.lang})
                                        </option>
                                   ))}
                              </select>
                         </div>

                         <div>
                              <label htmlFor="rate-slider" className="block text-sm text-green-400 mb-1">
                                   Speech Rate: {rate.toFixed(1)}x
                              </label>
                              <input
                                   id="rate-slider"
                                   type="range"
                                   min="0.5"
                                   max="2"
                                   step="0.1"
                                   value={rate}
                                   onChange={handleRateChange}
                                   className="w-full cursor-pointer accent-green-500 h-1"
                              />
                         </div>
                    </div>
               )}

               {isPlaying && (
                    <div className="mt-2">
                         <div className="bg-green-900/30 h-1 rounded-full w-full">
                              <div
                                   className="bg-green-500 h-1 rounded-full transition-all duration-300"
                                   style={{ width: `${progress}%` }}
                              ></div>
                         </div>
                    </div>
               )}
          </div>
     );
}
