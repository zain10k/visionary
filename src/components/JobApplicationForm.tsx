import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Send, CheckCircle2, AlertCircle, ChevronDown, Check } from 'lucide-react';

interface CustomSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  error?: string;
  placeholder?: string;
}

const CustomSelect = ({ label, value, onChange, options, error, placeholder = "Select an option" }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find(opt => opt.value === value)?.label;

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="text-sm font-medium text-slate-300">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-navy-950/50 border rounded-lg pl-4 pr-10 py-2.5 text-left text-sm transition-all flex items-center justify-between
            ${error ? 'border-red-500' : 'border-slate-700 hover:border-primary-400/50'}
            ${isOpen ? 'ring-2 ring-primary-400 border-primary-400/50' : ''}
            ${!value ? 'text-slate-400' : 'text-white'}
          `}
        >
          <span className="block truncate">{selectedLabel || placeholder}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
            <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-primary-400' : ''}`} />
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute z-50 w-full mt-1 bg-navy-900 border border-slate-700 rounded-lg shadow-xl max-h-60 overflow-auto custom-scrollbar"
            >
              <div className="p-1">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-md text-sm flex items-center justify-between transition-colors mb-0.5
                      ${value === option.value 
                        ? 'bg-primary-400 text-navy-950 font-semibold' 
                        : 'text-slate-300 hover:bg-primary-400 hover:text-navy-950'
                      }
                    `}
                  >
                    <span>{option.label}</span>
                    {value === option.value && <Check size={16} />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
};

const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  location: z.string().min(2, 'Please enter your location'),
  eligibleToWork: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  commutableDistance: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  position: z.string().min(1, 'Please select a position'),
  hearAboutUs: z.string().min(1, 'Please tell us how you heard about this opportunity'),
  currentlyEmployed: z.enum(['yes', 'no'], {
    required_error: 'Please select an option',
  }),
  noticePeriod: z.string().min(1, 'Please tell us your notice period'),
  employmentType: z.enum(['Full-time', 'Part-time', 'Contract'], {
    required_error: 'Please select employment type',
  }),
  salaryExpectations: z.string().min(1, 'Please enter your salary expectations'),
  whyWorkHere: z.string().min(10, 'Please provide a detailed answer'),
  whatAttractedYou: z.string().min(10, 'Please provide a detailed answer'),
  companyValues: z.string().min(10, 'Please provide a detailed answer'),
  lookingForInNextRole: z.string().min(10, 'Please provide a detailed answer'),
  cv: z.instanceof(File).optional().or(z.literal('')),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

interface JobApplicationFormProps {
  isOpen: boolean;
  onClose: () => void;
  position?: string;
}

const FORMPREE_ENDPOINT = import.meta.env.VITE_FORMPREE_ENDPOINT || '';

export function JobApplicationForm({ isOpen, onClose, position = 'Advertising & Marketing Associate' }: JobApplicationFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      position: position,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('CV file size must be less than 10MB');
        setTimeout(() => setError(null), 5000);
        return;
      }
      setSelectedFile(file);
      setValue('cv', file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setValue('cv', '');
  };

  const onSubmit = async (data: ApplicationFormData) => {
    try {
      setError(null);

      if (!FORMPREE_ENDPOINT) {
        throw new Error('Form submission is not configured. Please contact us directly.');
      }

      const formDataToSend = new FormData();
      
      // Personal Information
      formDataToSend.append('fullName', data.fullName);
      formDataToSend.append('email', data.email);
      formDataToSend.append('phone', data.phone);
      formDataToSend.append('location', data.location);
      formDataToSend.append('eligibleToWork', data.eligibleToWork);
      formDataToSend.append('commutableDistance', data.commutableDistance);
      
      // Application Details
      formDataToSend.append('position', data.position);
      formDataToSend.append('hearAboutUs', data.hearAboutUs);
      formDataToSend.append('currentlyEmployed', data.currentlyEmployed);
      formDataToSend.append('noticePeriod', data.noticePeriod);
      formDataToSend.append('employmentType', data.employmentType);
      formDataToSend.append('salaryExpectations', data.salaryExpectations);
      
      // Motivation & Fit
      formDataToSend.append('whyWorkHere', data.whyWorkHere);
      formDataToSend.append('whatAttractedYou', data.whatAttractedYou);
      formDataToSend.append('companyValues', data.companyValues);
      formDataToSend.append('lookingForInNextRole', data.lookingForInNextRole);
      
      // CV file
      if (selectedFile) {
        formDataToSend.append('cv', selectedFile);
      }

      const response = await fetch(FORMPREE_ENDPOINT, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Form submission failed with status ${response.status}`);
      }

      const result = await response.json();
      
      if (!result.ok && result.error) {
        throw new Error(result.error);
      }

      setSubmitted(true);
      setSelectedFile(null);
      reset();
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Application form error:', err);
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to submit application. Please try again later.'
      );
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
           {/* Modal */}
           <motion.div
             initial={{ opacity: 0, scale: 0.95, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             exit={{ opacity: 0, scale: 0.95, y: 20 }}
             className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-32"
             onClick={(e) => e.stopPropagation()}
           >
             <div className="bg-navy-900 rounded-2xl border border-slate-700 shadow-2xl w-full max-w-3xl max-h-[75vh] flex flex-col my-4 overflow-hidden">
               {/* Header */}
               <div className="flex-shrink-0 bg-navy-900 border-b border-slate-700 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                 <h2 className="text-xl font-bold text-white">Job Application</h2>
                 <button
                   onClick={onClose}
                   className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                 >
                   <X className="text-slate-400 hover:text-white" size={24} />
                 </button>
               </div>

               {/* Form Content - Scrollable */}
               <div className="flex-1 overflow-y-auto custom-scrollbar px-6 py-5">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-500/10 border border-green-500/20 p-8 rounded-2xl text-center py-16"
                  >
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-green-500">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Submitted!</h3>
                    <p className="text-slate-300">Thank you for your interest. We'll review your application and get back to you soon.</p>
                  </motion.div>
                ) : (
                   <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                     {/* Personal Information Section */}
                     <div className="bg-navy-950/30 rounded-xl p-5 border border-slate-800/50">
                       <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-primary-400/20 flex items-center gap-2">
                         <span className="w-1 h-6 bg-primary-400 rounded-full"></span>
                         Personal Information
                       </h3>
                       <div className="grid md:grid-cols-2 gap-4">
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Full name *</label>
                           <input
                             {...register('fullName')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="John Doe"
                           />
                           {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Email address *</label>
                           <input
                             type="email"
                             {...register('email')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="john@example.com"
                           />
                           {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Phone number *</label>
                           <input
                             type="tel"
                             {...register('phone')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="+44 20 1234 5678"
                           />
                           {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Current location (city/state) *</label>
                           <input
                             {...register('location')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="London, UK"
                           />
                           {errors.location && <p className="text-red-400 text-xs mt-1">{errors.location.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <input type="hidden" {...register('eligibleToWork')} />
                           <CustomSelect
                             label="Are you legally eligible to work in the UK? *"
                             value={watch('eligibleToWork')}
                             onChange={(val) => setValue('eligibleToWork', val as "yes" | "no", { shouldValidate: true })}
                             options={[
                               { value: 'yes', label: 'Yes' },
                               { value: 'no', label: 'No' }
                             ]}
                             error={errors.eligibleToWork?.message}
                           />
                         </div>
                         <div className="space-y-2">
                           <input type="hidden" {...register('commutableDistance')} />
                           <CustomSelect
                             label="Do you live within a commutable distance of our office location? *"
                             value={watch('commutableDistance')}
                             onChange={(val) => setValue('commutableDistance', val as "yes" | "no", { shouldValidate: true })}
                             options={[
                               { value: 'yes', label: 'Yes' },
                               { value: 'no', label: 'No' }
                             ]}
                             error={errors.commutableDistance?.message}
                           />
                         </div>
                      </div>
                    </div>

                     {/* Application Details Section */}
                     <div className="bg-navy-950/30 rounded-xl p-5 border border-slate-800/50">
                       <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-primary-400/20 flex items-center gap-2">
                         <span className="w-1 h-6 bg-primary-400 rounded-full"></span>
                         Application Details
                       </h3>
                       <div className="grid md:grid-cols-2 gap-4">
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Which position are you applying for? *</label>
                           <input
                             {...register('position')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="Advertising & Marketing Associate"
                           />
                           {errors.position && <p className="text-red-400 text-xs mt-1">{errors.position.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">How did you hear about this opportunity? *</label>
                           <input
                             {...register('hearAboutUs')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="LinkedIn, Website, Referral, etc."
                           />
                           {errors.hearAboutUs && <p className="text-red-400 text-xs mt-1">{errors.hearAboutUs.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <input type="hidden" {...register('currentlyEmployed')} />
                           <CustomSelect
                             label="Are you currently employed? *"
                             value={watch('currentlyEmployed')}
                             onChange={(val) => setValue('currentlyEmployed', val as "yes" | "no", { shouldValidate: true })}
                             options={[
                               { value: 'yes', label: 'Yes' },
                               { value: 'no', label: 'No' }
                             ]}
                             error={errors.currentlyEmployed?.message}
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">What is your notice period/when can you start? *</label>
                           <input
                             {...register('noticePeriod')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="2 weeks, 1 month, etc."
                           />
                           {errors.noticePeriod && <p className="text-red-400 text-xs mt-1">{errors.noticePeriod.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <input type="hidden" {...register('employmentType')} />
                           <CustomSelect
                             label="What type of employment are you seeking? *"
                             value={watch('employmentType')}
                             onChange={(val) => setValue('employmentType', val as "Full-time" | "Part-time" | "Contract", { shouldValidate: true })}
                             options={[
                               { value: 'Full-time', label: 'Full-time' },
                               { value: 'Part-time', label: 'Part-time' },
                               { value: 'Contract', label: 'Contract' }
                             ]}
                             error={errors.employmentType?.message}
                             placeholder="Select employment type"
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">What are your salary expectations? *</label>
                           <input
                             {...register('salaryExpectations')}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all text-sm"
                             placeholder="£30,000 - £40,000"
                           />
                           {errors.salaryExpectations && <p className="text-red-400 text-xs mt-1">{errors.salaryExpectations.message}</p>}
                         </div>
                      </div>
                    </div>

                     {/* Motivation & Fit Section */}
                     <div className="bg-navy-950/30 rounded-xl p-5 border border-slate-800/50">
                       <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-primary-400/20 flex items-center gap-2">
                         <span className="w-1 h-6 bg-primary-400 rounded-full"></span>
                         Motivation & Fit
                       </h3>
                       <div className="space-y-4">
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Why do you want to work for our company? *</label>
                           <textarea
                             {...register('whyWorkHere')}
                             rows={3}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all resize-none text-sm"
                             placeholder="Tell us what attracts you to Visionary..."
                           />
                           {errors.whyWorkHere && <p className="text-red-400 text-xs mt-1">{errors.whyWorkHere.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">What attracted you to this specific position? *</label>
                           <textarea
                             {...register('whatAttractedYou')}
                             rows={3}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all resize-none text-sm"
                             placeholder="What interests you about this role..."
                           />
                           {errors.whatAttractedYou && <p className="text-red-400 text-xs mt-1">{errors.whatAttractedYou.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">Which of our company values do you identify with most and why? *</label>
                           <textarea
                             {...register('companyValues')}
                             rows={3}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all resize-none text-sm"
                             placeholder="Client-Centred, Integrity First, Innovation, Partnership..."
                           />
                           {errors.companyValues && <p className="text-red-400 text-xs mt-1">{errors.companyValues.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <label className="text-sm font-medium text-slate-300">What are you looking for in your next role? *</label>
                           <textarea
                             {...register('lookingForInNextRole')}
                             rows={3}
                             className="w-full bg-navy-950/50 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary-400 focus:border-primary-400/50 outline-none transition-all resize-none text-sm"
                             placeholder="What are your career goals and expectations..."
                           />
                           {errors.lookingForInNextRole && <p className="text-red-400 text-xs mt-1">{errors.lookingForInNextRole.message}</p>}
                         </div>
                      </div>
                    </div>

                     {/* CV Upload Section */}
                     <div className="bg-navy-950/30 rounded-xl p-5 border border-slate-800/50">
                       <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-primary-400/20 flex items-center gap-2">
                         <span className="w-1 h-6 bg-primary-400 rounded-full"></span>
                         CV Upload
                       </h3>
                       <div className="space-y-3">
                         <label className="text-sm font-medium text-slate-300">
                           Upload your CV
                           <span className="text-slate-500 text-xs ml-2">(PDF, DOC, DOCX - Max 10MB)</span>
                         </label>
                         {!selectedFile ? (
                           <label className="flex flex-col items-center justify-center w-full h-20 border-2 border-slate-700 border-dashed rounded-lg cursor-pointer bg-navy-950/50 hover:border-primary-400/50 hover:bg-navy-950/70 transition-all">
                             <div className="flex flex-col items-center justify-center">
                               <Upload className="w-6 h-6 mb-1.5 text-slate-400" />
                               <p className="text-xs text-slate-400">
                                 <span className="font-semibold">Click to upload</span> or drag and drop
                               </p>
                               <p className="text-xs text-slate-500 mt-0.5">PDF, DOC, DOCX (MAX. 10MB)</p>
                             </div>
                             <input
                               type="file"
                               className="hidden"
                               {...register('cv')}
                               onChange={handleFileChange}
                               accept=".pdf,.doc,.docx"
                             />
                           </label>
                         ) : (
                           <div className="flex items-center justify-between p-3 bg-navy-950/50 border border-slate-700 rounded-lg">
                             <div className="flex items-center gap-3">
                               <div className="w-8 h-8 rounded bg-primary-400/10 flex items-center justify-center">
                                 <Upload className="text-primary-400" size={16} />
                               </div>
                               <div>
                                 <p className="text-sm font-medium text-white">{selectedFile.name}</p>
                                 <p className="text-xs text-slate-400">
                                   {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                 </p>
                               </div>
                             </div>
                             <button
                               type="button"
                               onClick={removeFile}
                               className="p-1.5 hover:bg-slate-800 rounded-lg transition-colors"
                             >
                               <X className="text-slate-400 hover:text-white" size={16} />
                             </button>
                           </div>
                         )}
                         {errors.cv && <p className="text-red-400 text-xs mt-1">{errors.cv.message}</p>}
                       </div>
                     </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-400 bg-red-500/10 p-3 rounded-lg">
                        <AlertCircle size={16} />
                        <span className="text-sm">{error}</span>
                      </div>
                    )}

                     <div className="flex gap-3 pt-4 border-t border-slate-800/50 mt-6">
                       <button
                         type="button"
                         onClick={onClose}
                         className="flex-1 bg-transparent border border-slate-700 text-white font-semibold rounded-lg py-2.5 hover:bg-slate-800 transition-colors text-sm"
                       >
                         Cancel
                       </button>
                       <button
                         type="submit"
                         disabled={isSubmitting}
                         className="flex-1 bg-primary-400 text-navy-950 font-bold rounded-lg py-2.5 hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                       >
                         {isSubmitting ? 'Submitting...' : (
                           <>Submit Application <Send size={16} /></>
                         )}
                       </button>
                     </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

