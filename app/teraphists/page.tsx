"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Text from "../components/text";
import TeraphistCard from "@/app/components/teraphist-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Teraphists = () => {
  const pathname = usePathname();

  return (
    <div className="w-full my-2">
      <h1 className="text-[20px] font-extrabold text-capitalize">Teraphists</h1>
      <Text>Find a teraphists</Text>

      <section className="my-5 grid lg:grid-cols-3">
        <TeraphistCard
          name="Dr. Adedoyin Emmanuel"
          bio="Dr. Adedoyin Emmanuel is a highly experienced clinical psychologist
        specializing in cognitive behavioral therapy. He has been helping
        patients manage stress, anxiety, and depression for over a decade."
          title="Clinical Psychologist"
          rating={5}
          imageUrl="https://api.dicebear.com/9.x/big-smile/svg?seed=midnight"
        />

        <TeraphistCard
          name="Dr. Kayode Ijisesan"
          bio="Dr. Kayode is a highly experienced clinical psychologist
        specializing in cognitive behavioral therapy. He has been helping
        patients manage stress, anxiety, and depression for over a decade."
          title="Clinical Psychologist"
          rating={5}
          imageUrl="https://api.dicebear.com/9.x/big-smile/svg?seed=kay"
        />

        <TeraphistCard
          name="Dr. Zamani Segun"
          bio="Dr. Zamani is a highly experienced clinical psychologist
        specializing in cognitive behavioral therapy. He has been helping
        patients manage stress, anxiety, and depression for over a decade."
          title="Clinical Psychologist"
          rating={4}
          imageUrl="https://api.dicebear.com/9.x/big-smile/svg?seed=zamani"
        />
      </section>
    </div>
  );
};

export default Teraphists;
