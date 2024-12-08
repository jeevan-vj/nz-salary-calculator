
export default function Footer() {
    return (
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NZ Salary Calculator. All rights reserved.</p>
        </div>
      </footer>
    );
  }