import { forwardRef, useRef } from 'react';
import { Upload } from 'lucide-react';
import { useForm } from './Form';

const FormControlFile = forwardRef(({
  name,
  label,
  accept,
  multiple = false,
  className = '',
  ...props
}, ref) => {
  const { values, errors, touched, handleChange, handleBlur } = useForm();
  const inputRef = useRef(null);

  const files = values[name] || [];
  const error = touched[name] ? errors[name] : undefined;

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleChange(name, multiple ? selectedFiles : selectedFiles[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleChange(name, multiple ? droppedFiles : droppedFiles[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className={className}>
      {label && (
        <label
          className={`block text-sm font-medium mb-1.5 ${
            error ? 'text-[#EF4444]' : 'text-[#A8B0C2]'
          }`}
        >
          {label}
        </label>
      )}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => inputRef.current?.click()}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
          transition-colors duration-150
          ${error ? 'border-[#EF4444]' : 'border-white/[0.08] hover:border-[#6FE7E0]/40'}
        `}
      >
        <input
          ref={ref || inputRef}
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          onChange={handleFileChange}
          onBlur={() => handleBlur(name)}
          className="hidden"
          {...props}
        />
        <Upload size={24} className="mx-auto mb-2 text-[#7C859A]" />
        <p className="text-sm text-[#A8B0C2]">
          Drag and drop files here, or click to browse
        </p>
        {files.length > 0 && (
          <div className="mt-3 space-y-1">
            {(multiple ? files : [files]).map((file, index) => (
              <p key={index} className="text-xs text-[#7C859A]">
                {file.name}
              </p>
            ))}
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#EF4444]">{error}</p>
      )}
    </div>
  );
});

FormControlFile.displayName = 'FormControlFile';

export default FormControlFile;
