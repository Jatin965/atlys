export interface AuthCardProps {
  isPopup?: boolean;
  closePopup?: (value: boolean) => void;
  setRegisterView: (value: boolean) => void;
}