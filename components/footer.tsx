export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <span className="text-center block text-sm text-muted-foreground">
          © 2023-{new Date().getFullYear()} by{" "}
          <a
            target="_blank"
            href="https://github.com/kshyk"
            className="hover:underline"
          >
            kshyk
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}