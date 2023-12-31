/* eslint-disable react/no-unescaped-entities */
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/zIu3KVIWLQJ
 */
import { Button } from "@/components/ui/button"
import { AboutMe } from "./about-me"
import { Skills } from "./skills"
import { Education } from "./education"
import { Input } from "../ui/input"
export function PortfolioSections() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950">
      <section id="about" className="body-font dark:text-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
          <div className="w-full text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">About Me</h1>
            <AboutMe />
          </div>
        </div>
      </section>
      <section id="skills" className="body-font bg-gray-50 dark:bg-slate-900 dark:text-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
          <div className="w-full text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">Skills</h1>
            <Skills />
          </div>
        </div>
      </section>
      <section id="education" className="body-font dark:text-gray-200">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
          <div className="w-full text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
              Education
            </h1>
            <Education />
          </div>
        </div>
      </section>
      <section id="contact" className="body-font relative bg-gray-50 dark:bg-slate-900 dark:text-gray-200">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-gray-900 dark:text-white sm:text-4xl">
              Contact Me
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              For any inquiries, please fill out the form below.
            </p>
          </div>
          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <form className="-m-2 flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7" htmlFor="name">
                    Name
                  </label>
                  <Input
                    className="w-full rounded border bg-input px-3 py-1 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-zinc-500"
                    id="name"
                    name="name"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7" htmlFor="email">
                    Email
                  </label>
                  <Input
                    className="w-full rounded border bg-input px-3 py-1 text-base leading-8  outline-none transition-colors duration-200 ease-in-out focus:border-zinc-500"
                    id="email"
                    name="email"
                    type="email"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label className="text-sm leading-7" htmlFor="message">
                    Message
                  </label>
                  <Input
                    className="h-32 w-full resize-none rounded border bg-input px-3 py-1 text-base leading-6  outline-none transition-colors duration-200 ease-in-out focus:border-zinc-500"
                    id="message"
                    name="message"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <Button
                  className="mx-auto flex rounded border-0 px-8 py-2 text-lg focus:outline-none"
                  type="submit"
                  variant="default"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
