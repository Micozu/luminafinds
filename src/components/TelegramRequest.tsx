'use client';

import { useState } from 'react';
import { Send, MessageCircle, Sparkles } from 'lucide-react';

interface TelegramRequestProps {
  botToken: string;
  chatId: string;
}

export default function TelegramRequest({ botToken, chatId }: TelegramRequestProps) {
  const [request, setRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: request,
          botToken: botToken,
          chatId: chatId
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setRequest('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      alert('Failed to send request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-700/50 shadow-2xl">
      <div className="text-center mb-6 sm:mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3 sm:mb-4 shadow-lg">
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Request Custom Items
        </h3>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg">
          Can&apos;t find what you&apos;re looking for? Send us a request and we&apos;ll find it for you!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="request" className="block text-sm font-medium text-slate-300 mb-2">
            What are you looking for?
          </label>
          <textarea
            id="request"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="e.g., 'Looking for a Gucci belt in size 32' or 'Need Nike Air Max 97 in black'"
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-600 rounded-lg sm:rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
            rows={3}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !request.trim()}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed text-sm sm:text-base"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : isSubmitted ? (
            <>
              <Sparkles className="w-5 h-5" />
              <span>Request Sent!</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Request to Telegram</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-slate-800/30 rounded-lg sm:rounded-xl border border-slate-700/50">
        <div className="flex items-start space-x-2 sm:space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">How it works:</h4>
            <ul className="text-xs text-slate-400 space-y-0.5 sm:space-y-1">
              <li>• Describe the item you want in detail</li>
              <li>• We&apos;ll search our suppliers for the best match</li>
              <li>• We will add it to our website shortly!</li>
              <li>• Fast response via Telegram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
