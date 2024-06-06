interface IText {
  text: string;
}

interface IButton extends IText {
  onPress?: () => void;
}

export type {IButton, IText};
