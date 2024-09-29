import { cn } from "@/utils/config";

interface TextAreaWithIconProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder?: string;
    icon?: React.ElementType | null;
    className?: string;
    textAreaClassName?: string;
    label?: string;
    showLabel?: boolean;
    labelClassName?: string;
    [x: string]: any; // To allow any other textarea attributes
}

const TextArea: React.FC<TextAreaWithIconProps> = ({
    value = '',
    onChange,
    placeholder = 'Enter your bio',
    icon: Icon = null, // Default is null (no icon)
    className = '',
    textAreaClassName = '',
    label = 'Your Label',
    showLabel = false,
    labelClassName = '',
    ...rest
}) => {
    return (
        <div className={cn('w-full ')}>
            {showLabel && (
                <label className={cn('text-white font-semibold mb-2 block', labelClassName)}>
                    {label}
                </label>
            )}
            <div className={cn('relative bg-[rgba(255,255,255,0.06)] rounded-2xl p-2 w-full', className)}>
                <textarea
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={cn(
                        'bg-transparent text-gray-400 w-full h-32 md:h-32 lg:h-48 p-3 focus:outline-none resize-none', // Added fixed height and disabled resizing
                        textAreaClassName
                    )}
                    {...rest}
                />
                {Icon && (
                    <div className="absolute bottom-3 right-3">
                        <Icon className="text-white w-6 h-6" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TextArea;
