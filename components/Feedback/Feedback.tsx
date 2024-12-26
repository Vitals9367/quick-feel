'use client'

import React, { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { MessageCircleMore } from 'lucide-react';
import FeedbackModal from '@/components/Feedback/FeedbackModal';
import FeedbackBubble from './FeedbackBubble';

const Feedback = () => {
    const [isActive, setIsActive] = useState(false);

    const onFeedbackClose = () => setIsActive(false)
    const onFeedbackOpen = () => setIsActive(true)

    return (
        <div className='fixed right-0 bottom-0 m-4 '>
            {
                isActive
                ? <FeedbackModal onClose={onFeedbackClose} />
                : <FeedbackBubble onClick={onFeedbackOpen} />
            }
        </div>
    )

}

export default Feedback;