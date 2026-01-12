function AuthCard({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7FAFC] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        {children}
      </div>
    </div>
  );
}

export default AuthCard;
