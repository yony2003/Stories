// src/components/Header/Header.types.ts
export interface User {
  name: string;
}

export interface HeaderProps {
  user?: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}