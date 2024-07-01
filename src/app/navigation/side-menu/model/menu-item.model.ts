export interface IMenuItem {
  icon: string;
  label: string;
  route: string;
  roles: string[]
}

export class MenuItem implements IMenuItem {
  constructor(
    public icon: string,
    public label: string,
    public route: string,
    public roles: string[]
  ) {
  }
}
