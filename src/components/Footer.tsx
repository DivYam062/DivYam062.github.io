import { profile } from '../data/resume'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          &copy; {currentYear} {profile.name}. All rights reserved.
        </p>
        <p className="text-sm text-slate-500">Built with React, TypeScript & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
