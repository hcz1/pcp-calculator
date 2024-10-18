export const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Car PCP Loan Calculator. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
