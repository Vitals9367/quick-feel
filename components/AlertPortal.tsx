import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { motion } from "framer-motion";

interface AlertPortalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const AlertPortal: React.FC<AlertPortalProps> = ({
  title,
  description,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // Animation variants
  const alertVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return createPortal(
    <div className="fixed top-4 right-4 z-50 mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3 }}
      >
        <Alert className="border-[var(--primary)] bg-white">
          <AlertTitle className="font-bold text-[var(--primary)]">
            {title}
          </AlertTitle>
          <AlertDescription>{description}</AlertDescription>
        </Alert>
      </motion.div>
    </div>,
    document.body,
  );
};

export default AlertPortal;
