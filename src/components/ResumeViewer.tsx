import { motion } from "motion/react";
import { X, Download, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import resumePage1 from "figma:asset/7662cf11d7785a09a4208e1e41c8124e16069426.png";
import resumePage2 from "figma:asset/34358ac9292cec4dcc33c75bb8fa02c42669b93f.png";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const resumePages = [resumePage1, resumePage2];

  if (!isOpen) return null;

  const handleDownload = () => {
    // Create a link element to download the current page
    const link = document.createElement("a");
    link.href = resumePages[currentPage];
    link.download = `Manoj_Resume_Page_${currentPage + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.5));
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % resumePages.length);
    setZoom(1); // Reset zoom when changing pages
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + resumePages.length) % resumePages.length);
    setZoom(1); // Reset zoom when changing pages
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-lg"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl mx-4 h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="mb-4 flex items-center justify-between text-white">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl">Resume - Page {currentPage + 1} of {resumePages.length}</h3>
          </div>
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleZoomOut}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              title="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </motion.button>
            <span className="px-3 text-sm">{Math.round(zoom * 100)}%</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleZoomIn}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
              title="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </motion.button>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center gap-2 shadow-lg shadow-purple-500/50"
            >
              <Download className="w-5 h-5" />
              Download
            </motion.button>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Resume Image Container with Scroll */}
        <div className="flex-1 rounded-2xl overflow-auto bg-white/5 shadow-2xl backdrop-blur-sm border border-white/10 relative">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 min-h-full flex items-start justify-center"
          >
            <img
              src={resumePages[currentPage]}
              alt={`Resume Page ${currentPage + 1}`}
              style={{
                transform: `scale(${zoom})`,
                transformOrigin: 'top center',
                transition: 'transform 0.3s ease-out',
              }}
              className="max-w-full h-auto shadow-2xl"
            />
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        {resumePages.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full backdrop-blur-md shadow-lg transition-all ${
                currentPage === 0
                  ? 'bg-white/5 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextPage}
              disabled={currentPage === resumePages.length - 1}
              className={`absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full backdrop-blur-md shadow-lg transition-all ${
                currentPage === resumePages.length - 1
                  ? 'bg-white/5 text-white/30 cursor-not-allowed'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>
          </>
        )}

        {/* Page Indicators */}
        {resumePages.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {resumePages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentPage
                    ? "bg-purple-500 w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
