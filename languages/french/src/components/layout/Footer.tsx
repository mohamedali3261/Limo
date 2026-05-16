import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
        <p className="font-medium text-slate-600 mb-2">فرنسيسهل - تعلم اللغة الفرنسية الممتع</p>
        <p className="text-sm">جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
