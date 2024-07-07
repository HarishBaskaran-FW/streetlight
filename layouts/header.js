export default function HeaderLayout ({ children }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="border-2 border-solid border-sky-600 rounded-lg">
        <p className="p-10"> Path</p>
        <div>
            
        </div>
      </div>
      {children}
    </div>
  );
}
