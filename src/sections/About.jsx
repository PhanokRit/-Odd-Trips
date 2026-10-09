import { Home, Landmark, Leaf, Lightbulb, MapIcon, Users } from "lucide-react";

const highlight = [
  {
    icon: MapIcon,
    title: "ខេត្តឧត្តរមានជ័យ",
    description:
      "ខេត្តឧត្តរមានជ័យ គឺជាខេត្តមួយស្ថិតនៅភាគពាយ័ព្យនៃប្រទេសកម្ពុជា ខេត្ដនេះមាន៤ស្រុក​ និងក្រុង១។",
  },
  {
    icon: Home,
    title: "ក្រុងសំរោង",
    description:
      "ក្រុងសំរោង គឺជាទីរួមខេត្តនៃខេត្តឧត្តរមានជ័យ ដែលត្រូវបានប្តូរពីស្រុកទៅជាក្រុងនៅថ្ងៃទី ០៩ ខែមករា ឆ្នាំ ២០០៩។",
  },
  {
    icon: Users,
    title: "ប្រជាជន",
    description: "ប្រជាជននៅក្នុងខេត្តឧត្តរមានជ័យ មានប្រហែល ២៦៧,៧០៣ នាក់។",
  },
  {
    icon: Lightbulb,
    title: "ដំណើរកម្សាន្ដ",
    description:
      "តំបន់​ប្រវត្ដិសាស្រ្ដអន្លង់វែង រលុះធំឬដីដុះ ទឹកធ្លាក់អូរខៀវ ប្រាសាទបុរាណ អាតោដួងចិត្ដ ព្រៃសង្ឃរុក្ខវ័ន​ មានច្រើនទៀត។",
  },
  {
    icon: Landmark,
    title: "ប្រាសាទបុរាណ",
    description:
      "ប្រាសាទតាមាន់តូច តាមាន់ធំ​ ប្រាសាទតាក្របី ប្រាសាទខ្នារ និងប្រាសាទព្រហ្មកិលជាដើម។",
  },
  {
    icon: Leaf,
    title: "ទេសភាពស្រស់ស្រាយ",
    description:
      " ធម្មជាតិមិនដែលធ្វើឱ្យយើងខកបំណងឡើយ គ្រប់ជ្រុងសុទ្ធតែមានសោភ័ណភាព និងអត្ថន័យ។ 🌿🏔️",
  },
];
export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column  */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-highlight-scondary text-sm font-medium tracking-wider uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
              សូមស្វាគមន៏មកកាន់
              <span className=" text-white"> ខេត្តឧត្ដរមានជ័យ</span>
            </h2>

            <div className=" text-sm text-mute-foreground space-y-4 indent-6 font-['Battambang'] animate-fade-in animation-delay-200 ">
              <p>
                ខេត្ត​ឧត្តរមានជ័យ​បាន​​​បង្កើត​នៅ​ឆ្នាំ​១៩៦៤ តាម​ព្រះរាជក្រម​លេខ
                ១៩៤ ប.ក ចុះ​ថ្ងៃ​ទី​១២ ខែ​កក្កដា ឆ្នាំ​១៩៦៤
                នៅ​សម័យ​សង្គម​រាស្ត្រនិយម (១៩៥៣-១៩៧០)
                ក្រោម​ព្រះ​រាជកិច្ច​ដឹកនាំ​ដោយ​សម្ដេច​ព្រះបាទនរោត្តម​សីហនុ
                ប៉ុន្តែ​ក្រោយ​ឆ្នាំ​១៩៧០ សង្គ្រាម​បាន​ឆាបឆេះ​ឡើង​
                រាល់​រចនាសម្ព័ន្ធ​រដ្ឋបាល​ត្រូវ​បាន​លើក​ទីតាំង​ដាក់​នៅ​ខេត្ត​សៀមរាប​។ខេត្តឧត្តរមានជ័យត្រូវជាមួយខេត្តសៀមរាបនៅសម័យកម្ពុជាប្រជាធិបតេយ្យឬ
                សម័យខ្មែរក្រហមជាតំបន់ស្វយ័តដាច់ដោយឡែក(ភូមិភាគពិសេស)។
                នៅទសវត្សរ៍ឆ្នាំ៨០-៩០
                ខេត្តនេះក៏ជាទីតាំងភូមិសាស្ត្ររបស់ពួកខ្មែរក្រហម
                ជាពិសេសគឺស្រុកអន្លង់វែង ។
                នៅខេត្តឧត្តរមានជ័យនេះជាទីតាំងដែរប៉ុលពតទទួលមរណៈភាពនៅទីនោះផងដែររហូតដល់ពួកខ្មែរក្រហមចុះចូលជាមួយនឹងរាជរដ្ឋាភិបាលនៅឆ្នាំ១៩៩៩។
              </p>
              <p>
                ប្រជាជនក្នុងខេត្តឧត្តរមានជ័យសរុបមាន ១៦០ ១៩៦នាក់ក្នុងនោះមានបរុស
                ៨០ ៤៦៥នាក់ និងស្ត្រីចំនួន ៧៩ ៧៣១នាក់។ ចំនួន​ខុស​គ្នា​រវាង​បុរស
                និងស្ត្រីដែលមានលក្ខណៈខុសគ្នាធំធេងនោះគឺមាននៅក្នុងស្រុក
                ចុងកាល់ប៉ុណ្ណោះ ។ ចំណែក​ស្រុក​អន្លង់វែង បន្ទាយអំពិល សំរោង
                និងត្រពាំងប្រាសាទ ចំនួនខុសគ្នារវាងស្ត្រី និងបុរសមានចំនួនតិច ។
                ខេត្តឧត្តរមានជ័យមានផ្ទៃដីសរុបចំនួន ៦១ ៥៨ គីឡូម៉ែត្រការ៉េ
                ហើយមានដង់ស៊ីតេប្រជាជន ២៦,១៧នាក់ ក្នុងមួយគីឡូម៉ែត្រការ៉េ
                (ស្ថិតិខែមករា ២០០៧) ទាបជាងដង់ស៊ីតេប្រជាជនទូទាំងប្រទេស
                ដែលស្រុកសំរោងគឺជាស្រុកទីរួមខេត្តរបស់ខេត្តឧត្តរមានជ័យ
                ដែល​មាន​សុវត្តិភាព​ជាង​គេ​បង្អស់​
                បើ​ប្រៀប​ធៀប​ជា​មួយនឹង​បណ្តា​ស្រុក​ដទៃ​ទៀត​ក្នុង​ខេត្ត
                អំឡុងពេលធ្វើសង្គ្រាម ។
              </p>
            </div>
            <div className="text-mute-foreground glass  p-6 rounded-2xl glow-border animate-fade-in animation-delay-300">
              <p className=" text-sm font-medium text-['Battambang']">
                <span className="text-highlight-scondary text-xl">
                  ឧត្តរមានជ័យ កំពុងរង់ចាំអ្នក 🌿
                </span>
                <br /> មិនចាំបាច់ទៅឆ្ងាយទេ។ មកស្គាល់កន្លែងថ្មីៗ មើលធម្មជាតិ
                ស្វែងរកភាពស្ងប់ស្ងាត់ ហើយទុកពេលមួយថ្ងៃសម្រាប់ខ្លួនឯង។
              </p>
            </div>
          </div>
          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlight.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <item.icon className="w-6 h-6 text-highlight-scondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary ">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-mute-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
