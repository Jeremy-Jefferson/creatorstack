import { Check } from 'lucide-react';

export default function FormControlStepper({
  steps,
  currentStep,
  className = '',
}) {
  return (
    <div className={`flex items-center ${className}`}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  isCompleted
                    ? 'bg-[#6FE7E0] text-[#0B0B0F]'
                    : isCurrent
                    ? 'bg-[#6FE7E0]/10 text-[#6FE7E0] border-2 border-[#6FE7E0]'
                    : 'bg-[#1E2230] text-[#7C859A] border border-white/[0.08]'
                }`}
              >
                {isCompleted ? <Check size={16} /> : index + 1}
              </div>
              <span
                className={`mt-2 text-xs ${
                  isCurrent
                    ? 'text-[#F5F7FB] font-medium'
                    : isCompleted
                    ? 'text-[#A8B0C2]'
                    : 'text-[#7C859A]'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-px mx-2 ${
                  isCompleted ? 'bg-[#6FE7E0]' : 'bg-white/[0.08]'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
