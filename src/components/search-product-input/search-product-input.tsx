"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function SearchProductInput() {
  const router = useRouter();

  function handleQuery(data: string) {
    if (data.trim() === "") {
      router.replace("/produtos");
      return;
    }
    router.replace(`/produtos?search=${data}`);
  }

  return (
    <form className="flex items-center gap-4 px-2 md:px-6">
      <SearchIcon size={18} />
      <input
        className="bg-card md:py3 rounded-full border-1 border-gray-400 px-4 py-1.5 text-sm md:px-6"
        type="text"
        placeholder="Procure um produto..."
        onChange={(e) => handleQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchProductInput;
