import { ArrowUpRight } from "lucide-react";
import { FaFacebook } from "react-icons/fa";

const places = [
  {
    title: "ប្រាសាទតាមាន់",
    description:
      "ប្រាសាទតាមាន់តូច ស្ថិតនៅ ភូមិព្រៃវែង ឃុំគោកមន ស្រុកបន្ទាយអំពិល ខេត្តឧត្តរមានជ័យ។ ប្រាសាទតាមាន់ធំ ស្ថិតនៅ ភូមិតាមាន់សែនជ័យ ឃុំគោកមន ស្រុកបន្ទាយអំពិល ខេត្តឧត្តរមានជ័យ។",
    image: "/pg5.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/5YJMSssnN1horoA58?g_st=ic",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "រលុះធំ ឬដីដុះ",
    description:
      "រលុះធំ ឬ ដីដុះ ជារមណីយដ្ឋានធម្មជាតិមួយនៅតំបន់ក្រុងសំរោង ដែលមានទេសភាពធម្មជាតិប្លែក និងអាចក្លាយជាគោលដៅសម្រាប់អ្នកចូលចិត្តដើរលេង និងថតរូប។ ភូមិត្រពាំងទូង → សង្កាត់កូនក្រៀល → ក្រុងសំរោង → ខេត្តឧត្តរ",
    image: "/public/pg2.webp",
    tags: "No Google Map",
    mapLink: "",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "ព្រៃផ្ដៅ",
    description:
      " ព្រៃផ្តៅ ជាតំបន់ធម្មជាតិដែលផ្តល់នូវបរិយាកាសស្ងប់ស្ងាត់ និងទេសភាពព្រៃឈើស្រស់ស្អាត សម្រាប់អ្នកដែលចង់សម្រាកពីភាពអ៊ូអរនៃទីក្រុង។ ជីវៈចម្រុះ សាកសមសម្រាប់ការសិក្សា និងទស្សនាធម្មជាតិ។ តំបន់សង្ឃរុក្ខវ័ន ខេត្តឧត្តរមានជ័យ។",
    image: "/pg7.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/7g4bCK3xsXWKoed76",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "ព្រៃសង្ឃរុក្ខវ័ន",
    description:
      "ព្រៃសង្ឃរុក្ខវ័ន ជាតំបន់ធម្មជាតិដ៏សំខាន់របស់ខេត្តឧត្តរមានជ័យ ដែលសម្បូរទៅដោយព្រៃឈើ និងជីវៈចម្រុះ សាកសមសម្រាប់ការសិក្សា និងទស្សនាធម្មជាតិ។ តំបន់សង្ឃរុក្ខវ័ន ខេត្តឧត្តរមានជ័យ",
    image: "/pg8.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/s6biDyNDgGgpeKtr7",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "ប្រាសាទ ត្រពាំងប្រាសាទ",
    description:
      "ត្រពាំងប្រាសាទ ជាតំបន់មួយនៅភាគខាងជើងនៃខេត្តឧត្តរមានជ័យ ដែលមានទេសភាពជនបទ សហគមន៍មូលដ្ឋាន និងតំបន់ធម្មជាតិដែលគួរឱ្យចាប់អារម្មណ៍។ ស្រុកត្រពាំងប្រាសាទ → ខេត្តឧត្តរមានជ័យ",
    image: "/public/pg3.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/67aGvgAmmPZ7wwht9",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "ទឹកធ្លាក់អូរខៀវ ទឹកធ្លាក់ថ្មដា",
    description:
      "ទឹកធ្លាក់អូរខៀវ ជាតំបន់ធម្មជាតិមួយដែលមានទឹកហូរឆ្លងកាត់ផ្ទាំងថ្ម និងព័ទ្ធជុំវិញដោយព្រៃឈើបៃតង សាកសមសម្រាប់អ្នកដែលចូលចិត្តដើរលេង ប៉ះពាល់ធម្មជាតិ និងសម្រាកលំហែកាយ។ ភូមិរ៉ែស៊ី → ខេត្តឧត្តរមានជ័យ។",
    image: "/pg4.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/5X8oMBwV8xNu8AKb7",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "សារ:មន្ទីប្រវត្ដិសាស្រ្ដផ្ទះតាម៉ុក",
    description:
      "សារមន្ទីរប្រវត្តិសាស្ត្រផ្ទះតាម៉ុក ជាទីតាំងដែលភ្ញៀវអាចស្វែងយល់ពីប្រវត្តិសាស្ត្ររបស់តំបន់អន្លង់វែង និងសំណល់អតីតកាលដែលពាក់ព័ន្ធនឹងប្រវត្តិសាស្ត្រកម្ពុជា។ តំបន់អន្លង់វែង ខេត្តឧត្តរមានជ័យ។",
    image: "/pg6.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/ZLabE8kDtJS9SDBs9",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "អន្លង់វែង",
    description:
      " អន្លង់វែង ជាតំបន់ប្រវត្តិសាស្ត្រដ៏សំខាន់មួយក្នុងខេត្តឧត្តរមានជ័យ ដែលមានទេសភាពធម្មជាតិ និងទីតាំងប្រវត្តិសាស្ត្រជាច្រើនសម្រាប់ភ្ញៀវទេសចរទស្សនា។ ស្រុកអន្លង់វែង ខេត្តឧត្តរមានជ័យ។",
    image: "/pg10.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/JiTz91fZMYYDAh8v7",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },

  {
    title: "ក្រុងសំរោង",
    description:
      "ក្រុងសំរោង គឺជាទីរួមខេត្តឧត្តរមានជ័យ ដែលជាមជ្ឈមណ្ឌលសេដ្ឋកិច្ច និងជាចំណុចចាប់ផ្តើមដ៏ងាយស្រួលសម្រាប់ធ្វើដំណើរទៅកាន់តំបន់ទេសចរណ៍នានាក្នុងខេត្ត។",
    image: "/pg1.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/r1eCWfN24fbUsfks9",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "អាតោដួងចិត្ដ",
    description:
      "អាតោដួងចិត្ត ជាសហគមន៍ទេសចរណ៍ធម្មជាតិ ដែលមានបរិយាកាសស្ងប់ស្ងាត់ និងតំបន់ព្រៃលិចទឹកដ៏ស្រស់ស្អាត សាកសមសម្រាប់អ្នកចូលចិត្តសម្រាក និងទស្សនាធម្មជាតិ។ ប្រភពទេសចរណ៍បានរៀបរាប់តំបន់នេះថា ស្ថិតនៅតំបន់ សំរោង–ចុងកាល់។",
    image: "/pg11.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/mCfrCXZNmew8ma2d6",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "ប្រាសាទតាក្របី",
    description:
      "ប្រាសាទតាក្របី ជាប្រាសាទបុរាណខ្មែរដ៏សំខាន់មួយ ស្ថិតនៅលើជួរភ្នំដងរែកក្បែរព្រំដែនកម្ពុជា–ថៃ។ ប្រភពរដ្ឋាភិបាលកម្ពុជាបញ្ជាក់ថា ប្រាសាទស្ថិតក្នុង ភូមិឈើស្លាប់ ឃុំគោកខ្ពស់ ស្រុកបន្ទាយអំពិល។ ប្រាសាទតាក្របី ស្ថិតនៅ ភូមិសែនមនោរម្យ១ ឃុំគោកមន ស្រុកបន្ទាយអំពិល ខេត្តឧត្តរមានជ័យ។ ត្រូវបានសៀមឈ្លានពានកាន់កាប់ដោយខុសច្បាប់។",
    image: "/home.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/DvzH7bt82pahyPcg7?g_st=ic",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "អាតោដួងចិត្ដ",
    description:
      "អាតោដួងចិត្ត ជាសហគមន៍ទេសចរណ៍ធម្មជាតិ ដែលមានបរិយាកាសស្ងប់ស្ងាត់ និងតំបន់ព្រៃលិចទឹកដ៏ស្រស់ស្អាត សាកសមសម្រាប់អ្នកចូលចិត្តសម្រាក និងទស្សនាធម្មជាតិ។ ប្រភពទេសចរណ៍បានរៀបរាប់តំបន់នេះថា ស្ថិតនៅតំបន់ សំរោង–ចុងកាល់។",
    image: "/pg12.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/s6biDyNDgGgpeKtr7",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
  {
    title: "អាតោដួងដែក",
    description:
      "អាតោដួងដែក ជាតំបន់ធម្មជាតិមួយដែលអាចចូលទស្សនាដើម្បីស្វែងយល់ពីទេសភាព និងបរិយាកាសធម្មជាតិនៃខេត្តឧត្តរមានជ័យ។",
    image: "/pg13.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/s6biDyNDgGgpeKtr7",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },

  {
    title: "ស្ពានទ័ព",
    description:
      "ស្ពានទ័ព ជាសំណង់បុរាណដែលមានតម្លៃផ្នែកប្រវត្តិសាស្ត្រ និងស្ថាបត្យកម្ម ហើយជាទីតាំងមួយដែលគួរឱ្យចាប់អារម្មណ៍សម្រាប់អ្នកចូលចិត្តស្វែងយល់ពីបេតិកភណ្ឌខ្មែរ។ ភូមិជើងទៀន → ឃុំជើងទៀន → ស្រុកចុងកាល់ → ខេត្តឧត្តរមានជ័យ",
    image: "/pg9.webp",
    tags: "Google Map",
    mapLink: "https://maps.app.goo.gl/TiqzFoUqvJvH4kTy6",
    link: "https://www.facebook.com/share/1JEfn9soMR/?mibextid=wwXIfr",
  },
];

export const Place = () => {
  return (
    <section id="place" className="py-32 relative overflow-hidden">
      {/* Bg glows  */}
      <div className="absolute top-1/4 right-0 w-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 letf-0 w-96 h-64 bg-highlight-scondary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16 ">
          <span className="text-green-400 text-sm tracking-wider font-bold animate-fade-in">
            ទេសភាពធម្មជាតិ ឧត្ដរ
          </span>
          <h2 className="text-2xl md:text-3xl font-['Battambang'] font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-mute-foreground">
            ដំណើរកម្សាន្ដជាមួយ{" "}
            <span className="text-highlight-scondary">ឧត្ដរមានជ័យ</span>
          </h2>
          <p className="text-sm  font-['Battambang'] text-gray-300 animate-fade-in animation-delay-200">
            ឧត្តរមានជ័យមានសក្តានុពលទេសចរណ៍ដ៏សម្បូរបែប ទាំងប្រាសាទបុរាណ ធម្មជាតិ
            និងតំបន់ប្រវត្តិសាស្ត្រ។ ការលើកស្ទួយវិស័យទេសចរណ៍
            នឹងជួយផ្សព្វផ្សាយសម្រស់ឧត្តរមានជ័យ បង្កើតឱកាសការងារ
            និងជំរុញសេដ្ឋកិច្ចក្នុងមូលដ្ឋាន។
          </p>
        </div>

        {/* Paces Contents Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {places.map((places, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col  md:h-full"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >
              {/* Image Palces */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={places.image}
                  alt={places.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t  from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                  <a
                    href={places.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-mute-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={places.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-mute-foreground transition-all"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
              {/* Contents  */}
              <div className="p-6 space-y-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-start justify-between gap-4 shrink-0">
                  <h3 className=" text-xl font-['Battambang'] text-white group-hover:text-primary transition-all">
                    {places.title}
                  </h3>
                  <a
                    href={places.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <ArrowUpRight className="w-5 h-5 text-mute-foreground group-hover:text-white group-hover:translate-y-1 group-hover-translate-y-1 transition-all" />
                  </a>
                </div>

                <p className="text-sm indent-5 font-semibold text-mute-foreground line-clamp-5">
                  {places.description}
                </p>
                <div className="mt-auto pt-6">
                  {/* Map Links to places */}
                  <a
                    href={places.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-block z-50 px-2 py-1.5 rounded-full bg-suface text-sm font-medium border border-border/50 text-mute-foreground hover:border-white/50 hover:text-mute-foreground transition-all duration-300"
                  >
                    {places.tags}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
