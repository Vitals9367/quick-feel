'use client'

import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Close } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface FeedbackModalProps {
    onClose: VoidFunction
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({onClose}) => {
  const [feedbackText, setFeedbackText] = useState('');
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
    .from('feedback')
    .insert([
        { 
            feedback: feedbackText,
            // user_id: user?.id
         },
    ])

    if (error) {
      console.error('Error submitting feedback:', error);
    } else {
      setFeedbackText('');

    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-4">

        <div className='flex align-center justify-between mb-2'>
            <h2 className="text-lg font-semibold">Feedback</h2>
            <button onClick={onClose}>
                <X />
            </button>
        </div>

        <p className='mb-4'>
            We would love to hear your thoughts! Please provide your kind feedback to help us improve.
        </p>

        <form onSubmit={handleSubmit}>
          <textarea
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Provide your feedback here..."
            className="border rounded-lg p-2 w-full h-48 resize-none"
          />

          <button 
            type="submit" 
            className="mt-2 bg-blue-500 text-white rounded-lg p-2 w-full"
        >
            Submit Feedback
          </button>

        </form>

    </div>
  );
}

export default FeedbackModal;