import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center lg:flex-row bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox.
            <br />
            Storing everything for you and your business needs.All in one place
          </h1>
          <p className="pb-20">
            Enchane your personal storage with Dropbox,offering a simple and
            efficient way to upload,organize,and access files from anywhere.
            Securely store important documents and media, and experience the
            convencience of easy file management and sharing in centralized
            solution.
          </p>
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit "
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10  ">
          <video autoPlay loop muted className="rounded-lg">
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
