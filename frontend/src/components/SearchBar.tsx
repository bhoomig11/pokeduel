type Props = {
    value: string;
    onChange: (val: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
    return (
        <input
            type="text"
            placeholder="Search Pokémon..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-12 px-4 py-2 border-2 border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-red-500"
        />
    );
}
