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
    </div>
  );
};

export default App;
