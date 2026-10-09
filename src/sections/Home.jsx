import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown } from "lucide-react";

const places = [
  "សារៈមន្ទីផ្ទះតាម៉ុក",
  "ព្រៃសង្ឃរុក្ខវ័ន",
  "អាតោដួងដែក",
  "អាតោដួងចិត្ដ",
  "ទឹកធ្លាក់អូរខៀវ",
  "រលុះធំ",
  "ស្រុកអន្លង់វែង",
  "ស្រុកត្រពាំងប្រាសាទ",
  "ក្រុងសំរោង",
];

export const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Contents  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary-foreground">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Trips With <span className="text-star">ODDAR MEANCHEY</span>
              </span>
            </div>
            {/* HeadLine */}
            <div className="space-y-3">
              <h1 className=" text-2xl md:3xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-100">
                Welcome to
                <span className="text-primary "> Oddarmeanchey</span>
                <br />
                <span>
                  សូមស្វាគមន៏មកកាន់
                  <span className="text-note  font-bold">
                    <br />
                    ខេត្ដឧត្ដរមានជ័យ!
                  </span>
                </span>
              </h1>
              {/* Conten to change  */}
              <p className="text-sm indent-5 text-mute-foreground max-w-sm animate-fade-in animation-delay-200">
                សូមស្វាគមន៍មកកាន់ខេត្តឧត្តរមានជ័យ
                ដែនដីដែលពោរពេញដោយធម្មជាតិដ៏ស្រស់ស្អាត និងភាពស្ងប់ស្ងាត់។
                មកស្វែងយល់ពីតំបន់ទេសចរណ៍ ប្រាសាទបុរាណ
                និងវប្បធម៌ដ៏មានតម្លៃដែលបានបន្សល់ទុកពីអតីតកាល។
                អញ្ជើញមកស្គាល់សម្រស់ធម្មជាតិ និងបទពិសោធន៍ថ្មីៗ
                ដែលធ្វើឱ្យដំណើររបស់អ្នកកាន់តែមានអត្ថន័យ។ ឧត្តរមានជ័យ
                រង់ចាំស្វាគមន៍អ្នកមកស្វែងរកភាពស្រស់ស្អាត និងអនុស្សាវរីយ៍ថ្មីៗ។
              </p>
            </div>
            {/* CTAs */}
            <div>
              <a href="#place">
                <Button size="lg">
                  Explore Now <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
            {/* Add Button later */}

            {/* Add social Link */}
          </div>
          {/* Righ -culumn - Profile */}
          <div className="relatice  animate-fade-in animation-delay-300">
            {/* Profile IMG */}
            <div className="relative top-6 py-2 max-w-md mx-auto ">
              <div className="relative glass rounded-4xl p-2 glow-border">
                <img
                  src="/home.webp"
                  className="w-full aspect[4/5] object-cover
                  rounded-3xl  "
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full glass " />
                    <span className="text-primary glow-text text-sm font-medium">
                      ប្រាសាទតាក្របី
                    </span>
                  </div>
                </div>
                {/* State Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div>
                    <span className="text-primary text-xl font-bold">
                      Travel
                    </span>
                  </div>
                  <div
                    className="
                  text-xs text-mute-foreground"
                  >
                    Here with me!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Place Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-mute-foreground mb-6 text-center">
            ទីកន្លែងដំណើរកម្សាន្ដ​ក្នុងខេត្ដឧត្ដរមានជ័យ
          </p>
          <div className="relative overflow-hidden">
            <div className="flex  whitespace-nowrap animate-marquee">
              {[...places].map((places, idx) => (
                <div key={`first-${idx}`} className="px-8 py-4 shrink-0">
                  <span className="text-xl font-semibold text-primary/50 hover:text-mute-foreground transition-colors">
                    {places}
                  </span>
                </div>
              ))}

              {/* new */}
              {[...places].map((place, idx) => (
                <div key={`second-${idx}`} className="px-8 py-4 shrink-0">
                  <span className="text-xl font-semibold text-primary/50 hover:text-mute-foreground transition-colors">
                    {place}
                  </span>
                </div>
              ))}
              {/* New */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in hover:text-mute-foreground ">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-mute-foreground hover:text-mute-foreground animate-fade-in animation-delay-800"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
