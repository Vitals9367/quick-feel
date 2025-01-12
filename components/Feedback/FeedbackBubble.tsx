import { MessageCircleMore } from "lucide-react";
import React from "react";

interface FeedbackBubbleProps {
  onClick: VoidFunction;
}

const FeedbackBubble: React.FC<FeedbackBubbleProps> = ({ onClick }) => {
  return (
    <button
      className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <MessageCircleMore />
    </button>
  );
};

export default FeedbackBubble;
