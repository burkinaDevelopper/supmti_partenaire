export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-black text-sm text-gray-900 ` + className}>
            {value ? value : children}
        </label>
    );
}
