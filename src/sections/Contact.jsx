import {
  AlertCircle,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ritphanok@gmail.com",
    href: "mailto:ritphanok@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+855 93684750",
    href: "tel:+85599999999",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Oddar Meanchey, Cambodia",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, //'succes' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({
      type: null,
      message: "",
    });
    try {
      const servicedId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!servicedId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your enviroment varible.",
        );
      }

      await emailjs.send(
        servicedId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey,
      );

      setSubmitStatus({
        type: "success",
        message: "ផ្ញើរសារបានជោជ័យ! ខ្ញុំហ្នឹងឆ្លើយតបអ្នកឆាប់ៗនេះ! សូមអរគុណ!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error?.text ||
          error?.message ||
          "បរាជ័យក្នុងការផ្ញើរសារ! សូមព្យាយាមម្ដងទៀត!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight-scondary/5 rounded-full blur-3xl"></div>
      </div>
      {/* Contact  */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 ">
          <span className="text-highlight-scondary text-sm font-bold font-['Battambang'] tracking-tight">
            ទំនាក់ទំនង យើងខ្ញុំ!
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
            ចង់ស្វែងយល់បន្ថែម? សូមទំទាក់ទំទងមកយើងខ្ញុំ!
            <span className="text-primary">តោះចាប់ផ្តើមជាមួយដំណើររបស់អ្នក</span>
          </h2>
          <p className="text-mute-foreground animate-fade-in animation-delay-200">
            ចង់ស្គាល់ឧត្តរមានជ័យឲ្យកាន់តែច្បាស់? ទាក់ទងមកយើងតាម Email ឬ Phone
            សម្រាប់ព័ត៌មានបន្ថែម។ Your next adventure starts here. 🌿
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-highlight-scondary animate-fade-in animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 "
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="ឈ្មោះរបស់អ្នក"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-purple-400/5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 "
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="អុីម៉ែលរបស់អ្នក@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-purple-400/5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 "
                >
                  Messages
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="សាររបស់អ្នក"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-purple-400/5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button
                className="w-full font-bold font-['Battambang']"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    កំពុងផ្ញើរ...
                    <Send className="w-5 h-5 animate-pulse" />
                  </>
                ) : (
                  <>
                    ផ្ញើរសារ
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
              {submitStatus.message && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-400"
                      : "bg-red-500/20 border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0 " />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm min-w-0">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 text-highlight-scondary">
                <span className="text-primary"> ទំនាកទំនងយើងខ្ញុំ</span>
                តាមរយះព័ត៏មានខាងក្រោម!
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-color group "
                  >
                    <div className="w-12 h-12  rounded-xl bg-primary/10 flex items-center justify-center group">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-mute-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass rounded-3xl p-8 border border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-highlight-scondary rounded-full animate-pulse" />
                  <span className="font-bold text-primary">
                    អរគុណសម្រាប់ការគាំទ្រ!
                  </span>
                </div>
                <p className="text-mute-foreground text-sm">
                  សូមអភ័យទោសទុកជាមុនចំពោះរាល់កំហុសឆ្គង
                  ឬចំណុចខ្វះខាតដែលអាចកើតមានក្នុងគេហទំព័រនេះ។
                  យើងខ្ញុំនឹងខិតខំកែលម្អ និងអភិវឌ្ឍបន្ថែម
                  ដើម្បីផ្តល់បទពិសោធន៍កាន់តែល្អជូនអ្នកប្រើប្រាស់។
                  សូមអរគុណចំពោះការយោគយល់! 🌿
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
