"use client";

import { useToast } from "@/components/ui/use-toast";
import supabase from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

const App = async () => {
  const { toast } = useToast();
  const router = useRouter();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div>
      <h1 className="text-4xl text-capitalize">App</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        fugit saepe temporibus reprehenderit ducimus quo id eos. Ab, labore
        ducimus modi, eligendi, tempore perferendis provident quia excepturi in
        ullam sit!
      </p>

      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Long Form</h1>
        <form className="space-y-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className="flex flex-col">
              <label htmlFor={`input-${index}`} className="mb-2 text-lg">
                Input {index + 1}
              </label>
              <input
                type="text"
                id={`input-${index}`}
                name={`input-${index}`}
                className="p-2 border border-gray-300 rounded-md"
                placeholder={`Enter text for input ${index + 1}`}
              />
            </div>
          ))}
        </form>
        <h2 className="text-2xl font-bold my-4">Long Image</h2>
        <img
          src="https://via.placeholder.com/800x4000"
          alt="Long placeholder"
          className="w-full border border-gray-300"
        />
      </div>
    </div>
  );
};

export default App;
