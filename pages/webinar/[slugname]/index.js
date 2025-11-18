import NavBar from "@/components/NavBar/NavBar";
import { Footer } from "@/components/Shared/Footer";
import ContactSection from "@/components/Home/ContactSection";
import TabSection from "@/components/Webinar/TabSection";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import VideoSection from "@/components/Webinar/SingleBlog/VideoSection";
import RTalkSection from "@/components/Webinar/SingleBlog/RTalkSection";
import Project from "@/components/Webinar/SingleBlog/Project";
import MoreBlogs from "@/components/Webinar/SingleBlog/MoreBlogs";

export default function WebinarSingleBlog() {
  const router = useRouter();
  const param = useParams();
  console.log(router, param?.slugname);

  return (
    <div>
      <NavBar />
      <div className="md:max-w-[1400px] px-3 md:mx-auto"></div>

      <VideoSection />
      <RTalkSection />

      <div className="md:max-w-[1400px] px-3 md:mx-auto">
        <Project />
        <MoreBlogs />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
